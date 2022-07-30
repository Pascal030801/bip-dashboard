import React, {  useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useReactToPrint } from 'react-to-print';
import { toast } from 'react-toastify';
import Loading from '../../Components/Loading/Loading';
import Modal from '../../Components/Modal/Modal';
import ApiService from '../../Services/apiService';
import bipErrorHandler from '../../Util/bipErrorHandler';
import classes from './DokumenPersiapanAkad.module.css'
import DokumenPersiapanAkadTemplateSurat from './TemplateSurat/DokumenPersiapanAkadTemplateSurat';
import _ from 'lodash';

const DokumenPersiapanAkad = () => {
    const navigate = useNavigate();
    const [dokumenPersiapanAkadTable, setDokumenPersiapanAkadTable] = useState([]);
    const [dokumenPersiapanAkadDatas, setDokumenPersiapanAkadDatas] = useState([]);
    const [selectOptionPerumahanList, setSelectOptionPerumahanList] = useState([]);
    const [selectedPerumahan, setSelectedPerumahan] = useState('all');
    const [showModal, setShowModal] = useState(false);
    const [showLoading, setShowLoading] = useState(true);
    const [selectedDokumenPersiapanAkad, setSelectedDokumenPersiapanAkad] = useState(false);
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
            console.log('error at Dokumen Persiapan Akad view: fetchPerumahan')
            toast.error(bipErrorHandler(error))
        }
    }

    const deleteBtnHandler = async (e, dokumenPersiapanAkadId) => {
        setSelectedDokumenPersiapanAkad(dokumenPersiapanAkadId);
        setShowModal(true)
    }

    /**
     * 
     * @param {Event} e 
     */
    const cancelBtnHandler = (e) => {
        e.preventDefault();
        setShowModal(false);
        setSelectedDokumenPersiapanAkad(null);
    }

    /**
     * 
     * @param {Event} e 
     */
     const closeBtnHandler = (e) => {
        e.preventDefault();
        setShowModal(false);
        setSelectedDokumenPersiapanAkad(null);
    }

    const handlePrint = useReactToPrint({
        content: () => documentToPrintedRef.current,
        onAfterPrint: () => {setData(null)}
      });

    function printDocumentHandler(e, OrderDokumenPersiapanAkadDatas, documentId) {
        e.preventDefault();

        const dokumenIndex = _.findIndex(OrderDokumenPersiapanAkadDatas, (dokumen) => dokumen.dokumen_persiapan_akad.id === documentId);

        if(OrderDokumenPersiapanAkadDatas[dokumenIndex].dokumen_persiapan_akad.status !== "Sudah Disetujui Dan Terjual"){
            toast.error('Dokumen belum diajukan, tidak bisa menampilkan dokumen')
            return;
        }
        setData(OrderDokumenPersiapanAkadDatas[dokumenIndex]);

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
            
            await ApiService.deleteDokumenPersiapanAkadByID(selectedDokumenPersiapanAkad);
            toast.update(id, {
                render: 'Berhasil Menghapus Dokumen Persiapan data',
                type: 'success',
                position: 'top-right',
                autoClose: 500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                isLoading: false,      
            });
            await fetchDokumenPersiapanAkadData(selectedPerumahan);
            setShowModal(false);
            setShowLoading(false);
        } catch (error) {
            console.log(error);
            setShowLoading(false);

            toast.update(id, {
                render: 'Gagal Menghapus Dokumen Persiapan data',
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
    const fetchDokumenPersiapanAkadData = async (perumahan_id) => {
        try {
            const res = await ApiService.getDokumenPersiapanAkads({perumahan_id: perumahan_id})

            const OrderDokumenPersiapanAkadDatas = res.data;
            setDokumenPersiapanAkadTable([]);
            const formattedDokumenPersiapanAkads = [];

            setDokumenPersiapanAkadDatas(res.data);

            if(OrderDokumenPersiapanAkadDatas.length > 0){
                for(const OrderDokumenPersiapanAkadData of OrderDokumenPersiapanAkadDatas){
                    formattedDokumenPersiapanAkads.push((
                        <tr key={OrderDokumenPersiapanAkadData.id}>
                            <td>{OrderDokumenPersiapanAkadData.id}</td>
                            <td>{OrderDokumenPersiapanAkadData.profil_pengaju.full_name}</td>
                            <td>{OrderDokumenPersiapanAkadData.dokumen_persiapan_akad.status}</td>
                            <td>{OrderDokumenPersiapanAkadData.diurus_oleh.full_name}</td>
                            <td>
                                <div className={classes.actionWrap}>
                                    <div className={classes['print-btn']} onClick={(e) => printDocumentHandler(e, OrderDokumenPersiapanAkadDatas, OrderDokumenPersiapanAkadData.dokumen_persiapan_akad.id)}>PRINT</div>
                                    <div className={classes['edit-btn']} onClick={(e) => editBtnHandler(e, OrderDokumenPersiapanAkadData.dokumen_persiapan_akad.id)}>EDIT</div>
                                    <div className={classes['delete-btn']} onClick={(e) => deleteBtnHandler(e, OrderDokumenPersiapanAkadData.dokumen_persiapan_akad.id)}>DELETE</div>
                                </div>
                            </td>
                        </tr>
                    ));
                }
            }

            setDokumenPersiapanAkadTable(formattedDokumenPersiapanAkads);
        } catch (error) {
            console.log('error at Dokumen Persiapan Akad view: fetchDokumenPersiapanAkadData ', error)
            toast.error(bipErrorHandler(error), {autoClose: 500})
            setShowLoading(false);

        }
    }

    const fetchData = async () => {
        try {
            await fetchPerumahan();
            await fetchDokumenPersiapanAkadData(selectedPerumahan);
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
        const fetchDokumenPersiapanAkad = async () => {
            setShowLoading(true)
            await fetchDokumenPersiapanAkadData(selectedPerumahan);
            setShowLoading(false);

        }
        fetchDokumenPersiapanAkad();
    }, [selectedPerumahan])

    const editBtnHandler = (e, id) => {
        navigate(`/dokumenPersiapanAkad/update/${id}`);
    }

    return (
        <>
            <div className={classes.dokumenPersiapanAkad}>
                <h1 className={classes.title}>
                    Dokumen Persiapan Akad
                </h1>
                <div className={classes.selectPerumahan}>
                    <label htmlFor='perumahan'>Nama Perumahan</label>
                    <select id='perumahan' name='perumahan' value={selectedPerumahan} onChange={selectPerumahanChangeHandler}>
                        <option value={'all'}>Semua</option>
                        {selectOptionPerumahanList}
                    </select>
                </div>
                {dokumenPersiapanAkadTable.length > 0 && (
                    <div className={classes.wrapTableDataDokumenPersiapanAkad}>
                        <table className={classes.tableDataDokumenPersiapanAkad}>
                            <thead>
                                <tr>
                                    <th>Order ID</th>
                                    <th>Nama Pemohon</th>
                                    <th>Status Dokumen</th>
                                    <th>Nama Marketer</th>
                                    <th>Aksi</th>
                                </tr>
                            </thead>
                            <tbody>
                                {dokumenPersiapanAkadTable.length > 0 && dokumenPersiapanAkadTable}
                                
                            </tbody>
                        </table>
                    </div>
                )}
                {dokumenPersiapanAkadTable.length === 0 && (<p>Tidak ada data Dokumen Persiapan Akad</p>)}
                {showModal && <Modal
                    title='Hapus Dokumen Persiapan Akad'
                    message='Apakah anda yakin ingin mengahapus Dokumen Persiapan Akad ini?'
                    onCancel={cancelBtnHandler}
                    onClose={closeBtnHandler}
                    onConfirm={confirmBtnHandler}
                    closeOnClickOutside={false}
                />}
                {showLoading && <Loading />}
            </div>
            <div className={classes.printed} >
                {data && <DokumenPersiapanAkadTemplateSurat data={data} ref={documentToPrintedRef} />}
            </div>
        </>
    )
}

export default DokumenPersiapanAkad;