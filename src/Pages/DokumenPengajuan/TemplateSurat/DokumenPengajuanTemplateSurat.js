import React, { forwardRef, useRef } from 'react';
import classes from './DokumenPengajuanTemplateSurat.module.css';

const DokumenPengajuanTemplateSurat = forwardRef((props, documentTemplateRef) => {
    let pengajuTanggalLahir = '';
    if(props.data){
        const pengajuTanggalLahirData = new Date(props.data.tanggalLahirPengaju);
        const pengajuTanggalLahirDataMonth = pengajuTanggalLahirData.getMonth() < 11 ? `0${(pengajuTanggalLahirData.getMonth() + 1)}` : pengajuTanggalLahirData.getMonth() + 1;
        const pengajuTanggalLahirDataDay = pengajuTanggalLahirData.getDate() < 10 ? `0${pengajuTanggalLahirData.getDate()}` : pengajuTanggalLahirData.getDate();
        pengajuTanggalLahir = `${pengajuTanggalLahirDataDay}-${pengajuTanggalLahirDataMonth}-${pengajuTanggalLahirData.getFullYear()}`;
    }
    return (
        <div className={classes.DokumenPengajuanTemplateSurat} ref={documentTemplateRef}>
            <div className={classes.wrapHalaman1}>
                <div className={classes.wrapKop}>
                    <div className={classes.kop}>
                        <img src='/LogoHD.jpg' className={classes.logoPerusahaan} />
                        <div className={classes.kop_title}>
                            <h2>
                                PT. BANYUKE INTAN PERMAI
                            </h2>
                            <p>
                                <font size ="5">
                                    <i>
                                        Developer & Kontraktor
                                    </i>
                                </font>
                            </p>
                            <p>
                                Alamat: Jln. Affandi A. Rani / Jalur II No. 7 Rt. 005/Rw. 002
                            </p>
                            <p>
                                Desa Hilir Tengah Kec. Ngabang, Kab. Landak - 78357
                            </p>
                            <p>
                                Telp/Hp: 0812 5672 421
                            </p>
                        </div>
                    </div>
                    <hr style={{width: "100%", height:"2px", marginTop: "2px"}} color='black'></hr>
                    <hr style={{width: "100%", height:"2px", marginTop: "2px"}} color='black'></hr>
                </div>

                <table className={classes.isiHalaman1} style={{textAlign:"justify"}}>
                    <thead></thead>
                    <tbody>
                    <tr>
                        <td style={{width: "4.95cm"}}>Nama Konsumen</td>
                        <td style={{width: "0.5cm"}}>:</td>
                        <td>{ props.data.namaLengkapPengaju }</td>
                    </tr>
                    <tr>
                        <td style={{width: "4.95cm"}}>Blok Rumah</td>
                        <td style={{width: "0.5cm"}}>:</td>
                        <td>{props.data.blokRumah}</td>
                    </tr>
                    <tr>
                        <td style={{width: "4.95cm"}}>No. SHM</td>
                        <td style={{width: "0.5cm"}}>:</td>
                        <td>{props.data.nomorShmRumah}</td>
                    </tr>
                    <tr>
                        <td style={{width: "4.95cm"}}>Nama Perumahan</td>
                        <td style={{width: "0.5cm"}}>:</td>
                        <td>{props.data.namaPerumahan}</td>
                    </tr>
                    <tr>
                        <td style={{width: "4.95cm"}}>Alamat Perumahan</td>
                        <td style={{width: "0.5cm"}}>:</td>
                        <td>{props.data.alamatLengkapPerumahan }</td>
                    </tr>
                    <tr>
                        <td style={{width: "4.95cm"}}>Desa</td>
                        <td style={{width: "0.5cm"}}>:</td>
                        <td>{props.data.desaAlamatPerumahan}</td>
                    </tr>
                    <tr>
                        <td style={{width: "4.95cm"}}>Kecamatan</td>
                        <td style={{width: "0.5cm"}}>:</td>
                        <td>{props.data.kecamatanAlamatPerumahan}</td>
                    </tr>
                    <tr>
                        <td style={{width: "4.95cm"}}>Kabupaten</td>
                        <td style={{width: "0.5cm"}}>:</td>
                        <td>{props.data.kabupatenAlamatPerumahan}</td>
                    </tr>
                    <tr>
                        <td style={{width: "4.95cm"}}>Provinsi</td>
                        <td style={{width: "0.5cm"}}>:</td> 
                        <td>{props.data.provinsiAlamatPerumahan}</td>
                    </tr>
                    <tr>
                        <td style={{width: "4.95cm"}}>Harga Rumah</td>
                        <td style={{width: "0.5cm"}}>:</td>
                        <td>{new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(parseInt(props.data.hargaRumah, 10))},-</td>
                    </tr>
                    <tr>
                        <td style={{width: "4.95cm"}}>Uang Muka</td>
                        <td style={{width: "0.5cm"}}>:</td>
                        <td>{new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(parseInt(props.data.uangMukaRumah, 10))  },-</td>
                    </tr>
                    <tr>
                        <td style={{width: "4.95cm"}}>Plafon Kredit</td>
                        <td style={{width: "0.5cm"}}>:</td>
                        <td>{new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(parseInt(props.data.plafonKreditRumah, 10))  },-</td>

                    </tr>
                    <tr>
                        <td style={{width: "4.95cm"}}>Jangka Waktu</td>
                        <td style={{width: "0.5cm"}}>:</td>
                        <td>{props.data.jangkaWaktuKreditRumah}</td>
                    </tr>
                    <tr>
                        <td style={{width: "4.95cm"}}>No. Telepon/Hp.</td>
                        <td style={{width: "0.5cm"}}>:</td>
                        <td>{props.data.nomorHpPengaju}</td>
                    </tr>
                    </tbody>
                </table>
            </div>


            <div className={classes.wrapHalaman2}>
               <div className={classes.wrapKop}>
                    <div className={classes.kop}>
                        <img src='/LogoHD.jpg' className={classes.logoPerusahaan} />
                        <div className={classes.kop_title}>
                            <h2>
                                PT. BANYUKE INTAN PERMAI
                            </h2>
                            <p>
                                <font size ="5">
                                    <i>
                                        Developer & Kontraktor
                                    </i>
                                </font>
                            </p>
                            <p>
                                Alamat: Jln. Affandi A. Rani / Jalur II No. 7 Rt. 005/Rw. 002
                            </p>
                            <p>
                                Desa Hilir Tengah Kec. Ngabang, Kab. Landak - 78357
                            </p>
                            <p>
                                Telp/Hp: 0812 5672 421
                            </p>
                    
                        </div> 
                    </div> 
                    <hr style={{width: "100%", height:"2px", marginTop: "2px"}} color='black'></hr>
                    <hr style={{width: "100%", height:"2px", marginTop: "2px"}} color='black'></hr>
                    <br></br>
                </div>
                <div className={classes.isiHalaman} style={{textAlign:"justify"}}>
                    <div className={classes.JudulHalaman}>
                        <h1>
                            CHECKLIST
                        </h1>
                    </div>
                    <br></br>
                    <div className={classes.wrapTableKelengkapanDokumenKPR}>
                        
                        <table className={classes.tabelKelengkapanDokumenKPR}>
                            <thead></thead>
                            <tbody>
                            <tr style={{textAlign:"center"}}>
                                <th colSpan={3} style={{width:"3.3cm"}}>KELENGKAPAN DOKUMEN KPR BERSUBSIDI BTN</th>
                            </tr>
                            <tr style={{textAlign:"center", backgroundColor:"#B4C6E7"}}>
                                <th colSpan={3} style={{width:"3.3cm"}}>Dilengkapi Sebelum Pengajuan Kredit</th>
                            </tr>
                            <tr>
                                <td style={{width:"0.33cm", fontSize:"14px", textAlign:"center"}}>
                                    <b>A</b>
                                </td>
                                <td colSpan={2} style={{width:"3.3cm", fontSize:"14px"}}><b>Dokumen Pemohon</b></td>
                            </tr>
                            <tr>
                                <td style={{textAlign:"center"}}>1. </td>
                                <td style={{width:"13.2cm"}}>Formulir Aplikasi Kredit</td>
                                <td style={{width:"0.825cm"}}></td>
                            </tr>
                            <tr>
                                <td style={{textAlign:"center"}}>2. </td>
                                <td style={{width:"13.2cm"}}>Pas Foto Terbaru</td>
                                <td style={{width:"0.825cm"}}></td>
                            </tr>
                            <tr>
                                <td style={{textAlign:"center"}}>3. </td>
                                <td style={{width:"13.2cm"}}>Surat Pemesanan Rumah</td>
                                <td style={{width:"0.825cm"}}></td>
                            </tr>
                            <tr>
                                <td style={{textAlign:"center"}}>4. </td>
                                <td style={{width:"13.2cm"}}>Fotokopi KTP Elektronik atau Resi KPR Elektronik</td>
                                <td style={{width:"0.825cm"}}></td>
                            </tr>
                            <tr>
                                <td style={{textAlign:"center"}}>5. </td>
                                <td style={{width:"13.2cm"}}>Fotokopi Kartu Keluarga</td>
                                <td style={{width:"0.825cm"}}></td>
                            </tr>
                            <tr>
                                <td style={{textAlign:"center"}}>6. </td>
                                <td style={{width:"13.2cm"}}>Fotokopi Akta Nikah atau Akta perkawinan bagi yang berstatus kawin atau Fotokopi akta cerai bagi yang berstatus cerai</td>
                                <td style={{width:"0.825cm"}}></td>
                            </tr>
                            <tr>
                                <td style={{textAlign:"center"}}>7. </td>
                                <td style={{width:"13.2cm"}}>Fotokopi NPWP</td>
                                <td style={{width:"0.825cm"}}></td>
                            </tr>
                            <tr>
                                <td style={{textAlign:"center"}}>8. </td>
                                <td style={{width:"13.2cm"}}>
                                    Fotokopi bukti pelaporan pajak 
                                    <p>
                                        • Telah menjadi wajib pajak lebih dari sama dengan 1 tahun dan penghasilan lebih dari sama dengan PTKP, melampirkan SPT PPh
                                    </p>
                                    <p>   
                                        • Telah menjadi wajib pajak lebih dari sama dengan 1 tahun dan penghasilan kurang dari PTKP, melampirkan SPT PPh Nihil
                                    </p>
                                    <p>
                                        • belum menjadi wajib pajak kurang dari 1 tahun melampirkan surat pernyataan penyerahan SPT PPh tahun selanjutnya
                                    </p>
                                </td>
                                <td style={{width:"0.825cm"}}></td>
                            </tr>
                            <tr>
                                <td style={{textAlign:"center"}}>9. </td>
                                <td style={{width:"13.2cm"}}>Fotokopi rekening Koran atau Fotokopi buku tabungan yang disahkan oleh Bank sekurang-kurangnya 3 (tiga) bulan</td>
                                <td style={{width:"0.825cm"}}></td>
                            </tr>
                            <tr>
                                <td style={{textAlign:"center"}}>10. </td>
                                <td style={{width:"13.2cm"}}>Surat keterangan bertempat tinggal dari kepala desa/lurah tempat tinggal saat ini bilamana kelompok sasaran tidak bertempat tinggal sesuai alamat pada KTP Elektronik</td>
                                <td style={{width:"0.825cm"}}></td>
                            </tr>
                            <tr>
                                <td style={{textAlign:"center"}}>11. </td>
                                <td style={{width:"13.2cm"}}>Brosur</td>
                                <td style={{width:"0.825cm"}}></td>
                            </tr>
                            <tr>
                                <td style={{textAlign:"center"}}>12. </td>
                                <td style={{width:"13.2cm"}}>Fotocopy Sertifikat</td>
                                <td style={{width:"0.825cm"}}></td>
                            </tr>
                            <tr>
                                <td style={{textAlign:"center"}}>13. </td>
                                <td style={{width:"13.2cm"}}>Fotocopy IMB</td>
                                <td style={{width:"0.825cm"}}></td>
                            </tr>
                            <tr>
                                <td style={{textAlign:"center"}}>14. </td>
                                <td style={{width:"13.2cm"}}>Sikasep</td>
                                <td style={{width:"0.825cm"}}></td>
                            </tr>
                            <tr>
                                <td style={{width:"0.33cm", fontSize:"14px", textAlign:"center"}}>
                                    <b>B</b>
                                </td>
                                <td style={{width:"3.3cm", fontSize:"14px"}}><b>Dokumen Penghasilan (Pemohon Pegawai)</b></td>
                                <td style={{width:"0.825cm"}}></td>
                            </tr>
                            <tr>
                                <td style={{textAlign:"center"}}>1. </td>
                                <td style={{width:"13.2cm"}}>Slip gaji yang disahkan oleh pejabat yang berwenang pada tempat bekerja</td>
                                <td style={{width:"0.825cm"}}></td>
                            </tr>
                            <tr>
                                <td style={{textAlign:"center"}}>2. </td>
                                <td style={{width:"13.2cm"}}>Surat keterangan kepegawaian dari tempat bekerja</td>
                                <td style={{width:"0.825cm"}}></td>
                            </tr> 
                            </tbody>  
                        </table>
                        
                    </div>
                </div> 
            </div>

          
            <div className={classes.wrapHalaman3}>
                <div className={classes.wrapKop}>
                    <div className={classes.kop}>
                        <img src='/LogoHD.jpg' className={classes.logoPerusahaan} />
                        <div className={classes.kop_title}>
                            <h2>
                                PT. BANYUKE INTAN PERMAI
                            </h2>
                            <p>
                                <font size ="5">
                                    <i>
                                        Developer & Kontraktor
                                    </i>
                                </font>
                            </p>
                            <p>
                                Alamat: Jln. Affandi A. Rani / Jalur II No. 7 Rt. 005/Rw. 002
                            </p>
                            <p>
                                Desa Hilir Tengah Kec. Ngabang, Kab. Landak - 78357
                            </p>
                            <p>
                                Telp/Hp: 0812 5672 421
                            </p>
                        </div> 
                    </div> 
                    <hr width="620px;" height="100px" color='black'></hr>
                    <hr width="620px;"></hr>
                    <hr width="620px;" height="200px" color='black'></hr>
                </div>

                    <div className={classes.JudulHalaman} style={{paddingTop:"0.5cm"}}>
                        <h2>SURAT PEMESANAN RUMAH</h2>
                    </div>
                <div className={classes.isiHalaman} style={{textAlign:"justify"}}>

                    <table style={{paddingTop:"0.5cm"}}>
                        <thead></thead>
                        <tbody>
                            <tr>
                                <td> Yth. Pimpinan Bank Tabungan Negara </td>
                            </tr>
                            <tr>
                                <td>Jln. Yos Sudarso, Singkawang</td>
                            </tr>
                        </tbody>
                    </table>


                    <table style={{paddingTop:"0.5cm"}}>
                        <thead></thead>
                        <tbody>
                        <tr>
                            <td colSpan={3}>Saya yang bertanda tangan di bawah ini : </td>
                        </tr>
                        <tr>
                            <td style={{width: "3.1cm"}}>Nama</td>
                            <td style={{width: "0.5cm"}}>:</td> 
                            <td>Yuda Siswanto</td>
                        </tr>
                        <tr>
                            <td style={{width: "3.1cm"}}>Jabatan</td>
                            <td style={{width: "0.5cm"}}>:</td> 
                            <td>Direktur PT. Banyuke Intan Permai</td>
                        </tr>
                        <tr>
                            <td style={{width: "3.1cm",  paddingBottom:"0.60cm"}}>Alamat</td>
                            <td style={{width: "0.5cm",  paddingBottom:"0.60cm"}}>:</td> 
                            <td>Jalan Pacung, RT.006/Rw.003, Sebalo, Kecamatan Bengkayang,
                                Kabupaten Bengkayang, Kalimantan Barat
                            </td>
                        </tr>
                        <tr>
                            <td style={{width: "3.1cm"}}>No. KTP</td>
                            <td style={{width: "0.5cm"}}>:</td> 
                            <td>6107040209950001</td>
                        </tr>
                        <tr>
                            <td style={{width: "3.1cm"}}>No. Telepon/HP</td>
                            <td style={{width: "0.5cm"}}>:</td> 
                            <td>0852 7059 4208</td>
                        </tr>
                        </tbody>
                    </table>

                   
                    <table style={{paddingTop:"0.5cm"}}>
                        <thead></thead>
                        <tbody>
                        <tr>
                            <td colSpan={3}> Menawarkan 1 (satu) unit rumah kepada :</td>
                        </tr>
                        <tr>
                            <td style={{width: "3.1cm"}}>Nama</td>
                            <td style={{width: "0.5cm"}}>:</td> 
                            <td>{props.data.namaLengkapPengaju}</td>
                        </tr>
                        <tr>
                            <td style={{width: "3.1cm"}}>Alamat</td>
                            <td style={{width: "0.5cm"}}>:</td> 
                            <td>{props.data.alamatLengkapPengaju}</td>
                        </tr>
                        <tr>
                            <td style={{width: "3.1cm"}}>No. KTP</td>
                            <td style={{width: "0.5cm"}}>:</td> 
                            <td>{props.data.nikPengaju}</td>
                        </tr>
                        </tbody>
                    </table>

                    <table style={{paddingTop:"0.5cm"}}>
                        <thead></thead>
                        <tbody>
                            <tr>
                                <td colSpan={3}> Dengan keterangan sebagai berikut: </td>
                            </tr>
                        <tr>
                            <td style={{width: "3.1cm"}}>Alamat Rumah</td>
                            <td style={{width: "0.5cm"}}>:</td> 
                            <td> {props.data.alamatLengkapPerumahan}</td>
                        </tr>
                        <tr>
                            <td style={{width: "3.1cm"}}>Type/Luas Tanah</td>
                            <td style={{width: "0.5cm"}}>:</td> 
                            <td> {props.data.tipeRumah}/{props.data.luasTanahRumah} </td>
                        </tr>
                        <tr>
                            <td style={{width: "3.1cm"}}> Blok</td>
                            <td style={{width: "0.5cm"}}>:</td> 
                            <td>{props.data.blokRumah}</td>
                        </tr>
                        <tr>
                            <td style={{width: "3.1cm"}}>Status Rumah</td>
                            <td style={{width: "0.5cm"}}>:</td> 
                            <td>Sertifikat Hak Milik</td>
                        </tr>
                        <tr>
                            <td style={{width: "3.1cm"}}>No. Sertifikat</td>
                            <td style={{width: "0.5cm"}}>:</td> 
                            <td>{props.data.nomorShmRumah}</td>
                        </tr>
                        <tr>
                            <td style={{width: "3.1cm"}}>Harga Jual</td>
                            <td style={{width: "0.5cm"}}>:</td> 
                            <td>{new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(parseInt(props.data.hargaRumah, 10))  },-</td>
                        </tr>
                        <tr>
                            <td style={{width: "3.1cm"}}>DP</td>
                            <td style={{width: "0.5cm"}}>:</td> 
                            <td>{new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(parseInt(props.data.uangMukaRumah, 10))  },-</td>

                        </tr>
                        <tr>
                            <td style={{width: "3.1cm"}}>Kredit Dimohonkan</td>
                            <td style={{width: "0.5cm"}}>:</td> 
                            <td>{new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format((parseInt(props.data.hargaRumah, 10) - parseInt(props.data.uangMukaRumah, 10)))  },-</td>

                        </tr>
                        <tr style={{lineHeight:"1cm"}}>
                            <td colSpan={3}>Demikian surat Pemesanan ini dibuat guna pengurusan Kredit Pemilikan Rumah (KPR) pada Bank Tabungan Negara.</td>
                        </tr>
                        </tbody>
                    </table>

                    <table className={classes.tablePersetujuanTTD} style={{paddingTop:"1cm"}}>
                        <thead></thead>
                        <tbody>
                        <tr style={{textAlign:"center" , width :"15cm"}}>
                            <td style={{width : "5cm"}}></td>
                            <td style={{width : "5cm"}}></td>
                            <td style={{width : "5cm"}}>{props.data.tempatDanTanggalDokumenPengajuan}</td>
                        </tr>
                        <tr style={{textAlign:"center" , width :"15cm"}}>
                            <td style={{width : "5cm"}}>Mengetahui,</td>
                            <td style={{width : "5cm"}}> </td>
                            <td style={{width : "5cm"}}>Hormat Saya,</td>
                        </tr>
                        <tr style={{textAlign:"center" , width :"15cm"}}>
                            <td style={{width : "5cm"}}> </td>
                            <td style={{width : "5cm"}}> Marketing, </td>
                            <td style={{width : "5cm"}}> </td>
                        </tr>
                        <tr style={{textAlign:"center" , width :"15cm"}}>
                            <td style={{width : "5cm"}}> 
                                <p className={classes.materai} style={{width:"2cm"}}>
                                    Meterai
                                    <br></br>
                                    Rp 10.000,-
                                </p>
                                <br></br>
                            </td>
                            <td style={{width : "5cm"}}></td>
                            <td style={{width : "5cm"}}></td>
                        </tr>
                        <tr style={{textAlign:"center", width :"15cm"}}>
                            <td style={{width : "5cm"}}>{props.data.namaLengkapPengaju}</td>
                            <td style={{width : "5cm"}}></td>
                            <td style={{width : "5cm"}}>YUDA SISWANTO</td>
                        </tr>
                        <tr>
                            <td style={{width : "5cm"}}></td>
                            <td style={{width : "5cm"}}>{props.data.namaMarketer}</td>
                            <td style={{width : "5cm"}}></td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            
            <div className={classes.wrapHalaman4}>
                <div className={classes.wrapKop}>
                    <div className={classes.kop}>
                        <img src='/LogoHD.jpg' className={classes.logoPerusahaan} />
                        <div className={classes.kop_title}>
                            <h2>
                                PT. BANYUKE INTAN PERMAI
                            </h2>
                            <p>
                                <font size="5">
                                    <i>
                                        Developer & Kontraktor
                                    </i>
                                </font>
                            </p>
                            <p>
                                Alamat: Jln. Affandi A. Rani / Jalur II No. 7 Rt. 005/Rw. 002
                            </p>
                            <p>
                                Desa Hilir Tengah Kec. Ngabang, Kab. Landak - 78357
                            </p>
                            <p>
                                Telp/Hp: 0812 5672 421
                            </p>
                        </div>
                    </div>
                    <hr style={{ width: "100%", height: "2px", marginTop: "2px" }} color='black'></hr>
                    <hr style={{ width: "100%", height: "2px", marginTop: "2px" }} color='black'></hr>
                    <br></br>
                </div>
                <h3 style={{ textDecorationLine: "underline", textalign: "center" }} >
                    KUITANSI
                </h3>
                <br></br>
                <table style={{width: "15cm", lineHeight:"1.15", fontSize:"12px"}}>
                    <thead></thead>
                    <tbody>
                    <tr>
                        <td style={{width: "4.5cm"}}>Sudah diterima dari : </td>
                    </tr>
                    <tr>
                        <td style={{width: "4.5cm"}}>Nama</td>
                        <td style={{width: "0.4cm"}}>:</td>     
                        <td>Nama Pemohon</td>
                    </tr>
                    <tr>
                        <td style={{width: "4.5cm"}}>Alamat</td>
                        <td style={{width: "0.4cm"}}>:</td>   
                        <td>Alamat Pemohon</td>
                    </tr>
                    <tr>
                        <td style={{width: "4.5cm"}}>No. KTP</td>
                        <td style={{width: "0.4cm"}}>:</td>   
                        <td>Nomor KTP Pemohon</td>
                    </tr>
                    <tr>
                        <td style={{width: "4.5cm"}}>No. Telepon/Hp.</td>
                        <td style={{width: "0.4cm"}}>:</td>      
                        <td>No. Telepon/Hp.</td>
                    </tr>
                    <tr>
                        <td style={{width: "4.5cm"}}>Tujuan Pembayaran</td>
                        <td style={{width: "0.4cm"}}>:</td>       
                        <td>Uang Muka Perumahan SEKIDA VILLAGE PERMAI Blok nomor rumah</td>
                    </tr>
                    <tr>
                        <td style={{width: "4.5cm", paddingBottom:"0.60cm"}}><b><i>Jumlah Rp.</i></b></td>
                        <td style={{width: "0.4cm", paddingBottom:"0.60cm"}}>:</td>       
                        <td style={{"borderWidth":"3px", 'borderColor':"black", 'borderStyle':'solid'}}><b>Rp.4.225.000
                            <p><i>Empat Juta Dua Ratus Dua Puluh Lima Ribu Rupiah</i></p></b>
                        </td>
                    </tr>
                    </tbody>
                </table>
                <table className={classes.tabelPersetujuanPemohonTTD} style={{textalign:"center", paddingTop:"1cm"}}>
                    <thead></thead>
                    <tbody>
                        <tr>
                            <td style={{width:"5cm"}}>Jagoi Babang, 1 Januari 2022</td>
                        </tr>
                        <tr>
                            <td style={{paddingTop:"1.3cm"}}>
                                Nama Pemohon                     
                            </td>
                        </tr>
                    </tbody>
                </table>

                <div className={classes.wrapKop} style={{paddingBottom:"3cm", paddingTop:"0.5cm"}}>
                <hr style={{ width: "100%", height: "1px", marginTop: "2px" }} color='grey'></hr>
                    <div className={classes.kop}>
                        <img src='/LogoHD.jpg' className={classes.logoPerusahaan} />
                        <div className={classes.kop_title}>
                            <h2>
                                PT. BANYUKE INTAN PERMAI
                            </h2>
                            <p>
                                <font size="5">
                                    <i>
                                        Developer & Kontraktor
                                    </i>
                                </font>
                            </p>
                            <p>
                                Alamat: Jln. Affandi A. Rani / Jalur II No. 7 Rt. 005/Rw. 002
                            </p>
                            <p>
                                Desa Hilir Tengah Kec. Ngabang, Kab. Landak - 78357
                            </p>
                            <p>
                                Telp/Hp: 0812 5672 421
                            </p>
                        </div>
                    </div>
                    <hr style={{ width: "100%", height: "2px", marginTop: "2px" }} color='black'></hr>
                    <hr style={{ width: "100%", height: "2px", marginTop: "2px" }} color='black'></hr>
                    <br></br>


                <h3 style={{ textDecorationLine: "underline", textalign: "center"}} >
                    KUITANSI
                </h3>
                <br></br>
                <table style={{width: "15cm", lineHeight:"1.15", fontSize:"12px"}}>
                    <thead></thead>
                    <tbody>
                    <tr>
                        <td style={{width: "4.5cm"}}>Sudah diterima dari : </td>
                    </tr>
                    <tr>
                        <td style={{width: "4.5cm"}}>Nama</td>
                        <td style={{width: "0.4cm"}}>:</td>     
                        <td>Nama Pemohon</td>
                    </tr>
                    <tr>
                        <td style={{width: "4.5cm"}}>Alamat</td>
                        <td style={{width: "0.4cm"}}>:</td>   
                        <td>Alamat Pemohon</td>
                    </tr>
                    <tr>
                        <td style={{width: "4.5cm"}}>No. KTP</td>
                        <td style={{width: "0.4cm"}}>:</td>   
                        <td>Nomor KTP Pemohon</td>
                    </tr>
                    <tr>
                        <td style={{width: "4.5cm"}}>No. Telepon/Hp.</td>
                        <td style={{width: "0.4cm"}}>:</td>      
                        <td>No. Telepon/Hp.</td>
                    </tr>
                    <tr>
                        <td style={{width: "4.5cm"}}>Tujuan Pembayaran</td>
                        <td style={{width: "0.4cm"}}>:</td>       
                        <td>Uang Muka Perumahan SEKIDA VILLAGE PERMAI Blok nomor rumah</td>
                    </tr>
                    <tr>
                        <td style={{width: "4.5cm", paddingBottom:"0.60cm"}}><b><i>Jumlah Rp.</i></b></td>
                        <td style={{width: "0.4cm", paddingBottom:"0.60cm"}}>:</td>       
                        <td style={{"borderWidth":"3px", 'borderColor':"black", 'borderStyle':'solid'}}><b>Rp.4.225.000
                            <p><i>Empat Juta Dua Ratus Dua Puluh Lima Ribu Rupiah</i></p></b>
                        </td>
                    </tr>
                    </tbody>
                </table>
                <table className={classes.tabelPersetujuanPemohonTTD} style={{textalign:"center", paddingTop:"1cm"}}>
                    <thead></thead>
                    <tbody>
                        <tr style={{paddingLeft:"30px"}}>
                            <td style={{width:"5cm", paddingBottom:"0.3cm"}}>Jagoi Babang, 1 Januari 2022</td>
                        </tr>
                        <tr>
                            <td style={{width:"5.775cm", paddingLeft:"50px"}}> 
                                <p className={classes.materai} style={{width:"1.7cm"}}>
                                    Meterai
                                    <br></br>
                                    Rp 10.000,-
                                </p>
                                <br></br>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Nama Pemohon                     
                            </td>
                        </tr>
                    </tbody>
                </table>
                </div>
            </div>


            <div className={classes.wrapHalaman5}>
                <div className={classes.JudulHalaman} style={{paddingTop:"0.5cm"}}>
                    <h2>
                    SURAT PERNYATAAN PENYERAHAN SPT PPH
                    </h2>
                </div>
                <div className={classes.isiHalaman} style={{textAlign:"justify"}}>
                    <div style={{lineHeight:"20pt"}}>

                        <table className={classes.tabelPernyataanPenyerahan} style={{paddingTop:"0.5cm"}}>
                            <thead></thead>
                            <tbody>
                            <tr>
                                <td colSpan={3}>
                                    Yang bertanda tangan di bawah ini :
                                </td>
                            </tr>
                            <tr>
                                <td style={{width: "3.5cm"}}>Nama Lengkap</td>
                                <td>:</td>
                                <td>{props.data.namaLengkapPengaju}</td>
                            </tr>
                            <tr>
                                <td style={{width: "3.5cm"}}>No. KTP</td>
                                <td>:</td>
                                <td>{props.data.nikPengaju}</td>
                            </tr>
                            <tr>
                                <td style={{width: "3.5cm"}}>Tempat, Tanggal Lahir</td>
                                <td>:</td>
                                <td>{props.data.tempatLahirPengaju}, {pengajuTanggalLahir}</td>
                            </tr>
                            <tr>
                                <td style={{width: "3.5cm"}}>Pekerjaan</td>
                                <td>:</td>
                                <td>{props.data.jabatanPengaju}</td>
                            </tr>
                            <tr>
                                <td style={{width: "3.5cm"}}>Alamat</td>
                                <td>:</td>
                                <td>{props.data.alamatLengkapPengaju}</td>
                            </tr>
                            </tbody>
                        </table>
                      
                        
                        <table style={{width: "16.5cm", paddingTop:"0.5cm"}}>
                            <thead></thead>
                            <tbody>
                            <tr>
                                <td colSpan={2}>Menyatakan hal-hal sebagai berikut:</td>
                            </tr>
                            <tr>
                                <td style={{paddingBottom:"2.2cm"}}>
                                1.
                                </td>
                                <td style={{paddingLeft:"5px"}}>
                                    Bahwa dikarenakan saya memiliki Nomor Pokok Wajib Pajak (NPWP) kurang dari 1 (satu) tahun pada saat 
                                    pengajuan KPR Bersubsidi BTN, maka saya belum dapat menyampaikan Surat Pemberitahuan Tahunan (SPT) 
                                    Pajak Penghasilan (PPh) Orang Pribadi sebagai salah satu dokumen persyaratan pengajuan KPR Bersubsidi 
                                    BTN sebagaimana telah diatur pada ketentuan Pemerintah.
                                 </td>
                            </tr>
                             <tr>
                                <td style={{paddingBottom:"0.8cm"}}>
                                2.
                                </td>
                                <td style={{paddingLeft:"5px"}}>
                                    Bahwa saya bersedia menyampaikan dokumen SPT PPh tahun berikutnya setelah akad kredit KPR Bersubsidi 
                                    BTN kepada Bank BTN.
                                </td>
                            </tr>
                            <tr>
                                <td style={{paddingBottom:"0.8cm"}}>
                                3.
                                </td>
                                    <td style={{paddingLeft:"5px"}}>
                                    Bahwa saya bersedia menerima konsekuensi yang diberikan oleh Pemerintah dalam hal saya terlambat dan/atau 
                                    tidak menyerahkan dokumen SPT PPh tahun berikutnya setelah akad kredit KPR Bersubsidi kepada Bank BTN.</td>
                        
                            </tr>
                            </tbody>
                        </table>
                       
                        <p style={{width: "16.5cm", paddingTop:"0.5cm"}}>
                            Demikian surat pernyataan ini saya buat dengan sebenarnya tanpa paksaan dari pihak 
                            manapun dan apabila di kemudian hari pernyataan saya ini tidak benar, 
                            saya bersedia mengembalikan seluruh subsidi yang saya terima.
                        </p>
                   
                    </div>
                    <table className={classes.tabelPersetujuanPemohonTTD} style={{textAlign:"center", paddingTop:"0.5cm"}}>
                        <thead></thead>
                        <tbody>
                        <tr>
                            <td style={{width:"5cm"}}>{props.data.tempatDanTanggalDokumenPengajuan}</td>
                        </tr>
                   
                        <tr style={{paddingLeft:"50px"}}>
                            <td style={{width:"5.775cm", paddingTop:"1cm"}}> 
                                <p className={classes.materai} style={{width:"1.7cm"}}>
                                    Meterai
                                    <br></br>
                                    Rp 10.000,-
                                </p>
                                <br></br>
                            </td>
                            <td></td>
                        </tr>
                        <tr>
                            <td style={{width:"5cm"}}>
                                <br></br>
                                {props.data.namaLengkapPengaju}
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            

            <div className={classes.wrapHalaman6}>
                <img src='/LogoBank&BUMN.png' className={classes.logoBankdanBUMN} />
                <div className={classes.JudulHalaman} style={{paddingTop:"0.5cm"}}>
                    <h2>
                    BEST TIME TO CALL
                    </h2>
                    <br></br>
                    <p style={{fontSize:"12px", textAlign:"left", lineHeight:"1.5"}}>             
                        <b>
                            Nomor Verifikasi Bank BTN 
                        </b>
                        <i>
                            &nbsp;(021-80631327)
                        </i>
                    </p>
                </div>
                <div className={classes.isiHalaman} style={{textAlign:"justify"}}>
                    <table className={classes.tabelBestTimetoCall}>
                        <thead></thead>
                        <tbody>
                        <tr style={{textAlign:"center"}}>
                            <th style={{width:"3.8cm"}}>KETERANGAN</th>
                            <th style={{width:"8cm"}}>NAMA</th>
                            <th style={{width:"4.125cm"}}>NO. TELEPON/
                            <br></br>NO. HP</th>
                            <th>JAM YANG BISA DIHUBUNGI</th>
                        </tr>
                        <tr>
                            <td>PEMOHON</td>
                            <td></td>
                            <td></td>
                            <td style={{textAlign:"center"}}>s/d</td>
                        </tr>
                        <tr>
                            <td>PASANGAN</td>
                            <td></td>
                            <td></td>
                            <td style={{textAlign:"center"}}>s/d</td>
                        </tr>
                        <tr>
                            <td>KELUARGA TERDEKAT</td>
                            <td></td>
                            <td></td>
                            <td style={{textAlign:"center"}}>s/d</td>
                        </tr>
                        <tr>
                            <td>ATASAN/PIMPINAN</td>
                            <td></td>
                            <td></td>
                            <td style={{textAlign:"center"}}>s/d</td>
                        </tr>
                        </tbody>
                    </table>


                    <div style={{lineHeight:"15pt", paddingTop:"0.5cm"}}>
                        <b>Catatan</b>

                        <table style={{width: "16cm", paddingLeft:"10px"}}>
                            <thead></thead>
                            <tbody>
                            <tr>
                                <td>
                                •	
                                </td>
                                <td style={{paddingLeft:"5px"}}>
                                    Nama dan No. Telepon yang terlampir harus sama dengan di formulir pengajuan.
                                </td>
                            </tr>
                            <tr>
                                <td style={{paddingBottom:"0.6cm"}}>
                                •	
                                </td>
                                <td style={{paddingLeft:"5px"}}>
                                    Untuk mempercepat proses verifikasi pengajuan kredit Bapak/Ibu, mohon Bapak/ibu dapat memastikan Nomor Telepon yang terlampir <b>AKTIF</b> dan <b>DAPAT DIHUBUNGI</b>
                                </td>
                            </tr>
                            <tr>
                                <td style={{paddingBottom:"0.6cm"}}>
                                •	
                                </td>
                                <td style={{paddingLeft:"5px"}}>
                                    Bahwa Nomor di atas dapat menerima permohonan konfirmasi/verifikasi dari pihak Bank yang akan menggunakan No. yang tertera di atas <b>(021-80631327).</b>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>

                    <table className={classes.tabelBestTimetoCallTTD} style={{paddingTop:"0.5cm"}}>
                        <thead></thead>
                        <tbody>
                            <tr>
                                <td>{props.data.tempatDanTanggalDokumenPengajuan}</td>
                            </tr>
                            <tr>
                                <td style={{height:"5cm", paddingLeft:"1.5cm"}}>
                                    <hr style={{width:"5cm", color:"black"}}></hr>
                                </td>
                            </tr>
                        </tbody>
                    </table>


                </div>   
            </div>
     </div>
    )
});
export default DokumenPengajuanTemplateSurat;