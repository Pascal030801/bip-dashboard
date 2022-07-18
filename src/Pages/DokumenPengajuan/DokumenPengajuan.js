import { background } from '@chakra-ui/react';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useReactToPrint } from 'react-to-print';
import { toast } from 'react-toastify';
import Loading from '../../Components/Loading/Loading';
import Modal from '../../Components/Modal/Modal';
import ApiService from '../../Services/apiService';
import bipErrorHandler from '../../Util/bipErrorHandler';
import classes from './DokumenPengajuan.module.css'
import DokumenPengajuanTemplateSurat from './TemplateSurat/DokumenPengajuanTemplateSurat';
import _ from 'lodash';

const DokumenPengajuan = () => {
    const navigate = useNavigate();
    const [dokumenPengajuanTable, setDokumenPengajuanTable] = useState([]);
    const [dokumenPengajuanDatas, setDokumenPengajuanDatas] = useState([]);
    const [selectOptionPerumahanList, setSelectOptionPerumahanList] = useState([]);
    const [selectedPerumahan, setSelectedPerumahan] = useState('all');
    const [showModal, setShowModal] = useState(false);
    const [showLoading, setShowLoading] = useState(true);
    const [selectedDokumenPengajuan, setSelectedDokumenPengajuan] = useState(false);
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
            console.log('error at Dokumen Pengajuan view: fetchPerumahan')
            toast.error(bipErrorHandler(error))
        }
    }

    const deleteBtnHandler = async (e, cekIdBiId) => {
        setSelectedDokumenPengajuan(cekIdBiId);
        setShowModal(true)
    }

    /**
     * 
     * @param {Event} e 
     */
    const cancelBtnHandler = (e) => {
        e.preventDefault();
        setShowModal(false);
        setSelectedDokumenPengajuan(null);
    }

    /**
     * 
     * @param {Event} e 
     */
     const closeBtnHandler = (e) => {
        e.preventDefault();
        setShowModal(false);
        setSelectedDokumenPengajuan(null);
    }

    const handlePrint = useReactToPrint({
        content: () => documentToPrintedRef.current,
        onAfterPrint: () => {setData(null)}
      });

    function printDocumentHandler(e, dokumenPengajuans, documentId) {
        e.preventDefault();

        const dokumenIndex = _.findIndex(dokumenPengajuans, (dokumen) => dokumen.dokumen_pengajuan.id === documentId);

        if(dokumenPengajuans[dokumenIndex].dokumen_pengajuan.status_dokumen_pengajuan !== "Sudah Diajukan"){
            toast.error('Dokumen belum diajukan, tidak bisa menampilkan dokumen')
            return;
        }

        const selectedDokumenPengajuanData = dokumenPengajuans[dokumenIndex]
        console.log(selectedDokumenPengajuanData);
        const dokumenData = {
            namaLengkapPengaju: selectedDokumenPengajuanData.profil_pengaju.full_name,
            statusPerkawinanPengaju: selectedDokumenPengajuanData.profil_pengaju.status_perkawinan,
            tempatLahirPengaju: selectedDokumenPengajuanData.profil_pengaju.place_of_birth,
            tanggalLahirPengaju: selectedDokumenPengajuanData.profil_pengaju.date_of_birth,
            nikPengaju: selectedDokumenPengajuanData.profil_pengaju.nik_id,
            provinsiAlamatPengaju: selectedDokumenPengajuanData.profil_pengaju.provinsi.nama,
            kabupatenAlamatPengaju: selectedDokumenPengajuanData.profil_pengaju.kabupaten.nama,
            kecamatanAlamatPengaju: selectedDokumenPengajuanData.profil_pengaju.kecamatan.nama,
            desaAlamatPengaju: selectedDokumenPengajuanData.profil_pengaju.desa.nama,
            rtrwAlamatPengaju: selectedDokumenPengajuanData.profil_pengaju.rtrw,
            alamatLengkapPengaju: selectedDokumenPengajuanData.profil_pengaju.full_address,
            nomorHpPengaju: selectedDokumenPengajuanData.profil_pengaju.phone_number,
            jabatanPengaju: selectedDokumenPengajuanData.profil_pengaju.position,
            blokRumah: selectedDokumenPengajuanData.house.blok,
            nomorShmRumah: selectedDokumenPengajuanData.house.nomor_shm,
            hargaRumah: selectedDokumenPengajuanData.house.harga,
            uangMukaRumah: selectedDokumenPengajuanData.house.uang_muka,
            tipeRumah: selectedDokumenPengajuanData.house.house_type,
            luasTanahRumah: selectedDokumenPengajuanData.house.luas_tanah,
            plafonKreditRumah: selectedDokumenPengajuanData.dokumen_pengajuan.plafon_kredit,
            jangkaWaktuKreditRumah: selectedDokumenPengajuanData.dokumen_pengajuan.jangka_waktu,
            namaMarketer: selectedDokumenPengajuanData.dokumen_pengajuan.nama_marketer,
            tempatDanTanggalDokumenPengajuan: selectedDokumenPengajuanData.dokumen_pengajuan.tempat_dan_tanggal_dokumen,
            namaPerumahan: selectedDokumenPengajuanData.housing_areas.nama,
            provinsiAlamatPerumahan: selectedDokumenPengajuanData.housing_areas.provinsiAlamatPerumahan.nama,
            kabupatenAlamatPerumahan: selectedDokumenPengajuanData.housing_areas.kabupatenAlamatPerumahan.nama,
            kecamatanAlamatPerumahan: selectedDokumenPengajuanData.housing_areas.kecamatanAlamatPerumahan.nama,
            desaAlamatPerumahan: selectedDokumenPengajuanData.housing_areas.desaAlamatPerumahan.nama,
            alamatLengkapPerumahan: selectedDokumenPengajuanData.housing_areas.full_address,   

        }
        setData(dokumenData);

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
            
            await ApiService.deleteDokumenPengajuanByID(selectedDokumenPengajuan);
            toast.update(id, {
                render: 'Berhasil Menghapus Dokumen Pengajuan data',
                type: 'success',
                position: 'top-right',
                autoClose: 500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                isLoading: false,      
            });
            await fetchDokumenPengajuanData(selectedPerumahan);
            setShowModal(false);
            setShowLoading(false);
        } catch (error) {
            console.log(error);
            setShowLoading(false);

            toast.update(id, {
                render: 'Gagal Menghapus Dokumen Pengajuan data',
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
    const fetchDokumenPengajuanData = async (perumahan_id) => {
        try {
            const res = await ApiService.getDokumenPengajuans({perumahan_id: perumahan_id})

            const dokumenPengajuans = res.data;
            setDokumenPengajuanTable([]);
            const formattedDokumenPengajuans = [];

            setDokumenPengajuanDatas(res.data);

            if(dokumenPengajuans.length > 0){
                for(const dokumenPengajuan of dokumenPengajuans){
                  formattedDokumenPengajuans.push((
                        <tr key={dokumenPengajuan.id}>
                            <td>{dokumenPengajuan.profil_pengaju.full_name}</td>
                            <td>{dokumenPengajuan.dokumen_pengajuan.nama_marketer}</td>
                            <td>{dokumenPengajuan.house_id && (dokumenPengajuan.house_id !== '' && dokumenPengajuan.house_id !== null) ? dokumenPengajuan.house.blok : 'Belum Pilih Rumah'}</td>
                            <td>
                                <div className={classes.actionWrap}>
                                    <div className={classes['print-btn']} onClick={(e) => printDocumentHandler(e, dokumenPengajuans, dokumenPengajuan.dokumen_pengajuan.id)}>PRINT</div>
                                    <div className={classes['edit-btn']} onClick={(e) => editBtnHandler(e, dokumenPengajuan.dokumen_pengajuan.id)}>EDIT</div>
                                    <div className={classes['delete-btn']} onClick={(e) => deleteBtnHandler(e, dokumenPengajuan.dokumen_pengajuan.id)}>DELETE</div>
                                </div>
                            </td>
                        </tr>
                    ));
                }
            }

            setDokumenPengajuanTable(formattedDokumenPengajuans);
        } catch (error) {
            console.log('error at Dokumen Pengajuan view: fetchDokumenPengajuanData')
            toast.error(bipErrorHandler(error), {autoClose: 500})
            setShowLoading(false);

        }
    }

    const fetchData = async () => {
        try {
            await fetchPerumahan();
            await fetchDokumenPengajuanData(selectedPerumahan);
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
        const fetchDokumenPengajuan = async () => {
            setShowLoading(true)
            await fetchDokumenPengajuanData(selectedPerumahan);
            setShowLoading(false);

        }
        fetchDokumenPengajuan();
    }, [selectedPerumahan])

    const editBtnHandler = (e, id) => {
        navigate(`/dokumenPengajuan/update/${id}`);
    }

    return (
        <>
            <div className={classes.dokumenPengajuan}>
                <h1 className={classes.title}>
                    Dokumen Pengajuan
                </h1>
                <div className={classes.selectPerumahan}>
                    <label htmlFor='perumahan'>Nama Perumahan</label>
                    <select id='perumahan' name='perumahan' value={selectedPerumahan} onChange={selectPerumahanChangeHandler}>
                        <option value={'all'}>Semua</option>
                        {selectOptionPerumahanList}
                    </select>
                </div>
                {dokumenPengajuanTable.length > 0 && (
                    <div className={classes.wrapTableDataDokumenPengajuan}>
                        <table className={classes.tableDataDokumenPengajuan}>
                            <thead>
                                <tr>
                                    <th>Nama Pemohon</th>
                                    <th>Nama Marketer</th>
                                    <th>Nomor Rumah</th>
                                    <th>Aksi</th>
                                </tr>
                            </thead>
                            <tbody>
                                {dokumenPengajuanTable.length > 0 && dokumenPengajuanTable}
                                
                            </tbody>
                        </table>
                    </div>
                )}
                {dokumenPengajuanTable.length === 0 && (<p>Tidak ada data Dokumen Pengajuan</p>)}
                {showModal && <Modal
                    title='Hapus Dokumen Pengajuan'
                    message='Apakah anda yakin ingin mengahapus Dokumen Pengajuan ini?'
                    onCancel={cancelBtnHandler}
                    onClose={closeBtnHandler}
                    onConfirm={confirmBtnHandler}
                    closeOnClickOutside={false}
                />}
                {showLoading && <Loading />}
            </div>
            <div className={classes.printed} >
                {data && <DokumenPengajuanTemplateSurat data={data} ref={documentToPrintedRef} />}
            </div>
        </>
    )
}

export default DokumenPengajuan;