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
                    <br></br>
                </div>
                <table className={classes.isiHalaman1} style={{textAlign:"justify"}}>
                    <tr>
                        <td style={{width: "4.95cm"}}>Nama Konsumen</td>
                            :&nbsp;
                        <td>{ props.data.namaLengkapPengaju }</td>
                    </tr>
                    <tr>
                        <td style={{width: "4.95cm"}}>Blok Rumah</td>
                            :&nbsp;
                        <td>{props.data.blokRumah}</td>
                    </tr>
                    <tr>
                        <td style={{width: "4.95cm"}}>No. SHM</td>
                            :&nbsp;
                        <td>{props.data.nomorShmRumah}</td>
                    </tr>
                    <tr>
                        <td style={{width: "4.95cm"}}>Nama Perumahan</td>
                            :&nbsp;
                        <td>{props.data.namaPerumahan}</td>
                    </tr>
                    <tr>
                        <td style={{width: "4.95cm"}}>Alamat Perumahan</td>
                            :&nbsp;
                        <td>{props.data.alamatLengkapPerumahan }</td>
                    </tr>
                    <tr>
                        <td style={{width: "4.95cm"}}>Desa</td>
                            :&nbsp;
                        <td>{props.data.desaAlamatPerumahan}</td>
                    </tr>
                    <tr>
                        <td style={{width: "4.95cm"}}>Kecamatan</td>
                            :&nbsp;
                        <td>{props.data.kecamatanAlamatPerumahan}</td>
                    </tr>
                    <tr>
                        <td style={{width: "4.95cm"}}>Kabupaten</td>
                            :&nbsp;
                        <td>{props.data.kabupatenAlamatPerumahan}</td>
                    </tr>
                    <tr>
                        <td style={{width: "4.95cm"}}>Provinsi</td>
                            :&nbsp;
                        <td>{props.data.provinsiAlamatPerumahan}</td>
                    </tr>
                    <tr>
                        <td style={{width: "4.95cm"}}>Harga Rumah</td>
                            :&nbsp;
                        <td>{new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(parseInt(props.data.hargaRumah, 10))},-</td>
                    </tr>
                    <tr>
                        <td style={{width: "4.95cm"}}>Uang Muka</td>
                        :&nbsp;
                        <td>{new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(parseInt(props.data.uangMukaRumah, 10))  },-</td>
                    </tr>
                    <tr>
                        <td style={{width: "4.95cm"}}>Plafon Kredit</td>
                            :&nbsp;
                        <td>{new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(parseInt(props.data.plafonKreditRumah, 10))  },-</td>

                    </tr>
                    <tr>
                        <td style={{width: "4.95cm"}}>Jangka Waktu</td>
                            :&nbsp;
                        <td>{props.data.jangkaWaktuKreditRumah}</td>
                    </tr>
                    <tr>
                        <td style={{width: "4.95cm"}}>No. Telepon/Hp.</td>
                            :&nbsp;
                        <td>{props.data.nomorHpPengaju}</td>
                    </tr>
                </table>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>


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
                                    <br></br>
                                        • Telah menjadi wajib pajak lebih dari sama dengan 1 tahun dan penghasilan lebih dari sama dengan PTKP, &nbsp;&nbsp;&nbsp;melampirkan SPT PPh
                                         <br></br>
                                        • Telah menjadi wajib pajak lebih dari sama dengan 1 tahun dan penghasilan kurang dari PTKP, melampirkan &nbsp;&nbsp;&nbsp;SPT PPh Nihil
                                         <br></br>
                                        • belum menjadi wajib pajak kurang dari 1 tahun melampirkan surat pernyataan penyerahan SPT PPh tahun &nbsp;&nbsp;&nbsp;selanjutnya
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
                        </table>
                    </div>
                </div> 
            </div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
          
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
                    <br></br>
                </div>
                <div className={classes.JudulHalaman}>
                    <h2>SURAT PEMESANAN RUMAH</h2>
                </div>
                <div className={classes.isiHalaman} style={{textAlign:"justify"}}>
                    <br></br>
                    <br></br>
                    <p>Yth. Pimpinan Bank Tabungan Negara</p>
                    <p>Jln. Yos Sudarso, Singkawang</p>
                    <br></br>
                    <p>Saya yang bertanda tangan di bawah ini :</p>
                    <table style={{width: "15cm", lineHeight:"1.15"}}>
                        <tr>
                            <td style={{width: "3.1cm"}}>Nama</td>
                                :&nbsp;&nbsp;&nbsp;&nbsp;
                            <td>Yuda Siswanto</td>
                        </tr>
                        <tr>
                            <td style={{width: "3.1cm"}}>Jabatan</td>
                                :&nbsp;&nbsp;&nbsp;&nbsp;
                            <td>Direktur PT. Banyuke Intan Permai</td>
                        </tr>
                        <tr>
                            <td style={{width: "3.1cm"}}>Alamat</td>
                                :&nbsp;&nbsp;&nbsp;&nbsp;
                            <td>Jalan Pacung, RT.006/Rw.003, Sebalo, Kecamatan Bengkayang,
                                Kabupaten Bengkayang, Kalimantan Barat</td>
                        </tr>
                        <tr>
                            <td style={{width: "3.1cm"}}>No. KTP</td>
                                :&nbsp;&nbsp;&nbsp;&nbsp;
                            <td>6107040209950001</td>
                        </tr>
                        <tr>
                            <td style={{width: "3.1cm"}}>No. Telepon/HP</td>
                                :&nbsp;&nbsp;&nbsp;&nbsp;
                            <td>0852 7059 4208</td>
                        </tr>
                    </table>
                    <br></br>
                    <p>Menawarkan 1 (satu) unit rumah kepada :</p>
                    <table style={{width: "15cm", lineHeight:"1.15"}}>
                        <tr>
                            <td style={{width: "3.1cm"}}>Nama</td>
                                :
                            <td>{props.data.namaLengkapPengaju}</td>
                        </tr>
                        <tr>
                            <td style={{width: "3.1cm"}}>Alamat</td>
                                :
                            <td>{props.data.alamatLengkapPengaju}</td>
                        </tr>
                        <tr>
                            <td style={{width: "3.1cm"}}>No. KTP</td>
                                :
                            <td>{props.data.nikPengaju}</td>
                        </tr>
                    </table>
                    <br></br>
                    <p>Dengan keterangan sebagai berikut:</p>
                    <table style={{width: "15cm", lineHeight:"1.15"}}>
                        <tr>
                            <td style={{width: "3.1cm"}}>Alamat Rumah</td>
                                :
                            <td> {props.data.alamatLengkapPerumahan}</td>
                        </tr>
                        <tr>
                            <td style={{width: "3.1cm"}}>Type/Luas Tanah</td>
                                : 
                            <td> {props.data.tipeRumah}/{props.data.luasTanahRumah} </td>
                        </tr>
                        <tr>
                            <td style={{width: "3.1cm"}}> Blok</td>
                                :
                            <td>{props.data.blokRumah}</td>
                        </tr>
                        <tr>
                            <td style={{width: "3.1cm"}}>Status Rumah</td>
                                : 
                            <td>Sertifikat Hak Milik</td>
                        </tr>
                        <tr>
                            <td style={{width: "3.1cm"}}>No. Sertifikat</td>
                                : 
                            <td>{props.data.nomorShmRumah}</td>
                        </tr>
                        <tr>
                            <td style={{width: "3.1cm"}}>Harga Jual</td>
                                :
                            <td>{new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(parseInt(props.data.hargaRumah, 10))  },-</td>
                        </tr>
                        <tr>
                            <td style={{width: "3.1cm"}}>DP</td>
                                :
                            <td>{new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(parseInt(props.data.uangMukaRumah, 10))  },-</td>

                        </tr>
                        <tr>
                            <td style={{width: "3.1cm"}}>Kredit Dimohonkan</td>
                                :
                            <td>{new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format((parseInt(props.data.hargaRumah, 10) - parseInt(props.data.uangMukaRumah, 10)))  },-</td>

                        </tr>
                    </table>
                    <br></br>
                    <p>Demikian surat Pemesanan ini dibuat guna pengurusan Kredit Pemilikan Rumah (KPR) pada Bank Tabungan Negara.</p>
                    <br></br>
                    <br></br>
                    <br></br>
                    <table className={classes.tablePersetujuanTTD}>
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
                                <p className={classes.materai} style={{width:"2.5"}}>
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
                    </table>
                </div>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>

            <div className={classes.wrapHalaman4}>
                <div className={classes.JudulHalaman}>
                    <h2>
                    SURAT PERNYATAAN PENYERAHAN SPT PPH
                    </h2>
                </div>
                <div className={classes.isiHalaman} style={{textAlign:"justify"}}>
                    <div style={{lineHeight:"20pt"}}>
                        <br></br>
                        <br></br>
                        <p>
                            Yang bertanda tangan di bawah ini :
                        </p>
                        <table className={classes.tabelPernyataanPenyerahan}>
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
                        </table>
                        <br></br>
                        <p>Menyatakan hal-hal sebagai berikut:</p>
                        <table style={{width: "16.5cm"}}>
                            <tr>
                                1.
                                    <td style={{paddingLeft:"5px"}}>Bahwa dikarenakan saya memiliki Nomor Pokok Wajib Pajak (NPWP) kurang dari 1 (satu) tahun pada saat 
                                                                    pengajuan KPR Bersubsidi BTN, maka saya belum dapat menyampaikan Surat Pemberitahuan Tahunan (SPT) 
                                                                    Pajak Penghasilan (PPh) Orang Pribadi sebagai salah satu dokumen persyaratan pengajuan KPR Bersubsidi 
                                                                    BTN sebagaimana telah diatur pada ketentuan Pemerintah.
                                    </td>
                            </tr>
                             <tr>
                                2.
                                    <td style={{paddingLeft:"5px"}}>Bahwa saya bersedia menyampaikan dokumen SPT PPh tahun berikutnya setelah akad kredit KPR Bersubsidi 
                                                                    BTN kepada Bank BTN.
                                    </td>
                            </tr>
                            <tr>
                                3.
                                    <td style={{paddingLeft:"5px"}}>Bahwa saya bersedia menerima konsekuensi yang diberikan oleh Pemerintah dalam hal saya terlambat dan/atau 
                                                                    tidak menyerahkan dokumen SPT PPh tahun berikutnya setelah akad kredit KPR Bersubsidi kepada Bank BTN.</td>
                        
                            </tr>
                        </table>
                        <br></br>
                        <p style={{width: "16.5cm"}}>
                            Demikian surat pernyataan ini saya buat dengan sebenarnya tanpa paksaan dari pihak 
                            manapun dan apabila di kemudian hari pernyataan saya ini tidak benar, 
                            saya bersedia mengembalikan seluruh subsidi yang saya terima.
                        </p>
                        <br></br>
                        <br></br>
                    </div>
                    <table className={classes.tabelPersetujuanPemohonTTD} style={{textAlign:"center"}}>
                        <tr>
                            <td style={{width:"5cm"}}>{props.data.tempatDanTanggalDokumenPengajuan}</td>
                        </tr>
                        <br></br>
                        <br></br>
                        <tr style={{paddingLeft:"50px"}}>
                            <td style={{width:"5.775cm"}}> 
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
                    </table>
                </div>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            

            <div className={classes.wrapHalaman5}>
                <img src='/LogoBank&BUMN.png' className={classes.logoBankdanBUMN} />
                <div className={classes.JudulHalaman}>
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
                    </table>
                    <br></br>
                    <div style={{lineHeight:"15pt"}}>
                        <b>Catatan</b>
                        <table style={{width: "16cm", paddingLeft:"10px"}}>
                            <tr>
                                
                                •	
                                
                                <td style={{paddingLeft:"5px"}}>
                                    Nama dan No. Telepon yang terlampir harus sama dengan di formulir pengajuan.
                                </td>
                            </tr>
                            <tr>
                                
                                •	
                              
                                <td style={{paddingLeft:"5px"}}>
                                    Untuk mempercepat proses verifikasi pengajuan kredit Bapak/Ibu, mohon Bapak/ibu dapat memastikan Nomor Telepon yang terlampir <b>AKTIF</b> dan <b>DAPAT DIHUBUNGI</b>
                                </td>
                            </tr>
                            <tr>
                          
                                •	
                             
                                <td style={{paddingLeft:"5px"}}>
                                    Bahwa Nomor di atas dapat menerima permohonan konfirmasi/verifikasi dari pihak Bank yang akan menggunakan No. yang tertera di atas <b>(021-80631327).</b>
                                </td>
                            </tr>
                        </table>
                    </div>
                    <br></br>
                    <br></br>
                    <table className={classes.tabelBestTimetoCallTTD}>
                        <tr>
                            <td>{props.data.tempatDanTanggalDokumenPengajuan}</td>
                        </tr>
                        <br></br>
                        <br></br>
                        <tr style={{paddingLeft:"50px"}}>
                            <td style={{width:"5.775cm"}}> 
                            </td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>
                                <br></br>
                                <br></br>
                                <br></br>
                                <hr></hr>
                            </td>
                        </tr>
                    </table>
                </div>   
            </div>
     </div>
    )
});
export default DokumenPengajuanTemplateSurat;