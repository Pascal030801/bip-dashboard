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
import validation from '../../../Util/validation';
import classes from './InputDokumenKelengkapanAkad.module.css'

const InputDokumenKelengkapanAkad = () => {
    const BASE_PATH_API = process.env.REACT_APP_API_URL;
    const {id: dokumenKelengkapanAkad__ID} = useParams();
    const inputWrapClasses = classes.dokumenKelengkapanAkad__input;
    const selectInputWrapClasses = classes.dokumenKelengkapanAkad__select_input;
    const selectInputPlaceHolder = 'placeholder';

    const [isSubmitBtnDisabled, setIsSubmitBtnDisabled] = useState(false);
    const [showLoading, setShowLoading] = useState(true);

    const namaPengaju = useInput({validateValue: (val) => {
        return validation.empty(val);
    }});
    
    const statusDokumenKelengkapanAkad = useInput({initialValue: selectInputPlaceHolder, validateValue: (val) => {
        return validation.sameWithPlaceHolder(val);
    }});

    const namaYangBertandaTangan = useInput({validateValue: (val) => {
        return validation.empty(val);
    }});

    const jabatanYangBertandaTangan = useInput({validateValue: (val) => {
        return validation.empty(val);
    }});

    const tempatSuratDibuat = useInput({validateValue: (val) => {
        return validation.empty(val);
    }});

    const tanggalSuratDibuat = useInput({validateValue: (val) => {
        return validation.empty(val);
    }});

    const nomorSuratPernyataan = useInput({validateValue: (val) => {
        return validation.empty(val);
    }});

    const tanggalSuratPernyataan = useInput({validateValue: (val) => {
        return validation.empty(val);
    }});

    const tempatSuratPernyataanDibuat = useInput({validateValue: (val) => {
        return validation.empty(val);
    }});

    const tanggalSuratPernyataanDibuat = useInput({validateValue: (val) => {
        return validation.empty(val);
    }});

    const namaPenanggungJawabSuratPernyataan = useInput({validateValue: (val) => {
        return validation.empty(val);
    }});

    const namaPerusahaanPenanggungJawabBekerja = useInput({validateValue: (val) => {
        return validation.empty(val);
    }});

    const nomorPenerbitanSertifikatLaikFungsi = useInput({validateValue: (val) => {
        return validation.empty(val);
    }});

    const tanggalPenerbitanSertifikatLaikFungsi = useInput({validateValue: (val) => {
        return validation.empty(val);
    }});

    const nomorPerpanjanganSertifikatLaikFungsi = useInput({validateValue: (val) => {
        return validation.empty(val);
    }});

    const tanggalPerpanjanganSertifikatLaikFungsi = useInput({validateValue: (val) => {
        return validation.empty(val);
    }});

    const tempatSuratPernyataanDitandaTangan = useInput({validateValue: (val) => {
        return validation.empty(val);
    }});

    const tanggalSuratPernyataanDitandaTangan = useInput({validateValue: (val) => {
        return validation.empty(val);
    }});
    
    const navigate = useNavigate();

    const fetchDokumenKelengkapanAkadByID = async () => {
        try {
            console.log('fetchDokumenKelengkapanAkadByID called')
            return (await ApiService.getDokumenKelengkapanAkadByID(dokumenKelengkapanAkad__ID)).data;
        } catch (error) {
            console.log(error)
        }
    };

    const fetchData = async () => {
        try {
            if(dokumenKelengkapanAkad__ID !== undefined && dokumenKelengkapanAkad__ID !== null){
                const orderDataByDokumenKelengkapanAkadId = await fetchDokumenKelengkapanAkadByID();
                
                namaPengaju.setValue(orderDataByDokumenKelengkapanAkadId.profil_pengaju.full_name);
                namaPengaju.setDisable(true);

                statusDokumenKelengkapanAkad.setValue(orderDataByDokumenKelengkapanAkadId.dokumen_kelengkapan_akad.status);
                namaYangBertandaTangan.setValue(orderDataByDokumenKelengkapanAkadId.dokumen_kelengkapan_akad.nama_yang_bertanda_tangan);
                jabatanYangBertandaTangan.setValue(orderDataByDokumenKelengkapanAkadId.dokumen_kelengkapan_akad.jabatan_yang_bertanda_tangan);
                tempatSuratDibuat.setValue(orderDataByDokumenKelengkapanAkadId.dokumen_kelengkapan_akad.tempat_surat_dibuat);
                tanggalSuratDibuat.setValue(orderDataByDokumenKelengkapanAkadId.dokumen_kelengkapan_akad.tanggal_surat_dibuat);
                nomorSuratPernyataan.setValue(orderDataByDokumenKelengkapanAkadId.dokumen_kelengkapan_akad.nomor_surat_pernyataan);
                tanggalSuratPernyataan.setValue(orderDataByDokumenKelengkapanAkadId.dokumen_kelengkapan_akad.tanggal_surat_pernyataan);
                tempatSuratPernyataanDibuat.setValue(orderDataByDokumenKelengkapanAkadId.dokumen_kelengkapan_akad.tempat_surat_pernyataan_dibuat);
                tanggalSuratPernyataanDibuat.setValue(orderDataByDokumenKelengkapanAkadId.dokumen_kelengkapan_akad.tanggal_surat_pernyataan_dibuat);
                namaPenanggungJawabSuratPernyataan.setValue(orderDataByDokumenKelengkapanAkadId.dokumen_kelengkapan_akad.nama_penanggung_jawab_surat_pernyataan);
                namaPerusahaanPenanggungJawabBekerja.setValue(orderDataByDokumenKelengkapanAkadId.dokumen_kelengkapan_akad.nama_perusahaan_penanggung_jawab_bekerja);
                nomorPenerbitanSertifikatLaikFungsi.setValue(orderDataByDokumenKelengkapanAkadId.dokumen_kelengkapan_akad.nomor_penerbitan_sertifikat_laik_fungsi);
                tanggalPenerbitanSertifikatLaikFungsi.setValue(orderDataByDokumenKelengkapanAkadId.dokumen_kelengkapan_akad.tanggal_penerbitan_sertifikat_laik_fungsi);
                nomorPerpanjanganSertifikatLaikFungsi.setValue(orderDataByDokumenKelengkapanAkadId.dokumen_kelengkapan_akad.nomor_perpanjangan_sertifikat_laik_fungsi);
                tanggalPerpanjanganSertifikatLaikFungsi.setValue(orderDataByDokumenKelengkapanAkadId.dokumen_kelengkapan_akad.tanggal_perpanjangan_sertifikat_laik_fungsi);
                tempatSuratPernyataanDitandaTangan.setValue(orderDataByDokumenKelengkapanAkadId.dokumen_kelengkapan_akad.tempat_surat_pernyataan_ditanda_tangan);
                tanggalSuratPernyataanDitandaTangan.setValue(orderDataByDokumenKelengkapanAkadId.dokumen_kelengkapan_akad.tanggal_surat_pernyataan_ditanda_tangan);
            }else{
                navigate('/dokumenKelengkapanAkad', { replace: true });
            }
            setShowLoading(false);
        } catch (error) {
            console.log('Error at InputDokumenKelengkapanAkad.fetchData: ', error)
        }
    }

    useEffect(() => {
        fetchData();        
    }, []);

    const submitHandler = (e) => {
        e.preventDefault();
        
        setIsSubmitBtnDisabled(true);
        setShowLoading(true);
        if( !(
            statusDokumenKelengkapanAkad.isValid &&
            namaYangBertandaTangan.isValid &&
            jabatanYangBertandaTangan.isValid &&
            tempatSuratDibuat.isValid &&
            tanggalSuratDibuat.isValid &&
            nomorSuratPernyataan.isValid &&
            tanggalSuratPernyataan.isValid &&
            tempatSuratPernyataanDibuat.isValid &&
            tanggalSuratPernyataanDibuat.isValid &&
            namaPenanggungJawabSuratPernyataan.isValid &&
            namaPerusahaanPenanggungJawabBekerja.isValid &&
            nomorPenerbitanSertifikatLaikFungsi.isValid &&
            tanggalPenerbitanSertifikatLaikFungsi.isValid &&
            nomorPerpanjanganSertifikatLaikFungsi.isValid &&
            tanggalPerpanjanganSertifikatLaikFungsi.isValid &&
            tempatSuratPernyataanDitandaTangan.isValid &&
            tanggalSuratPernyataanDitandaTangan.isValid
        )){
            setIsSubmitBtnDisabled(false);
            setShowLoading(false);

            return toast.error("Pastikan data input sudah benar", {autoClose: 500});
        }
        const formD = new FormData();
        
        formD.append('status', statusDokumenKelengkapanAkad.value)
        formD.append('nama_yang_bertanda_tangan', namaYangBertandaTangan.value)
        formD.append('jabatan_yang_bertanda_tangan', jabatanYangBertandaTangan.value)
        formD.append('tempat_surat_dibuat', tempatSuratDibuat.value)
        formD.append('tanggal_surat_dibuat', tanggalSuratDibuat.value)
        formD.append('nomor_surat_pernyataan', nomorSuratPernyataan.value)
        formD.append('tanggal_surat_pernyataan', tanggalSuratPernyataan.value)
        formD.append('tempat_surat_pernyataan_dibuat', tempatSuratPernyataanDibuat.value)
        formD.append('tanggal_surat_pernyataan_dibuat', tanggalSuratPernyataanDibuat.value)
        formD.append('nama_penanggung_jawab_surat_pernyataan', namaPenanggungJawabSuratPernyataan.value)
        formD.append('nama_perusahaan_penanggung_jawab_bekerja', namaPerusahaanPenanggungJawabBekerja.value)
        formD.append('nomor_penerbitan_sertifikat_laik_fungsi', nomorPenerbitanSertifikatLaikFungsi.value)
        formD.append('tanggal_penerbitan_sertifikat_laik_fungsi', tanggalPenerbitanSertifikatLaikFungsi.value)
        formD.append('nomor_perpanjangan_sertifikat_laik_fungsi', nomorPerpanjanganSertifikatLaikFungsi.value)
        formD.append('tanggal_perpanjangan_sertifikat_laik_fungsi', tanggalPerpanjanganSertifikatLaikFungsi.value)
        formD.append('tempat_surat_pernyataan_ditanda_tangan', tempatSuratPernyataanDitandaTangan.value)
        formD.append('tanggal_surat_pernyataan_ditanda_tangan', tanggalSuratPernyataanDitandaTangan.value)

        const id = toast.loading("Sedang menambahkan data ke server");

        axios.put(`${BASE_PATH_API}/dokumen_kelengkapan_akad/${dokumenKelengkapanAkad__ID}`, formD, {
            headers: {
                "AUTH-BIP-TOKEN": localStorage.getItem("token"),
            }
        }).then((response) => {
            toast.update(id, {
                render: 'Berhasil Memperbarui Dokumen Kelengkapan Akad data',
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
                navigate('/dokumenKelengkapanAkad', { replace: true });
            }, 1500);


        }).catch((error) => {
            setShowLoading(false);
            toast.update(id, {
                render: 'Gagal Memperbarui Dokumen Kelengkapan Akad data',
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
        <div className={classes.InputDokumenKelengkapanAkad}>
            <h1>Update Dokumen Kelengkapan Akad Data</h1>
            <div className={classes.wrapFormInputDokumenKelengkapanAkad}>
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
                    <SelectInput 
                        className={selectInputWrapClasses}
                        id='status_dokumen_kelengkapan_akad'
                        label='Status Dokumen kelengkapan_akad'
                        isUsingPlaceHolder
                        placeholderText='Pilih Status Dokumen Kelengkapan Akad'
                        value={statusDokumenKelengkapanAkad.value}
                        onBlur={statusDokumenKelengkapanAkad.inputBlurHandler}
                        onChange={statusDokumenKelengkapanAkad.valueChangeHandler}
                        options={[
                            <option key={'Belum Diajukan'} value='Belum Diajukan'>Belum Diajukan</option>,
                            <option key={'Sudah Diajukan'} value='Sudah Diajukan'>Sudah Diajukan</option>,
                            <option key={'Ditolak'} value='Ditolak'>Ditolak</option>,
                        ]}
                        errorMsg={statusDokumenKelengkapanAkad.errorMessage}
                        hasError={statusDokumenKelengkapanAkad.hasError}
                        disabled={statusDokumenKelengkapanAkad.isDisabled}
                    />

                    <Input 
                        type={'text'} 
                        className={inputWrapClasses} 
                        value={namaYangBertandaTangan.value} 
                        id={'nama_yang_bertanda_tangan'} 
                        label={'Nama Pihak Penjual Yang Bertanda Tangan'} 
                        onChange={namaYangBertandaTangan.valueChangeHandler} 
                        onBlur={namaYangBertandaTangan.inputBlurHandler}
                        errorMsg={namaYangBertandaTangan.errorMessage}
                        hasError={namaYangBertandaTangan.hasError}
                        disabled={namaYangBertandaTangan.isDisabled}
                    />

                    <Input 
                        type={'text'} 
                        className={inputWrapClasses} 
                        value={jabatanYangBertandaTangan.value} 
                        id={'jabatan_yang_bertanda_tangan'} 
                        label={'Jabatan Pihak Penjual Yang Bertanda Tangan'} 
                        onChange={jabatanYangBertandaTangan.valueChangeHandler} 
                        onBlur={jabatanYangBertandaTangan.inputBlurHandler}
                        errorMsg={jabatanYangBertandaTangan.errorMessage}
                        hasError={jabatanYangBertandaTangan.hasError}
                        disabled={jabatanYangBertandaTangan.isDisabled}
                    />

                    <Input 
                        type={'text'} 
                        className={inputWrapClasses} 
                        value={tempatSuratDibuat.value} 
                        id={'tempat_surat_dibuat'} 
                        label={'Tempat Surat Dibuat'} 
                        onChange={tempatSuratDibuat.valueChangeHandler} 
                        onBlur={tempatSuratDibuat.inputBlurHandler}
                        errorMsg={tempatSuratDibuat.errorMessage}
                        hasError={tempatSuratDibuat.hasError}
                        disabled={tempatSuratDibuat.isDisabled}
                    />

                    <Input 
                        type={'date'} 
                        className={inputWrapClasses} 
                        value={tanggalSuratDibuat.value} 
                        id={'tanggal_surat_dibuat'} 
                        label={'Tanggal Surat Dibuat'} 
                        onChange={tanggalSuratDibuat.valueChangeHandler} 
                        onBlur={tanggalSuratDibuat.inputBlurHandler}
                        errorMsg={tanggalSuratDibuat.errorMessage}
                        hasError={tanggalSuratDibuat.hasError}
                        disabled={tanggalSuratDibuat.isDisabled}
                    />

                    <Input 
                        type={'text'} 
                        className={inputWrapClasses} 
                        value={nomorSuratPernyataan.value} 
                        id={'nomor_surat_pernyataan'} 
                        label={'Nomor Surat Pernyataan'} 
                        onChange={nomorSuratPernyataan.valueChangeHandler} 
                        onBlur={nomorSuratPernyataan.inputBlurHandler}
                        errorMsg={nomorSuratPernyataan.errorMessage}
                        hasError={nomorSuratPernyataan.hasError}
                        disabled={nomorSuratPernyataan.isDisabled}
                    />

                    <Input 
                        type={'date'} 
                        className={inputWrapClasses} 
                        value={tanggalSuratPernyataan.value} 
                        id={'tanggal_surat_pernyataan'} 
                        label={'Tanggal Surat Pernyataan'} 
                        onChange={tanggalSuratPernyataan.valueChangeHandler} 
                        onBlur={tanggalSuratPernyataan.inputBlurHandler}
                        errorMsg={tanggalSuratPernyataan.errorMessage}
                        hasError={tanggalSuratPernyataan.hasError}
                        disabled={tanggalSuratPernyataan.isDisabled}
                    />

                    <Input 
                        type={'text'} 
                        className={inputWrapClasses} 
                        value={tempatSuratPernyataanDibuat.value} 
                        id={'tempat_surat_pernyataan_dibuat'} 
                        label={'Tempat Surat Pernyataan Dibuat'} 
                        onChange={tempatSuratPernyataanDibuat.valueChangeHandler} 
                        onBlur={tempatSuratPernyataanDibuat.inputBlurHandler}
                        errorMsg={tempatSuratPernyataanDibuat.errorMessage}
                        hasError={tempatSuratPernyataanDibuat.hasError}
                        disabled={tempatSuratPernyataanDibuat.isDisabled}
                    />

                    <Input 
                        type={'date'} 
                        className={inputWrapClasses} 
                        value={tanggalSuratPernyataanDibuat.value} 
                        id={'tanggal_surat_pernyataan_dibuat'} 
                        label={'Tanggal Surat Pernyataan Dibuat'} 
                        onChange={tanggalSuratPernyataanDibuat.valueChangeHandler} 
                        onBlur={tanggalSuratPernyataanDibuat.inputBlurHandler}
                        errorMsg={tanggalSuratPernyataanDibuat.errorMessage}
                        hasError={tanggalSuratPernyataanDibuat.hasError}
                        disabled={tanggalSuratPernyataanDibuat.isDisabled}
                    />

                    <Input 
                        type={'text'} 
                        className={inputWrapClasses} 
                        value={namaPenanggungJawabSuratPernyataan.value} 
                        id={'nama_penanggung_jawab_surat_pernyataan'} 
                        label={'Nama Penanggung Jawab Surat Pernyataan'} 
                        onChange={namaPenanggungJawabSuratPernyataan.valueChangeHandler} 
                        onBlur={namaPenanggungJawabSuratPernyataan.inputBlurHandler}
                        errorMsg={namaPenanggungJawabSuratPernyataan.errorMessage}
                        hasError={namaPenanggungJawabSuratPernyataan.hasError}
                        disabled={namaPenanggungJawabSuratPernyataan.isDisabled}
                    />

                    <Input 
                        type={'text'} 
                        className={inputWrapClasses} 
                        value={namaPerusahaanPenanggungJawabBekerja.value} 
                        id={'nama_perusahaan_penanggung_jawab_bekerja'} 
                        label={'Nama Perusahaan Penanggung Jawab Bekerja'} 
                        onChange={namaPerusahaanPenanggungJawabBekerja.valueChangeHandler} 
                        onBlur={namaPerusahaanPenanggungJawabBekerja.inputBlurHandler}
                        errorMsg={namaPerusahaanPenanggungJawabBekerja.errorMessage}
                        hasError={namaPerusahaanPenanggungJawabBekerja.hasError}
                        disabled={namaPerusahaanPenanggungJawabBekerja.isDisabled}
                    />

                    <Input 
                        type={'text'} 
                        className={inputWrapClasses} 
                        value={nomorPenerbitanSertifikatLaikFungsi.value} 
                        id={'nomor_penerbitan_sertifikat_laik_fungsi'} 
                        label={'Nomor Penerbitan Sertifikat Laik Fungsi'} 
                        onChange={nomorPenerbitanSertifikatLaikFungsi.valueChangeHandler} 
                        onBlur={nomorPenerbitanSertifikatLaikFungsi.inputBlurHandler}
                        errorMsg={nomorPenerbitanSertifikatLaikFungsi.errorMessage}
                        hasError={nomorPenerbitanSertifikatLaikFungsi.hasError}
                        disabled={nomorPenerbitanSertifikatLaikFungsi.isDisabled}
                    />

                    <Input 
                        type={'date'} 
                        className={inputWrapClasses} 
                        value={tanggalPenerbitanSertifikatLaikFungsi.value} 
                        id={'tanggal_penerbitan_sertifikat_laik_fungsi'} 
                        label={'Tanggal Penerbitan Sertifikat Laik Fungsi'} 
                        onChange={tanggalPenerbitanSertifikatLaikFungsi.valueChangeHandler} 
                        onBlur={tanggalPenerbitanSertifikatLaikFungsi.inputBlurHandler}
                        errorMsg={tanggalPenerbitanSertifikatLaikFungsi.errorMessage}
                        hasError={tanggalPenerbitanSertifikatLaikFungsi.hasError}
                        disabled={tanggalPenerbitanSertifikatLaikFungsi.isDisabled}
                    />

                    <Input 
                        type={'text'} 
                        className={inputWrapClasses} 
                        value={nomorPerpanjanganSertifikatLaikFungsi.value} 
                        id={'nomor_perpanjangan_sertifikat_laik_fungsi'} 
                        label={'Nomor Perpanjangan Sertifikat Laik Fungsi'} 
                        onChange={nomorPerpanjanganSertifikatLaikFungsi.valueChangeHandler} 
                        onBlur={nomorPerpanjanganSertifikatLaikFungsi.inputBlurHandler}
                        errorMsg={nomorPerpanjanganSertifikatLaikFungsi.errorMessage}
                        hasError={nomorPerpanjanganSertifikatLaikFungsi.hasError}
                        disabled={nomorPerpanjanganSertifikatLaikFungsi.isDisabled}
                    />

                    <Input 
                        type={'date'} 
                        className={inputWrapClasses} 
                        value={tanggalPerpanjanganSertifikatLaikFungsi.value} 
                        id={'tanggal_perpanjangan_sertifikat_laik_fungsi'} 
                        label={'Tanggal Perpanjangan Sertifikat Laik Fungsi'} 
                        onChange={tanggalPerpanjanganSertifikatLaikFungsi.valueChangeHandler} 
                        onBlur={tanggalPerpanjanganSertifikatLaikFungsi.inputBlurHandler}
                        errorMsg={tanggalPerpanjanganSertifikatLaikFungsi.errorMessage}
                        hasError={tanggalPerpanjanganSertifikatLaikFungsi.hasError}
                        disabled={tanggalPerpanjanganSertifikatLaikFungsi.isDisabled}
                    />

                    <Input 
                        type={'text'} 
                        className={inputWrapClasses} 
                        value={tempatSuratPernyataanDitandaTangan.value} 
                        id={'tempat_surat_pernyataan_ditanda_tangan'} 
                        label={'Tempat Surat Pernyataan Ditanda Tangan'} 
                        onChange={tempatSuratPernyataanDitandaTangan.valueChangeHandler} 
                        onBlur={tempatSuratPernyataanDitandaTangan.inputBlurHandler}
                        errorMsg={tempatSuratPernyataanDitandaTangan.errorMessage}
                        hasError={tempatSuratPernyataanDitandaTangan.hasError}
                        disabled={tempatSuratPernyataanDitandaTangan.isDisabled}
                    />

                    <Input 
                        type={'date'} 
                        className={inputWrapClasses} 
                        value={tanggalSuratPernyataanDitandaTangan.value} 
                        id={'tanggal_surat_pernyataan_ditanda_tangan'} 
                        label={'Tanggal Surat Pernyataan Ditanda Tangan'} 
                        onChange={tanggalSuratPernyataanDitandaTangan.valueChangeHandler} 
                        onBlur={tanggalSuratPernyataanDitandaTangan.inputBlurHandler}
                        errorMsg={tanggalSuratPernyataanDitandaTangan.errorMessage}
                        hasError={tanggalSuratPernyataanDitandaTangan.hasError}
                        disabled={tanggalSuratPernyataanDitandaTangan.isDisabled}
                    />

                    <button disabled={isSubmitBtnDisabled}>{dokumenKelengkapanAkad__ID !== undefined && dokumenKelengkapanAkad__ID !== null ? 'UPDATE' : 'TAMBAH'}</button>
                </form>
            </div>
            {showLoading && <Loading />}
        </div>
    )
}

export default InputDokumenKelengkapanAkad