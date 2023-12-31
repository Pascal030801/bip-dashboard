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
import classes from './InputDokumenPengajuan.module.css'

const InputDokumenPengajuan = () => {
    const BASE_PATH_API = process.env.REACT_APP_API_URL;
    const {id: dokumenPengajuan__ID} = useParams();
    const inputWrapClasses = classes.dokumenPengajuan__input;
    const selectInputWrapClasses = classes.dokumenPengajuan__select_input;
    const selectInputPlaceHolder = 'placeholder';

    const [isSubmitBtnDisabled, setIsSubmitBtnDisabled] = useState(false);
    const [showLoading, setShowLoading] = useState(true);

    const [selectOptionRumahList, setSelectOptionRumahList] = useState([]);
    const [rumahList, setRumahList] = useState([]);

    const statusDokumenPengajuan = useInput({initialValue: selectInputPlaceHolder, validateValue: (val) => {
        return validation.sameWithPlaceHolder(val);
    }});

    const namaPengaju = useInput({validateValue: (val) => {
        return validation.empty(val);
    }})

    const nomorTeleponPengaju = useInput({validateValue: (val) => {
        return validation.empty(val);
    }})
    
    const rumahDipilih = useInput({initialValue: selectInputPlaceHolder, validateValue: (val) => {
        return validation.sameWithPlaceHolder(val);
    }});

    const nomorSHM = useInput({validateValue: (val) => {
        return validation.empty(val);
    }});

    const uangMuka = useInput({validateValue: (val) => {
        return validation.empty(val);
    }});

    const plafonKredit = useInput({validateValue: (val) => {
        return validation.empty(val);
    }});

    const tempatDanTanggalDokumen = useInput({validateValue: (val) => {
        return validation.empty(val);
    }});

    const namaMarketer = useInput({validateValue: (val) => {
        return validation.empty(val);
    }});

    const jangkaWaktu = useInput({validateValue: (val) => {
        return validation.empty(val);
    }});

    const navigate = useNavigate();

    const fetchHouseByPerumahanId = async (perumahanId) => {
        try {
            const res = await ApiService.getHouses({perumahanId: perumahanId});
            const houses = res.data;
            setRumahList(houses)
            const formattedHouses = []
            if(houses.length > 0){
                for(const house of houses){
                    formattedHouses.push(
                        <option key={house.id} value={house.id}>{house.blok}</option>
                    );
                }
                setSelectOptionRumahList(formattedHouses);
            }
        } catch (error) {
            toast.error(bipErrorHandler(error))
        }
    };

    const fetchDokumenPengajuanByID = async () => {
        try {
            console.log('fetchDokumenPengajuanByID called')
            return (await ApiService.getDokumenPengajuanByID(dokumenPengajuan__ID)).data;
        } catch (error) {
            console.log(error)
        }
    };

    const fetchData = async () => {
        try {
            if(dokumenPengajuan__ID !== undefined && dokumenPengajuan__ID !== null){
                const orderDataByDokumenPengajuanId = await fetchDokumenPengajuanByID();
                
                namaMarketer.setValue(orderDataByDokumenPengajuanId.dokumen_pengajuan.nama_marketer);
                await fetchHouseByPerumahanId(orderDataByDokumenPengajuanId.housing_areas_id);
                rumahDipilih.setValue(orderDataByDokumenPengajuanId.house_id === null ? selectInputPlaceHolder : orderDataByDokumenPengajuanId.house_id);
                nomorSHM.setValue(orderDataByDokumenPengajuanId.house?.nomor_shm ? orderDataByDokumenPengajuanId.house?.nomor_shm : '')
                uangMuka.setValue(orderDataByDokumenPengajuanId.dokumen_pengajuan.uang_muka || '');
                plafonKredit.setValue(orderDataByDokumenPengajuanId.dokumen_pengajuan.plafon_kredit || '');
                jangkaWaktu.setValue(orderDataByDokumenPengajuanId.dokumen_pengajuan.jangka_waktu || '');
                tempatDanTanggalDokumen.setValue(orderDataByDokumenPengajuanId.dokumen_pengajuan.tempat_dan_tanggal_dokumen || '');
                namaPengaju.setValue(orderDataByDokumenPengajuanId.profil_pengaju.full_name);
                namaPengaju.setDisable(true);

                nomorTeleponPengaju.setValue(orderDataByDokumenPengajuanId.profil_pengaju.phone_number || '');

                statusDokumenPengajuan.setValue(orderDataByDokumenPengajuanId.dokumen_pengajuan.status_dokumen_pengajuan)
            }else{
                navigate('/dokumenPengajuan', { replace: true });
            }
            setShowLoading(false);
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        if(rumahDipilih.value !== selectInputPlaceHolder){
            const rumahIndex = rumahList.findIndex((rumah) => {
                return rumah.id === parseInt(rumahDipilih.value, 10);
            });
            uangMuka.setValue(rumahList[rumahIndex].uang_muka);
            nomorSHM.setValue(rumahList[rumahIndex].nomor_shm);
        }
    }, [rumahDipilih.value]);

    useEffect(() => {
        fetchData();        
    }, []);

    const submitHandler = (e) => {
        e.preventDefault();
        
        setIsSubmitBtnDisabled(true);
        setShowLoading(true);
        if( !(
            rumahDipilih.isValid &&
            statusDokumenPengajuan.isValid &&
            uangMuka.isValid &&
            plafonKredit.isValid &&
            tempatDanTanggalDokumen.isValid &&
            namaMarketer.isValid
        )){
            setIsSubmitBtnDisabled(false);
            setShowLoading(false);

            return toast.error("Pastikan data input sudah benar", {autoClose: 500});
        }
        const formD = new FormData();
        
        formD.append('nomor_telepon_pengaju', nomorTeleponPengaju.value)
        formD.append('status_dokumen_pengajuan', statusDokumenPengajuan.value);
        formD.append('house_id', rumahDipilih.value);
        formD.append('uang_muka', uangMuka.value);
        formD.append('plafon_kredit', plafonKredit.value);
        formD.append('tempat_dan_tanggal_dokumen', tempatDanTanggalDokumen.value);
        formD.append('nama_marketer', namaMarketer.value);
        formD.append('nomor_shm', nomorSHM.value);
        formD.append('jangka_waktu', jangkaWaktu.value)

        const id = toast.loading("Sedang menambahkan data ke server");

        axios.put(`${BASE_PATH_API}/dokumen_pengajuan/${dokumenPengajuan__ID}`, formD, {
            headers: {
                "AUTH-BIP-TOKEN": localStorage.getItem("token"),
                // 'Content-Type': 'multipart/form-data; boundary=dokumenPengajuan',
            }
        }).then((response) => {
            toast.update(id, {
                render: 'Berhasil Memperbarui Dokumen Pengajuan data',
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
                navigate('/dokumenPengajuan', { replace: true });
            }, 1500);


        }).catch((error) => {
            setShowLoading(false);
            toast.update(id, {
                render: 'Gagal Memperbarui Dokumen Pengajuan data',
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
    };

    return (
        <div className={classes.InputDokumenPengajuan}>
            <h1>Update Dokumen Pengajuan Data</h1>
            <div className={classes.wrapFormInputDokumenPengajuan}>
                <form onSubmit={submitHandler} autoComplete="off" autoCorrect='off'>
                    <Input 
                        type={'text'} 
                        className={inputWrapClasses} 
                        value={namaPengaju.value} 
                        id={'pengaju_full_name'} 
                        label={'Nama Lengkap Pengaju'} 
                        onChange={namaPengaju.valueChangeHandler} 
                        onBlur={namaPengaju.inputBlurHandler}
                        errorMsg={namaPengaju.errorMessage}
                        hasError={namaPengaju.hasError}
                        disabled={namaPengaju.isDisabled}
                    />
                    <Input 
                        type={'text'} 
                        className={inputWrapClasses} 
                        value={nomorTeleponPengaju.value} 
                        id={'pengaju_phone_number'} 
                        label={'Nomor Telepon Pengaju'} 
                        onChange={nomorTeleponPengaju.valueChangeHandler} 
                        onBlur={nomorTeleponPengaju.inputBlurHandler}
                        errorMsg={nomorTeleponPengaju.errorMessage}
                        hasError={nomorTeleponPengaju.hasError}
                        disabled={nomorTeleponPengaju.isDisabled}
                    />
                    <SelectInput 
                        className={selectInputWrapClasses}
                        id='status_dokumen_pengajuan'
                        label='Status Dokumen Pengajuan'
                        isUsingPlaceHolder
                        placeholderText='Pilih Status Dokumen Pengajuan'
                        value={statusDokumenPengajuan.value}
                        onBlur={statusDokumenPengajuan.inputBlurHandler}
                        onChange={statusDokumenPengajuan.valueChangeHandler}
                        options={[
                            <option key={'Belum Diajukan'} value='Belum Diajukan'>Belum Diajukan</option>,
                            <option key={'Sudah Diajukan'} value='Sudah Diajukan'>Sudah Diajukan</option>,
                        ]}
                        errorMsg={statusDokumenPengajuan.errorMessage}
                        hasError={statusDokumenPengajuan.hasError}
                        disabled={statusDokumenPengajuan.isDisabled}
                    />

                    <SelectInput 
                        className={selectInputWrapClasses}
                        id='rumah_id'
                        label='Blok Rumah'
                        isUsingPlaceHolder
                        placeholderText='Pilih Blok Rumah Dari Perumahan Yang Akan Dibeli'
                        value={rumahDipilih.value}
                        onBlur={rumahDipilih.inputBlurHandler}
                        onChange={rumahDipilih.valueChangeHandler}
                        options={selectOptionRumahList}
                        errorMsg={rumahDipilih.errorMessage}
                        hasError={rumahDipilih.hasError}
                        disabled={rumahDipilih.isDisabled}
                    />
                    <Input 
                        type={'text'} 
                        className={inputWrapClasses} 
                        value={nomorSHM.value} 
                        id={'nomor_shm'} 
                        label={'Nomor SHM Rumah'} 
                        onChange={nomorSHM.valueChangeHandler} 
                        onBlur={nomorSHM.inputBlurHandler}
                        errorMsg={nomorSHM.errorMessage}
                        hasError={nomorSHM.hasError}
                        disabled={nomorSHM.isDisabled}
                    />
                    <Input 
                        type={'text'} 
                        className={inputWrapClasses} 
                        value={uangMuka.value} 
                        id={'uang_muka'} 
                        label={'Jumlah Uang Muka'} 
                        onChange={uangMuka.valueChangeHandler} 
                        onBlur={uangMuka.inputBlurHandler}
                        errorMsg={uangMuka.errorMessage}
                        hasError={uangMuka.hasError}
                        disabled={uangMuka.isDisabled}
                    />
                    <Input 
                        type={'text'} 
                        className={inputWrapClasses} 
                        value={plafonKredit.value} 
                        id={'plafon_kredit'} 
                        label={'Jumlah Plafon Kredit'} 
                        onChange={plafonKredit.valueChangeHandler} 
                        onBlur={plafonKredit.inputBlurHandler}
                        errorMsg={plafonKredit.errorMessage}
                        hasError={plafonKredit.hasError}
                        disabled={plafonKredit.isDisabled}
                    />
                    <Input 
                        type={'text'} 
                        className={inputWrapClasses} 
                        value={jangkaWaktu.value} 
                        id={'jangka_waktu'} 
                        label={'Jangka Waktu Cicilan (Contoh: 20 Tahun)'} 
                        onChange={jangkaWaktu.valueChangeHandler} 
                        onBlur={jangkaWaktu.inputBlurHandler}
                        errorMsg={jangkaWaktu.errorMessage}
                        hasError={jangkaWaktu.hasError}
                        disabled={jangkaWaktu.isDisabled}
                    />
                    <Input 
                        type={'text'} 
                        className={inputWrapClasses} 
                        value={tempatDanTanggalDokumen.value} 
                        id={'tempat_dan_tanggal_dokumen'} 
                        label={'Tempat Dan Tanggal Dokumen'} 
                        onChange={tempatDanTanggalDokumen.valueChangeHandler} 
                        onBlur={tempatDanTanggalDokumen.inputBlurHandler}
                        errorMsg={tempatDanTanggalDokumen.errorMessage}
                        hasError={tempatDanTanggalDokumen.hasError}
                        disabled={tempatDanTanggalDokumen.isDisabled}
                    />
                    <Input 
                        type={'text'} 
                        className={inputWrapClasses} 
                        value={namaMarketer.value} 
                        id={'nama_marketer'} 
                        label={'Nama Marketer'} 
                        onChange={namaMarketer.valueChangeHandler} 
                        onBlur={namaMarketer.inputBlurHandler}
                        errorMsg={namaMarketer.errorMessage}
                        hasError={namaMarketer.hasError}
                        disabled={namaMarketer.isDisabled}
                    />
                    <button disabled={isSubmitBtnDisabled}>{dokumenPengajuan__ID !== undefined && dokumenPengajuan__ID !== null ? 'UPDATE' : 'TAMBAH'}</button>
                </form>
            </div>
            {showLoading && <Loading />}
        </div>
    )
}

export default InputDokumenPengajuan