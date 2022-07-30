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
import classes from './InputDokumenPersiapanAkad.module.css'

const InputDokumenPersiapanAkad = () => {
    const BASE_PATH_API = process.env.REACT_APP_API_URL;
    const {id: dokumenPersiapanAkad__ID} = useParams();
    const inputWrapClasses = classes.dokumenPersiapanAkad__input;
    const selectInputWrapClasses = classes.dokumenPersiapanAkad__select_input;
    const selectInputPlaceHolder = 'placeholder';

    const [isSubmitBtnDisabled, setIsSubmitBtnDisabled] = useState(false);
    const [showLoading, setShowLoading] = useState(true);

    const namaPengaju = useInput({validateValue: (val) => {
        return validation.empty(val);
    }});
    
    const statusDokumenPersiapanAkad = useInput({initialValue: selectInputPlaceHolder, validateValue: (val) => {
        return validation.sameWithPlaceHolder(val);
    }});

    const nomorSuratBeritaAcaraSerahTerimaRumah = useInput({validateValue: (val) => {
        return validation.empty(val);
    }});

    const nomorPpjbAjb = useInput({validateValue: (val) => {
        return validation.empty(val);
    }});

    const tanggalPpbjAjb = useInput({validateValue: (val) => {
        return validation.empty(val);
    }});

    const tanggalSerahTerima = useInput({validateValue: (val) => {
        return validation.empty(val);
    }});

    const namaCabangBankKerjaSama = useInput({validateValue: (val) => {
        return validation.empty(val);
    }});

    const nomorSuratPenyetujuanSubsidi = useInput({validateValue: (val) => {
        return validation.empty(val);
    }});

    const tanggalSuratPenyetujuanSubsidi = useInput({validateValue: (val) => {
        return validation.empty(val);
    }});

    const tempatPenandatangananSuratBeritaAcara = useInput({validateValue: (val) => {
        return validation.empty(val);
    }});

    const nomorPenerbitanSertifikatLaikFungsi = useInput({validateValue: (val) => {
        return validation.empty(val);
    }});

    const tanggalPenandatangananSuratBeritaAcara = useInput({validateValue: (val) => {
        return validation.empty(val);
    }});

    const tempatPenandatangananSuratSimak = useInput({validateValue: (val) => {
        return validation.empty(val);
    }});

    const tanggalPenandatangananSuratSimak = useInput({validateValue: (val) => {
        return validation.empty(val);
    }});
    
    const navigate = useNavigate();

    const fetchDokumenPersiapanAkadByID = async () => {
        try {
            console.log('fetchDokumenPersiapanAkadByID called')
            return (await ApiService.getDokumenPersiapanAkadByID(dokumenPersiapanAkad__ID)).data;
        } catch (error) {
            console.log(error)
        }
    };

    const fetchData = async () => {
        try {
            if(dokumenPersiapanAkad__ID !== undefined && dokumenPersiapanAkad__ID !== null){
                const orderDataByDokumenPersiapanAkadId = await fetchDokumenPersiapanAkadByID();
                
                namaPengaju.setValue(orderDataByDokumenPersiapanAkadId.profil_pengaju.full_name);
                namaPengaju.setDisable(true);

                statusDokumenPersiapanAkad.setValue(orderDataByDokumenPersiapanAkadId.dokumen_persiapan_akad.status);
                nomorSuratBeritaAcaraSerahTerimaRumah.setValue(orderDataByDokumenPersiapanAkadId.dokumen_persiapan_akad.nomor_surat_berita_acara_serah_terima_rumah || '');
                nomorPpjbAjb.setValue(orderDataByDokumenPersiapanAkadId.dokumen_persiapan_akad.nomor_ppjb_ajb || '');
                tanggalPpbjAjb.setValue(orderDataByDokumenPersiapanAkadId.dokumen_persiapan_akad.tanggal_ppbj_ajb || '');
                tanggalSerahTerima.setValue(orderDataByDokumenPersiapanAkadId.dokumen_persiapan_akad.tanggal_serah_terima || '');
                namaCabangBankKerjaSama.setValue(orderDataByDokumenPersiapanAkadId.dokumen_persiapan_akad.nama_cabang_bank_kerja_sama || '');
                nomorSuratPenyetujuanSubsidi.setValue(orderDataByDokumenPersiapanAkadId.dokumen_persiapan_akad.nomor_surat_penyetujuan_subsidi || '');
                tanggalSuratPenyetujuanSubsidi.setValue(orderDataByDokumenPersiapanAkadId.dokumen_persiapan_akad.tanggal_surat_penyetujuan_subsidi || '');
                tempatPenandatangananSuratBeritaAcara.setValue(orderDataByDokumenPersiapanAkadId.dokumen_persiapan_akad.tempat_penandatanganan_surat_berita_acara || '');
                nomorPenerbitanSertifikatLaikFungsi.setValue(orderDataByDokumenPersiapanAkadId.dokumen_persiapan_akad.nomor_penerbitan_sertifikat_laik_fungsi || '');
                tanggalPenandatangananSuratBeritaAcara.setValue(orderDataByDokumenPersiapanAkadId.dokumen_persiapan_akad.tanggal_penandatanganan_surat_berita_acara || '');
                tempatPenandatangananSuratSimak.setValue(orderDataByDokumenPersiapanAkadId.dokumen_persiapan_akad.tempat_penandatanganan_surat_simak || '');
                tanggalPenandatangananSuratSimak.setValue(orderDataByDokumenPersiapanAkadId.dokumen_persiapan_akad.tanggal_penandatanganan_surat_simak || '');
            }else{
                navigate('/dokumenPersiapanAkad', { replace: true });
            }
            setShowLoading(false);
        } catch (error) {
            console.log('Error at InputDokumenPersiapanAkad.fetchData: ', error)
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
            statusDokumenPersiapanAkad.isValid &&
            nomorSuratBeritaAcaraSerahTerimaRumah.isValid &&
            nomorPpjbAjb.isValid &&
            tanggalPpbjAjb.isValid &&
            tanggalSerahTerima.isValid &&
            namaCabangBankKerjaSama.isValid &&
            nomorSuratPenyetujuanSubsidi.isValid &&
            tanggalSuratPenyetujuanSubsidi.isValid &&
            tempatPenandatangananSuratBeritaAcara.isValid &&
            nomorPenerbitanSertifikatLaikFungsi.isValid &&
            tanggalPenandatangananSuratBeritaAcara.isValid &&
            tempatPenandatangananSuratSimak.isValid &&
            tanggalPenandatangananSuratSimak.isValid
        )){
            console.log(statusDokumenPersiapanAkad.isValid)
            console.log(nomorSuratBeritaAcaraSerahTerimaRumah.isValid)
            console.log(nomorPpjbAjb.isValid)
            console.log(tanggalPpbjAjb.isValid)
            console.log(tanggalSerahTerima.isValid)
            console.log(namaCabangBankKerjaSama.isValid)
            console.log(nomorSuratPenyetujuanSubsidi.isValid)
            console.log(tanggalSuratPenyetujuanSubsidi.isValid)
            console.log(tempatPenandatangananSuratBeritaAcara.isValid)
            console.log(nomorPenerbitanSertifikatLaikFungsi.isValid)
            console.log(tanggalPenandatangananSuratBeritaAcara.isValid)
            console.log(tempatPenandatangananSuratSimak.isValid)
            console.log(tanggalPenandatangananSuratSimak.isValid)
            setIsSubmitBtnDisabled(false);
            setShowLoading(false);

            return toast.error("Pastikan data input sudah benar", {autoClose: 500});
        }
        const formD = new FormData();
        
        formD.append('status', statusDokumenPersiapanAkad.value)
        formD.append('nomor_surat_berita_acara_serah_terima_rumah', nomorSuratBeritaAcaraSerahTerimaRumah.value)
        formD.append('nomor_ppjb_ajb', nomorPpjbAjb.value)
        formD.append('tanggal_ppbj_ajb', tanggalPpbjAjb.value)
        formD.append('tanggal_serah_terima', tanggalSerahTerima.value)
        formD.append('nama_cabang_bank_kerja_sama', namaCabangBankKerjaSama.value)
        formD.append('nomor_surat_penyetujuan_subsidi', nomorSuratPenyetujuanSubsidi.value)
        formD.append('tanggal_surat_penyetujuan_subsidi', tanggalSuratPenyetujuanSubsidi.value)
        formD.append('tempat_penandatanganan_surat_berita_acara', tempatPenandatangananSuratBeritaAcara.value)
        formD.append('nomor_penerbitan_sertifikat_laik_fungsi', nomorPenerbitanSertifikatLaikFungsi.value)
        formD.append('tanggal_penandatanganan_surat_berita_acara', tanggalPenandatangananSuratBeritaAcara.value)
        formD.append('tempat_penandatanganan_surat_simak', tempatPenandatangananSuratSimak.value)
        formD.append('tanggal_penandatanganan_surat_simak', tanggalPenandatangananSuratSimak.value)

        const id = toast.loading("Sedang memperbarui data ke server");

        axios.put(`${BASE_PATH_API}/dokumen_persiapan_akad/${dokumenPersiapanAkad__ID}`, formD, {
            headers: {
                "AUTH-BIP-TOKEN": localStorage.getItem("token"),
            }
        }).then((response) => {
            toast.update(id, {
                render: 'Berhasil Memperbarui Dokumen Persiapan Akad data',
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
                navigate('/dokumenPersiapanAkad', { replace: true });
            }, 1500);


        }).catch((error) => {
            setShowLoading(false);
            toast.update(id, {
                render: 'Gagal Memperbarui Dokumen Persiapan Akad data',
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
        <div className={classes.InputDokumenPersiapanAkad}>
            <h1>Update Dokumen Persiapan Akad Data</h1>
            <div className={classes.wrapFormInputDokumenPersiapanAkad}>
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
                        id='status_dokumen_persiapan_akad'
                        label='Status Dokumen Persiapan Akad'
                        isUsingPlaceHolder
                        placeholderText='Pilih Status Dokumen Persiapan Akad'
                        value={statusDokumenPersiapanAkad.value}
                        onBlur={statusDokumenPersiapanAkad.inputBlurHandler}
                        onChange={statusDokumenPersiapanAkad.valueChangeHandler}
                        options={[
                            <option key={'Belum Diajukan'} value='Belum Diajukan'>Belum Diajukan</option>,
                            <option key={'Sudah Disetujui Dan Terjual'} value='Sudah Disetujui Dan Terjual'>Sudah Disetujui Dan Terjual</option>,
                            <option key={'Ditolak'} value='Ditolak'>Ditolak</option>,
                        ]}
                        errorMsg={statusDokumenPersiapanAkad.errorMessage}
                        hasError={statusDokumenPersiapanAkad.hasError}
                        disabled={statusDokumenPersiapanAkad.isDisabled}
                    />

                    <Input 
                        type={'text'} 
                        className={inputWrapClasses} 
                        value={nomorSuratBeritaAcaraSerahTerimaRumah.value} 
                        id={'nomor_surat_berita_acara_serah_terima_rumah'} 
                        label={'Nomor Surat Berita Acara Serah Terima Rumah'} 
                        onChange={nomorSuratBeritaAcaraSerahTerimaRumah.valueChangeHandler} 
                        onBlur={nomorSuratBeritaAcaraSerahTerimaRumah.inputBlurHandler}
                        errorMsg={nomorSuratBeritaAcaraSerahTerimaRumah.errorMessage}
                        hasError={nomorSuratBeritaAcaraSerahTerimaRumah.hasError}
                        disabled={nomorSuratBeritaAcaraSerahTerimaRumah.isDisabled}
                    />

                    <Input 
                        type={'text'} 
                        className={inputWrapClasses} 
                        value={nomorPpjbAjb.value} 
                        id={'nomor_ppjb_ajb'} 
                        label={'Nomor PPJB/AJB'} 
                        onChange={nomorPpjbAjb.valueChangeHandler} 
                        onBlur={nomorPpjbAjb.inputBlurHandler}
                        errorMsg={nomorPpjbAjb.errorMessage}
                        hasError={nomorPpjbAjb.hasError}
                        disabled={nomorPpjbAjb.isDisabled}
                    />

                    <Input 
                        type={'date'} 
                        className={inputWrapClasses} 
                        value={tanggalPpbjAjb.value} 
                        id={'tanggal_ppbj_ajb'} 
                        label={'Tanggal PPJB/AJB'} 
                        onChange={tanggalPpbjAjb.valueChangeHandler} 
                        onBlur={tanggalPpbjAjb.inputBlurHandler}
                        errorMsg={tanggalPpbjAjb.errorMessage}
                        hasError={tanggalPpbjAjb.hasError}
                        disabled={tanggalPpbjAjb.isDisabled}
                    />

                    <Input 
                        type={'date'} 
                        className={inputWrapClasses} 
                        value={tanggalSerahTerima.value} 
                        id={'tanggal_serah_terima'} 
                        label={'Tanggal Serah Terima'} 
                        onChange={tanggalSerahTerima.valueChangeHandler} 
                        onBlur={tanggalSerahTerima.inputBlurHandler}
                        errorMsg={tanggalSerahTerima.errorMessage}
                        hasError={tanggalSerahTerima.hasError}
                        disabled={tanggalSerahTerima.isDisabled}
                    />

                    <Input 
                        type={'text'} 
                        className={inputWrapClasses} 
                        value={namaCabangBankKerjaSama.value} 
                        id={'nama_cabang_bank_kerja_sama'} 
                        label={'Nama Cabang Bank Kerja Sama'} 
                        onChange={namaCabangBankKerjaSama.valueChangeHandler} 
                        onBlur={namaCabangBankKerjaSama.inputBlurHandler}
                        errorMsg={namaCabangBankKerjaSama.errorMessage}
                        hasError={namaCabangBankKerjaSama.hasError}
                        disabled={namaCabangBankKerjaSama.isDisabled}
                    />

                    <Input 
                        type={'text'} 
                        className={inputWrapClasses} 
                        value={nomorSuratPenyetujuanSubsidi.value} 
                        id={'nomor_surat_penyetujuan_subsidi'} 
                        label={'Nomor Surat Pernyetujuan Subsidi'} 
                        onChange={nomorSuratPenyetujuanSubsidi.valueChangeHandler} 
                        onBlur={nomorSuratPenyetujuanSubsidi.inputBlurHandler}
                        errorMsg={nomorSuratPenyetujuanSubsidi.errorMessage}
                        hasError={nomorSuratPenyetujuanSubsidi.hasError}
                        disabled={nomorSuratPenyetujuanSubsidi.isDisabled}
                    />

                    <Input 
                        type={'date'} 
                        className={inputWrapClasses} 
                        value={tanggalSuratPenyetujuanSubsidi.value} 
                        id={'tanggal_surat_penyetujuan_subsidi'} 
                        label={'Tanggal Surat Penyetujuan Subsidi'} 
                        onChange={tanggalSuratPenyetujuanSubsidi.valueChangeHandler} 
                        onBlur={tanggalSuratPenyetujuanSubsidi.inputBlurHandler}
                        errorMsg={tanggalSuratPenyetujuanSubsidi.errorMessage}
                        hasError={tanggalSuratPenyetujuanSubsidi.hasError}
                        disabled={tanggalSuratPenyetujuanSubsidi.isDisabled}
                    />

                    <Input 
                        type={'text'} 
                        className={inputWrapClasses} 
                        value={tempatPenandatangananSuratBeritaAcara.value} 
                        id={'tempat_penandatanganan_surat_berita_acara'} 
                        label={'Tempat Penandatanganan Surat Berita Acara'} 
                        onChange={tempatPenandatangananSuratBeritaAcara.valueChangeHandler} 
                        onBlur={tempatPenandatangananSuratBeritaAcara.inputBlurHandler}
                        errorMsg={tempatPenandatangananSuratBeritaAcara.errorMessage}
                        hasError={tempatPenandatangananSuratBeritaAcara.hasError}
                        disabled={tempatPenandatangananSuratBeritaAcara.isDisabled}
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
                        value={tanggalPenandatangananSuratBeritaAcara.value} 
                        id={'tanggal_penandatanganan_surat_berita_acara'} 
                        label={'Tanggal Penandatanganan Surat Berita Acara'} 
                        onChange={tanggalPenandatangananSuratBeritaAcara.valueChangeHandler} 
                        onBlur={tanggalPenandatangananSuratBeritaAcara.inputBlurHandler}
                        errorMsg={tanggalPenandatangananSuratBeritaAcara.errorMessage}
                        hasError={tanggalPenandatangananSuratBeritaAcara.hasError}
                        disabled={tanggalPenandatangananSuratBeritaAcara.isDisabled}
                    />

                    <Input 
                        type={'text'} 
                        className={inputWrapClasses} 
                        value={tempatPenandatangananSuratSimak.value} 
                        id={'tempat_penandatanganan_surat_simak'} 
                        label={'Tempat Penandatanganan Surat Simak'} 
                        onChange={tempatPenandatangananSuratSimak.valueChangeHandler} 
                        onBlur={tempatPenandatangananSuratSimak.inputBlurHandler}
                        errorMsg={tempatPenandatangananSuratSimak.errorMessage}
                        hasError={tempatPenandatangananSuratSimak.hasError}
                        disabled={tempatPenandatangananSuratSimak.isDisabled}
                    />

                    <Input 
                        type={'date'} 
                        className={inputWrapClasses} 
                        value={tanggalPenandatangananSuratSimak.value} 
                        id={'tanggal_penandatanganan_surat_simak'} 
                        label={'Tanggal Penandatanganan Surat Simak'} 
                        onChange={tanggalPenandatangananSuratSimak.valueChangeHandler} 
                        onBlur={tanggalPenandatangananSuratSimak.inputBlurHandler}
                        errorMsg={tanggalPenandatangananSuratSimak.errorMessage}
                        hasError={tanggalPenandatangananSuratSimak.hasError}
                        disabled={tanggalPenandatangananSuratSimak.isDisabled}
                    />

                    <button disabled={isSubmitBtnDisabled}>{dokumenPersiapanAkad__ID !== undefined && dokumenPersiapanAkad__ID !== null ? 'UPDATE' : 'TAMBAH'}</button>
                </form>
            </div>
            {showLoading && <Loading />}
        </div>
    )
}

export default InputDokumenPersiapanAkad