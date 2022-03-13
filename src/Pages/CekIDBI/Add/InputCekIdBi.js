import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Input from '../../../Components/Input/Input'
import classes from './InputCekIdBi.module.css'

const InputCekIdBi = () => {
    const BASE_PATH_API = process.env.REACT_APP_API_URL;

    const [isSubmitBtnDisabled, setIsSubmitBtnDisabled] = useState(false);
    const [isDataPengajuOpen, setIsDataPengajuOpen] = useState(false);
    const [isDataPasanganPengajuOpen, setIsDataPasanganPengajuOpen] = useState(false);
    
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
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
        pengaju_status_perkawinan: 'Kawin',
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
        }else if(!(/^[-]?(\d+)$/.test(formData.pengaju_nik_id))){
            setErrorForm((prevState) => ({...prevState, pengaju_nik_id: 'NIK tidak valid'}));
            isError = true;
        }else if(formData.pengaju_nik_id.length !== 16){
            setErrorForm((prevState) => ({...prevState, pengaju_nik_id: 'NIK tidak valid'}));
            isError = true;
        }

        if(formData.pengaju_provinsi === ''){
            setErrorForm((prevState) => ({...prevState, pengaju_address: 'Alamat pengaju wajib di isi'}));
            isError = true;
        }

        if(formData.pengaju_kabupaten === ''){
            setErrorForm((prevState) => ({...prevState, pengaju_address: 'Alamat pengaju wajib di isi'}));
            isError = true;
        }

        if(formData.pengaju_kecamatan === ''){
            setErrorForm((prevState) => ({...prevState, pengaju_address: 'Alamat pengaju wajib di isi'}));
            isError = true;
        }

        if(formData.pengaju_desa === ''){
            setErrorForm((prevState) => ({...prevState, pengaju_address: 'Alamat pengaju wajib di isi'}));
            isError = true;
        }

        if(formData.pengaju_rtrw === ''){
            setErrorForm((prevState) => ({...prevState, pengaju_address: 'Alamat pengaju wajib di isi'}));
            isError = true;
        }

        if(formData.pengaju_full_address === ''){
            setErrorForm((prevState) => ({...prevState, pengaju_address: 'Alamat pengaju wajib di isi'}));
            isError = true;
        }



        if(isError){
            toast.error("Pastikan data input sudah benar", {autoClose: 500});
        }

        const id = toast.loading("Sedang menambahkan data ke server");

        axios.post(`${BASE_PATH_API}/cek_id_bi`, formData, {
            headers: {
                "AUTH-BIP-TOKEN": localStorage.getItem("token")
            }
        }).then((response) => {
            console.log(response);
            toast.update(id, {
                render: 'Berhasil Menambahkan Cek ID BI data',
                type: 'success',
                position: 'top-right',
                autoClose: 500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: false,
                progress: 1,
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
                pauseOnHover: true,
                draggable: false,
                progress: 1,
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
                            <option value='1'>SEKIDA VILLAGE PERMAI</option>
                        </select>
                    </div>

                    <div className={classes.inputWrap}>
                        <label htmlFor='bank_terpilih'>Bank yang menerima pengajuan</label>
                        <select id='bank_terpilih' name='bank_terpilih' value={formData.bank_terpilih} onChange={onChangeHandler}>
                            <option value='BNI'>BNI</option>
                            <option value='BTN'>BTN</option>
                            <option value='BRI'>BRI</option>
                            <option value='Mandiri'>Mandiri</option>
                            <option value='BPD KALBAR'>BPD KALBAR</option>
                        </select>
                    </div>
                    
                    <div className={classes.tabs}>
                        <div className={classes.tab}>
                            <input 
                                type="checkbox" 
                                id="chck1" 
                                className={classes.accordionCheck} 
                                checked={isDataPengajuOpen} 
                                onClick={(e) => {
                                    e.preventDefault();
                                    console.log(isDataPengajuOpen)
                                    setIsDataPengajuOpen((prevState) => { return !prevState;});
                                }} 
                                onChange={(e) => {
                                    e.preventDefault();
                                    console.log(isDataPengajuOpen)
                                    setIsDataPengajuOpen(!isDataPengajuOpen);
                                }}
                            />
                            <label className={classes['tab-label']} htmlFor="chck1">Data Pengaju</label>
                            <div className={classes['tab-content']} style={{maxHeight: isDataPengajuOpen ? 'fit-content' : 0}}>
                                <div className={classes.wrapDataPengaju}>
                                    <Input type={'text'} className={classes.inputForm} id={'pengaju_full_name'} label={'Nama Lengkap Pengaju'} onChange={onChangeHandler} />
                                    <Input type={'text'} id={'pengaju_pekerjaan'} label={'Pekerjaan Pengaju'} onChange={onChangeHandler} />
                                    <Input type={'text'} id={'pengaju_tempat_lahir'} label={'Tempat Lahir Pengaju'} onChange={onChangeHandler} />
                                    <Input type={'date'} id={'pengaju_tanggal_lahir'} label={'Tanggal Lahir Pengaju'} onChange={onChangeHandler} />
                                    <Input type={'number'} id={'pengaju_nik_id'} label={'Nomor KTP (NIK) Pengaju'} onChange={onChangeHandler} />
                                    <div className={classes.inputWrap}>
                                        <label htmlFor='pengaju_provinsi'>Provinsi</label>
                                        <select id='pengaju_provinsi' name='pengaju_provinsi' value={formData.pengaju_provinsi} onChange={onChangeHandler}>
                                            <option value='Kalimantan Barat'>Kalimantan Barat</option>
                                        </select>
                                    </div>
                                    <div className={classes.inputWrap}>
                                        <label htmlFor='pengaju_kabupaten'>Kabupaten</label>
                                        <select id='pengaju_kabupaten' name='pengaju_kabupaten' value={formData.pengaju_kabupaten} onChange={onChangeHandler}>
                                            <option value='Bengkayang'>Bengkayang</option>
                                        </select>
                                    </div>
                                    <div className={classes.inputWrap}>
                                        <label htmlFor='pengaju_kecamatan'>Kecamatan</label>
                                        <select id='pengaju_kecamatan' name='pengaju_kecamatan' value={formData.pengaju_kecamatan} onChange={onChangeHandler}>
                                            <option value='Bengkayang'>Bengkayang</option>
                                        </select>
                                    </div>
                                    <div className={classes.inputWrap}>
                                        <label htmlFor='pengaju_desa'>Desa/Kelurahan</label>
                                        <select id='pengaju_desa' name='pengaju_desa' value={formData.pengaju_desa} onChange={onChangeHandler}>
                                            <option value='Bani Amas'>Bani Amas</option>
                                        </select>
                                    </div>
                                    <Input type={'text'} id={'pengaju_rtrw'} label={'RT/RW'} onChange={onChangeHandler} />
                                    <Input type={'text'} id={'pengaju_full_address'} label={'Alamat Pengaju (Sesuai KTP)'} onChange={onChangeHandler} />
                                    <label>Foto KTP</label>
                                    <input type={'file'} id={'pengaju_foto_KTP'} label={'Foto KTP'} onChange={onChangeHandler} />
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
                                            console.log(isDataPasanganPengajuOpen)
                                            setIsDataPasanganPengajuOpen((prevState) => { return !prevState;});
                                        }} 
                                        onChange={(e) => {
                                            e.preventDefault();
                                            console.log(isDataPasanganPengajuOpen)
                                            setIsDataPasanganPengajuOpen(!isDataPasanganPengajuOpen);
                                        }} 
                                    />
                                    <label className={classes['tab-label']} htmlFor="chck2">Data Pasangan Pengaju</label>
                                    <div className={classes['tab-content']} style={{maxHeight: isDataPasanganPengajuOpen ? 'fit-content' : 0}}>
                                        <Input type={'text'} id={'pasangan_pengaju_full_name'} label={'Nama Lengkap Pasangan Pengaju'} onChange={onChangeHandler} />
                                        <Input type={'text'} id={'pasangan_pengaju_pekerjaan'} label={'Pekerjaan Pasangan Pengaju'} onChange={onChangeHandler} />
                                        <Input type={'text'} id={'pasangan_pengaju_tempat_lahir'} label={'Tempat Lahir Pasangan Pengaju'} onChange={onChangeHandler} />
                                        <Input type={'date'} id={'pasangan_pengaju_tanggal_lahir'} label={'Tanggal Lahir Pasangan Pengaju'} onChange={onChangeHandler} />
                                        <Input type={'text'} id={'pasangan_pengaju_nik_id'} label={'Nomor KTP (NIK) Pasangan Pengaju'} onChange={onChangeHandler} />
                                        <div className={classes.inputWrap}>
                                            <label htmlFor='pasangan_pengaju_provinsi'>Provinsi</label>
                                            <select id='pasangan_pengaju_provinsi' name='pasangan_pengaju_provinsi' value={formData.pasangan_pengaju_provinsi} onChange={onChangeHandler}>
                                                <option value='Kalimantan Barat'>Kalimantan Barat</option>
                                            </select>
                                        </div>
                                        <div className={classes.inputWrap}>
                                            <label htmlFor='pasangan_pengaju_kabupaten'>Kabupaten</label>
                                            <select id='pasangan_pengaju_kabupaten' name='pasangan_pengaju_kabupaten' value={formData.pasangan_pengaju_kabupaten} onChange={onChangeHandler}>
                                                <option value='Bengkayang'>Bengkayang</option>
                                            </select>
                                        </div>
                                        <div className={classes.inputWrap}>
                                            <label htmlFor='pasangan_pengaju_kecamatan'>Kecamatan</label>
                                            <select id='pasangan_pengaju_kecamatan' name='pasangan_pengaju_kecamatan' value={formData.pasangan_pengaju_kecamatan} onChange={onChangeHandler}>
                                                <option value='Bengkayang'>Bengkayang</option>
                                            </select>
                                        </div>
                                        <div className={classes.inputWrap}>
                                            <label htmlFor='pasangan_pengaju_desa'>Desa/Kelurahan</label>
                                            <select id='pasangan_pengaju_desa' name='pasangan_pengaju_desa' value={formData.pasangan_pengaju_desa} onChange={onChangeHandler}>
                                                <option value='Bani Amas'>Bani Amas</option>
                                            </select>
                                        </div>
                                        <Input type={'text'} id={'pasangan_pengaju_rtrw'} label={'RT/RW'} onChange={onChangeHandler} />
                                        <Input type={'text'} id={'pasangan_pengaju_full_address'} label={'Alamat Pasangan Pengaju (Sesuai KTP)'} onChange={onChangeHandler} />
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