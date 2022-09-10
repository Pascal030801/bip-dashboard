import React, {  useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useReactToPrint } from 'react-to-print';
import { toast } from 'react-toastify';
import Loading from '../../Components/Loading/Loading';
import Modal from '../../Components/Modal/Modal';
import ApiService from '../../Services/apiService';
import bipErrorHandler from '../../Util/bipErrorHandler';
import classes from './DokumenLanjutan.module.css'
import DokumenLanjutanTemplateSurat from './TemplateSurat/DokumenLanjutanTemplateSurat';
import _ from 'lodash';

const DokumenLanjutan = () => {
    const navigate = useNavigate();
    const [dokumenLanjutanTable, setDokumenLanjutanTable] = useState([]);
    const [dokumenLanjutanDatas, setDokumenLanjutanDatas] = useState([]);
    const [selectOptionPerumahanList, setSelectOptionPerumahanList] = useState([]);
    const [selectedPerumahan, setSelectedPerumahan] = useState('all');
    const [showModal, setShowModal] = useState(false);
    const [showLoading, setShowLoading] = useState(true);
    const [selectedDokumenLanjutan, setSelectedDokumenLanjutan] = useState(false);
    const documentToPrintedRef = useRef();
    const [data, setData] = useState();

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
            console.log('error at Dokumen Lanjutan view: fetchPerumahan')
            toast.error(bipErrorHandler(error))
        }
    }

    const deleteBtnHandler = async (e, dokumenLanjutanId) => {
        setSelectedDokumenLanjutan(dokumenLanjutanId);
        setShowModal(true)
    }

    /**
     * 
     * @param {Event} e 
     */
    const cancelBtnHandler = (e) => {
        e.preventDefault();
        setShowModal(false);
        setSelectedDokumenLanjutan(null);
    }

    /**
     * 
     * @param {Event} e 
     */
     const closeBtnHandler = (e) => {
        e.preventDefault();
        setShowModal(false);
        setSelectedDokumenLanjutan(null);
    }

    const handlePrint = useReactToPrint({
        content: () => documentToPrintedRef.current,
        onAfterPrint: () => {setData(null)}
      });

    function printDocumentHandler(e, OrderdokumenLanjutanDatas, documentId) {
        e.preventDefault();


        const dokumenIndex = _.findIndex(OrderdokumenLanjutanDatas, (dokumen) => dokumen.dokumen_lanjutan.id === documentId);

        if(OrderdokumenLanjutanDatas[dokumenIndex].dokumen_lanjutan.status !== "Sudah Diajukan"){
            toast.error('Dokumen belum diajukan, tidak bisa menampilkan dokumen')
            return;
        }

        console.log(OrderdokumenLanjutanDatas[dokumenIndex])
        const dokumenData = OrderdokumenLanjutanDatas[dokumenIndex];
        const formattedData = {
            uangMuka: dokumenData.dokumen_pengajuan.uang_muka,
            namaPemohon: dokumenData.profil_pengaju.full_name,
            noKtpPemohon: dokumenData.profil_pengaju.nik_id,
            tempatLahirPemohon: dokumenData.profil_pengaju.place_of_birth,
            tanggalLahirPemohon: dokumenData.profil_pengaju.date_of_birth,
            pekerjaanPemohon: dokumenData.profil_pengaju.position,
            alamatPemohon: `${dokumenData.profil_pengaju.full_address} RT/RW ${dokumenData.profil_pengaju.rtrw}, Desa ${dokumenData.profil_pengaju.desa.nama}, ${dokumenData.profil_pengaju.kecamatan.nama}, ${dokumenData.profil_pengaju.kabupaten.nama}, Provinsi ${dokumenData.profil_pengaju.provinsi.nama}`,
            penghasilanPemohon: dokumenData.profil_pengaju.penghasilan,
            noTeleponPemohon: dokumenData.profil_pengaju.phone_number,
            namaPasanganPemohon: dokumenData.cek_id_bi.profile_pasangan_pengaju.full_name,
            noKtpPasanganPemohon: dokumenData.cek_id_bi.profile_pasangan_pengaju.nik_id,
            tempatLahirPasanganPemohon: dokumenData.cek_id_bi.profile_pasangan_pengaju.place_of_birth,
            tanggalLahirPasanganPemohon: dokumenData.cek_id_bi.profile_pasangan_pengaju.date_of_birth,
            pekerjaanPasanganPemohon: dokumenData.cek_id_bi.profile_pasangan_pengaju.position,
            alamatPasanganPemohon: `${dokumenData.cek_id_bi.profile_pasangan_pengaju.full_address} RT/RW ${dokumenData.cek_id_bi.profile_pasangan_pengaju.rtrw}`,
            penghasilanPasanganPemohon: dokumenData.cek_id_bi.profile_pasangan_pengaju.penghasilan,
            namaPerumahan: dokumenData.housing_areas.nama,
            alamatPerumahan: `${dokumenData.housing_areas.full_address} Desa ${dokumenData.housing_areas.desaAlamatPerumahan.nama}, ${dokumenData.housing_areas.kecamatanAlamatPerumahan.nama}, ${dokumenData.housing_areas.kabupatenAlamatPerumahan.nama}, Provinsi ${dokumenData.housing_areas.provinsiAlamatPerumahan.nama}`,
            nomorRumah: dokumenData.house.blok,
            hargaJualRumah: dokumenData.house.harga,
            uangMuka: dokumenData.dokumen_pengajuan.uang_muka,
            kantorCabangBank: dokumenData.dokumen_lanjutan.cabang_bank,
            tempatSuratDibuat: dokumenData.dokumen_lanjutan.tempat_surat_dibuat,
            tanggalSuratDibuat: dokumenData.dokumen_lanjutan.tanggal_surat_dibuat,
            namaLengkapPihakBank: dokumenData.dokumen_lanjutan.nama_lengkap_pihak_bank,
            jabatanPihakBank: dokumenData.dokumen_lanjutan.jabatan_pihak_bank,
            namaLengkapPihakKetiga: dokumenData.dokumen_lanjutan.nama_lengkap_pihak_ketiga,
            jabatanPihakKetiga: dokumenData.dokumen_lanjutan.jabatan_pihak_ketiga,
            nomorRekeningSimpanan: dokumenData.dokumen_lanjutan.nomor_rekening_bank,
            nomorRekeningKpr: dokumenData.dokumen_lanjutan.nomor_rekening_bank,
            nomorSp3k: dokumenData.dokumen_lanjutan.nomor_sp3k,
            tanggalAkad: dokumenData.dokumen_lanjutan.tanggal_akad,
            bankYangDigunakan: dokumenData.bank_yang_digunakan
        }
        setData(formattedData);

    };

    useEffect(() => {
        if( data !== undefined && data !== null ){
            handlePrint();
        }
    },  [data])

    /**
     * 
     * @param {Event} e 
     */
     const confirmBtnHandler = async (e) => {
        e.preventDefault();
        const id = toast.loading("Sedang menghapus data di server");
        try {
            setShowLoading(true);
            
            await ApiService.deleteDokumenLanjutanByID(selectedDokumenLanjutan);
            toast.update(id, {
                render: 'Berhasil Menghapus Dokumen Lanjutan data',
                type: 'success',
                position: 'top-right',
                autoClose: 500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                isLoading: false,      
            });
            await fetchDokumenLanjutanData(selectedPerumahan);
            setShowModal(false);
            setShowLoading(false);
        } catch (error) {
            console.log(error);
            setShowLoading(false);

            toast.update(id, {
                render: 'Gagal Menghapus Dokumen Lanjutan data',
                type: 'error',
                position: 'top-right',
                autoClose: 500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                isLoading: false
            });
        }

    }

    /**
     * 
     * @param {string} perumahan_id 
     */
    const fetchDokumenLanjutanData = async (perumahan_id) => {
        try {
            const res = await ApiService.getDokumenLanjutans({perumahan_id: perumahan_id})

            const OrderDokumenLanjutanDatas = res.data;
            setDokumenLanjutanTable([]);
            const formattedDokumenLanjutans = [];

            setDokumenLanjutanDatas(res.data);

            if(OrderDokumenLanjutanDatas.length > 0){
                for(const OrderDokumenLanjutanData of OrderDokumenLanjutanDatas){
                    formattedDokumenLanjutans.push((
                        <tr key={OrderDokumenLanjutanData.id}>
                            <td>{OrderDokumenLanjutanData.id}</td>
                            <td>{OrderDokumenLanjutanData.profil_pengaju.full_name}</td>
                            <td>{OrderDokumenLanjutanData.dokumen_lanjutan.status}</td>
                            <td>{OrderDokumenLanjutanData.diurus_oleh.full_name}</td>
                            <td>
                                <div className={classes.actionWrap}>
                                    <div className={classes['print-btn']} onClick={(e) => printDocumentHandler(e, OrderDokumenLanjutanDatas, OrderDokumenLanjutanData.dokumen_lanjutan.id)}>PRINT</div>
                                    <div className={classes['edit-btn']} onClick={(e) => editBtnHandler(e, OrderDokumenLanjutanData.dokumen_lanjutan.id)}>EDIT</div>
                                    <div className={classes['delete-btn']} onClick={(e) => deleteBtnHandler(e, OrderDokumenLanjutanData.dokumen_lanjutan.id)}>DELETE</div>
                                </div>
                            </td>
                        </tr>
                    ));
                }
            }

            setDokumenLanjutanTable(formattedDokumenLanjutans);
        } catch (error) {
            console.log('error at Dokumen Lanjutan view: fetchDokumenLanjutanData ', error)
            toast.error(bipErrorHandler(error), {autoClose: 500})
            setShowLoading(false);

        }
    }

    const fetchData = async () => {
        try {
            await fetchPerumahan();
            await fetchDokumenLanjutanData(selectedPerumahan);
            setShowLoading(false);
        } catch (error) {
            
        }
    }

    useEffect(() => {
        fetchData();        
    }, []);

    /**
     * 
     * @param {Event} e 
     */
    const selectPerumahanChangeHandler = (e) => {
        setSelectedPerumahan(e.target.value);
    }

    useEffect(() => {
        const fetchDokumenLanjutan = async () => {
            setShowLoading(true)
            await fetchDokumenLanjutanData(selectedPerumahan);
            setShowLoading(false);

        }
        fetchDokumenLanjutan();
    }, [selectedPerumahan])

    const editBtnHandler = (e, id) => {
        navigate(`/dokumenLanjutan/update/${id}`);
    }

    return (
        <>
            <div className={classes.dokumenLanjutan}>
                <h1 className={classes.title}>
                    Dokumen Lanjutan
                </h1>
                <div className={classes.selectPerumahan}>
                    <label htmlFor='perumahan'>Nama Perumahan</label>
                    <select id='perumahan' name='perumahan' value={selectedPerumahan} onChange={selectPerumahanChangeHandler}>
                        <option value={'all'}>Semua</option>
                        {selectOptionPerumahanList}
                    </select>
                </div>
                {dokumenLanjutanTable.length > 0 && (
                    <div className={classes.wrapTableDataDokumenLanjutan}>
                        <table className={classes.tableDataDokumenLanjutan}>
                            <thead>
                                <tr>
                                    <th>Order ID</th>
                                    <th>Nama Pemohon</th>
                                    <th>Status</th>
                                    <th>Nama Marketer</th>
                                    <th>Aksi</th>
                                </tr>
                            </thead>
                            <tbody>
                                {dokumenLanjutanTable.length > 0 && dokumenLanjutanTable}
                                
                            </tbody>
                        </table>
                    </div>
                )}
                {dokumenLanjutanTable.length === 0 && (<p>Tidak ada data Dokumen Lanjutan</p>)}
                {showModal && <Modal
                    title='Hapus Dokumen Lanjutan'
                    message='Apakah anda yakin ingin mengahapus Dokumen Lanjutan ini?'
                    onCancel={cancelBtnHandler}
                    onClose={closeBtnHandler}
                    onConfirm={confirmBtnHandler}
                    closeOnClickOutside={false}
                />}
                {showLoading && <Loading />}
            </div>
            <div className={classes.printed} >
                {data && <DokumenLanjutanTemplateSurat data={data} ref={documentToPrintedRef} />}
            </div>
        </>
    )
}

export default DokumenLanjutan;