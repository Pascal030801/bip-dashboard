import React from 'react'
import { useNavigate } from 'react-router-dom';
import Input from '../../../Components/Input/Input'
import classes from './InputCekIdBi.module.css'

const InputCekIdBi = () => {
    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();
        navigate('/cekIdBi', { replace: true })
    }
    return (
        <div className={classes.InputCekIdBi}>
            <h1>Input Cek ID BI Data</h1>
            <div className={classes.wrapFormInputCekIdBi}>
                <form onSubmit={submitHandler}>
                    <div className={classes.inputWrap}>
                        <label htmlFor='statusPernikahan'>Status Pernikahan</label>
                        <select id='statusPernikahan' name='statusPernikahan'>
                            <option value='Lajang'>Lajang</option>
                            <option value='Sudah Menikah'>Sudah Menikah</option>
                            <option value='Janda'>Janda</option>
                            <option value='Duda'>Duda</option>
                        </select>
                    </div>
                    <div className={classes.inputWrap}>
                        <label htmlFor='statusIdBi'>Status ID BI</label>
                        <select id='statusIdBi' name='statusIdBi'>
                            <option value='Sedang Diperiksa'>Sedang Diperiksa</option>
                            <option value='Aman'>Aman</option>
                            <option value='Tidak Aman'>Tidak Aman</option>
                        </select>
                    </div>
                    <Input type={'text'} id={'fullName_1'} label={'Nama Lengkap'} />
                    <Input type={'text'} id={'nik_id_1'} label={'Nomor KTP (NIK)'} />
                    <Input type={'text'} id={'fullName_2'} label={'Nama Lengkap Pasangan'} />
                    <Input type={'text'} id={'nik_id_2'} label={'Nomor KTP (NIK) Pasangan'} />
                    <Input type={'text'} id={'kk_id'} label={'Nomor KK'} />
                    <button>TAMBAH</button>
                </form>
            </div>
        </div>
    )
}

export default InputCekIdBi