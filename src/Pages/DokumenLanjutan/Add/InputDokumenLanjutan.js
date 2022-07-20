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
import classes from './InputDokumenLanjutan.module.css'

const InputDokumenLanjutan = () => {
    const BASE_PATH_API = process.env.REACT_APP_API_URL;
    const {id: dokumenLanjutan__ID} = useParams();
    const inputWrapClasses = classes.dokumenLanjutan__input;
    const selectInputWrapClasses = classes.dokumenLanjutan__select_input;
    const selectInputPlaceHolder = 'placeholder';

    const [isSubmitBtnDisabled, setIsSubmitBtnDisabled] = useState(false);
    const [showLoading, setShowLoading] = useState(true);

    const namaPengaju = useInput({validateValue: (val) => {
        return validation.empty(val);
    }});

    const gajiPengaju = useInput({validateValue: (val) => {
        return validation.empty(val);
    }});

    const gajiPasanganPengaju = useInput({validateValue: (val) => {
        return validation.empty(val);
    }});
    
    const statusDokumenLanjutan = useInput({initialValue: selectInputPlaceHolder, validateValue: (val) => {
        return validation.sameWithPlaceHolder(val);
    }});

    const cabangBank = useInput({validateValue: (val) => {
        return validation.empty(val);
    }});

    const tempatSuratDibuat = useInput({validateValue: (val) => {
        return validation.empty(val);
    }});

    const tanggalSuratDibuat = useInput({initialValue: new Date(), validateValue: (val) => {
        return validation.empty(val);
    }});

    const namaLengkapPihakBank = useInput({validateValue: (val) => {
        return validation.empty(val);
    }});

    const jabatanPihakBank = useInput({validateValue: (val) => {
        return validation.empty(val);
    }});

    const namaLengkapPihakKetiga = useInput({validateValue: (val) => {
        return validation.empty(val);
    }});

    const jabatanPihakKetiga = useInput({validateValue: (val) => {
        return validation.empty(val);
    }});

    const nomorRekeningBank = useInput({validateValue: (val) => {
        return validation.empty(val);
    }});

    const namaPadaBukuBank = useInput({validateValue: (val) => {
        return validation.empty(val);
    }});

    const nomorSp3k = useInput({validateValue: (val) => {
        return validation.empty(val);
    }});

    const tanggalAkad = useInput({validateValue: (val) => {
        return validation.empty(val);
    }});

    const jumlahSubsidiDipindahkan = useInput({validateValue: (val) => {
        return validation.empty(val);
    }});
    
    const navigate = useNavigate();

    const fetchDokumenPengajuanByID = async () => {
        try {
            console.log('fetchDokumenPengajuanByID called')
            return (await ApiService.getDokumenLanjutanByID(dokumenLanjutan__ID)).data;
        } catch (error) {
            console.log(error)
        }
    };

    const fetchData = async () => {
        try {
            if(dokumenLanjutan__ID !== undefined && dokumenLanjutan__ID !== null){
                const orderDataByDokumenPengajuanId = await fetchDokumenPengajuanByID();
                
                namaPengaju.setValue(orderDataByDokumenPengajuanId.profil_pengaju.full_name);
                namaPengaju.setDisable(true);

                gajiPengaju.setValue(orderDataByDokumenPengajuanId.profil_pengaju.penghasilan || '');
                gajiPasanganPengaju.setValue(orderDataByDokumenPengajuanId.cek_id_bi.profile_pasangan_pengaju.penghasilan || '');
                
                statusDokumenLanjutan.setValue(orderDataByDokumenPengajuanId.dokumen_lanjutan.status || '')
                cabangBank.setValue(orderDataByDokumenPengajuanId.dokumen_lanjutan.cabang_bank || '')
                tempatSuratDibuat.setValue(orderDataByDokumenPengajuanId.dokumen_lanjutan.tempat_surat_dibuat || '')

                tanggalSuratDibuat.setValue(orderDataByDokumenPengajuanId.dokumen_lanjutan.tanggal_surat_dibuat || '')

                namaLengkapPihakBank.setValue(orderDataByDokumenPengajuanId.dokumen_lanjutan.nama_lengkap_pihak_bank || '')
                jabatanPihakBank.setValue(orderDataByDokumenPengajuanId.dokumen_lanjutan.jabatan_pihak_bank || '')
                namaLengkapPihakKetiga.setValue(orderDataByDokumenPengajuanId.dokumen_lanjutan.nama_lengkap_pihak_ketiga || '')
                jabatanPihakKetiga.setValue(orderDataByDokumenPengajuanId.dokumen_lanjutan.jabatan_pihak_ketiga || '')
                nomorRekeningBank.setValue(orderDataByDokumenPengajuanId.dokumen_lanjutan.nomor_rekening_bank || '')
                namaPadaBukuBank.setValue(orderDataByDokumenPengajuanId.dokumen_lanjutan.nama_pada_buku_bank || '')
                nomorSp3k.setValue(orderDataByDokumenPengajuanId.dokumen_lanjutan.nomor_sp3k || '')
                tanggalAkad.setValue(orderDataByDokumenPengajuanId.dokumen_lanjutan.tanggal_akad || '')
                jumlahSubsidiDipindahkan.setValue(orderDataByDokumenPengajuanId.dokumen_lanjutan.jumlah_subsidi_dipindahkan || '')
            }else{
                navigate('/dokumenLanjutan', { replace: true });
            }
            setShowLoading(false);
        } catch (error) {
            console.log('Error at InputDokumenLanjutan.fetchData: ', error)
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
            statusDokumenLanjutan.isValid &&
            gajiPengaju.isValid &&
            gajiPasanganPengaju.isValid &&
            cabangBank.isValid &&
            tempatSuratDibuat.isValid &&
            tanggalSuratDibuat.isValid &&
            namaLengkapPihakBank.isValid &&
            jabatanPihakBank.isValid &&
            namaLengkapPihakKetiga.isValid &&
            jabatanPihakKetiga.isValid &&
            nomorRekeningBank.isValid &&
            namaPadaBukuBank.isValid &&
            nomorSp3k.isValid &&
            tanggalAkad.isValid &&
            jumlahSubsidiDipindahkan.isValid
        )){
            setIsSubmitBtnDisabled(false);
            setShowLoading(false);

            return toast.error("Pastikan data input sudah benar", {autoClose: 500});
        }
        const formD = new FormData();
        
        formD.append('status', statusDokumenLanjutan.value)
        formD.append('gaji_pengaju', gajiPengaju.value)
        formD.append('gaji_pasangan_pengaju', gajiPasanganPengaju.value)
        formD.append('cabang_bank', cabangBank.value)
        formD.append('tempat_surat_dibuat', tempatSuratDibuat.value)
        formD.append('tanggal_surat_dibuat', tanggalSuratDibuat.value)
        formD.append('nama_lengkap_pihak_bank', namaLengkapPihakBank.value)
        formD.append('jabatan_pihak_bank', jabatanPihakBank.value)
        formD.append('nama_lengkap_pihak_ketiga', namaLengkapPihakKetiga.value)
        formD.append('jabatan_pihak_ketiga', jabatanPihakKetiga.value)
        formD.append('nomor_rekening_bank', nomorRekeningBank.value)
        formD.append('nama_pada_buku_bank', namaPadaBukuBank.value)
        formD.append('nomor_sp3k', nomorSp3k.value)
        formD.append('tanggal_akad', tanggalAkad.value)
        formD.append('jumlah_subsidi_dipindahkan', jumlahSubsidiDipindahkan.value)

        const id = toast.loading("Sedang menambahkan data ke server");

        axios.put(`${BASE_PATH_API}/dokumen_lanjutan/${dokumenLanjutan__ID}`, formD, {
            headers: {
                "AUTH-BIP-TOKEN": localStorage.getItem("token"),
            }
        }).then((response) => {
            toast.update(id, {
                render: 'Berhasil Memperbarui Dokumen Lanjutan data',
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
                navigate('/dokumenLanjutan', { replace: true });
            }, 1500);


        }).catch((error) => {
            setShowLoading(false);
            toast.update(id, {
                render: 'Gagal Memperbarui Dokumen Lanjutan data',
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
        <div className={classes.InputDokumenLanjutan}>
            <h1>Update Dokumen Lanjutan Data</h1>
            <div className={classes.wrapFormInputDokumenLanjutan}>
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
                        value={gajiPengaju.value} 
                        id={'gaji_pengaju'} 
                        label={'Gaji Pengaju'} 
                        onChange={gajiPengaju.valueChangeHandler} 
                        onBlur={gajiPengaju.inputBlurHandler}
                        errorMsg={gajiPengaju.errorMessage}
                        hasError={gajiPengaju.hasError}
                        disabled={gajiPengaju.isDisabled}
                    />
                    <Input 
                        type={'text'} 
                        className={inputWrapClasses} 
                        value={gajiPasanganPengaju.value} 
                        id={'gaji_pasangan_pengaju'} 
                        label={'Gaji Pasangan Pengaju'} 
                        onChange={gajiPasanganPengaju.valueChangeHandler} 
                        onBlur={gajiPasanganPengaju.inputBlurHandler}
                        errorMsg={gajiPasanganPengaju.errorMessage}
                        hasError={gajiPasanganPengaju.hasError}
                        disabled={gajiPasanganPengaju.isDisabled}
                    />
                    <SelectInput 
                        className={selectInputWrapClasses}
                        id='status_dokumen_lanjutan'
                        label='Status Dokumen Lanjutan'
                        isUsingPlaceHolder
                        placeholderText='Pilih Status Dokumen Lanjutan'
                        value={statusDokumenLanjutan.value}
                        onBlur={statusDokumenLanjutan.inputBlurHandler}
                        onChange={statusDokumenLanjutan.valueChangeHandler}
                        options={[
                            <option key={'Belum Diajukan'} value='Belum Diajukan'>Belum Diajukan</option>,
                            <option key={'Sudah Diajukan'} value='Sudah Diajukan'>Sudah Diajukan</option>,
                            <option key={'Ditolak'} value='Ditolak'>Ditolak</option>,
                        ]}
                        errorMsg={statusDokumenLanjutan.errorMessage}
                        hasError={statusDokumenLanjutan.hasError}
                        disabled={statusDokumenLanjutan.isDisabled}
                    />

                    <Input 
                        type={'text'} 
                        className={inputWrapClasses} 
                        value={cabangBank.value} 
                        id={'cabang_bank'} 
                        label={'Lokasi/Nama Cabang Bank'} 
                        onChange={cabangBank.valueChangeHandler} 
                        onBlur={cabangBank.inputBlurHandler}
                        errorMsg={cabangBank.errorMessage}
                        hasError={cabangBank.hasError}
                        disabled={cabangBank.isDisabled}
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
                        className={inputWrapClasses}
                        type={'text'}
                        id={'tanggal_surat_dibuat'}
                        label={'Tanggal Surat Dibuat'}
                        value={tanggalSuratDibuat.value}
                        onChange={tanggalSuratDibuat.valueChangeHandler} 
                        onBlur={tanggalSuratDibuat.inputBlurHandler}
                        errorMsg={tanggalSuratDibuat.errorMessage}
                        hasError={tanggalSuratDibuat.hasError}
                        disabled={tanggalSuratDibuat.isDisabled}
                    />
                    <Input 
                        type={'text'} 
                        className={inputWrapClasses} 
                        value={namaLengkapPihakBank.value} 
                        id={'nama_lengkap_pihak_bank'} 
                        label={'Nama Lengkap Pihak Bank Yang Bertanda Tangan'} 
                        onChange={namaLengkapPihakBank.valueChangeHandler} 
                        onBlur={namaLengkapPihakBank.inputBlurHandler}
                        errorMsg={namaLengkapPihakBank.errorMessage}
                        hasError={namaLengkapPihakBank.hasError}
                        disabled={namaLengkapPihakBank.isDisabled}
                    />
                    <Input 
                        type={'text'} 
                        className={inputWrapClasses} 
                        value={jabatanPihakBank.value} 
                        id={'jabatan_pihak_bank'} 
                        label={'Jabatan Pihak Bank Yang Bertanda Tangan'} 
                        onChange={jabatanPihakBank.valueChangeHandler} 
                        onBlur={jabatanPihakBank.inputBlurHandler}
                        errorMsg={jabatanPihakBank.errorMessage}
                        hasError={jabatanPihakBank.hasError}
                        disabled={jabatanPihakBank.isDisabled}
                    />
                    <Input 
                        type={'text'} 
                        className={inputWrapClasses} 
                        value={namaLengkapPihakKetiga.value} 
                        id={'nama_lengkap_pihak_ketiga'} 
                        label={'Nama Atasan/Kepala Desa Yang Bertanda Tangan'} 
                        onChange={namaLengkapPihakKetiga.valueChangeHandler} 
                        onBlur={namaLengkapPihakKetiga.inputBlurHandler}
                        errorMsg={namaLengkapPihakKetiga.errorMessage}
                        hasError={namaLengkapPihakKetiga.hasError}
                        disabled={namaLengkapPihakKetiga.isDisabled}
                    />
                    <Input 
                        type={'text'} 
                        className={inputWrapClasses} 
                        value={jabatanPihakKetiga.value} 
                        id={'jabatan_pihak_ketiga'} 
                        label={'Jabatan Atasan/Kepala Desa Yang Bertanda Tangan'} 
                        onChange={jabatanPihakKetiga.valueChangeHandler} 
                        onBlur={jabatanPihakKetiga.inputBlurHandler}
                        errorMsg={jabatanPihakKetiga.errorMessage}
                        hasError={jabatanPihakKetiga.hasError}
                        disabled={jabatanPihakKetiga.isDisabled}
                    />
                    <Input 
                        type={'text'} 
                        className={inputWrapClasses} 
                        value={nomorRekeningBank.value} 
                        id={'nomor_rekening_bank'} 
                        label={'Nomor Rekening Bank Yang Diberi Kuasa'} 
                        onChange={nomorRekeningBank.valueChangeHandler} 
                        onBlur={nomorRekeningBank.inputBlurHandler}
                        errorMsg={nomorRekeningBank.errorMessage}
                        hasError={nomorRekeningBank.hasError}
                        disabled={nomorRekeningBank.isDisabled}
                    />
                    <Input 
                        type={'text'} 
                        className={inputWrapClasses} 
                        value={namaPadaBukuBank.value} 
                        id={'nama_pada_buku_bank'} 
                        label={'Nama Pada Buku Tabungan Yang Diberi Kuasa'} 
                        onChange={namaPadaBukuBank.valueChangeHandler} 
                        onBlur={namaPadaBukuBank.inputBlurHandler}
                        errorMsg={namaPadaBukuBank.errorMessage}
                        hasError={namaPadaBukuBank.hasError}
                        disabled={namaPadaBukuBank.isDisabled}
                    />
                    <Input 
                        type={'text'} 
                        className={inputWrapClasses} 
                        value={nomorSp3k.value} 
                        id={'nomor_sp3k'} 
                        label={'Nomor SP3K'} 
                        onChange={nomorSp3k.valueChangeHandler} 
                        onBlur={nomorSp3k.inputBlurHandler}
                        errorMsg={nomorSp3k.errorMessage}
                        hasError={nomorSp3k.hasError}
                        disabled={nomorSp3k.isDisabled}
                    />
                    <Input 
                        type={'text'} 
                        className={inputWrapClasses} 
                        value={tanggalAkad.value} 
                        id={'tanggal_akad'} 
                        label={'Tanggal Akad'} 
                        onChange={tanggalAkad.valueChangeHandler} 
                        onBlur={tanggalAkad.inputBlurHandler}
                        errorMsg={tanggalAkad.errorMessage}
                        hasError={tanggalAkad.hasError}
                        disabled={tanggalAkad.isDisabled}
                    />
                    <Input 
                        type={'text'} 
                        className={inputWrapClasses} 
                        value={jumlahSubsidiDipindahkan.value} 
                        id={'jumlah_subsidi_dipindahkan'} 
                        label={'Jumlah Subsidi Yang Dipindahkan'} 
                        onChange={jumlahSubsidiDipindahkan.valueChangeHandler} 
                        onBlur={jumlahSubsidiDipindahkan.inputBlurHandler}
                        errorMsg={jumlahSubsidiDipindahkan.errorMessage}
                        hasError={jumlahSubsidiDipindahkan.hasError}
                        disabled={jumlahSubsidiDipindahkan.isDisabled}
                    />
                    <button disabled={isSubmitBtnDisabled}>{dokumenLanjutan__ID !== undefined && dokumenLanjutan__ID !== null ? 'UPDATE' : 'TAMBAH'}</button>
                </form>
            </div>
            {showLoading && <Loading />}
        </div>
    )
}

export default InputDokumenLanjutan