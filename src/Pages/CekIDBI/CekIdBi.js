import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Loading from '../../Components/Loading/Loading';
import Modal from '../../Components/Modal/Modal';
import ApiService from '../../Services/apiService';
import bipErrorHandler from '../../Util/bipErrorHandler';
import classes from './CekIdBi.module.css'

const CekIdBi = () => {
    const navigate = useNavigate();
    const [cekIdBiTable, setCekIdBiTable] = useState([]);
    const [selectOptionPerumahanList, setSelectOptionPerumahanList] = useState([]);
    const [selectedPerumahan, setSelectedPerumahan] = useState('all');
    const [showModal, setShowModal] = useState(false);
    const [showLoading, setShowLoading] = useState(true);
    const [selectedCekIdBi, setSelectedCekIdBi] = useState(false);

    const addDataHandler = (e) => {
        e.preventDefault();
        navigate("/cekIdBI/tambah");
    };

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
            console.log('error at Cek ID BI view: fetchPerumahan')
            toast.error(bipErrorHandler(error))
        }
    }

    const deleteBtnHandler = async (e, cekIdBiId) => {
        setSelectedCekIdBi(cekIdBiId);
        setShowModal(true)
    }

    /**
     * 
     * @param {Event} e 
     */
    const cancelBtnHandler = (e) => {
        e.preventDefault();
        setShowModal(false);
        setSelectedCekIdBi(null);

    }

    /**
     * 
     * @param {Event} e 
     */
     const closeBtnHandler = (e) => {
        e.preventDefault();
        setShowModal(false);
        setSelectedCekIdBi(null);
    }

    /**
     * 
     * @param {Event} e 
     */
     const confirmBtnHandler = async (e) => {
        e.preventDefault();
        const id = toast.loading("Sedang menghapus data di server");
        try {
            setShowLoading(true);
            
            await ApiService.deleteCekIdBiByID(selectedCekIdBi);
            toast.update(id, {
                render: 'Berhasil Menghapus Cek ID BI data',
                type: 'success',
                position: 'top-right',
                autoClose: 500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                isLoading: false,      
            });
            await fetchCekIdBiData(selectedPerumahan);
            setShowModal(false);
            setShowLoading(false);
        } catch (error) {
            console.log(error);
            setShowLoading(false);

            toast.update(id, {
                render: 'Gagal Menghapus Cek ID BI data',
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
    const fetchCekIdBiData = async (perumahan_id) => {
        try {
            const res = await ApiService.getCekIdBis({perumahan_id: perumahan_id})

            const cekIdBis = res.data;
            setCekIdBiTable([]);
            const formattedCekIdBis = [];

            if(cekIdBis.length > 0){
                for(const cekIdBi of cekIdBis){
                    formattedCekIdBis.push((
                        <tr key={cekIdBi.id}>
                            <td>{cekIdBi.profil_pengaju.full_name}</td>
                            <td>{cekIdBi.updated_by}</td>
                            <td>{cekIdBi.status}</td>
                            <td>
                                <div className={classes.actionWrap}>
                                    <div className={classes['edit-btn']} onClick={(e) => editBtnHandler(e, cekIdBi.id)}>EDIT</div>
                                    <div className={classes['delete-btn']} onClick={(e) => deleteBtnHandler(e, cekIdBi.id)}>DELETE</div>
                                </div>
                            </td>
                        </tr>
                    ));
                }
                setCekIdBiTable(formattedCekIdBis);
            }
        } catch (error) {
            console.log('error at Cek ID BI view: fetchPerumahan')
            toast.error(bipErrorHandler(error))
            setShowLoading(false);

        }
    }

    const fetchData = async () => {
        try {
            await fetchPerumahan();
            await fetchCekIdBiData(selectedPerumahan);
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
        const fetchCekIdBi = async () => {
            setShowLoading(true)
            await fetchCekIdBiData(selectedPerumahan);
            setShowLoading(false);

        }
        fetchCekIdBi();
    }, [selectedPerumahan])

    const editBtnHandler = (e, id) => {
        navigate(`/cekIdBI/update/${id}`);
    }

    return (
        <div className={classes.cekIdBi}>
            <h1 className={classes.title}>
                Cek ID BI
            </h1>
            <div className={classes.addData}>
                <button onClick={addDataHandler}>Tambah Data</button>
            </div>
            <div className={classes.selectPerumahan}>
                <label htmlFor='perumahan'>Nama Perumahan</label>
                <select id='perumahan' name='perumahan' value={selectedPerumahan} onChange={selectPerumahanChangeHandler}>
                    <option value={'all'}>Semua</option>
                    {selectOptionPerumahanList}
                </select>
            </div>
            {cekIdBiTable.length > 0 && (
                <div className={classes.wrapTableDataCekIdBi}>
                    <table className={classes.tableDataCekIdBi}>
                        <thead>
                            <tr>
                                <th>Nama Pemohon</th>
                                <th>Di Cek Oleh</th>
                                <th>Status</th>
                                <th>Aksi</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cekIdBiTable.length > 0 && cekIdBiTable}
                            
                        </tbody>
                    </table>
                </div>
            )}
            {cekIdBiTable.length === 0 && (<p>Tidak ada data Cek ID BI</p>)}
            {showModal && <Modal
                title='Hapus Cek ID BI'
                message='Apakah anda yakin ingin mengahapus Cek ID BI ini?'
                onCancel={cancelBtnHandler}
                onClose={closeBtnHandler}
                onConfirm={confirmBtnHandler}
                closeOnClickOutside={false}
            />}
            {showLoading && <Loading />}
        </div>
    )
}

export default CekIdBi