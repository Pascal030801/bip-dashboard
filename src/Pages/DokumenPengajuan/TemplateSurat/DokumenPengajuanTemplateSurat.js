import { Center, Container } from '@chakra-ui/react';
import { faAlignLeft } from '@fortawesome/free-solid-svg-icons';
import React, { forwardRef, useRef } from 'react';
import classes from './DokumenPengajuanTemplateSurat.module.css';

const DokumenPengajuanTemplateSurat = forwardRef((props, documentTemplateRef) => {

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
                    <hr width="620px;" height="100px" color='black'></hr>
                    <hr width="620px;"></hr>
                    <hr width="620px;" height="200px" color='black'></hr>
                    <br></br>
                </div>
                <table className={classes.isiHalaman1} style={{textAlign:"justify"}}>
                    <tr>
                        <td style={{width: "35%"}}>Nama Pengaju</td>
                            :&nbsp;
                        <td>(Nama Pemohon)</td>
                    </tr>
                    <tr>
                        <td style={{width: "35%"}}>Blok Rumah</td>
                            :&nbsp;
                        <td>(Nomor Rumah)</td>
                    </tr>
                    <tr>
                        <td style={{width: "35%"}}>No. SHM</td>
                            :&nbsp;
                        <td>(No. SHM)</td>
                    </tr>
                    <tr>
                        <td style={{width: "35%"}}>Nama Perumahan</td>
                            :&nbsp;
                        <td>SEKIDA VILLAGE PERMAI</td>
                    </tr>
                    <tr>
                        <td style={{width: "50%"}}>Alamat Perumahan</td>
                            :&nbsp;
                        <td>Jalan Pararel Aruk-Jagoi</td>
                    </tr>
                    <tr>
                        <td style={{width: "35%"}}>Desa</td>
                            :&nbsp;
                        <td>Sekida</td>
                    </tr>
                    <tr>
                        <td style={{width: "35%"}}>Kecamatan</td>
                            :&nbsp;
                        <td>Jagoi Babang</td>
                    </tr>
                    <tr>
                        <td style={{width: "35%"}}>Kabupaten</td>
                            :&nbsp;
                        <td>Bengkayang</td>
                    </tr>
                    <tr>
                        <td style={{width: "35%"}}>Provinsi</td>
                            :&nbsp;
                        <td>Kalimantan Barat</td>
                    </tr>
                    <tr>
                        <td style={{width: "35%"}}>Harga Rumah</td>
                            :&nbsp;
                        <td>Rp. 153.000.000,-</td>
                    </tr>
                    <tr>
                        <td style={{width: "35%"}}>Uang Muka</td>
                        :&nbsp;
                        <td>Rp. &nbsp;&nbsp;&nbsp;&nbsp;7.650.000,-</td>
                    </tr>
                    <tr>
                        <td style={{width: "35%"}}>Plafon Kredit</td>
                            :&nbsp;
                        <td>Rp.	145.350.000,-</td>
                    </tr>
                    <tr>
                        <td style={{width: "35%"}}>Jangka Waktu</td>
                            :&nbsp;
                        <td>20 Tahun</td>
                    </tr>
                    <tr>
                        <td style={{width: "35%"}}>No. Telepon/Hp.</td>
                            :&nbsp;
                        <td>(No. Telepon/Hp.)</td>
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
                    <hr width="620px;" height="100px" color='black'></hr>
                    <hr width="620px;"></hr>
                    <hr width="620px;" height="200px" color='black'></hr>
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
                                <th colSpan={3} style={{width:"20%"}}>KELENGKAPAN DOKUMEN KPR BERSUBSIDI BTN</th>
                            </tr>
                            <tr style={{textAlign:"center", backgroundColor:"#B4C6E7"}}>
                                <th colSpan={3} style={{width:"20%"}}>Dilengkapi Sebelum Pengajuan Kredit</th>
                            </tr>
                            <tr>
                                <td style={{width:"2%", fontSize:"14px", textAlign:"center"}}>
                                    <b>A</b>
                                </td>
                                <td colSpan={2} style={{width:"20%", fontSize:"14px"}}><b>Dokumen Pemohon</b></td>
                            </tr>
                            <tr>
                                <td style={{textAlign:"center"}}>1. </td>
                                <td style={{width:"80%"}}>Formulir Aplikasi Kredit</td>
                                <td style={{width:"5%"}}></td>
                            </tr>
                            <tr>
                                <td style={{textAlign:"center"}}>2. </td>
                                <td style={{width:"80%"}}>Pas Foto Terbaru</td>
                                <td style={{width:"5%"}}></td>
                            </tr>
                            <tr>
                                <td style={{textAlign:"center"}}>3. </td>
                                <td style={{width:"80%"}}>Surat Pemesanan Rumah</td>
                                <td style={{width:"5%"}}></td>
                            </tr>
                            <tr>
                                <td style={{textAlign:"center"}}>4. </td>
                                <td style={{width:"80%"}}>Fotokopi KTP Elektronik atau Resi KPR Elektronik</td>
                                <td style={{width:"5%"}}></td>
                            </tr>
                            <tr>
                                <td style={{textAlign:"center"}}>5. </td>
                                <td style={{width:"80%"}}>Fotokopi Kartu Keluarga</td>
                                <td style={{width:"5%"}}></td>
                            </tr>
                            <tr>
                                <td style={{textAlign:"center"}}>6. </td>
                                <td style={{width:"80%"}}>Fotokopi Akta Nikah atau Akta perkawinan bagi yang berstatus kawin atau Fotokopi akta cerai bagi yang berstatus cerai</td>
                                <td style={{width:"5%"}}></td>
                            </tr>
                            <tr>
                                <td style={{textAlign:"center"}}>7. </td>
                                <td style={{width:"80%"}}>Fotokopi NPWP</td>
                                <td style={{width:"5%"}}></td>
                            </tr>
                            <tr>
                                <td style={{textAlign:"center"}}>8. </td>
                                <td style={{width:"80%"}}>
                                    Fotokopi bukti pelaporan pajak 
                                    <br></br>
                                        • Telah menjadi wajib pajak lebih dari sama dengan 1 tahun dan penghasilan lebih dari sama dengan PTKP, melampirkan &nbsp;&nbsp;&nbsp;SPT PPh
                                         <br></br>
                                        • Telah menjadi wajib pajak lebih dari sama dengan 1 tahun dan penghasilan kurang dari PTKP, melampirkan SPT PPh Nihil
                                         <br></br>
                                        • belum menjadi wajib pajak kurang dari 1 tahun melampirkan surat pernyataan penyerahan SPT PPh tahun selanjutnya
                                </td>
                                <td style={{width:"5%"}}></td>
                            </tr>
                            <tr>
                                <td style={{textAlign:"center"}}>9. </td>
                                <td style={{width:"80%"}}>Fotokopi rekening Koran atau Fotokopi buku tabungan yang disahkan oleh Bank sekurang-kurangnya 3 (tiga) bulan</td>
                                <td style={{width:"5%"}}></td>
                            </tr>
                            <tr>
                                <td style={{textAlign:"center"}}>10. </td>
                                <td style={{width:"80%"}}>Surat keterangan bertempat tinggal dari kepala desa/lurah tempat tinggal saat ini bilamana kelompok sasaran tidak bertempat tinggal sesuai alamat pada KTP Elektronik</td>
                                <td style={{width:"5%"}}></td>
                            </tr>
                            <tr>
                                <td style={{textAlign:"center"}}>11. </td>
                                <td style={{width:"80%"}}>Brosur</td>
                                <td style={{width:"5%"}}></td>
                            </tr>
                            <tr>
                                <td style={{textAlign:"center"}}>12. </td>
                                <td style={{width:"80%"}}>Fotocopy Sertifikat</td>
                                <td style={{width:"5%"}}></td>
                            </tr>
                            <tr>
                                <td style={{textAlign:"center"}}>13. </td>
                                <td style={{width:"80%"}}>Fotocopy IMB</td>
                                <td style={{width:"5%"}}></td>
                            </tr>
                            <tr>
                                <td style={{textAlign:"center"}}>14. </td>
                                <td style={{width:"80%"}}>Sikasep</td>
                                <td style={{width:"5%"}}></td>
                            </tr>
                            <tr>
                                <td style={{width:"2%", fontSize:"14px", textAlign:"center"}}>
                                    <b>B</b>
                                </td>
                                <td style={{width:"20%", fontSize:"14px"}}><b>Dokumen Penghasilan (Pemohon Pegawai)</b></td>
                                <td style={{width:"5%"}}></td>
                            </tr>
                            <tr>
                                <td style={{textAlign:"center"}}>1. </td>
                                <td style={{width:"80%"}}>Slip gaji yang disahkan oleh pejabat yang berwenang pada tempat bekerja</td>
                                <td style={{width:"5%"}}></td>
                            </tr>
                            <tr>
                                <td style={{textAlign:"center"}}>2. </td>
                                <td style={{width:"80%"}}>Surat keterangan kepegawaian dari tempat bekerja</td>
                                <td style={{width:"5%"}}></td>
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
                    <table style={{width: "85%", lineHeight:"1.15"}}>
                        <tr>
                            <td style={{width: "20%"}}>Nama</td>
                                :&nbsp;
                            <td>Yuda Siswanto</td>
                        </tr>
                        <tr>
                            <td style={{width: "20%"}}>Jabatan</td>
                                :&nbsp;
                            <td>Direktur PT. Banyuke Intan Permai</td>
                        </tr>
                        <tr>
                            <td style={{width: "20%"}}>Alamat</td>
                                :&nbsp;
                            <td>Jalan Pacung, RT.006/Rw.003, Sebalo, Kecamatan Bengkayang,
                                Kabupaten Bengkayang, Kalimantan Barat</td>
                        </tr>
                        <tr>
                            <td style={{width: "20%"}}>No. KTP</td>
                                :&nbsp;
                            <td>6107040209950001</td>
                        </tr>
                        <tr>
                            <td style={{width: "20%"}}>No. Telepon/HP</td>
                                :&nbsp;
                            <td>0852 7059 4208</td>
                        </tr>
                    </table>
                    <br></br>
                    <p>Menawarkan 1 (satu) unit rumah kepada :</p>
                    <table style={{width: "85%", lineHeight:"1.15"}}>
                        <tr>
                            <td style={{width: "20%"}}>Nama</td>
                                :&nbsp;
                            <td></td>
                        </tr>
                        <tr>
                            <td style={{width: "20%"}}>Alamat</td>
                                :&nbsp;
                            <td></td>
                        </tr>
                        <tr>
                            <td style={{width: "20%"}}>No. KTP</td>
                                :&nbsp;
                            <td></td>
                        </tr>
                    </table>
                    <br></br>
                    <p>Dengan keterangan sebagai berikut:</p>
                    <table style={{width: "85%", lineHeight:"1.15"}}>
                        <tr>
                            <td style={{width: "20%"}}>Alamat Rumah</td>
                                :&nbsp; 
                            <td> Jalan Pararel Aruk-Jagoi, Desa Sekida, Jagoi Babang, Bengkayang, Provinsi Kalimantan Barat</td>
                        </tr>
                        <tr>
                            <td style={{width: "20%"}}>Type/Luas Tanah</td>
                                :&nbsp; 
                            <td> 36/ </td>
                        </tr>
                        <tr>
                            <td style={{width: "20%"}}> Blok</td>
                                :&nbsp; 
                            <td></td>
                        </tr>
                        <tr>
                            <td style={{width: "20%"}}>Status Rumah</td>
                                :&nbsp; 
                            <td>Sertifikat Hak Milik</td>
                        </tr>
                        <tr>
                            <td style={{width: "20%"}}>No. Sertifikat</td>
                                :&nbsp; 
                            <td></td>
                        </tr>
                        <tr>
                            <td style={{width: "20%"}}>Harga Jual</td>
                                :&nbsp; 
                            <td> Rp. 153.000.000,-</td>
                        </tr>
                        <tr>
                            <td style={{width: "20%"}}>DP</td>
                                :&nbsp; 
                            <td> Rp. &nbsp;&nbsp;&nbsp;&nbsp;7.650.000,-</td>
                        </tr>
                        <tr>
                            <td style={{width: "20%"}}>Kredit Dimohonkan</td>
                                :&nbsp; 
                            <td> Rp. 145.350.000,-</td>
                        </tr>
                    </table>
                    <br></br>
                    <p>Demikian surat Pemesanan ini dibuat guna pengurusan Kredit Pemilikan Rumah (KPR) pada Bank Tabungan Negara.</p>
                    <br></br>
                    <br></br>
                    <table className={classes.tablePersetujuanTTD}>
                        <tr style={{textAlign:"center" , width :"30%"}}>
                            <td></td>
                            <td></td>
                            <td> (tanggal)</td>
                        </tr>
                        <tr style={{textAlign:"center" , width :"30%"}}>
                            <td>Mengetahui,</td>
                            <td> </td>
                            <td>Hormat Saya,</td>
                        </tr>
                        <tr style={{textAlign:"center" , width :"30%"}}>
                            <td> </td>
                            <td> Marketing, </td>
                            <td> </td>
                        </tr>
                        <tr style={{textAlign:"center" , width :"30%"}}>
                            <td> 
                                <p className={classes.materai} style={{width:"30%"}}>
                                    Meterai
                                    <br></br>
                                    Rp 10.000,-
                                </p>
                                <br></br>
                            </td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr style={{textAlign:"center", width :"30%"}}>
                            <td>(Nama Pemohon)</td>
                            <td></td>
                            <td>YUDA SISWANTO</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>ZAKARIA PENDI</td>
                            <td></td>
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
                                <td>Nama Lengkap &nbsp;&nbsp;</td>
                                <td>:&nbsp;</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>No. KTP &nbsp;&nbsp;</td>
                                <td>:&nbsp;</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Tempat, Tanggal Lahir &nbsp;&nbsp;</td>
                                <td>:&nbsp;</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Pekerjaan &nbsp;&nbsp;</td>
                                <td>:&nbsp;</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Alamat &nbsp;&nbsp;</td>
                                <td>:&nbsp;</td>
                                <td></td>
                            </tr>
                        </table>
                        <br></br>
                        <p>Menyatakan hal-hal sebagai berikut:</p>
                        <table style={{width: "90%"}}>
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
                        <p style={{width: "90%"}}>
                            Demikian surat pernyataan ini saya buat dengan sebenarnya tanpa paksaan dari pihak 
                            manapun dan apabila di kemudian hari pernyataan saya ini tidak benar, 
                            saya bersedia mengembalikan seluruh subsidi yang saya terima.
                        </p>
                        <br></br>
                        <br></br>
                    </div>
                    <table className={classes.tabelPersetujuanPemohonTTD} style={{textAlign:"center"}}>
                        <tr>
                            <td>Jagoi Babang, 1 Januari 2021</td>
                        </tr>
                        <br></br>
                        <br></br>
                        <tr style={{paddingLeft:"50px"}}>
                            <td style={{width:"70%"}}> 
                                <p className={classes.materai} style={{width:"30%"}}>
                                    Meterai
                                    <br></br>
                                    Rp 10.000,-
                                </p>
                                <br></br>
                            </td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>
                                <br></br>
                                (Nama Pemohon)
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
                            <th style={{width:"20%"}}>KETERANGAN</th>
                            <th style={{width:"50%"}}>NAMA</th>
                            <th style={{width:"25%"}}>NO. TELEPON/
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
                        <table style={{width: "85%", paddingLeft:"10px"}}>
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
                            <td>Jagoi Babang, 1 Januari 2021</td>
                        </tr>
                        <br></br>
                        <br></br>
                        <tr style={{paddingLeft:"50px"}}>
                            <td style={{width:"70%"}}> 
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