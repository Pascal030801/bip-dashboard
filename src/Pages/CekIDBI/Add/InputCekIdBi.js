import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import FormData from 'form-data';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Input from '../../../Components/Input/Input'
import classes from './InputCekIdBi.module.css'

const InputCekIdBi = () => {
    const BASE_PATH_API = process.env.REACT_APP_API_URL;

    const [isSubmitBtnDisabled, setIsSubmitBtnDisabled] = useState(false);
    const [isDataPengajuOpen, setIsDataPengajuOpen] = useState(false);
    const [isDataPasanganPengajuOpen, setIsDataPasanganPengajuOpen] = useState(false);
    const [perumahanList, setPerumahanList] = useState([]);
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

    const navigate = useNavigate();
    const [imageFotoKTP, setImageFotoKTP] = useState(null);
    const [imageFotoKTPPasangan, setImageFotoKTPPasangan] = useState(null);
    const [formData, setFormData] = useState({
        pengaju_full_name: '',
        pengaju_pekerjaan: '',
        pengaju_tempat_lahir: '',
        pengaju_tanggal_lahir: '',
        pengaju_nik_id: '',
        pengaju_provinsi: -1,
        pengaju_kabupaten: -1,
        pengaju_kecamatan: -1,
        pengaju_desa: -1,
        pengaju_rtrw: '',
        pengaju_full_address: '',
        pengaju_status_perkawinan: -1,
        foto_ktp_pengaju: null,
        pasangan_pengaju_full_name: '',
        pasangan_pengaju_pekerjaan: '',
        pasangan_pengaju_tempat_lahir: '',
        pasangan_pengaju_tanggal_lahir: '',
        pasangan_pengaju_nik_id: '',
        pasangan_pengaju_provinsi: -1,
        pasangan_pengaju_kabupaten: -1,
        pasangan_pengaju_kecamatan: -1,
        pasangan_pengaju_desa: -1,
        pasangan_pengaju_rtrw: '',
        pasangan_pengaju_full_address: '',
        pasangan_pengaju_status_perkawinan: '',
        foto_ktp_pasangan_pengaju: null,
        status: 'Sedang Diperiksa',
        bank_terpilih: -1,
        perumahan_id: -1,
    });

    const [errorForm, setErrorForm] = useState({
        pengaju_full_name: '',
        pengaju_pekerjaan: '',
        pengaju_tempat_lahir: '',
        pengaju_tanggal_lahir: '',
        pengaju_nik_id: '',
        pengaju_provinsi: '',
        pengaju_kabupaten: '',
        pengaju_kecamatan: '',
        pengaju_desa: '',
        pengaju_rtrw: '',
        pengaju_full_address: '',
        pengaju_status_perkawinan: '',
        pasangan_pengaju_full_name: '',
        pasangan_pengaju_pekerjaan: '',
        pasangan_pengaju_tempat_lahir: '',
        pasangan_pengaju_tanggal_lahir: '',
        pasangan_pengaju_nik_id: '',
        pasangan_pengaju_provinsi: '',
        pasangan_pengaju_kabupaten: '',
        pasangan_pengaju_kecamatan: '',
        pasangan_pengaju_desa: '',
        pasangan_pengaju_rtrw: '',
        pasangan_pengaju_full_address: '',
        pasangan_pengaju_status_perkawinan: '',
        status: '',
        bank_terpilih: '',
        perumahan_id: '',
    });

    useEffect(() => {
        const token = localStorage.getItem('token');

        axios.get(`${BASE_PATH_API}/house_areas`, {
            headers: {
                "AUTH-BIP-TOKEN": token
            }
        }).then((res) => {
            const houseAreas = res.data;
            setPerumahanList(houseAreas);

            const formattedHouseAreas = []
            if(houseAreas.length > 0){
                for(const houseArea of houseAreas){
                    formattedHouseAreas.push(
                        <option key={houseArea.id} value={houseArea.id}>{houseArea.nama}</option>
                    );
                }
                setSelectOptionPerumahanList(formattedHouseAreas);
            }
        }).catch((err) => {
            console.log(err)
        });

        axios.get(`${BASE_PATH_API}/provinsis`, {
            headers: {
                "AUTH-BIP-TOKEN": token
            }
        }).then((res) => {
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
        }).catch((err) => {
            console.log(err)
        });

        axios.get(`${BASE_PATH_API}/kabupatens`, {
            headers: {
                "AUTH-BIP-TOKEN": token
            }
        }).then((res) => {
            const kabupatens = res.data;
            setKabupatenList(kabupatens);

        }).catch((err) => {
            console.log(err)
        });

        axios.get(`${BASE_PATH_API}/kecamatans`, {
            headers: {
                "AUTH-BIP-TOKEN": token
            }
        }).then((res) => {
            const kecamatans = res.data;
            setKecamatanList(kecamatans);
            
        }).catch((err) => {
            console.log(err)
        });

        axios.get(`${BASE_PATH_API}/desas`, {
            headers: {
                "AUTH-BIP-TOKEN": token
            }
        }).then((res) => {
            const desas = res.data;
            setDesaList(desas);
            
        }).catch((err) => {
            console.log(err)
        });
    }, [])

    useEffect(() => {
        if(formData.pengaju_provinsi !== -1){

            const formattedKabupatens = [];

            const kabupatens = kabupatenList.filter((kabupaten) => {
                return kabupaten.provinsiId === parseInt(formData.pengaju_provinsi, 10);
            });

            if(kabupatens.length > 0){
                for(const kabupaten of kabupatens){
                    formattedKabupatens.push(
                        <option key={kabupaten.id} value={kabupaten.id}>{kabupaten.nama}</option>
                    );
                }
                setSelectOptionKabupatenList(formattedKabupatens);
            }
        }
    }, [formData.pengaju_provinsi]);

    useEffect(() => {
        if(formData.pasangan_pengaju_provinsi !== -1){

            const formattedKabupatens = [];

            const kabupatens = kabupatenList.filter((kabupaten) => {
                return kabupaten.provinsiId === parseInt(formData.pasangan_pengaju_provinsi, 10);
            });

            if(kabupatens.length > 0){
                for(const kabupaten of kabupatens){
                    formattedKabupatens.push(
                        <option key={kabupaten.id} value={kabupaten.id}>{kabupaten.nama}</option>
                    );
                }
                setSelectOptionKabupatenPasanganPengajuList(formattedKabupatens);
            }
        }
    }, [formData.pasangan_pengaju_provinsi])

    useEffect(() => {
        if(formData.pengaju_kabupaten !== -1){

            const formattedKecamatans = [];

            const kecamatans = kecamatanList.filter((kecamatan) => {
                return kecamatan.kabupatenId === parseInt(formData.pengaju_kabupaten, 10);
            });

            if(kecamatans.length > 0){
                for(const kecamatan of kecamatans){
                    formattedKecamatans.push(
                        <option key={kecamatan.id} value={kecamatan.id}>{kecamatan.nama}</option>
                    );
                }
                setSelectOptionKecamatanList(formattedKecamatans);
            }
        }
    }, [formData.pengaju_kabupaten]);

    useEffect(() => {
        if(formData.pasangan_pengaju_kabupaten !== -1){

            const formattedKecamatans = [];

            const kecamatans = kecamatanList.filter((kecamatan) => {
                return kecamatan.kabupatenId === parseInt(formData.pasangan_pengaju_kabupaten, 10);
            });

            if(kecamatans.length > 0){
                for(const kecamatan of kecamatans){
                    formattedKecamatans.push(
                        <option key={kecamatan.id} value={kecamatan.id}>{kecamatan.nama}</option>
                    );
                }
                setSelectOptionKecamatanPasanganPengajuList(formattedKecamatans);
            }
        }
    }, [formData.pasangan_pengaju_kabupaten]);

    useEffect(() => {
        if(formData.pengaju_kecamatan !== -1){
            const formattedDesas = [];

            const desas = desaList.filter((desa) => {
                return desa.kecamatanId === parseInt(formData.pengaju_kecamatan, 10);
            });

            if(desas.length > 0){
                for(const desa of desas){
                    formattedDesas.push(
                        <option key={desa.id} value={desa.id}>{desa.nama}</option>
                    );
                }
                setSelectOptionDesaList(formattedDesas);
            }
        }
    }, [formData.pengaju_kecamatan]);

    useEffect(() => {
        if(formData.pasangan_pengaju_kecamatan !== -1){
            const formattedDesas = [];

            const desas = desaList.filter((desa) => {
                return desa.kecamatanId === parseInt(formData.pasangan_pengaju_kecamatan, 10);
            });

            if(desas.length > 0){
                for(const desa of desas){
                    formattedDesas.push(
                        <option key={desa.id} value={desa.id}>{desa.nama}</option>
                    );
                }
                setSelectOptionDesaPasanganPengajuList(formattedDesas);
            }
        }
    }, [formData.pasangan_pengaju_kecamatan]);

    const submitHandler = (e) => {
        e.preventDefault();
        
        setIsSubmitBtnDisabled(true);

        let isError = false;

        if(formData.pengaju_full_name === ''){
            setErrorForm((prevState) => ({...prevState, pengaju_full_name: 'Nama lengkap pengaju wajib di isi'}));
            isError = true;
        }

        if(formData.pengaju_pekerjaan === ''){
            setErrorForm((prevState) => ({...prevState, pengaju_pekerjaan: 'Pekerjaan pengaju wajib di isi'}));
            isError = true;
        }

        if(formData.pengaju_tempat_lahir === ''){
            setErrorForm((prevState) => ({...prevState, pengaju_tempat_lahir: 'Tempat lahir pengaju wajib di isi'}));
            isError = true;
        }

        if(formData.pengaju_tanggal_lahir === ''){
            setErrorForm((prevState) => ({...prevState, pengaju_tanggal_lahir: 'Tanggal lahir pengaju wajib di isi'}));
            isError = true;
        }

        if(formData.pengaju_nik_id === ''){
            setErrorForm((prevState) => ({...prevState, pengaju_nik_id: 'NIK wajib di isi'}));
            isError = true;
        }else if(!(/^[-+]?(\d+)$/.test(formData.pengaju_nik_id))){
            setErrorForm((prevState) => ({...prevState, pengaju_nik_id: 'NIK tidak valid'}));
            isError = true;
        }else if(formData.pengaju_nik_id.length !== 16){
            setErrorForm((prevState) => ({...prevState, pengaju_nik_id: 'NIK tidak valid'}));
            isError = true;
        }else{
            setErrorForm((prevState) => ({...prevState, pengaju_nik_id: ''}));
            
        }

        if(formData.pengaju_provinsi === ''){
            setErrorForm((prevState) => ({...prevState, pengaju_full_address: 'Alamat pengaju wajib di isi'}));
            isError = true;
        }

        if(formData.pengaju_kabupaten === ''){
            setErrorForm((prevState) => ({...prevState, pengaju_full_address: 'Alamat pengaju wajib di isi'}));
            isError = true;
        }

        if(formData.pengaju_kecamatan === ''){
            setErrorForm((prevState) => ({...prevState, pengaju_full_address: 'Alamat pengaju wajib di isi'}));
            isError = true;
        }

        if(formData.pengaju_desa === ''){
            setErrorForm((prevState) => ({...prevState, pengaju_full_address: 'Alamat pengaju wajib di isi'}));
            isError = true;
        }

        if(formData.pengaju_rtrw === ''){
            setErrorForm((prevState) => ({...prevState, pengaju_full_address: 'Alamat pengaju wajib di isi'}));
            isError = true;
        }

        if(formData.pengaju_full_address === ''){
            setErrorForm((prevState) => ({...prevState, pengaju_full_address: 'Alamat pengaju wajib di isi'}));
            isError = true;
        }else{
            setErrorForm((prevState) => ({...prevState, pengaju_full_address: ''}));
        }



        if(isError){
            console.log(errorForm);
            setIsSubmitBtnDisabled(false);

            return toast.error("Pastikan data input sudah benar", {autoClose: 500});
        }
        
        const formD = new FormData();
        const id = toast.loading("Sedang menambahkan data ke server");
        
        for(const key in formData){
            console.log(formData[key]);
            formD.append(key, formData[key]);
        }

        console.log(formD);

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
    };

    const onChangeHandler = (e) => {
        if(e.target.name === 'pengaju_status_perkawinan') {
            if(e.target.value === 'Kawin'){
                return setFormData((prevState) => {
                    return {...prevState, pengaju_status_perkawinan: e.target.value, pasangan_pengaju_status_perkawinan: e.target.value}
                })
            }else{
                return setFormData((prevState) => {
                    return {...prevState, pengaju_status_perkawinan: e.target.value, pasangan_pengaju_status_perkawinan: null}
                })
            }
        }else if(e.target.name === 'foto_ktp_pengaju'){
            setImageFotoKTP(URL.createObjectURL(e.target.files[0]));
            return setFormData((prevState) => {
                return {...prevState, foto_ktp_pengaju: e.target.files[0]}
            })
        }else if(e.target.name === 'foto_ktp_pasangan_pengaju'){

            setImageFotoKTPPasangan(URL.createObjectURL(e.target.files[0]));
            return setFormData((prevState) => {
                return {...prevState, foto_ktp_pasangan_pengaju: e.target.files[0]}
            });
            
        }

        return setFormData((prevState) => {
            return {...prevState, [e.target.name]: e.target.value}

        })
    }

    return (
        <div className={classes.InputCekIdBi}>
            <h1>Input Cek ID BI Data</h1>
            <div className={classes.wrapFormInputCekIdBi}>
                <form onSubmit={submitHandler}>
                    <div className={classes.inputWrap}>
                        <label htmlFor='pengaju_status_perkawinan'>Status Pernikahan</label>
                        <select id='pengaju_status_perkawinan' name='pengaju_status_perkawinan' value={formData.pengaju_status_perkawinan} onChange={onChangeHandler}>
                            <option value='-1' hidden disabled>Pilih Status Perkawinan Pengaju</option>
                            <option value='Belum Kawin'>Belum Kawin</option>
                            <option value='Kawin'>Kawin</option>
                            <option value='Cerai Hidup'>Cerai Hidup</option>
                            <option value='Cerai Mati'>Cerai Mati</option>
                        </select>
                    </div>

                    <div className={classes.inputWrap}>
                        <label htmlFor='status'>Status ID BI</label>
                        <select id='status' name='status' value={formData.status} onChange={onChangeHandler}>
                            <option value='Sedang Diperiksa'>Sedang Diperiksa</option>
                            <option value='Aman'>Aman</option>
                            <option value='Tidak Aman'>Tidak Aman</option>
                        </select>
                    </div>

                    <div className={classes.inputWrap}>
                        <label htmlFor='perumahan_id'>Nama Perumahan</label>
                        <select id='perumahan_id' name='perumahan_id' value={formData.perumahan_id} onChange={onChangeHandler}>
                            <option value={-1}>Pilih Perumahan</option>
                            {selectOptionPerumahanList}
                        </select>
                    </div>

                    <div className={classes.inputWrap}>
                        <label htmlFor='bank_terpilih'>Bank yang menerima pengajuan</label>
                        <select id='bank_terpilih' name='bank_terpilih' value={formData.bank_terpilih} onChange={onChangeHandler}>
                            <option value='-1'>Pilih Bank</option>
                            <option value='BNI'>BNI</option>
                            <option value='BTN'>BTN</option>
                            <option value='BRI'>BRI</option>
                            <option value='Mandiri'>Mandiri</option>
                            <option value='BPD KALBAR'>BPD KALBAR</option>
                        </select>
                    </div>
                    
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
                                    <Input type={'text'} className={classes.inputForm} id={'pengaju_full_name'} label={'Nama Lengkap Pengaju'} onChange={onChangeHandler} />
                                    <Input type={'text'} id={'pengaju_pekerjaan'} label={'Pekerjaan Pengaju'} onChange={onChangeHandler} />
                                    <Input type={'text'} id={'pengaju_tempat_lahir'} label={'Tempat Lahir Pengaju'} onChange={onChangeHandler} />
                                    <Input type={'date'} id={'pengaju_tanggal_lahir'} label={'Tanggal Lahir Pengaju'} onChange={onChangeHandler} />
                                    <Input type={'number'} id={'pengaju_nik_id'} label={'Nomor KTP (NIK) Pengaju'} onChange={onChangeHandler} />
                                    <div className={classes.inputWrap}>
                                        <label htmlFor='pengaju_provinsi'>Provinsi</label>
                                        <select id='pengaju_provinsi' name='pengaju_provinsi' value={formData.pengaju_provinsi} onChange={onChangeHandler}>
                                            <option value={-1} disabled hidden>Pilih Provinsi</option>
                                            {selectOptionProvinsiList}
                                        </select>
                                    </div>
                                    <div className={classes.inputWrap}>
                                        <label htmlFor='pengaju_kabupaten'>Kabupaten</label>
                                        <select id='pengaju_kabupaten' name='pengaju_kabupaten' disabled={formData.pengaju_provinsi === -1} value={formData.pengaju_kabupaten} onChange={onChangeHandler}>
                                            <option value={-1} disabled hidden>{formData.pengaju_provinsi === -1 ? 'Pilih Provinsi Dahulu' : 'Pilih Kabupaten'}</option>
                                            {selectOptionKabupatenList}
                                        </select>
                                    </div>
                                    <div className={classes.inputWrap}>
                                        <label htmlFor='pengaju_kecamatan'>Kecamatan</label>
                                        <select id='pengaju_kecamatan' name='pengaju_kecamatan' disabled={formData.pengaju_kabupaten === -1} value={formData.pengaju_kecamatan} onChange={onChangeHandler}>
                                            <option value={-1} disabled hidden>{formData.pengaju_kabupaten === -1 ? 'Pilih Kabupaten Dahulu' : 'Pilih Kecamatan'}</option>
                                            {selectOptionKecamatanList}
                                        </select>
                                    </div>
                                    <div className={classes.inputWrap}>
                                        <label htmlFor='pengaju_desa'>Desa/Kelurahan</label>
                                        <select id='pengaju_desa' name='pengaju_desa' disabled={formData.pengaju_kecamatan === -1} value={formData.pengaju_desa} onChange={onChangeHandler}>
                                            <option value={-1} disabled hidden>{formData.pengaju_kecamatan === -1 ? 'Pilih Kecamatan Dahulu' : 'Pilih Desa'}</option>
                                            {selectOptionDesaList}
                                        </select>
                                    </div>
                                    <Input type={'text'} id={'pengaju_rtrw'} label={'RT/RW'} onChange={onChangeHandler} />
                                    <Input type={'text'} id={'pengaju_full_address'} label={'Alamat Pengaju (Sesuai KTP)'} onChange={onChangeHandler} />

                                    <div className={classes['input_file']}>
                                        <p>Alamat Pengaju (Sesuai KTP)</p>
                                        <div className={classes['input']}>
                                            <label htmlFor='foto_ktp_pengaju' className={`${imageFotoKTP === null ? '' : classes['file_has_image']}`}>
                                                { imageFotoKTP === null ?
                                                    (<span><FontAwesomeIcon icon={'plus'} /></span>) :
                                                    (<img src={imageFotoKTP} style={{height: '100%', width: '100%'}} />)
                                                }
                                            </label>
                                            <input type={'file'} id={'foto_ktp_pengaju'} name={'foto_ktp_pengaju'} onChange={onChangeHandler} />
                                        </div>
                                    </div>
                            </div>
                        </div>

                        { formData.pengaju_status_perkawinan === "Kawin" && 
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
                                        <Input type={'text'} id={'pasangan_pengaju_full_name'} label={'Nama Lengkap Pasangan Pengaju'} onChange={onChangeHandler} />
                                        <Input type={'text'} id={'pasangan_pengaju_pekerjaan'} label={'Pekerjaan Pasangan Pengaju'} onChange={onChangeHandler} />
                                        <Input type={'text'} id={'pasangan_pengaju_tempat_lahir'} label={'Tempat Lahir Pasangan Pengaju'} onChange={onChangeHandler} />
                                        <Input type={'date'} id={'pasangan_pengaju_tanggal_lahir'} label={'Tanggal Lahir Pasangan Pengaju'} onChange={onChangeHandler} />
                                        <Input type={'text'} id={'pasangan_pengaju_nik_id'} label={'Nomor KTP (NIK) Pasangan Pengaju'} onChange={onChangeHandler} />
                                        <div className={classes.inputWrap}>
                                            <label htmlFor='pasangan_pengaju_provinsi'>Provinsi</label>
                                            <select id='pasangan_pengaju_provinsi' name='pasangan_pengaju_provinsi' value={formData.pasangan_pengaju_provinsi} onChange={onChangeHandler}>
                                                <option value={-1} disabled hidden>Pilih Provinsi</option>
                                                {selectOptionProvinsiList}
                                            </select>
                                        </div>
                                        <div className={classes.inputWrap}>
                                            <label htmlFor='pasangan_pengaju_kabupaten'>Kabupaten</label>
                                            <select id='pasangan_pengaju_kabupaten' name='pasangan_pengaju_kabupaten' disabled={formData.pasangan_pengaju_provinsi === -1} value={formData.pasangan_pengaju_kabupaten} onChange={onChangeHandler}>
                                                <option value={-1} disabled hidden>{formData.pasangan_pengaju_provinsi === -1 ? 'Pilih Provinsi Dahulu' : 'Pilih Kabupaten'}</option>
                                                {selectOptionKabupatenPasanganPengajuList}
                                            </select>
                                        </div>
                                        <div className={classes.inputWrap}>
                                            <label htmlFor='pasangan_pengaju_kecamatan'>Kecamatan</label>
                                            <select id='pasangan_pengaju_kecamatan' name='pasangan_pengaju_kecamatan' disabled={formData.pasangan_pengaju_kabupaten === -1} value={formData.pasangan_pengaju_kecamatan} onChange={onChangeHandler}>
                                                <option value={-1} disabled hidden>{formData.pasangan_pengaju_kabupaten === -1 ? 'Pilih Kabupaten Dahulu' : 'Pilih Kecamatan'}</option>
                                                {selectOptionKecamatanPasanganPengajuList}
                                            </select>
                                        </div>
                                        <div className={classes.inputWrap}>
                                            <label htmlFor='pasangan_pengaju_desa'>Desa/Kelurahan</label>
                                            <select id='pasangan_pengaju_desa' name='pasangan_pengaju_desa' disabled={formData.pasangan_pengaju_kecamatan === -1} value={formData.pasangan_pengaju_desa} onChange={onChangeHandler}>
                                                <option value={-1} disabled hidden>{formData.pengaju_kecamatan === -1 ? 'Pilih Kecamatan Dahulu' : 'Pilih Desa'}</option>
                                                {selectOptionDesaPasanganPengajuList}
                                            </select>
                                        </div>
                                        <Input type={'text'} id={'pasangan_pengaju_rtrw'} label={'RT/RW'} onChange={onChangeHandler} />
                                        <Input type={'text'} id={'pasangan_pengaju_full_address'} label={'Alamat Pasangan Pengaju (Sesuai KTP)'} onChange={onChangeHandler} />
                                        <div className={classes['input_file']}>
                                            <p>Alamat Pasangan Pengaju (Sesuai KTP)</p>
                                            <div className={classes['input']}>
                                                <label htmlFor='foto_ktp_pasangan_pengaju' className={`${imageFotoKTPPasangan === null ? '' : classes['file_has_image']}`}>
                                                    { imageFotoKTPPasangan === null ?
                                                        (<span><FontAwesomeIcon icon={'plus'} /></span>) :
                                                        (<img src={imageFotoKTPPasangan} style={{height: '100%', width: '100%'}} />)
                                                    }
                                                </label>
                                                <input type={'file'} id={'foto_ktp_pasangan_pengaju'} name={'foto_ktp_pasangan_pengaju'} onChange={onChangeHandler} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                    <button disabled={isSubmitBtnDisabled}>TAMBAH</button>
                </form>
            </div>
        </div>
    )
}

export default InputCekIdBi