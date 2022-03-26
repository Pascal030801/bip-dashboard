import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import ApiService from '../../Services/apiService';
import bipErrorHandler from '../../Util/bipErrorHandler';
import classes from './CekIdBi.module.css'

const CekIdBi = () => {
    const navigate = useNavigate();
    const [cekIdBiTable, setCekIdBiTable] = useState([]);
    const [selectOptionPerumahanList, setSelectOptionPerumahanList] = useState([]);
    const [selectedPerumahan, setSelectedPerumahan] = useState('all');

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

    /**
     * 
     * @param {string} perumahan_id 
     */
    const fetchCekIdBiData = async (perumahan_id) => {
        try {
            const res = await ApiService.getCekIdBis({perumahan_id: perumahan_id})

            const cekIdBis = res.data;
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
                                    <div className={classes['delete-btn']}>DELETE</div>
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

        }
    }

    const fetchData = async () => {
        try {
            await fetchPerumahan();
            await fetchCekIdBiData(selectedPerumahan);
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
        fetchCekIdBiData(selectedPerumahan);
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

        </div>
    )
}

export default CekIdBi