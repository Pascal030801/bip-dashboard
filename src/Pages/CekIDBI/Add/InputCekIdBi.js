import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Input from '../../../Components/Input/Input'
import classes from './InputCekIdBi.module.css'

const InputCekIdBi = () => {
    const BASE_PATH_API = process.env.REACT_APP_API_URL;

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        pengaju_full_name: '',
        pengaju_pekerjaan: '',
        pengaju_tempat_lahir: '',
        pengaju_tanggal_lahir: '',
        pengaju_nik_id: '',
        pengaju_npwp_id: '',
        pengaju_kk_id: '',
        pengaju_address: '',
        pengaju_phone_number: '',
        pengaju_status_perkawinan: '',
        pasangan_pengaju_full_name: '',
        pasangan_pengaju_pekerjaan: '',
        pasangan_pengaju_tempat_lahir: '',
        pasangan_pengaju_tanggal_lahir: '',
        pasangan_pengaju_nik_id: '',
        pasangan_pengaju_npwp_id: '',
        pasangan_pengaju_kk_id: '',
        pasangan_pengaju_address: '',
        pasangan_pengaju_phone_number: '',
        pasangan_pengaju_status_perkawinan: '',
        status: '',
        bank_terpilih: ''        

    });

    const submitHandler = (e) => {
        e.preventDefault();
        axios.post(`${BASE_PATH_API}/cek_id_bi`, formData, {
            headers: {
                "AUTH-BIP-TOKEN": localStorage.getItem("token")
            }
        }).then((response) => {
            console.log(response);
            navigate('/cekIdBi', { replace: true });
        }).catch((error) => {
            console.log(error.message)
        })
    };

    const onChangeHandler = (e) => {
        if(e.target.name === 'pengaju_status_perkawinan') {
            if(e.target.value === 'Sudah Menikah'){
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

    useEffect(() => {
        console.log(formData)
    }, [formData])

    return (
        <div className={classes.InputCekIdBi}>
            <h1>Input Cek ID BI Data</h1>
            <div className={classes.wrapFormInputCekIdBi}>
                <form onSubmit={submitHandler}>
                    <div className={classes.inputWrap}>
                        <label htmlFor='pengaju_status_perkawinan'>Status Pernikahan</label>
                        <select id='pengaju_status_perkawinan' name='pengaju_status_perkawinan' value={formData.pengaju_status_perkawinan} onChange={onChangeHandler}>
                            <option value='Lajang'>Lajang</option>
                            <option value='Sudah Menikah'>Sudah Menikah</option>
                            <option value='Janda'>Janda</option>
                            <option value='Duda'>Duda</option>
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
                        <label htmlFor='bank_terpilih'>Bank yang menerima pengajuan</label>
                        <select id='bank_terpilih' name='bank_terpilih' value={formData.bank_terpilih} onChange={onChangeHandler}>
                            <option value='BNI'>BNI</option>
                            <option value='BTN'>BTN</option>
                            <option value='BRI'>BRI</option>
                            <option value='Mandiri'>Mandiri</option>
                        </select>
                    </div>
                    <div className={classes.tabs}>
                        <div className={classes.tab}>
                            <input type="checkbox" id="chck1" className={classes.accordionCheck} />
                            <label className={classes['tab-label']} htmlFor="chck1">Data Pengaju</label>
                            <div className={classes['tab-content']}>
                                <Input required type={'text'} className={classes.inputForm} id={'pengaju_full_name'} label={'Nama Lengkap Pengaju'} onChange={onChangeHandler} />
                                <Input required type={'text'} id={'pengaju_pekerjaan'} label={'Pekerjaan Pengaju'} onChange={onChangeHandler} />
                                <Input required type={'text'} id={'pengaju_tempat_lahir'} label={'Tempat Lahir Pengaju'} onChange={onChangeHandler} />
                                <Input required type={'date'} id={'pengaju_tanggal_lahir'} label={'Tanggal Lahir Pengaju'} onChange={onChangeHandler} />
                                <Input required type={'number'} id={'pengaju_nik_id'} label={'Nomor KTP (NIK) Pengaju'} onChange={onChangeHandler} />
                                <Input required type={'number'} id={'pengaju_npwp_id'} label={'NPWP Pengaju'} onChange={onChangeHandler} />
                                <Input required type={'number'} id={'pengaju_kk_id'} label={'Nomor KK Pengaju'} onChange={onChangeHandler} />
                                <Input required type={'text'} id={'pengaju_address'} label={'Alamat Pengaju (Sesuai KTP)'} onChange={onChangeHandler} />
                                <Input required type={'number'} id={'pengaju_phone_number'} label={'Nomor HP Pengaju'} onChange={onChangeHandler} />
                            </div>
                        </div>
                        { formData.pengaju_status_perkawinan === "Sudah Menikah" && 
                            (
                                <div className={classes.tab}>
                                    <input type="checkbox" id="chck2" className={classes.accordionCheck} />
                                    <label className={classes['tab-label']} htmlFor="chck2">Data Pasangan Pengaju</label>
                                    <div className={classes['tab-content']}>
                                        <Input type={'text'} id={'pasangan_pengaju_full_name'} label={'Nama Lengkap Pasangan Pengaju'} onChange={onChangeHandler} />
                                        <Input type={'text'} id={'pasangan_pengaju_pekerjaan'} label={'Pekerjaan Pasangan Pengaju'} onChange={onChangeHandler} />
                                        <Input type={'text'} id={'pasangan_pengaju_tempat_lahir'} label={'Tempat Lahir Pasangan Pengaju'} onChange={onChangeHandler} />
                                        <Input type={'date'} id={'pasangan_pengaju_tanggal_lahir'} label={'Tanggal Lahir Pasangan Pengaju'} onChange={onChangeHandler} />
                                        <Input type={'text'} id={'pasangan_pengaju_nik_id'} label={'Nomor KTP (NIK) Pasangan Pengaju'} onChange={onChangeHandler} />
                                        <Input type={'text'} id={'pasangan_pengaju_npwp_id'} label={'NPWP Pasangan Pengaju'} onChange={onChangeHandler} />
                                        <Input type={'text'} id={'pasangan_pengaju_kk_id'} label={'Nomor KK Pasangan Pengaju'} onChange={onChangeHandler} />
                                        <Input type={'text'} id={'pasangan_pengaju_address'} label={'Alamat Pasangan Pengaju (Sesuai KTP)'} onChange={onChangeHandler} />
                                        <Input type={'text'} id={'pasangan_pengaju_phone_number'} label={'Nomor HP Pasangan Pengaju'} onChange={onChangeHandler} />
                                    </div>
                                </div>
                            )
                        }
                    </div>
                    <button>TAMBAH</button>
                </form>
            </div>
        </div>
    )
}

export default InputCekIdBi