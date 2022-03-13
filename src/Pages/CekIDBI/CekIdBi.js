import React from 'react';
import { useNavigate } from 'react-router-dom';
import classes from './CekIdBi.module.css'

const CekIdBi = () => {
    const navigate = useNavigate();

    const addDataHandler = (e) => {
        e.preventDefault();
        navigate("/cekIdBI/tambah");
    };

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
                    <option value='1'>Perumahan Bengkayang</option>
                    <option value='2'>Perumahan Jagoi</option>
                </select>
            </div>
            
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
                        <tr>
                            <td>Ersapta Aristo</td>
                            <td>Yuda Siswawnto</td>
                            <td>Aman</td>
                            <td>
                                <div className={classes.actionWrap}>
                                    <div style={{ backgroundColor: 'green' }}>EDIT</div>
                                    <div style={{ backgroundColor: 'red' }}>DELETE</div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>Gabriel Talu Batuah</td>
                            <td>Pendi</td>
                            <td>Tidak Aman</td>
                            <td>
                                <div className={classes.actionWrap}>
                                    <div style={{ backgroundColor: 'green' }}>EDIT</div>
                                    <div style={{ backgroundColor: 'red' }}>DELETE</div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>Ersapta Aristo</td>
                            <td>Yuda Siswawnto</td>
                            <td>Aman</td>
                            <td>
                                <div className={classes.actionWrap}>
                                    <div style={{ backgroundColor: 'green' }}>EDIT</div>
                                    <div style={{ backgroundColor: 'red' }}>DELETE</div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default CekIdBi