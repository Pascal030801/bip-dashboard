import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import FormData from 'form-data';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import Input from '../../../Components/Input/Input'
import Loading from '../../../Components/Loading/Loading';
import SelectInput from '../../../Components/SelectInput/SelectInput';
import useInput from '../../../Hooks/useInput';
import ApiService from '../../../Services/apiService';
import bipErrorHandler from '../../../Util/bipErrorHandler';
import formatter from '../../../Util/formatter';
import validation from '../../../Util/validation';
import classes from './InputCekIdBi.module.css'

const InputCekIdBi = () => {
    const BASE_PATH_API = process.env.REACT_APP_API_URL;
    const {id: cekIdBI__ID} = useParams();
    const inputWrapClasses = classes.cekIdBi__input;
    const selectInputWrapClasses = classes.cekIdBi__select_input;
    const selectInputPlaceHolder = 'placeholder';

    const [selectOptionBankList] = useState(formatter.selectOptionsBank);
    const [selectOptionStatusPerkawinanList] = useState(formatter.selectOptionsStatusPerkawinan);
    
    const [isSubmitBtnDisabled, setIsSubmitBtnDisabled] = useState(false);
    const [showLoading, setShowLoading] = useState(true);

    const [isPengajuSudahKawin, setIsPengajuSudahKawin] = useState(false);

    const [isDataPengajuOpen, setIsDataPengajuOpen] = useState(false);
    const [isDataPasanganPengajuOpen, setIsDataPasanganPengajuOpen] = useState(false);
    const [selectOptionPerumahanList, setSelectOptionPerumahanList] = useState([]);

    const [selectOptionProvinsiList, setSelectOptionProvinsiList] = useState([]);
    
    const [kabupatenList, setKabupatenList] = useState([]);
    const [selectOptionKabupatenList, setSelectOptionKabupatenList] = useState([]);
    const [selectOptionKabupatenPasanganPengajuList, setSelectOptionKabupatenPasanganPengajuList] = useState([]);

    const [kecamatanList, setKecamatanList] = useState([]);
    const [selectOptionKecamatanList, setSelectOptionKecamatanList] = useState([]);
    const [selectOptionKecamatanPasanganPengajuList, setSelectOptionKecamatanPasanganPengajuList] = useState([]);

    const [desaList, setDesaList] = useState([]);
    const [selectOptionDesaList, setSelectOptionDesaList] = useState([]);
    const [selectOptionDesaPasanganPengajuList, setSelectOptionDesaPasanganPengajuList] = useState([]);
    
    const statusIdBi = useInput({initialValue: selectInputPlaceHolder, validateValue: (val) => {
        return validation.sameWithPlaceHolder(val);
    }});

    const perumahanDipilih = useInput({initialValue: selectInputPlaceHolder, validateValue: (val) => {
        return validation.sameWithPlaceHolder(val);
    }});

    const bankTerpilih = useInput({initialValue: selectInputPlaceHolder, validateValue: (val) => {
        return validation.sameWithPlaceHolder(val);
    }});

    const pengajuFullName = useInput({validateValue: (val) => {
        return validation.empty(val);
    }})

    const pengajuPekerjaan = useInput({validateValue: (val) => {
        return validation.empty(val);
    }});

    const pengajuTempatLahir = useInput({validateValue: (val) => {
        return validation.empty(val);
    }});

    const pengajuTanggalLahir = useInput({validateValue: (val) => {
        return validation.empty(val);
    }});

    const pengajuNikId = useInput({validateValue: (val) => {
        return validation.nik(val);
    }});

    const pengajuProvinsi = useInput({initialValue: selectInputPlaceHolder, validateValue: (val) => {
        
        return validation.sameWithPlaceHolder(val);
    }});

    const pengajuKabupaten = useInput({initialValue: selectInputPlaceHolder,validateValue: (val) => {
        return validation.sameWithPlaceHolder(val);
    }});

    const pengajuKecamatan = useInput({initialValue: selectInputPlaceHolder,validateValue: (val) => {
        return validation.sameWithPlaceHolder(val);
    }});

    const pengajuDesa = useInput({initialValue: selectInputPlaceHolder,validateValue: (val) => {
        return validation.sameWithPlaceHolder(val);
    }});

    const pengajuRtRw = useInput({validateValue: (val) => {
        return validation.empty(val);
    }});

    const pengajuFullAddress = useInput({validateValue: (val) => {
        return validation.empty(val);
    }});

    const pengajuStatusPerkawinan = useInput({initialValue: selectInputPlaceHolder, validateValue: (val) => {
        return validation.sameWithPlaceHolder(val);
    }});

    const pengajuFotoKTP = useInput({validateValue: (val) => {
        return validation.empty(val);
    }});

    const pasanganPengajuFullName = useInput({validateValue: (val) => {
        if(isPengajuSudahKawin){
            return validation.empty(val);
        }
        return {isValid: true};
    }})

    const pasanganPengajuPekerjaan = useInput({validateValue: (val) => {
        if(isPengajuSudahKawin){
            return validation.empty(val);
        }
        return {isValid: true};

    }});

    const pasanganPengajuTempatLahir = useInput({validateValue: (val) => {
        if(isPengajuSudahKawin){
            return validation.empty(val);
        }
        return {isValid: true};
    }});

    const pasanganPengajuTanggalLahir = useInput({validateValue: (val) => {
        if(isPengajuSudahKawin){
            return validation.empty(val);
        }
        return {isValid: true};
    }});

    const pasanganPengajuNikId = useInput({validateValue: (val) => {
        if(isPengajuSudahKawin){
            return validation.nik(val);
        }
        return {isValid: true};
    }});

    const pasanganPengajuProvinsi = useInput({initialValue: selectInputPlaceHolder, validateValue: (val) => {
        if(isPengajuSudahKawin){
            return validation.sameWithPlaceHolder(val);
        }
        return {isValid: true};
    }});

    const pasanganPengajuKabupaten = useInput({initialValue: selectInputPlaceHolder,validateValue: (val) => {
        if(isPengajuSudahKawin){
            return validation.sameWithPlaceHolder(val);
        }
        return {isValid: true};
    }});

    const pasanganPengajuKecamatan = useInput({initialValue: selectInputPlaceHolder,validateValue: (val) => {
        if(isPengajuSudahKawin){
            return validation.sameWithPlaceHolder(val);
        }
        return {isValid: true};
    }});

    const pasanganPengajuDesa = useInput({initialValue: selectInputPlaceHolder,validateValue: (val) => {
        if(isPengajuSudahKawin){
            return validation.sameWithPlaceHolder(val);
        }
        return {isValid: true};
    }});

    const pasanganPengajuRtRw = useInput({validateValue: (val) => {
        if(isPengajuSudahKawin){
            return validation.empty(val);
        }
        return {isValid: true};
    }});

    const pasanganPengajuFullAddress = useInput({validateValue: (val) => {
        if(isPengajuSudahKawin){
            return validation.empty(val);
        }
        return {isValid: true};
    }});

    const pasanganPengajuStatusPerkawinan = useInput({initialValue: selectInputPlaceHolder, validateValue: (val) => {
        if(isPengajuSudahKawin){
            return validation.sameWithPlaceHolder(val);
        }
        return {isValid: true};
    }});

    const pasanganPengajuFotoKTP = useInput({validateValue: (val) => {
        if(isPengajuSudahKawin){
            return validation.empty(val);
        }
        return {isValid: true};
    }});

    const navigate = useNavigate();
    const [imageFotoKTP, setImageFotoKTP] = useState(null);
    const [imageFotoKTPPasangan, setImageFotoKTPPasangan] = useState(null);


    const fetchProvinsis = async () => {
        try {
            const res = await ApiService.getProvinsis();
            const provinsis = res.data;

            const formattedProvinsis = []
            if(provinsis.length > 0){
                for(const provinsi of provinsis){
                    formattedProvinsis.push(
                        <option key={provinsi.id} value={provinsi.id}>{provinsi.nama}</option>
                    );
                }
                setSelectOptionProvinsiList(formattedProvinsis);
            }
        } catch (error) {
            toast.error(bipErrorHandler(error))
        }
    };

    const fetchKabupatens = async () => {
        try {
            const res = await ApiService.getKabupatens();
            const kabupatens = res.data;
            setKabupatenList(kabupatens);

        } catch (error) {
            toast.error(bipErrorHandler(error))
        }
    };

    const fetchKecamatans = async () => {
        try {
            const res = await ApiService.getKecamatans();
            const kecamatans = res.data;
            setKecamatanList(kecamatans);

        } catch (error) {
            toast.error(bipErrorHandler(error))
        }
    };

    const fetchDesas = async () => {
        try {
            const res = await ApiService.getDesas();
            const desas = res.data;
            setDesaList(desas);

        } catch (error) {
            toast.error(bipErrorHandler(error))
        }
    }

    const fetchPerumahan = async () => {
        try {
            const res = await ApiService.getHouseAreas();
    
            const houseAreas = res.data;
            const formattedHouseAreas = [];
    
            if(houseAreas.length > 0){
                for(const houseArea of houseAreas){
                    formattedHouseAreas.push(
                        <option key={houseArea.id} value={houseArea.id}>{houseArea.nama}</option>
                    );
                }
                setSelectOptionPerumahanList(formattedHouseAreas);
            }
        } catch (error) {
            console.log('error at Cek ID BI view: fetchPerumahan')
            toast.error(bipErrorHandler(error))
        }
    }

    const fetchCekIdByID = async () => {
        try {
            const res = await ApiService.getCekIdBiByID(cekIdBI__ID);
            const cekIdBiData = res.data;

            statusIdBi.setValue(cekIdBiData.status);

            pengajuStatusPerkawinan.setValue(cekIdBiData.order.profil_pengaju.status_perkawinan);
            pengajuStatusPerkawinan.setDisable(true);

            perumahanDipilih.setValue(cekIdBiData.order.housing_areas_id);
            perumahanDipilih.setDisable(true);

            bankTerpilih.setValue(cekIdBiData.order.bank_yang_digunakan);
            
            pengajuFullName.setValue(cekIdBiData.order.profil_pengaju.full_name);
            pengajuFullName.setDisable(true);
            pengajuFullName.setDisable(true);

            pengajuPekerjaan.setValue(cekIdBiData.order.profil_pengaju.position);
            pengajuPekerjaan.setDisable(true);

            pengajuTempatLahir.setValue(cekIdBiData.order.profil_pengaju.place_of_birth);
            pengajuTempatLahir.setDisable(true);

            const pengajuTanggalLahirData = new Date(cekIdBiData.order.profil_pengaju.date_of_birth);
            const pengajuTanggalLahirDataMonth = pengajuTanggalLahirData.getMonth() < 11 ? `0${(pengajuTanggalLahirData.getMonth() + 1)}` : pengajuTanggalLahirData.getMonth() + 1;
            const pengajuTanggalLahirDataDay = pengajuTanggalLahirData.getDate() < 10 ? `0${pengajuTanggalLahirData.getDate()}` : pengajuTanggalLahirData.getDate();
            pengajuTanggalLahir.setValue(`${pengajuTanggalLahirData.getFullYear()}-${pengajuTanggalLahirDataMonth}-${pengajuTanggalLahirDataDay}`);
            pengajuTanggalLahir.setDisable(true);

            pengajuNikId.setValue(cekIdBiData.order.profil_pengaju.nik_id);
            pengajuNikId.setDisable(true);

            pengajuProvinsi.setValue(cekIdBiData.order.profil_pengaju.provinsi_id);
            pengajuProvinsi.setDisable(true);
            
            pengajuKabupaten.setValue(cekIdBiData.order.profil_pengaju.kabupaten_id);
            pengajuKabupaten.setValue(cekIdBiData.order.profil_pengaju.kabupaten_id);
            pengajuKabupaten.setDisable(true);

            pengajuKecamatan.setValue(cekIdBiData.order.profil_pengaju.kecamatan_id);
            pengajuKecamatan.setValue(cekIdBiData.order.profil_pengaju.kecamatan_id);
            pengajuKecamatan.setDisable(true);
            
            pengajuDesa.setValue(cekIdBiData.order.profil_pengaju.desa_id);
            pengajuDesa.setValue(cekIdBiData.order.profil_pengaju.desa_id);
            pengajuDesa.setDisable(true);

            pengajuRtRw.setValue(cekIdBiData.order.profil_pengaju.rtrw);
            pengajuRtRw.setDisable(true);

            pengajuFullAddress.setValue(cekIdBiData.order.profil_pengaju.full_address);
            pengajuFullAddress.setDisable(true);
            
            let pengajuKtpData = null;
            if(validation.empty(cekIdBiData.order.profil_pengaju.foto_ktp_path).isValid){
                pengajuKtpData = String(cekIdBiData.order.profil_pengaju.foto_ktp_path).replace('\\\\', '\/');
            }
            setImageFotoKTP(pengajuKtpData);

            pengajuFotoKTP.setValue(cekIdBiData.order.profil_pengaju.foto_ktp_path);
            pengajuFotoKTP.setDisable(true);

            if(cekIdBiData.order.profil_pengaju.status_perkawinan === 'Kawin'){
                pasanganPengajuFullName.setValue(cekIdBiData.profile_pasangan_pengaju.full_name);
                pasanganPengajuFullName.setDisable(true);
                pasanganPengajuFullName.setDisable(true);

                pasanganPengajuPekerjaan.setValue(cekIdBiData.profile_pasangan_pengaju.position);
                pasanganPengajuPekerjaan.setDisable(true);

                pasanganPengajuTempatLahir.setValue(cekIdBiData.profile_pasangan_pengaju.place_of_birth);
                pasanganPengajuTempatLahir.setDisable(true);

                const pasanganPengajuTanggalLahirData = new Date(cekIdBiData.profile_pasangan_pengaju.date_of_birth);
                const pasanganPengajuTanggalLahirDataMonth = pasanganPengajuTanggalLahirData.getMonth() < 11 ? `0${(pasanganPengajuTanggalLahirData.getMonth() + 1)}` : pasanganPengajuTanggalLahirData.getMonth() + 1;
                const pasanganPengajuTanggalLahirDataDay = pasanganPengajuTanggalLahirData.getDate() < 10 ? `0${pasanganPengajuTanggalLahirData.getDate()}` : pasanganPengajuTanggalLahirData.getDate();
                pasanganPengajuTanggalLahir.setValue(`${pengajuTanggalLahirData.getFullYear()}-${pasanganPengajuTanggalLahirDataMonth}-${pasanganPengajuTanggalLahirDataDay}`);
                pasanganPengajuTanggalLahir.setDisable(true);

                pasanganPengajuNikId.setValue(cekIdBiData.profile_pasangan_pengaju.nik_id);
                pasanganPengajuNikId.setDisable(true);

                pasanganPengajuProvinsi.setValue(cekIdBiData.profile_pasangan_pengaju.provinsi_id);
                pasanganPengajuProvinsi.setDisable(true);
                
                pasanganPengajuKabupaten.setValue(cekIdBiData.profile_pasangan_pengaju.kabupaten_id);
                pasanganPengajuKabupaten.setValue(cekIdBiData.profile_pasangan_pengaju.kabupaten_id);
                pasanganPengajuKabupaten.setDisable(true);

                pasanganPengajuKecamatan.setValue(cekIdBiData.profile_pasangan_pengaju.kecamatan_id);
                pasanganPengajuKecamatan.setValue(cekIdBiData.profile_pasangan_pengaju.kecamatan_id);
                pasanganPengajuKecamatan.setDisable(true);
                
                pasanganPengajuDesa.setValue(cekIdBiData.profile_pasangan_pengaju.desa_id);
                pasanganPengajuDesa.setValue(cekIdBiData.profile_pasangan_pengaju.desa_id);
                pasanganPengajuDesa.setDisable(true);

                pasanganPengajuRtRw.setValue(cekIdBiData.profile_pasangan_pengaju.rtrw);
                pasanganPengajuRtRw.setDisable(true);

                pasanganPengajuFullAddress.setValue(cekIdBiData.profile_pasangan_pengaju.full_address);
                pasanganPengajuFullAddress.setDisable(true);
                
                let pasanganPengajuKtpData = null;
                if(validation.empty(cekIdBiData.profile_pasangan_pengaju.foto_ktp_path).isValid){
                    pasanganPengajuKtpData = String(cekIdBiData.profile_pasangan_pengaju.foto_ktp_path).replace('\\\\', '\/');
                }
                setImageFotoKTPPasangan(pasanganPengajuKtpData);
                pasanganPengajuFotoKTP.setValue(cekIdBiData.profile_pasangan_pengaju.foto_ktp_path);
                pasanganPengajuFotoKTP.setDisable(true);
            }

        } catch (error) {
            console.log(error)
        }
    };

    const fetchData = async () => {
        try {
            await fetchProvinsis();
            await fetchKabupatens();
            await fetchKecamatans();
            await fetchDesas();
            await fetchPerumahan();

            if(cekIdBI__ID !== undefined && cekIdBI__ID !== null){
                await fetchCekIdByID()
            }
            setShowLoading(false);
        } catch (error) {
            
        }
    }

    useEffect(() => {
        fetchData();        
    }, [])

    useEffect(() => {
        
        if(pengajuProvinsi.value !== selectInputPlaceHolder){
            pengajuKabupaten.setValue(selectInputPlaceHolder);

            const formattedKabupatens = formatter.selectOptionsKabupatenByProvinsiId(kabupatenList, parseInt(pengajuProvinsi.value, 10));
            setSelectOptionKabupatenList(formattedKabupatens);
        }
    }, [pengajuProvinsi.value]);

    useEffect(() => {
        if(pasanganPengajuProvinsi.value !== selectInputPlaceHolder){
            pasanganPengajuKabupaten.setValue(selectInputPlaceHolder);

            const formattedKabupatens = formatter.selectOptionsKabupatenByProvinsiId(kabupatenList, parseInt(pasanganPengajuProvinsi.value, 10));
            setSelectOptionKabupatenPasanganPengajuList(formattedKabupatens);
            
        }
    }, [pasanganPengajuProvinsi.value])

    useEffect(() => {
        if(pengajuKabupaten.value !== selectInputPlaceHolder){
            pengajuKecamatan.setValue(selectInputPlaceHolder);

            const formattedKecamatans = formatter.selectOptionsKecamatanByKabupatenId(kecamatanList, parseInt(pengajuKabupaten.value, 10));
            setSelectOptionKecamatanList(formattedKecamatans);
        }
    }, [pengajuKabupaten.value]);

    useEffect(() => {
        if(pasanganPengajuKabupaten.value !== selectInputPlaceHolder){
            pasanganPengajuKecamatan.setValue(selectInputPlaceHolder);

            const formattedKecamatans = formatter.selectOptionsKecamatanByKabupatenId(kecamatanList, parseInt(pasanganPengajuKabupaten.value, 10));
            setSelectOptionKecamatanPasanganPengajuList(formattedKecamatans);
        }
    }, [pasanganPengajuKabupaten.value]);

    useEffect(() => {
        if(pengajuKecamatan.value !== selectInputPlaceHolder){
            pengajuDesa.setValue(selectInputPlaceHolder);

            const formattedDesas = formatter.selectOptionsDesaByKecamatanId(desaList, parseInt(pengajuKecamatan.value, 10));
            setSelectOptionDesaList(formattedDesas);
        }
    }, [pengajuKecamatan.value]);

    useEffect(() => {
        if(pasanganPengajuKecamatan.value !== selectInputPlaceHolder){
            pasanganPengajuDesa.setValue(selectInputPlaceHolder);

            const formattedDesas = formatter.selectOptionsDesaByKecamatanId(desaList, parseInt(pasanganPengajuKecamatan.value, 10));
            setSelectOptionDesaPasanganPengajuList(formattedDesas);
        }
    }, [pasanganPengajuKecamatan.value]);

    useEffect(() => {
        setIsPengajuSudahKawin(pengajuStatusPerkawinan.value === 'Kawin');
    }, [pengajuStatusPerkawinan.value])

    const submitHandler = (e) => {
        e.preventDefault();
        
        setIsSubmitBtnDisabled(true);
        setShowLoading(true);
        if( !(statusIdBi.isValid &&
            bankTerpilih.isValid &&
            perumahanDipilih.isValid &&
            pengajuFullName.isValid &&
            pengajuPekerjaan.isValid &&
            pengajuTempatLahir.isValid &&
            pengajuTanggalLahir.isValid &&
            pengajuNikId.isValid &&
            pengajuProvinsi.isValid &&
            pengajuKabupaten.isValid &&
            pengajuKecamatan.isValid &&
            pengajuDesa.isValid &&
            pengajuRtRw.isValid &&
            pengajuStatusPerkawinan.isValid &&
            pengajuFotoKTP.isValid &&
            pasanganPengajuFullName.isValid &&
            pasanganPengajuPekerjaan.isValid &&
            pasanganPengajuTempatLahir.isValid &&
            pasanganPengajuTanggalLahir.isValid &&
            pasanganPengajuNikId.isValid &&
            pasanganPengajuProvinsi.isValid &&
            pasanganPengajuKabupaten.isValid &&
            pasanganPengajuKecamatan.isValid &&
            pasanganPengajuDesa.isValid &&
            pasanganPengajuRtRw.isValid &&
            pasanganPengajuFotoKTP.isValid
            )
        ){
            setIsSubmitBtnDisabled(false);
            setShowLoading(false);

            return toast.error("Pastikan data input sudah benar", {autoClose: 500});
        }
        const formD = new FormData();
        
        formD.append('status', statusIdBi.value);
        formD.append('bank_terpilih', bankTerpilih.value);
        formD.append('perumahan_id', perumahanDipilih.value);
        formD.append('pengaju_full_name', pengajuFullName.value);
        formD.append('pengaju_pekerjaan', pengajuPekerjaan.value);
        formD.append('pengaju_tempat_lahir', pengajuTempatLahir.value);
        formD.append('pengaju_tanggal_lahir', pengajuTanggalLahir.value);
        formD.append('pengaju_nik_id', pengajuNikId.value);
        formD.append('pengaju_provinsi', pengajuProvinsi.value);
        formD.append('pengaju_kabupaten', pengajuKabupaten.value);
        formD.append('pengaju_kecamatan', pengajuKecamatan.value);
        formD.append('pengaju_desa', pengajuDesa.value);
        formD.append('pengaju_rtrw', pengajuRtRw.value);
        formD.append('pengaju_full_address', pengajuFullAddress.value);
        formD.append('pengaju_status_perkawinan', pengajuStatusPerkawinan.value);
        formD.append('pengaju_foto_ktp', pengajuFotoKTP.value);

        if(isPengajuSudahKawin){
            formD.append('pasangan_pengaju_full_name', pasanganPengajuFullName.value);
            formD.append('pasangan_pengaju_pekerjaan', pasanganPengajuPekerjaan.value);
            formD.append('pasangan_pengaju_tempat_lahir', pasanganPengajuTempatLahir.value);
            formD.append('pasangan_pengaju_tanggal_lahir', pasanganPengajuTanggalLahir.value);
            formD.append('pasangan_pengaju_nik_id', pasanganPengajuNikId.value);
            formD.append('pasangan_pengaju_provinsi', pasanganPengajuProvinsi.value);
            formD.append('pasangan_pengaju_kabupaten', pasanganPengajuKabupaten.value);
            formD.append('pasangan_pengaju_kecamatan', pasanganPengajuKecamatan.value);
            formD.append('pasangan_pengaju_desa', pasanganPengajuDesa.value);
            formD.append('pasangan_pengaju_rtrw', pasanganPengajuRtRw.value);
            formD.append('pasangan_pengaju_full_address', pasanganPengajuFullAddress.value);
            formD.append('pasangan_pengaju_status_perkawinan', pengajuStatusPerkawinan.value);
            formD.append('pasangan_pengaju_foto_ktp', pasanganPengajuFotoKTP.value);
        }

        const id = toast.loading("Sedang menambahkan data ke server");

        if(!(cekIdBI__ID !== undefined && cekIdBI__ID !== null)){
            axios.post(`${BASE_PATH_API}/cek_id_bi`, formD, {
                headers: {
                    "AUTH-BIP-TOKEN": localStorage.getItem("token"),
                    'Content-Type': 'multipart/form-data; boundary=cekIDBI',
                }
            }).then((response) => {
                toast.update(id, {
                    render: 'Berhasil Menambahkan Cek ID BI data',
                    type: 'success',
                    position: 'top-right',
                    autoClose: 500,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: false,
                    isLoading: false,      
                });
                setShowLoading(false);
                setTimeout(()=> {
                    navigate('/cekIdBi', { replace: true });
                }, 1500);


            }).catch((error) => {
                if (error.response) {
                    // Request made and server responded
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                } else if (error.request) {
                    // The request was made but no response was received
                    console.log(error.request);
                } else {
                    // Something happened in setting up the request that triggered an Error
                    console.log('Error', error.message);
                }
                setShowLoading(false);
                toast.update(id, {
                    render: 'Gagal Menambahkan Cek ID BI data',
                    type: 'error',
                    position: 'top-right',
                    autoClose: 500,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: false,
                    isLoading: false
                });
                setIsSubmitBtnDisabled(false);

            })
        }else{
            axios.put(`${BASE_PATH_API}/cek_id_bi/${cekIdBI__ID}`, formD, {
                headers: {
                    "AUTH-BIP-TOKEN": localStorage.getItem("token"),
                    'Content-Type': 'multipart/form-data; boundary=cekIDBI',
                }
            }).then((response) => {
                toast.update(id, {
                    render: 'Berhasil Memperbarui Cek ID BI data',
                    type: 'success',
                    position: 'top-right',
                    autoClose: 500,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: false,
                    isLoading: false,      
                });
                setShowLoading(false);
                setTimeout(()=> {
                    navigate('/cekIdBi', { replace: true });
                }, 1500);


            }).catch((error) => {
                if (error.response) {
                    // Request made and server responded
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                } else if (error.request) {
                    // The request was made but no response was received
                    console.log(error.request);
                } else {
                    // Something happened in setting up the request that triggered an Error
                    console.log('Error', error.message);
                }
                setShowLoading(false);
                toast.update(id, {
                    render: 'Gagal Memperbarui Cek ID BI data',
                    type: 'error',
                    position: 'top-right',
                    autoClose: 500,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: false,
                    isLoading: false
                });
                setIsSubmitBtnDisabled(false);

            })
        }
    };

    const onChangeHandler = (e) => {
        if(e.target.name === 'foto_ktp_pengaju'){
            setImageFotoKTP(URL.createObjectURL(e.target.files[0]));
            pengajuFotoKTP.setValue(e.target.files[0]);
            return true;
        }else if(e.target.name === 'foto_ktp_pasangan_pengaju'){

            setImageFotoKTPPasangan(URL.createObjectURL(e.target.files[0]));
            pasanganPengajuFotoKTP.setValue(e.target.files[0]);
            return true;
        }
    }

    return (
        <div className={classes.InputCekIdBi}>
            <h1>Input Cek ID BI Data</h1>
            <div className={classes.wrapFormInputCekIdBi}>
                <form onSubmit={submitHandler} autoComplete="off" autoCorrect='off'>
                    <SelectInput 
                        className={selectInputWrapClasses}
                        id='pengaju_status_perkawinan'
                        label='Status Pernikahan Pengaju'
                        isUsingPlaceHolder
                        placeholderText='Pilih Status Perkawinan Pengaju'
                        value={pengajuStatusPerkawinan.value}
                        onBlur={pengajuStatusPerkawinan.inputBlurHandler}
                        onChange={pengajuStatusPerkawinan.valueChangeHandler}
                        options={selectOptionStatusPerkawinanList}
                        errorMsg={pengajuStatusPerkawinan.errorMessage}
                        hasError={pengajuStatusPerkawinan.hasError}
                        disabled={pengajuStatusPerkawinan.isDisabled}
                    />

                    <SelectInput 
                        className={selectInputWrapClasses}
                        id='status_id_bi'
                        label='Status ID BI'
                        isUsingPlaceHolder
                        placeholderText='Pilih Status ID BI Pengaju'
                        value={statusIdBi.value}
                        onBlur={statusIdBi.inputBlurHandler}
                        onChange={statusIdBi.valueChangeHandler}
                        options={[
                            <option key={'Sedang Diperiksa'} value='Sedang Diperiksa'>Sedang Diperiksa</option>,
                            <option key={'Aman'} value='Aman'>Aman</option>,
                            <option key={'Tidak Aman'} value='Tidak Aman'>Tidak Aman</option>,
                        ]}
                        errorMsg={statusIdBi.errorMessage}
                        hasError={statusIdBi.hasError}
                        disabled={statusIdBi.isDisabled}
                    />

                    <SelectInput 
                        className={selectInputWrapClasses}
                        id='perumahan_id'
                        label='Nama Perumahan'
                        isUsingPlaceHolder
                        placeholderText='Pilih Area Perumahan Dari Rumah Yang Akan Dibeli'
                        value={perumahanDipilih.value}
                        onBlur={perumahanDipilih.inputBlurHandler}
                        onChange={perumahanDipilih.valueChangeHandler}
                        options={selectOptionPerumahanList}
                        errorMsg={perumahanDipilih.errorMessage}
                        hasError={perumahanDipilih.hasError}
                        disabled={perumahanDipilih.isDisabled}
                    />

                    <SelectInput 
                        className={selectInputWrapClasses}
                        id='bank_terpilih'
                        label='Bank yang menerima pengajuan'
                        isUsingPlaceHolder
                        placeholderText='Pilih Bank yang menerima pengajuan atau Bank yang diajukan'
                        value={bankTerpilih.value}
                        onBlur={bankTerpilih.inputBlurHandler}
                        onChange={bankTerpilih.valueChangeHandler}
                        options={selectOptionBankList}
                        errorMsg={bankTerpilih.errorMessage}
                        hasError={bankTerpilih.hasError}
                        disabled={bankTerpilih.isDisabled}
                    />
                    
                    <div className={classes.tabs} style={{marginTop: '25px'}}>
                        <div className={classes.tab}>
                            <input 
                                type="checkbox" 
                                id="chck1" 
                                className={classes.accordionCheck} 
                                checked={isDataPengajuOpen} 
                                onClick={(e) => {
                                    e.preventDefault();
                                    setIsDataPengajuOpen((prevState) => { return !prevState;});
                                }} 
                                onChange={(e) => {
                                    e.preventDefault();
                                    setIsDataPengajuOpen(!isDataPengajuOpen);
                                }}
                            />
                            <label className={`${classes['tab-label']} ${isDataPengajuOpen ? classes['accordion-open'] : ''}`} htmlFor="chck1">Data Pengaju</label>
                            <div className={`${classes['tab-content']} ${isDataPengajuOpen ? classes['accordion-open'] : ''}`}>
                                    <Input 
                                        type={'text'} 
                                        className={inputWrapClasses} 
                                        value={pengajuFullName.value} 
                                        id={'pengaju_full_name'} 
                                        label={'Nama Lengkap Pengaju'} 
                                        onChange={pengajuFullName.valueChangeHandler} 
                                        onBlur={pengajuFullName.inputBlurHandler}
                                        errorMsg={pengajuFullName.errorMessage}
                                        hasError={pengajuFullName.hasError}
                                        disabled={pengajuFullName.isDisabled}
                                    />
                                    <Input 
                                        className={inputWrapClasses}
                                        type={'text'} 
                                        id={'pengaju_pekerjaan'} 
                                        label={'Pekerjaan Pengaju'}
                                        value={pengajuPekerjaan.value}
                                        onChange={pengajuPekerjaan.valueChangeHandler}
                                        onBlur={pengajuPekerjaan.inputBlurHandler} 
                                        errorMsg={pengajuPekerjaan.errorMessage}
                                        hasError={pengajuPekerjaan.hasError}
                                        disabled={pengajuPekerjaan.isDisabled}
                                    />
                                    <Input 
                                        className={inputWrapClasses}
                                        type={'text'} 
                                        id={'pengaju_tempat_lahir'} 
                                        label={'Tempat Lahir Pengaju'}
                                        value={pengajuTempatLahir.value}
                                        onChange={pengajuTempatLahir.valueChangeHandler} 
                                        onBlur={pengajuTempatLahir.inputBlurHandler}
                                        errorMsg={pengajuTempatLahir.errorMessage}
                                        hasError={pengajuTempatLahir.hasError}
                                        disabled={pengajuTempatLahir.isDisabled}
                                        
                                    />
                                    <Input
                                        className={inputWrapClasses}
                                        type={'date'}
                                        id={'pengaju_tanggal_lahir'}
                                        label={'Tanggal Lahir Pengaju'}
                                        value={pengajuTanggalLahir.value}
                                        onChange={pengajuTanggalLahir.valueChangeHandler} 
                                        onBlur={pengajuTanggalLahir.inputBlurHandler}
                                        errorMsg={pengajuTanggalLahir.errorMessage}
                                        hasError={pengajuTanggalLahir.hasError}
                                        disabled={pengajuTanggalLahir.isDisabled}
                                    />
                                    <Input 
                                        className={inputWrapClasses}
                                        type={'number'} 
                                        id={'pengaju_nik_id'} 
                                        label={'Nomor KTP (NIK) Pengaju'} 
                                        value={pengajuNikId.value}
                                        onChange={pengajuNikId.valueChangeHandler} 
                                        onBlur={pengajuNikId.inputBlurHandler}
                                        errorMsg={pengajuNikId.errorMessage}
                                        hasError={pengajuNikId.hasError}
                                        disabled={pengajuNikId.isDisabled}
                                    />
                                    <SelectInput 
                                        className={selectInputWrapClasses}
                                        id='pengaju_provinsi'
                                        label='Provinsi'
                                        isUsingPlaceHolder
                                        placeholderText='Pilih Provinsi'
                                        value={pengajuProvinsi.value}
                                        onBlur={pengajuProvinsi.inputBlurHandler}
                                        onChange={pengajuProvinsi.valueChangeHandler}
                                        options={selectOptionProvinsiList}
                                        errorMsg={pengajuProvinsi.errorMessage}
                                        hasError={pengajuProvinsi.hasError}
                                        disabled={pengajuProvinsi.isDisabled}
                                    />
                                    <SelectInput 
                                        className={selectInputWrapClasses}
                                        id='pengaju_kabupaten'
                                        label='Kabupaten'
                                        isUsingPlaceHolder
                                        placeholderText={pengajuProvinsi.value === selectInputPlaceHolder ? 'Pilih Provinsi Terlebih Dahulu' : 'Pilih Kabupaten'}
                                        disabled={pengajuProvinsi.value === selectInputPlaceHolder || pengajuKabupaten.isDisabled}
                                        value={pengajuKabupaten.value}
                                        onBlur={pengajuKabupaten.inputBlurHandler}
                                        onChange={pengajuKabupaten.valueChangeHandler}
                                        options={selectOptionKabupatenList}
                                        errorMsg={pengajuKabupaten.errorMessage}
                                        hasError={pengajuKabupaten.hasError}
                                    />
                                    <SelectInput 
                                        className={selectInputWrapClasses}
                                        id='pengaju_kecamatan'
                                        label='Kecamatan'
                                        isUsingPlaceHolder
                                        placeholderText={pengajuKabupaten.value === selectInputPlaceHolder ? 'Pilih Kabupaten Terlebih Dahulu' : 'Pilih Kecamatan'}
                                        disabled={pengajuKabupaten.value === selectInputPlaceHolder || pengajuKecamatan.isDisabled}
                                        value={pengajuKecamatan.value}
                                        onBlur={pengajuKecamatan.inputBlurHandler}
                                        onChange={pengajuKecamatan.valueChangeHandler}
                                        options={selectOptionKecamatanList}
                                        errorMsg={pengajuKecamatan.errorMessage}
                                        hasError={pengajuKecamatan.hasError}
                                    />
                                    <SelectInput 
                                        className={selectInputWrapClasses}
                                        id='pengaju_desa'
                                        label='Desa/Kelurahan'
                                        isUsingPlaceHolder
                                        placeholderText={pengajuKecamatan.value === selectInputPlaceHolder ? 'Pilih Kecamatan Terlebih Dahulu' : 'Pilih Desa'}
                                        disabled={pengajuKecamatan.value === selectInputPlaceHolder || pengajuDesa.isDisabled}
                                        value={pengajuDesa.value}
                                        onBlur={pengajuDesa.inputBlurHandler}
                                        onChange={pengajuDesa.valueChangeHandler}
                                        options={selectOptionDesaList}
                                        errorMsg={pengajuDesa.errorMessage}
                                        hasError={pengajuDesa.hasError}
                                    />
                                    <Input 
                                        className={inputWrapClasses}
                                        type={'text'} 
                                        id={'pengaju_rtrw'} 
                                        label={'RT/RW'} 
                                        value={pengajuRtRw.value}
                                        onChange={pengajuRtRw.valueChangeHandler} 
                                        onBlur={pengajuRtRw.inputBlurHandler}
                                        errorMsg={pengajuRtRw.errorMessage}
                                        hasError={pengajuRtRw.hasError}
                                        disabled={pengajuRtRw.isDisabled}
                                    />
                                    <Input 
                                        className={inputWrapClasses}
                                        type={'text'} 
                                        id={'pengaju_full_address'} 
                                        label={'Alamat Pengaju (Sesuai KTP)'} 
                                        value={pengajuFullAddress.value}
                                        onChange={pengajuFullAddress.valueChangeHandler} 
                                        onBlur={pengajuFullAddress.inputBlurHandler}
                                        errorMsg={pengajuFullAddress.errorMessage}
                                        hasError={pengajuFullAddress.hasError}
                                        disabled={pengajuFullAddress.isDisabled}
                                    />

                                    <div className={classes['input_file']}>
                                        <p>Alamat Pengaju (Sesuai KTP)</p>
                                        <div className={classes['input']}>
                                            <label htmlFor='foto_ktp_pengaju' className={`${imageFotoKTP === null ? '' : classes['file_has_image']}`}>
                                                { imageFotoKTP === null ?
                                                    (<span><FontAwesomeIcon icon={'plus'} /></span>) :
                                                    (<img src={imageFotoKTP} style={{height: '100%', width: '100%'}} />)
                                                }
                                            </label>
                                            <input type={'file'} id={'foto_ktp_pengaju'} name={'foto_ktp_pengaju'} onChange={onChangeHandler} disabled={pengajuFotoKTP.isDisabled} />
                                        </div>
                                    </div>
                            </div>
                        </div>

                        { pengajuStatusPerkawinan.value === "Kawin" && 
                            (
                                <div className={classes.tab}>
                                    <input 
                                        type="checkbox" 
                                        id="chck2" 
                                        className={classes.accordionCheck} 
                                        checked={isDataPasanganPengajuOpen} 
                                        onClick={(e) => {
                                            e.preventDefault();
                                            setIsDataPasanganPengajuOpen((prevState) => { return !prevState;});
                                        }} 
                                        onChange={(e) => {
                                            e.preventDefault();
                                            setIsDataPasanganPengajuOpen(!isDataPasanganPengajuOpen);
                                        }} 
                                    />
                                    <label className={`${classes['tab-label']} ${isDataPasanganPengajuOpen ? classes['accordion-open'] : ''}`} htmlFor="chck2">Data Pasangan Pengaju</label>
                                    <div className={`${classes['tab-content']} ${isDataPasanganPengajuOpen ? classes['accordion-open'] : ''}`}>
                                    <Input 
                                        type={'text'} 
                                        className={inputWrapClasses} 
                                        value={pasanganPengajuFullName.value} 
                                        id={'pasangan_pengaju_full_name'} 
                                        label={'Nama Lengkap Pasangan Pengaju'} 
                                        onChange={pasanganPengajuFullName.valueChangeHandler} 
                                        onBlur={pasanganPengajuFullName.inputBlurHandler}
                                        errorMsg={pasanganPengajuFullName.errorMessage}
                                        hasError={pasanganPengajuFullName.hasError}
                                        disabled={pasanganPengajuFullName.isDisabled}
                                    />
                                    <Input 
                                        className={inputWrapClasses}
                                        type={'text'} 
                                        id={'pasangan_pengaju_pekerjaan'} 
                                        label={'Pekerjaan Pasangan Pengaju'}
                                        value={pasanganPengajuPekerjaan.value}
                                        onChange={pasanganPengajuPekerjaan.valueChangeHandler}
                                        onBlur={pasanganPengajuPekerjaan.inputBlurHandler} 
                                        errorMsg={pasanganPengajuPekerjaan.errorMessage}
                                        hasError={pasanganPengajuPekerjaan.hasError}
                                        disabled={pasanganPengajuPekerjaan.isDisabled}

                                    />
                                    <Input 
                                        className={inputWrapClasses}
                                        type={'text'} 
                                        id={'pasangan_pengaju_tempat_lahir'} 
                                        label={'Tempat Lahir Pasangan Pengaju'}
                                        value={pasanganPengajuTempatLahir.value}
                                        onChange={pasanganPengajuTempatLahir.valueChangeHandler} 
                                        onBlur={pasanganPengajuTempatLahir.inputBlurHandler}
                                        errorMsg={pasanganPengajuTempatLahir.errorMessage}
                                        hasError={pasanganPengajuTempatLahir.hasError}
                                        disabled={pasanganPengajuTempatLahir.isDisabled}
                                        
                                    />
                                    <Input
                                        className={inputWrapClasses}
                                        type={'date'}
                                        id={'pasangan_pengaju_tanggal_lahir'}
                                        label={'Tanggal Lahir Pasangan Pengaju'}
                                        value={pasanganPengajuTanggalLahir.value}
                                        onChange={pasanganPengajuTanggalLahir.valueChangeHandler} 
                                        onBlur={pasanganPengajuTanggalLahir.inputBlurHandler}
                                        errorMsg={pasanganPengajuTanggalLahir.errorMessage}
                                        hasError={pasanganPengajuTanggalLahir.hasError}
                                        disabled={pasanganPengajuTanggalLahir.isDisabled}
                                    />
                                    <Input 
                                        className={inputWrapClasses}
                                        type={'number'} 
                                        id={'pasangan_pengaju_nik_id'} 
                                        label={'Nomor KTP (NIK) Pasangan Pengaju'} 
                                        value={pasanganPengajuNikId.value}
                                        onChange={pasanganPengajuNikId.valueChangeHandler} 
                                        onBlur={pasanganPengajuNikId.inputBlurHandler}
                                        errorMsg={pasanganPengajuNikId.errorMessage}
                                        hasError={pasanganPengajuNikId.hasError}
                                        disabled={pasanganPengajuNikId.isDisabled}
                                    />
                                    <SelectInput 
                                        className={selectInputWrapClasses}
                                        id='pasangan_pengaju_provinsi'
                                        label='Provinsi'
                                        isUsingPlaceHolder
                                        placeholderText='Pilih Provinsi'
                                        value={pasanganPengajuProvinsi.value}
                                        onBlur={pasanganPengajuProvinsi.inputBlurHandler}
                                        onChange={pasanganPengajuProvinsi.valueChangeHandler}
                                        options={selectOptionProvinsiList}
                                        errorMsg={pasanganPengajuProvinsi.errorMessage}
                                        hasError={pasanganPengajuProvinsi.hasError}
                                        disabled={pasanganPengajuProvinsi.isDisabled}
                                    />
                                    <SelectInput 
                                        className={selectInputWrapClasses}
                                        id='pasangan_pengaju_kabupaten'
                                        label='Kabupaten'
                                        isUsingPlaceHolder
                                        placeholderText={pasanganPengajuProvinsi.value === selectInputPlaceHolder ? 'Pilih Provinsi Terlebih Dahulu' : 'Pilih Kabupaten'}
                                        disabled={pasanganPengajuProvinsi.value === selectInputPlaceHolder || pasanganPengajuKabupaten.isDisabled}
                                        value={pasanganPengajuKabupaten.value}
                                        onBlur={pasanganPengajuKabupaten.inputBlurHandler}
                                        onChange={pasanganPengajuKabupaten.valueChangeHandler}
                                        options={selectOptionKabupatenPasanganPengajuList}
                                        errorMsg={pasanganPengajuKabupaten.errorMessage}
                                        hasError={pasanganPengajuKabupaten.hasError}
                                    />
                                    <SelectInput 
                                        className={selectInputWrapClasses}
                                        id='pasangan_pengaju_kecamatan'
                                        label='Kecamatan'
                                        isUsingPlaceHolder
                                        placeholderText={pasanganPengajuKabupaten.value === selectInputPlaceHolder ? 'Pilih Kabupaten Terlebih Dahulu' : 'Pilih Kecamatan'}
                                        disabled={pasanganPengajuKabupaten.value === selectInputPlaceHolder || pasanganPengajuKecamatan.isDisabled}
                                        value={pasanganPengajuKecamatan.value}
                                        onBlur={pasanganPengajuKecamatan.inputBlurHandler}
                                        onChange={pasanganPengajuKecamatan.valueChangeHandler}
                                        options={selectOptionKecamatanPasanganPengajuList}
                                        errorMsg={pasanganPengajuKecamatan.errorMessage}
                                        hasError={pasanganPengajuKecamatan.hasError}
                                    />
                                    <SelectInput 
                                        className={selectInputWrapClasses}
                                        id='pasangan_pengaju_desa'
                                        label='Desa/Kelurahan'
                                        isUsingPlaceHolder
                                        placeholderText={pasanganPengajuKecamatan.value === selectInputPlaceHolder ? 'Pilih Kecamatan Terlebih Dahulu' : 'Pilih Desa'}
                                        disabled={pasanganPengajuKecamatan.value === selectInputPlaceHolder || pasanganPengajuDesa.isDisabled}
                                        value={pasanganPengajuDesa.value}
                                        onBlur={pasanganPengajuDesa.inputBlurHandler}
                                        onChange={pasanganPengajuDesa.valueChangeHandler}
                                        options={selectOptionDesaPasanganPengajuList}
                                        errorMsg={pasanganPengajuDesa.errorMessage}
                                        hasError={pasanganPengajuDesa.hasError}
                                    />
                                    <Input 
                                        className={inputWrapClasses}
                                        type={'text'} 
                                        id={'pasangan_pengaju_rtrw'} 
                                        label={'RT/RW'} 
                                        value={pasanganPengajuRtRw.value}
                                        onChange={pasanganPengajuRtRw.valueChangeHandler} 
                                        onBlur={pasanganPengajuRtRw.inputBlurHandler}
                                        errorMsg={pasanganPengajuRtRw.errorMessage}
                                        hasError={pasanganPengajuRtRw.hasError}
                                        disabled={pasanganPengajuRtRw.isDisabled}
                                    />
                                    <Input 
                                        className={inputWrapClasses}
                                        type={'text'} 
                                        id={'pasangan_pengaju_full_address'} 
                                        label={'Alamat Pasangan Pengaju (Sesuai KTP)'} 
                                        value={pasanganPengajuFullAddress.value}
                                        onChange={pasanganPengajuFullAddress.valueChangeHandler} 
                                        onBlur={pasanganPengajuFullAddress.inputBlurHandler}
                                        errorMsg={pasanganPengajuFullAddress.errorMessage}
                                        hasError={pasanganPengajuFullAddress.hasError}
                                        disabled={pasanganPengajuFullAddress.isDisabled}
                                    />
                                        <div className={classes['input_file']}>
                                            <p>Alamat Pasangan Pengaju (Sesuai KTP)</p>
                                            <div className={classes['input']}>
                                                <label htmlFor='foto_ktp_pasangan_pengaju' className={`${imageFotoKTPPasangan === null ? '' : classes['file_has_image']}`}>
                                                    { imageFotoKTPPasangan === null ?
                                                        (<span><FontAwesomeIcon icon={'plus'} /></span>) :
                                                        (<img src={imageFotoKTPPasangan} style={{height: '100%', width: '100%'}} />)
                                                    }
                                                </label>
                                                <input type={'file'} id={'foto_ktp_pasangan_pengaju'} name={'foto_ktp_pasangan_pengaju'} onChange={onChangeHandler} disabled={pasanganPengajuFotoKTP.isDisabled} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                    <button disabled={isSubmitBtnDisabled}>{cekIdBI__ID !== undefined && cekIdBI__ID !== null ? 'UPDATE' : 'TAMBAH'}</button>
                </form>
            </div>
            {showLoading && <Loading />}
        </div>
    )
}

export default InputCekIdBi