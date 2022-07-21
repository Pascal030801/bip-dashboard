import React, {  useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useReactToPrint } from 'react-to-print';
import { toast } from 'react-toastify';
import Loading from '../../Components/Loading/Loading';
import Modal from '../../Components/Modal/Modal';
import ApiService from '../../Services/apiService';
import bipErrorHandler from '../../Util/bipErrorHandler';
import classes from './DokumenKelengkapanAkad.module.css'
import DokumenKelengkapanAkadTemplateSurat from './TemplateSurat/DokumenKelengkapanAkadTemplateSurat';
import _ from 'lodash';

const DokumenKelengkapanAkad = () => {
    const navigate = useNavigate();
    const [dokumenKelengkapanAkadTable, setDokumenKelengkapanAkadTable] = useState([]);
    const [dokumenKelengkapanAkadDatas, setDokumenKelengkapanAkadDatas] = useState([]);
    const [selectOptionPerumahanList, setSelectOptionPerumahanList] = useState([]);
    const [selectedPerumahan, setSelectedPerumahan] = useState('all');
    const [showModal, setShowModal] = useState(false);
    const [showLoading, setShowLoading] = useState(true);
    const [selectedDokumenKelengkapanAkad, setSelectedDokumenKelengkapanAkad] = useState(false);
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
            console.log('error at Dokumen Kelengkapan Akad view: fetchPerumahan')
            toast.error(bipErrorHandler(error))
        }
    }

    const deleteBtnHandler = async (e, dokumenKelengkapanAkadId) => {
        setSelectedDokumenKelengkapanAkad(dokumenKelengkapanAkadId);
        setShowModal(true)
    }

    /**
     * 
     * @param {Event} e 
     */
    const cancelBtnHandler = (e) => {
        e.preventDefault();
        setShowModal(false);
        setSelectedDokumenKelengkapanAkad(null);
    }

    /**
     * 
     * @param {Event} e 
     */
     const closeBtnHandler = (e) => {
        e.preventDefault();
        setShowModal(false);
        setSelectedDokumenKelengkapanAkad(null);
    }

    const handlePrint = useReactToPrint({
        content: () => documentToPrintedRef.current,
        onAfterPrint: () => {setData(null)}
      });

    function printDocumentHandler(e, OrderDokumenKelengkapanAkadDatas, documentId) {
        e.preventDefault();

        const dokumenIndex = _.findIndex(OrderDokumenKelengkapanAkadDatas, (dokumen) => dokumen.id === documentId);

        if(OrderDokumenKelengkapanAkadDatas[dokumenIndex].dokumen_kelengkapan_akad.status !== "Sudah Diajukan"){
            toast.error('Dokumen belum diajukan, tidak bisa menampilkan dokumen')
            return;
        }
        setData(OrderDokumenKelengkapanAkadDatas[dokumenIndex]);

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
            
            await ApiService.deleteDokumenKelengkapanAkadByID(selectedDokumenKelengkapanAkad);
            toast.update(id, {
                render: 'Berhasil Menghapus Dokumen Kelengkapan data',
                type: 'success',
                position: 'top-right',
                autoClose: 500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                isLoading: false,      
            });
            await fetchDokumenKelengkapanAkadData(selectedPerumahan);
            setShowModal(false);
            setShowLoading(false);
        } catch (error) {
            console.log(error);
            setShowLoading(false);

            toast.update(id, {
                render: 'Gagal Menghapus Dokumen Kelengkapan data',
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
    const fetchDokumenKelengkapanAkadData = async (perumahan_id) => {
        try {
            const res = await ApiService.getDokumenKelengkapanAkads({perumahan_id: perumahan_id})

            const OrderDokumenKelengkapanAkadDatas = res.data;
            setDokumenKelengkapanAkadTable([]);
            const formattedDokumenKelengkapanAkads = [];

            setDokumenKelengkapanAkadDatas(res.data);

            if(OrderDokumenKelengkapanAkadDatas.length > 0){
                for(const OrderDokumenKelengkapanAkadData of OrderDokumenKelengkapanAkadDatas){
                    formattedDokumenKelengkapanAkads.push((
                        <tr key={OrderDokumenKelengkapanAkadData.id}>
                            <td>{OrderDokumenKelengkapanAkadData.id}</td>
                            <td>{OrderDokumenKelengkapanAkadData.profil_pengaju.full_name}</td>
                            <td>{OrderDokumenKelengkapanAkadData.dokumen_kelengkapan_akad.status}</td>
                            <td>{OrderDokumenKelengkapanAkadData.diurus_oleh.full_name}</td>
                            <td>
                                <div className={classes.actionWrap}>
                                    <div className={classes['print-btn']} onClick={(e) => printDocumentHandler(e, OrderDokumenKelengkapanAkadDatas, OrderDokumenKelengkapanAkadData.dokumen_kelengkapan_akad.id)}>PRINT</div>
                                    <div className={classes['edit-btn']} onClick={(e) => editBtnHandler(e, OrderDokumenKelengkapanAkadData.dokumen_kelengkapan_akad.id)}>EDIT</div>
                                    <div className={classes['delete-btn']} onClick={(e) => deleteBtnHandler(e, OrderDokumenKelengkapanAkadData.dokumen_kelengkapan_akad.id)}>DELETE</div>
                                </div>
                            </td>
                        </tr>
                    ));
                }
            }

            setDokumenKelengkapanAkadTable(formattedDokumenKelengkapanAkads);
        } catch (error) {
            console.log('error at Dokumen Kelengkapan Akad view: fetchDokumenKelengkapanAkadData ', error)
            toast.error(bipErrorHandler(error), {autoClose: 500})
            setShowLoading(false);

        }
    }

    const fetchData = async () => {
        try {
            await fetchPerumahan();
            await fetchDokumenKelengkapanAkadData(selectedPerumahan);
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
        const fetchDokumenKelengkapanAkad = async () => {
            setShowLoading(true)
            await fetchDokumenKelengkapanAkadData(selectedPerumahan);
            setShowLoading(false);

        }
        fetchDokumenKelengkapanAkad();
    }, [selectedPerumahan])

    const editBtnHandler = (e, id) => {
        navigate(`/dokumenKelengkapanAkad/update/${id}`);
    }

    return (
        <>
            <div className={classes.dokumenKelengkapanAkad}>
                <h1 className={classes.title}>
                    Dokumen Kelengkapan Akad
                </h1>
                <div className={classes.selectPerumahan}>
                    <label htmlFor='perumahan'>Nama Perumahan</label>
                    <select id='perumahan' name='perumahan' value={selectedPerumahan} onChange={selectPerumahanChangeHandler}>
                        <option value={'all'}>Semua</option>
                        {selectOptionPerumahanList}
                    </select>
                </div>
                {dokumenKelengkapanAkadTable.length > 0 && (
                    <div className={classes.wrapTableDataDokumenKelengkapanAkad}>
                        <table className={classes.tableDataDokumenKelengkapanAkad}>
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
                                {dokumenKelengkapanAkadTable.length > 0 && dokumenKelengkapanAkadTable}
                                
                            </tbody>
                        </table>
                    </div>
                )}
                {dokumenKelengkapanAkadTable.length === 0 && (<p>Tidak ada data Dokumen Kelengkapan Akad</p>)}
                {showModal && <Modal
                    title='Hapus Dokumen Kelengkapan Akad'
                    message='Apakah anda yakin ingin mengahapus Dokumen Kelengkapan Akad ini?'
                    onCancel={cancelBtnHandler}
                    onClose={closeBtnHandler}
                    onConfirm={confirmBtnHandler}
                    closeOnClickOutside={false}
                />}
                {showLoading && <Loading />}
            </div>
            <div className={classes.printed} >
                {data && <DokumenKelengkapanAkadTemplateSurat data={data} ref={documentToPrintedRef} />}
            </div>
        </>
    )
}

export default DokumenKelengkapanAkad;