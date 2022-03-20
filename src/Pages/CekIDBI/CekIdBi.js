import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import classes from './CekIdBi.module.css'

const BASE_PATH_API = process.env.REACT_APP_API_URL;

const CekIdBi = () => {
    const navigate = useNavigate();
    const [cekIdBiData, setCekIdBiData] = useState([]);
    const [cekIdBiTable, setCekIdBiTable] = useState([]);
    const [perumahanList, setPerumahanList] = useState([]);
    const [selectOptionPerumahanList, setSelectOptionPerumahanList] = useState([]);

    const addDataHandler = (e) => {
        e.preventDefault();
        navigate("/cekIdBI/tambah");
    };

    useEffect(() => {
        const token = localStorage.getItem('token');

        axios.get(`${BASE_PATH_API}/cek_id_bis`, {
            headers: {
                "AUTH-BIP-TOKEN": token
            }
        }).then((res) => {
            console.log(res.data)
            const cekIdBis = res.data;
            const formattedCekIdBis = []
            if(cekIdBis.length > 0){
                for(const cekIdBi of cekIdBis){
                    console.log(cekIdBi)
                    formattedCekIdBis.push((
                        <tr key={cekIdBi.id}>
                            <td>{cekIdBi.profil_pengaju.full_name}</td>
                            <td>{cekIdBi.updated_by}</td>
                            <td>{cekIdBi.status}</td>
                            <td>
                                <div className={classes.actionWrap}>
                                    <div className={classes['edit-btn']}>EDIT</div>
                                    <div className={classes['delete-btn']}>DELETE</div>
                                </div>
                            </td>
                        </tr>
                    ));
                }
                console.log(formattedCekIdBis)
                setCekIdBiTable(formattedCekIdBis);
            }
        }).catch((err) => {
            console.log(err)
        });

        axios.get(`${BASE_PATH_API}/house_areas`, {
            headers: {
                "AUTH-BIP-TOKEN": token
            }
        }).then((res) => {
            console.log(res.data);
            const houseAreas = res.data;
            setPerumahanList(houseAreas);

            const formattedHouseAreas = []
            if(houseAreas.length > 0){
                for(const houseArea of houseAreas){
                    formattedHouseAreas.push(
                        <option key={houseArea.id} value={houseArea.id}>{houseArea.nama}</option>
                    );
                }
                setSelectOptionPerumahanList(formattedHouseAreas);
            }
        }).catch((err) => {
            console.log(err)
        });

    }, []);

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
                <select id='perumahan' name='perumahan'>
                    {selectOptionPerumahanList}
                </select>
            </div>
            {console.log(cekIdBiTable)}
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