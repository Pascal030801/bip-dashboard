import React, { forwardRef, useRef } from 'react';
import classes from './DokumenLanjutanTemplateSurat.module.css';

const DokumenLanjutanTemplateSurat = forwardRef((props, documentTemplateRef) => {

    return (
        <div className={classes.DokumenLanjutanTemplateSurat} ref={documentTemplateRef}>
            <div className={classes.wrapHalaman1}>
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
                        <td style={{width: "4.5cm", paddingBottom:"0.60cm"}}>Tujuan Pembayaran</td>
                        <td style={{width: "0.4cm", paddingBottom:"0.60cm"}}>:</td>       
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

                <div className={classes.wrapKop} style={{paddingBottom:"3cm"}}>
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
                        <td style={{width: "4.5cm", paddingBottom:"0.60cm"}}>Tujuan Pembayaran</td>
                        <td style={{width: "0.4cm", paddingBottom:"0.60cm"}}>:</td>       
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

            <div className={classes.wrapHalaman2} style={{paddingTop:"3cm"}}>
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
            </div>

            <h3 style={{ textDecorationLine: "underline", textalign: "center" }}>
                CHECKLIST
            </h3>
                    
            <div style={{width: "100%", paddingTop:"10px"}}>
                <table className={classes.tabelKelengkapanDokumenKPR}>
                    <thead></thead> 
                    <tbody>
                        <tr style={{textalign:"center"}}>
                            <th colSpan={3} style={{width:"3.3cm", fontSize:"14px"}}>KELENGKAPAN DOKUMEN KPR BERSUBSIDI BTN</th>
                        </tr>
                        <tr style={{textalign:"center", backgroundColor:"#B4C6E7"}}>
                            <th colSpan={3} style={{width:"3.3cm", fontSize:"14px"}}>Dilengkapi selambat-lambatnya sebelum H-2 Akad Kredit</th>
                        </tr>
                        <tr>
                            <td style={{width:"0.33cm", fontSize:"14px", textalign:"center"}}>
                                <b>C</b>
                            </td>
                            <td colSpan={2} style={{width:"3.3cm", fontSize:"14px"}}>
                                <b>Dokumen Permohonan SBUM (Untuk KPR Bersubsidi BTN yang mendapat fasilitas SBUM)</b>
                            </td>
                        </tr>
                        <tr>
                            <td style={{textalign:"center"}}>1. </td>
                            <td style={{width:"13.2cm"}}>Surat permohonan Subsidi Bantuan Uang Muka Perumahan (SBUM)</td>
                            <td style={{width:"0.825cm"}}></td>
                        </tr>
                        <tr>
                            <td style={{textalign:"center"}}>2. </td>
                            <td style={{width:"13.2cm"}}>Surat pengakuan kekurangan bayar uang muka KPR Bersubsidi BTN</td>
                            <td style={{width:"0.825cm"}}></td>
                        </tr>
                        <tr>
                            <td style={{textalign:"center"}}>3. </td>
                            <td style={{width:"13.2cm"}}>Surat perintah pemindahbukuan dana SBUM (Standing Instruction)</td>
                            <td style={{width:"0.825cm"}}></td>
                        </tr>
                        <tr>
                            <td style={{width:"0.33cm", fontSize:"14px", textalign:"center"}}>
                                <b>D</b>
                            </td>
                            <td colSpan={2} style={{width:"3.3cm", fontSize:"14px"}}>
                                <b>Surat Pernyataan Debitur</b>
                            </td>
                        </tr>
                        <tr>
                            <td style={{textalign:"center"}}>1. </td>
                            <td style={{width:"13.2cm"}}>Surat Pernyataan Tidak Bekerja yang diketahui oleh kepala desa/lurah bilamana salah satu dari kelompok sasaran suami istri tidak bekerja</td>
                            <td style={{width:"0.825cm"}}></td>
                        </tr>
                        <tr>
                            <td style={{textalign:"center"}}>2. </td>
                            <td style={{width:"13.2cm"}}>Surat Pernyataan KPR Bersubsidi BTN Format Internal Bank</td>
                            <td style={{width:"0.825cm"}}></td>
                        </tr>
                        <tr>
                            <td style={{textalign:"center"}}>3. </td>
                            <td style={{width:"13.2cm"}}>Surat Pernyataan KPR Bersubsidi BTN Format Kementerian PUPR</td>
                            <td style={{width:"0.825cm"}}></td>
                        </tr>
                        <tr>
                            <td style={{textalign:"center"}}>4. </td>
                            <td style={{width:"13.2cm"}}>Surat Pernyataan Penghunian Rumah Umum Bersubsidi</td>
                            <td style={{width:"0.825cm"}}></td>
                        </tr>
                        <tr>
                            <td style={{textalign:"center"}}>5. </td>
                            <td style={{width:"13.2cm"}}>Surat Kuasa Pendebetan Dana</td>
                            <td style={{width:"0.825cm"}}></td>
                        </tr>
                        <tr>
                            <td style={{textalign:"center"}}>6. </td>
                            <td style={{width:"13.2cm"}}>Kelompok Sasaran</td>
                            <td style={{width:"0.825cm"}}></td>
                        </tr>
                        <tr>
                            <td style={{textalign:"center"}}>7. </td>
                            <td style={{width:"13.2cm"}}>Surat Pernyataan tidak memiliki rumah</td>
                            <td style={{width:"0.825cm"}}></td>
                        </tr>
                        <tr>
                            <td style={{textalign:"center"}}>8. </td>
                            <td style={{width:"13.2cm"}}>Fotokopi Buku Tabungan atas nama pemohon pada Bank BTN</td>
                            <td style={{width:"0.825cm"}}></td>
                        </tr>
                        <tr>
                            <td style={{textalign:"center"}}>9. </td>
                            <td style={{width:"13.2cm"}}>Surat Kuasa</td>
                            <td style={{width:"0.825cm"}}></td>
                        </tr>
                        <tr>
                            <td style={{textalign:"center"}}>10. </td>
                            <td style={{width:"13.2cm"}}>Surat Pernyataan Calon Debitur</td>
                            <td style={{width:"0.825cm"}}></td>
                        </tr>  
                    </tbody>         
                </table>
            </div>


            <div className={classes.wrapHalaman3} style={{paddingTop:"8cm"}}>

                <h3 style={{ textDecorationLine: "underline", textalign: "center" }}>
                    SURAT PERMOHONAN SUBSIDI BANTUAN UANG MUKA (SBUM)
                 </h3>

                <table style={{paddingTop:"1cm", fontSize:"12px"}}>
                    <thead></thead>
                    <tbody>
                    <tr style={{textalign:"left"}}>
                        <td colSpan={3} style={{width:"3.3cm"}}>Kepada Yth:</td>
                    </tr>
                    <tr style={{textalign:"left"}}>
                        <td colSpan={3} style={{width:"100%"}}><b>Kepala Satuan Kerja Direktorat Jenderal Pembiayaan Perumahan</b>
                            <p>
                                Kementerian Pekerjaan Umum dan Perumahan Rakyat
                            </p>
                            <p>
                                Jalan Raden Patah 1 No.. 1 Lantai 2 Wing 3.
                            </p>
                            <p>
                                Kebayoran Baru, Jakarta Selatan 12110
                            </p>
                        </td>
                    </tr>
                    <tr style={{textalign:"left", height:"1.5cm"}}>
                        <td colSpan={3} style={{width:"100%"}}>
                            <b>Perihal 	:  Permohonan Subsidi Bantuan Uang Muka (SBUM)</b>
                        </td>
                    </tr>
                    <tr style={{textalign:"left"}}>
                        <td colSpan={3} style={{width:"100%"}}>
                            Saya yang bertanda tangan di bawah ini:
                        </td>
                    </tr>

                    <tr>
                        <td style={{width: "5cm", paddingLeft:"0.5cm"}}>Nama Lengkap</td>
                        <td style={{width: "0.4cm"}}>:</td>     
                        <td>Nama Pemohon</td>
                    </tr>
                    <tr>
                        <td style={{width: "5cm", paddingLeft:"0.5cm"}}>No. KTP</td>
                        <td style={{width: "0.4cm"}}>:</td>   
                        <td>Nomor KTP Pemohon</td>
                    </tr>
                    <tr>
                        <td style={{width: "5cm", paddingLeft:"0.5cm"}}>Tempat, Tanggal Lahir</td>
                        <td style={{width: "0.4cm"}}>:</td>   
                        <td>Tempat, Tanggal Lahir Pemohon</td>
                    </tr>
                    <tr>
                        <td style={{width: "5cm", paddingLeft:"0.5cm"}}>Pekerjaan</td>
                        <td style={{width: "0.4cm"}}>:</td>   
                        <td>Pekerjaan Pemohon</td>
                    </tr>
                    <tr>
                        <td style={{width: "5cm", paddingLeft:"0.5cm"}}>Alamat</td>
                        <td style={{width: "0.4cm"}}>:</td>   
                        <td>Alamat Pemohon</td>
                    </tr>

                    <tr style={{textalign:"left", height:"1.5cm"}}>
                        <td colSpan={3} style={{width:"100%"}}>
                            Mengajukan permohonan Subsidi Bantuan Uang Muka untuk pembelian rumah sejahtera tapak dengan keterangan sebagai berikut:
                        </td>
                    </tr>

                    <tr>
                        <td style={{width: "5cm", paddingLeft:"0.5cm"}}>Nama Pengembang</td>
                        <td style={{width: "0.4cm"}}>:</td>   
                        <td>PT. BANYUKE INTAN PERMAI</td>
                    </tr>
                    <tr>
                        <td style={{width: "5cm", paddingLeft:"0.5cm", paddingBottom:"0.50cm"}}>Alamat Rumah yang Dibeli</td>
                        <td style={{width: "0.4cm", paddingBottom:"0.50cm"}}>:</td>   
                        <td>Jalan Pararel Aruk-Jagoi, Desa Sekida, Jagoi Babang, Bengkayang, Provinsi Kalimantan Barat</td>
                    </tr>
                    <tr>
                        <td style={{width: "5cm", paddingLeft:"0.5cm"}}>Harga Jual Rumah</td>
                        <td style={{width: "0.4cm"}}>:</td>   
                        <td>Rp.	164.500.000,-</td>
                    </tr>
                    <tr>
                        <td style={{width: "5cm", paddingLeft:"0.5cm"}}>Besaran Uang Muka</td>
                        <td style={{width: "0.4cm"}}>:</td>   
                        <td>Rp.	8.225.000,-</td>
                    </tr>
                    <tr>
                        <td style={{width: "5cm", paddingLeft:"0.5cm"}}>Bank Pelaksana</td>
                        <td style={{width: "0.4cm"}}>:</td>   
                        <td>Bank BTN</td>
                    </tr>

                    <tr style={{textalign:"left", height:"2cm"}}>
                        <td colSpan={3} style={{width:"100%", textAlign:"justify"}}>
                            Sebagai pertimbangan, bersama ini kami lampirkan dokumen fotokopi surat pengakuan kekurangan bayar uang muka 
                            pembelian Rumah Umum Tapak yang disetujui oleh YUDA SISWANTO selaku direktur PT. BANYUKE INTAN PERMAI.
                        </td>
                    </tr>

                    <tr style={{textalign:"left", height:"2cm"}}>
                        <td colSpan={3} style={{width:"100%", textAlign:"justify"}}>
                            Dengan surat permohonan ini saya menyatakan telah memahami dan tunduk pada ketentuan pemerintah yang mengatur Subsidi 
                            Bantuan Uang Muka (SBUM). Apabila di kemudian hari saya tidak dapat menjalankan ketentuan pemerintah tersebut di atas 
                            yang mengakibatkan pemerintah mencabut semua kemudahan dan subsidi terkait kemudahan dalam perolehan rumah, saya bersedia
                            mengembalikan semua kemudahan dan subsidi yang telah saya terima tersebut.
                        </td>
                    </tr>

                    <tr style={{textalign:"left", height:"2cm"}}>
                        <td colSpan={3} style={{width:"100%"}}>
                            Demikian kami sampaikan, atas perhatiannya kami ucapkan terima kasih.
                        </td>
                    </tr>
                    </tbody>
                </table>
                <table className={classes.tabelPersetujuanPemohonTTD} style={{textalign:"center", paddingTop:"0.2cm"}}>
                    <thead></thead>
                    <tbody>
                    <tr style={{paddingLeft:"30px"}}>
                        <td style={{width:"5cm"}}>Jagoi Babang, 1 Januari 2022</td>
                    </tr>
                    <tr>
                        <td style={{paddingTop:"1.3cm"}}>
                            Nama Pemohon                     
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>

            <div className={classes.wrapHalaman4} style={{paddingTop:"9.5cm"}}>

                <h3 style={{ textDecorationLine: "underline", textalign: "center" }}>
                    SURAT PENGAKUAN KEKURANGAN BAYAR UANG MUKA
                </h3>

                <table style={{paddingTop:"1cm", fontSize:"12px"}}>
                    <thead></thead>
                    <tbody>
                        <tr style={{textalign:"left"}}>
                            <td colSpan={3} style={{width:"100%"}}>
                                Saya yang bertanda tangan di bawah ini:
                            </td>
                        </tr>

                        <tr>
                            <td style={{width: "4.5cm", paddingLeft:"0.5cm"}}>Nama Lengkap</td>
                            <td style={{width: "0.4cm"}}>:</td>     
                            <td>Nama Pemohon</td>
                        </tr>
                        <tr>
                        <td style={{width: "4.5cm", paddingLeft:"0.5cm"}}>No. KTP</td>
                        <td style={{width: "0.4cm"}}>:</td>   
                        <td>Nomor KTP Pemohon</td>
                    </tr>
                    <tr>
                        <td style={{width: "4.5cm", paddingLeft:"0.5cm"}}>Tempat, Tanggal Lahir</td>
                        <td style={{width: "0.4cm"}}>:</td>   
                        <td>Tempat, Tanggal Lahir Pemohon</td>
                    </tr>
                    <tr>
                        <td style={{width: "4.5cm", paddingLeft:"0.5cm"}}>Pekerjaan</td>
                        <td style={{width: "0.4cm"}}>:</td>   
                        <td>Pekerjaan Pemohon</td>
                    </tr>
                    <tr>
                        <td style={{width: "4.5cm", paddingLeft:"0.5cm"}}>Alamat</td>
                        <td style={{width: "0.4cm"}}>:</td>   
                        <td>Alamat Pemohon</td>
                    </tr>

                    <tr style={{textalign:"left", height:"2cm"}}>
                        <td colSpan={3} style={{width:"100%", textAlign:"justify"}}>
                            Dengan   ini   menyatakan   bahwa   saya   telah   melakukan   pembayaran   uang   muka   sebesar <b> Rp. 4.225.000,-
                            ( Empat Juta Dua Ratus Dua Puluh Lima Ribu Rupiah ) </b> dan masih memiliki kekurangan bayar uang muka sebesar <b>Rp. 4.000.000,-
                            ( Empat Juta Rupiah )</b> untuk pembelian rumah sejahtera tapak kepada :
                        </td>
                    </tr>
                    <tr>
                        <td style={{width: "5cm", paddingLeft:"0.5cm"}}>Nama Pengembang</td>
                        <td style={{width: "0.4cm"}}>:</td>   
                        <td>YUDA SISWANTO</td>
                    </tr>
                    <tr>
                        <td style={{width: "5cm", paddingLeft:"0.5cm", paddingBottom:"0.50cm"}}>Alamat Rumah yang Dibeli</td>
                        <td style={{width: "0.4cm", paddingBottom:"0.50cm"}}>:</td>   
                        <td>Jalan Pararel Aruk-Jagoi, Desa Sekida, Jagoi Babang, Bengkayang, Provinsi Kalimantan Barat</td>
                    </tr>
                    <tr>
                        <td style={{width: "5cm", paddingLeft:"0.5cm"}}>Harga Jual Rumah</td>
                        <td style={{width: "0.4cm"}}>:</td>   
                        <td>Rp.	164.500.000,-</td>
                    </tr>
                    <tr>
                        <td style={{width: "5cm", paddingLeft:"0.5cm"}}>Besaran Uang Muka</td>
                        <td style={{width: "0.4cm"}}>:</td>   
                        <td>Rp.	8.225.000,-</td>
                    </tr>
                    <tr>
                        <td style={{width: "5cm", paddingLeft:"0.5cm"}}>Bank Pelaksana</td>
                        <td style={{width: "0.4cm"}}>:</td>   
                        <td>Bank BTN Kantor Cabang ……………………</td>
                    </tr>
                    <tr style={{textalign:"left", height:"2cm"}}>
                        <td colSpan={3} style={{width:"100%"}}>
                            Demikian kami sampaikan, atas perhatiannya kami ucapkan terima kasih.
                        </td>
                    </tr>
                    </tbody>
                </table>
                
                <table className={classes.tablePersetujuanTTD} style={{width:"100%", fontSize:"12px"}}>
                    <thead></thead>
                    <tbody>
                        <tr style={{textAlign:"center" , width :"15cm"}}>
                            <td style={{width : "5cm"}}></td>
                            <td style={{width : "5cm"}}>Jagoi Babang, 1 Januari 2022</td>
                        </tr>
                        <tr style={{textAlign:"center" , width :"15cm"}}>
                            <td style={{width : "5cm"}}>Menyetujui,</td>
                            <td style={{width : "5cm"}}>Yang membuat pernyataan,</td>
                        </tr>
                        <tr style={{textAlign:"center" , width :"15cm"}}>
                            <td style={{width : "5cm"}}>Direktur PT. Banyuke Intan Permai,</td>
                            <td style={{width : "5cm"}}> </td>
                        </tr>
                        <tr style={{textAlign:"center" , width :"15cm", height:"2cm"}}>
                    
                            <td style={{width : "5cm"}}></td>
                            <td style={{width : "5cm", paddingTop:"1cm",paddingLeft:"1cm"}}> 
                                <p className={classes.materai} style={{width:"2cm"}}>
                                    Meterai
                                    <br></br>
                                    Rp 10.000,-
                                </p>
                                
                            </td>
                        </tr>
                        <tr style={{textAlign:"center", width :"15cm"}}>
                            <td style={{width : "5cm"}}>YUDA SISWANTO</td>
                            <td style={{width : "5cm"}}>Nama Pemohon</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className={classes.wrapHalaman5} style={{paddingTop:"12.5cm"}}>

                <h3 style={{ textDecorationLine: "underline", textalign: "center" }}>
                    SURAT PERINTAH PEMINDAHBUKUAN DANA SBUM
                </h3>

                <h3 style={{ textDecorationLine: "underline", textalign: "center" }}>
                    <i>(STANDING INSTRUCTION)</i>
                </h3>

                <table style={{paddingTop:"0.5cm", fontSize:"12px", width:"100%"}}>
                    <thead></thead>
                    <tbody>
                        <tr style={{textalign:"left"}}>
                            <td colSpan={3} style={{height:"2cm"}}>
                                <p style={{paddingLeft:"1cm", textAlign:"justify"}}>Sehubungan dengan permohonan dana Subsidi Bantuan Uang Muka kepada Kepala Satuan Kerja Direktorat Jenderal </p>  
                                Pembiayaan Perumahan Kementerian Pekerjaan Umum dan Perumahan Rakyat, maka saya yang bertandatangan 
                                di bawah ini :
                            </td>
                        </tr>
                        <tr>
                            <td style={{width: "5cm", paddingLeft:"0.5cm"}}>Nama Lengkap</td>
                            <td style={{width: "0.4cm"}}>:</td>     
                            <td>Nama Pemohon</td>
                        </tr>
                        <tr>
                            <td style={{width: "5cm", paddingLeft:"0.5cm"}}>No. KTP</td>
                            <td style={{width: "0.4cm"}}>:</td>   
                            <td>Nomor KTP Pemohon</td>
                        </tr>
                        <tr>
                            <td style={{width: "5cm", paddingLeft:"0.5cm"}}>Tempat, Tanggal Lahir</td>
                            <td style={{width: "0.4cm"}}>:</td>   
                            <td>Tempat, Tanggal Lahir Pemohon</td>
                        </tr>
                        <tr>
                            <td style={{width: "5cm", paddingLeft:"0.5cm"}}>Pekerjaan</td>
                            <td style={{width: "0.4cm"}}>:</td>   
                            <td>Pekerjaan Pemohon</td>
                        </tr>
                        <tr>
                            <td style={{width: "5cm", paddingLeft:"0.5cm"}}>Alamat</td>
                            <td style={{width: "0.4cm"}}>:</td>   
                            <td>Alamat Pemohon</td>
                        </tr>
                        <tr style={{textalign:"left"}}>
                            <td colSpan={3} style={{height:"2.5cm"}}>
                                <p style={{paddingLeft:"1cm", textAlign:"justify"}}>Dengan ini memberikan kuasa kepada PT. Bank Tabungan Negara (Persero) Tbk. Kantor Cabang ……………. </p>
                                untuk melakukan pemindahbukuan pencairan dana Subsidi Bantuan Uang Muka (SBUM) senilai Rp 4.000.000,- (Empat Juta Rupiah) 
                                untuk digunakan sebagai pengurang pokok kredit atau pembayaran kekurangan uang muka pembelian rumah sejahtera*), kepada :
                            </td>
                        </tr>
                        <tr>
                            <td style={{width: "5cm", paddingLeft:"0.5cm"}}>Nama Pengembang</td>
                            <td style={{width: "0.4cm"}}>:</td>     
                            <td><b>PT. BANYUKE INTAN PERMAI</b></td>
                        </tr>
                        <tr>
                            <td style={{width: "5cm", paddingLeft:"0.5cm"}}>No. Rekening</td>
                            <td style={{width: "0.4cm"}}>:</td>   
                            <td><b>01122.01.30.000003.0</b></td>
                        </tr>
                        <tr>
                            <td style={{width: "5cm", paddingLeft:"0.5cm"}}>Rekening Atas Nama</td>
                            <td style={{width: "0.4cm"}}>:</td>   
                            <td><b>PT. Banyuke Intan Permai</b></td>
                        </tr>
                        <tr>
                            <td style={{width: "5cm", paddingLeft:"0.5cm"}}>BTN</td>
                            <td style={{width: "0.4cm"}}>:</td>   
                            <td><b>KCP Singkawang</b></td>
                        </tr>
                        <tr style={{textalign:"left"}}>
                            <td colSpan={3} style={{height:"2.5cm"}}>
                                <p style={{paddingLeft:"1cm", textAlign:"justify"}}>Demikian <i>Standing Instruction</i> ini dibuat tanpa adanya paksaan dari pihak manapun. Akibat apapun yang mungkin</p> 
                                timbul dari pelaksanaan penyaluran dana oleh PT. Bank Tabungan Negara (Persero) Tbk, 
                                berdasarkan Standing Instruction ini adalah sepenuhnya menjadi tanggung jawab kami.
                            </td>
                        </tr>
                    </tbody>
                </table>

                <table className={classes.tablePersetujuanTTD} style={{width:"100%", fontSize:"12px"}}>
                    <thead></thead>
                    <tbody>
                        <tr style={{textAlign:"center" , width :"15cm"}}>
                            <td style={{width : "5cm"}}></td>
                            <td style={{width : "5cm"}}>Jagoi Babang, 1 Januari 2022</td>
                        </tr>
                        <tr style={{textAlign:"center" , width :"15cm"}}>
                            <td style={{width : "5cm"}}>Menyetujui,</td>
                            <td style={{width : "5cm"}}>Yang Membuat <i>Standing Instruction,</i></td>
                        </tr>
                        <tr style={{textAlign:"center" , width :"15cm"}}>
                            <td style={{width : "5cm"}}>PT. Bank Tabungan Negara (Persero) Tbk.
                            </td>
                            <td style={{width : "5cm"}}> </td>
                        </tr>
                        <tr style={{textAlign:"center" , width :"15cm"}}>
                            <td style={{width : "5cm"}}>Kantor Cabang …………………
                            </td>
                            <td style={{width : "5cm"}}> </td>
                        </tr>
                        <tr style={{textAlign:"center" , width :"15cm", height:"2cm"}}>
                            <td style={{width : "5cm"}}></td>
                            <td style={{width : "5cm", paddingTop:"1cm",paddingLeft:"1cm"}}> 
                                <p className={classes.materai} style={{width:"2cm"}}>
                                    Meterai
                                    <br></br>
                                    Rp 10.000,-
                                </p>
                                
                            </td>
                        </tr>
                        <tr style={{textAlign:"center", width :"15cm"}}>
                            <td style={{width : "5cm"}}>……………………………………
                                <p color='grey' textalign='center'>
                                    <i>
                                        Nama Lengkap, Jabatan
                                    </i>
                                </p>
                            </td>
                            <td style={{width : "5cm"}}>Nama Pemohon</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className={classes.wrapHalaman6} style={{paddingTop:"9cm"}}>

                <p style={{ textDecorationLine: "none", textAlign: "right" }}>
                    (Format Internal Bank)
                </p>

                <h3 style={{ textDecorationLine: "underline", textAlign: "center", paddingTop:"0.4cm"}}>
                    SURAT PERNYATAAN PEMOHON KPR BERSUBSIDI BTN
                </h3>

                <table style={{paddingTop:"0.5cm", fontSize:"12px", width:"100%", borderSpacing:"0px"}}>
                    <thead></thead>
                    <tbody>
                        <tr style={{textalign:"left"}}>
                            <td colSpan={3}>
                                Yang bertanda tangan di bawah ini:
                            </td>
                        </tr>
                        <tr>
                            <td style={{width: "5cm", paddingLeft:"0.5cm"}}>Nama Lengkap</td>
                            <td style={{width: "0.4cm"}}>:</td>     
                            <td>Nama Pemohon</td>
                        </tr>
                        <tr>
                            <td style={{width: "5cm", paddingLeft:"0.5cm"}}>No. KTP</td>
                            <td style={{width: "0.4cm"}}>:</td>   
                            <td >Nomor KTP Pemohon</td>
                        </tr>
                        <tr>
                            <td style={{width: "5cm", paddingLeft:"0.5cm"}}>Tempat, Tanggal Lahir</td>
                            <td style={{width: "0.4cm"}}>:</td>   
                            <td >Tempat, Tanggal Lahir Pemohon</td>
                        </tr>
                        <tr>
                            <td style={{width: "5cm", paddingLeft:"0.5cm"}}>Pekerjaan</td>
                            <td style={{width: "0.4cm"}}>:</td>   
                            <td >Pekerjaan Pemohon</td>
                        </tr>
                        <tr>
                            <td style={{width: "5cm", paddingLeft:"0.5cm"}}>Alamat</td>
                            <td style={{width: "0.4cm"}}>:</td>   
                            <td >Alamat Pemohon</td>
                        </tr>
                        <tr style={{textalign:"left"}}>
                            <td colSpan={3}>
                                Selaku pemohon.  
                            </td>
                        </tr>

                        <tr style={{textalign:"left",height:"0.3cm"}}>
                            <td colSpan={3}> 
                            </td>
                        </tr>

                        <tr>
                            <td style={{width: "5cm", paddingLeft:"0.5cm"}}>Nama Lengkap</td>
                            <td style={{width: "0.4cm"}}>:</td>     
                            <td >Nama Pasangan Pemohon</td>
                        </tr>
                        <tr>
                            <td style={{width: "5cm", paddingLeft:"0.5cm"}}>No. KTP</td>
                            <td style={{width: "0.4cm"}}>:</td>   
                            <td >Nomor KTP Pasangan Pemohon</td>
                        </tr>
                        <tr>
                            <td style={{width: "5cm", paddingLeft:"0.5cm"}}>Tempat, Tanggal Lahir</td>
                            <td style={{width: "0.4cm"}}>:</td>   
                            <td >Tempat, Tanggal Lahir Pasangan Pemohon</td>
                        </tr>
                        <tr>
                            <td style={{width: "5cm", paddingLeft:"0.5cm"}}>Pekerjaan</td>
                            <td style={{width: "0.4cm"}}>:</td>   
                            <td >Pekerjaan Pasangan Pemohon</td>
                        </tr>
                        <tr>
                            <td style={{width: "5cm", paddingLeft:"0.5cm"}}>Alamat</td>
                            <td style={{width: "0.4cm"}}>:</td>   
                            <td >Alamat Pasangan Pemohon</td>
                        </tr>
                        <tr style={{textalign:"left"}}>
                            <td colSpan={3}>
                                Selaku suami/istri* pemohon.
                            </td>
                        </tr>
                        <tr style={{textalign:"left",height:"0.3cm"}}>
                            <td colSpan={3}> 
                            </td>
                        </tr>
                    </tbody>
                </table>

                <table style={{fontSize:"12px", width:"100%", borderSpacing:"0px",textAlign:"justify"}}>
                    <thead></thead>
                    <tbody>
                        <tr style={{textalign:"left"}}>
                            <td colSpan={2}>
                                 Menyatakan dengan sesungguhnya bahwa:
                            </td>
                        </tr>
                        <tr>
                            <td style={{width: "1cm", paddingLeft:"0.5cm", paddingBottom:"0.50cm"}}>1.</td> 
                            <td>Saya selaku pemohon memiliki gaji/upah pokok/penghasilan bersih/upah rata-rata*) per bulan sebesar Rp. (Gaji Pemohon,-) (Gaji Pemohon Terbilang).</td>
                        </tr>
                        <tr>
                            <td style={{width: "1cm", paddingLeft:"0.5cm", paddingBottom:"0.50cm"}}>2.</td> 
                            <td>Saya dan istri/suami* tidak memiliki hak kepemilikan atas rumah pada saat pengajuan pembiayaan KPR Bersubsidi BTN.</td>
                        </tr>
                        <tr>
                            <td style={{width: "1cm", paddingLeft:"0.5cm", paddingBottom:"0.50cm"}}>3.</td> 
                            <td>Saya dan istri/suami* belum pernah menerima subsidi atau bantuan pembiayaan perumahan dari pemerintah terkait kredit/pembiayaan kepemilikan rumah dan/atau pembangunan rumah swadaya.</td>
                        </tr>
                        <tr>
                            <td style={{width: "1cm", paddingLeft:"0.5cm", paddingBottom:"0.50cm"}}>4.</td> 
                            <td>Saya membeli Rumah Umum Tapak dengan harga Rp.164.500.000,- (Seratus Enam Puluh Empat Juta Lima Ratus Ribu Rupiah) dari pengembang PT. BANYUKE INTAN PERMAI.</td>
                        </tr>
                        <tr>
                            <td style={{width: "1cm", paddingLeft:"0.5cm", paddingBottom:"0.50cm"}}>5.</td> 
                            <td>Saya dan istri/suami* akan menggunakan Rumah Umum Tapak sebagai tempat tinggal saya dan/atau keluarga dalam kurun waktu paling lambat 1 (satu) tahun setelah serah terima rumah.</td>
                        </tr>
                        <tr>
                            <td style={{width: "1cm", paddingLeft:"0.5cm", paddingBottom:"0.50cm"}}>6.</td> 
                            <td>Saya dan istri/suami* tidak akan menyewakan/mengontrakkan, memperjual-belikan atau memindahtangankan dengan bentuk perbuatan hukum apapun, kecuali:</td>
                        </tr>
                        <tr>
                            <td colSpan={2} style={{width: "1cm", paddingLeft:"1cm"}}>a.	Penghunian telah melampaui 5 (lima) tahun untuk Rumah Umum Tapak;</td> 
                        </tr>
                        <tr>
                            <td colSpan={2} style={{width: "1cm", paddingLeft:"1cm"}}>b.	Penghunian telah melampaui 20 (dua puluh) tahun untuk Sarusun Umum;</td> 
                        </tr>
                        <tr>
                            <td colSpan={2} style={{width: "1cm", paddingLeft:"1cm"}}>c.	Pindah tempat tinggal sesuai ketentuan peraturan perundang-undangan;</td> 
                        </tr>
                        <tr>
                            <td colSpan={2} style={{width: "1cm", paddingLeft:"1cm"}}>d.	Meninggal dunia (pewarisan); atau</td> 
                        </tr>
                        <tr>
                            <td colSpan={2} style={{width: "1cm", paddingLeft:"1cm"}}>e.	Untuk kepentingan Bank BTN dalam rangka penyelesaian kredit bermasalah.</td> 
                        </tr>
                        <tr>
                            <td style={{width: "1cm", paddingLeft:"0.5cm", paddingBottom:"0.70cm"}}>7.</td> 
                            <td>Bersedia melakukan aktivasi ulang QR Code sesuai tata cara yang ditentukan Pusat Pengelolaan Dana Pembiayaan Perumahan (PPDPP) dan/atau Satuan Kerja Kementerian Pekerjaan Umum dan Perumahan Rakyat pada Rumah Umum Tapak/Sarusun Umum setiap tahun hingga tahun ke 5 (lima) sejak akad.</td>
                        </tr>
                        <tr>
                            <td style={{width: "1cm", paddingLeft:"0.5cm", paddingBottom:"0.50cm"}}>8.</td> 
                            <td>Bersedia memindahkan domisili kependudukan dalam KTP ke alamat agunan paling lambat 1 (satu) tahun sejak akad KPR Bersubsidi BTN.</td>
                        </tr>
                        <tr>
                            <td style={{width: "1cm", paddingLeft:"0.5cm", paddingBottom:"0.60cm"}}>9.</td> 
                            <td>Bahwa semua dokumen persyaratan yang disampaikan kepada Bank BTN untuk memperoleh fasilitas subsidi adalah benar dan dapat dipertanggungjawabkan keabsahannya baik secara formal maupun materiel.</td>
                        </tr>
                        <tr>
                            <td style={{width: "1cm", paddingLeft:"0.5cm", paddingBottom:"0.70cm"}}>10.</td> 
                            <td>Apabila di kemudian hari pernyataan saya ini tidak benar dan/atau tidak saya penuhi, saya bersedia mengembalikan seluruh subsidi yang telah saya terima dari pemerintah dan bersedia dikenakan sanksi sesuai dengan ketentuan peraturan perundang-undangan.</td>
                        </tr>

                        <tr style={{textalign:"left", height:"1cm"}}>
                            <td colSpan={2} style={{width:"100%"}}>
                                Demikian surat pernyataan ini saya buat dengan sebenar-benarnya tanpa paksaan dari pihak manapun.
                             </td>
                    </tr>
                    </tbody>
                </table>

                <table className={classes.tablePersetujuanTTD} style={{width:"100%", fontSize:"12px"}}>
                    <thead></thead>
                    <tbody>
                        <tr style={{textAlign:"center" , width :"15cm"}}>
                            <td style={{width : "5cm"}}></td>
                            <td style={{width : "5cm"}}>Jagoi Babang, 1 Januari 2022</td>
                        </tr>
                        <tr style={{textAlign:"center" , width :"15cm"}}>
                            <td style={{width : "5cm"}}>Menyetujui,</td>
                            <td style={{width : "5cm"}}>Yang membuat pernyataan,</td>
                        </tr>

                        <tr style={{textAlign:"center" , width :"15cm", height:"1cm"}}>
                            <td style={{width : "5cm"}}></td>
                            <td style={{width : "5cm", paddingTop:"0.5cm",paddingLeft:"1cm"}}> 
                                <p className={classes.materai} style={{width:"2cm"}}>
                                    Meterai
                                    <br></br>
                                    Rp 10.000,-
                                </p>
                                
                            </td>
                        </tr>
                        <tr style={{textAlign:"center", width :"15cm"}}>
                            <td style={{width : "5cm"}}>Nama Pasangan Pemohon</td>
                            <td style={{width : "5cm"}}>Nama Pemohon</td>
                        </tr>

                        <tr>
                            <td colSpan={2} style={{textAlign:"center"}}> Mengetahui, </td>
                            
                        </tr>
                        <tr>  
                            <td colSpan={2} style={{textAlign:"center"}}>Pimpinan Tempat Bekerja/Kepala Desa/Lurah*</td>  
                        </tr>
                        <tr>    
                            <td colSpan={2} style={{width : "5cm", textAlign:"center", paddingTop:"1cm"}}>……………………………………
                                <p color='grey' textalign='center'>
                                    <i>
                                        Nama Lengkap, Jabatan dan Stempel
                                    </i>
                                </p>
                            </td>
                        </tr>

                    </tbody>
                </table>
            </div>

            
            <div className={classes.wrapHalaman7} style={{paddingTop:"2cm"}}>

                <p style={{ textDecorationLine: "none", textAlign: "right" }}>
                    (Format Kementerian PUPR)
                </p>

                <h3 style={{ textDecorationLine: "underline", textAlign: "center", paddingTop:"0.4cm"}}>
                    SURAT PERNYATAAN PEMOHON KPR BERSUBSIDI BTN
                </h3>
                <table style={{paddingTop:"0.5cm", fontSize:"12px", width:"100%", borderSpacing:"0px"}}>
                    <thead></thead>
                    <tbody>
                        <tr style={{textalign:"left"}}>
                            <td colSpan={3}>
                                Yang bertanda tangan di bawah ini:
                            </td>
                        </tr>
                        <tr>
                            <td style={{width: "5cm", paddingLeft:"0.5cm"}}>Nama Lengkap</td>
                            <td style={{width: "0.4cm"}}>:</td>     
                            <td>Nama Pemohon</td>
                        </tr>
                        <tr>
                            <td style={{width: "5cm", paddingLeft:"0.5cm"}}>No. KTP</td>
                            <td style={{width: "0.4cm"}}>:</td>   
                            <td >Nomor KTP Pemohon</td>
                        </tr>
                        <tr>
                            <td style={{width: "5cm", paddingLeft:"0.5cm"}}>Tempat, Tanggal Lahir</td>
                            <td style={{width: "0.4cm"}}>:</td>   
                            <td >Tempat, Tanggal Lahir Pemohon</td>
                        </tr>
                        <tr>
                            <td style={{width: "5cm", paddingLeft:"0.5cm"}}>Pekerjaan</td>
                            <td style={{width: "0.4cm"}}>:</td>   
                            <td >Pekerjaan Pemohon</td>
                        </tr>
                        <tr>
                            <td style={{width: "5cm", paddingLeft:"0.5cm"}}>Alamat</td>
                            <td style={{width: "0.4cm"}}>:</td>   
                            <td >Alamat Pemohon</td>
                        </tr>
                        <tr style={{textalign:"left"}}>
                            <td colSpan={3}>
                                Selaku pemohon.  
                            </td>
                        </tr>

                        <tr style={{textalign:"left",height:"0.3cm"}}>
                            <td colSpan={3}> 
                            </td>
                        </tr>

                        <tr>
                            <td style={{width: "5cm", paddingLeft:"0.5cm"}}>Nama Lengkap</td>
                            <td style={{width: "0.4cm"}}>:</td>     
                            <td >Nama Pasangan Pemohon</td>
                        </tr>
                        <tr>
                            <td style={{width: "5cm", paddingLeft:"0.5cm"}}>No. KTP</td>
                            <td style={{width: "0.4cm"}}>:</td>   
                            <td >Nomor KTP Pasangan Pemohon</td>
                        </tr>
                        <tr>
                            <td style={{width: "5cm", paddingLeft:"0.5cm"}}>Tempat, Tanggal Lahir</td>
                            <td style={{width: "0.4cm"}}>:</td>   
                            <td >Tempat, Tanggal Lahir Pasangan Pemohon</td>
                        </tr>
                        <tr>
                            <td style={{width: "5cm", paddingLeft:"0.5cm"}}>Pekerjaan</td>
                            <td style={{width: "0.4cm"}}>:</td>   
                            <td >Pekerjaan Pasangan Pemohon</td>
                        </tr>
                        <tr>
                            <td style={{width: "5cm", paddingLeft:"0.5cm"}}>Alamat</td>
                            <td style={{width: "0.4cm"}}>:</td>   
                            <td >Alamat Pasangan Pemohon</td>
                        </tr>
                        <tr style={{textalign:"left"}}>
                            <td colSpan={3}>
                                Selaku suami/istri* pemohon.
                            </td>
                        </tr>
                        <tr style={{textalign:"left",height:"0.3cm"}}>
                            <td colSpan={3}> 
                            </td>
                        </tr>
                    </tbody>
                </table>

                <table style={{fontSize:"12px", width:"100%", borderSpacing:"0px", textAlign:"justify"}}>
                    <thead></thead>
                    <tbody>
                        <tr style={{textalign:"left"}}>
                            <td colSpan={2}>
                                 Menyatakan dengan sesungguhnya bahwa:
                            </td>
                        </tr>
                        <tr>
                            <td style={{width: "1cm", paddingLeft:"0.5cm", paddingBottom:"0.50cm"}}>1.</td> 
                            <td>Saya selaku pemohon memiliki gaji/upah pokok/penghasilan bersih/upah rata-rata*) per bulan sebesar Rp. (Gaji Pemohon,-) (Gaji Pemohon Terbilang).</td>
                        </tr>
                        <tr>
                            <td style={{width: "1cm", paddingLeft:"0.5cm", paddingBottom:"0.50cm"}}>2.</td> 
                            <td>Saya dan istri/suami* tidak memiliki hak kepemilikan atas rumah pada saat pengajuan pembiayaan KPR Bersubsidi BTN.</td>
                        </tr>
                        <tr>
                            <td style={{width: "1cm", paddingLeft:"0.5cm", paddingBottom:"0.50cm"}}>3.</td> 
                            <td>Saya dan istri/suami* belum pernah menerima subsidi atau bantuan pembiayaan perumahan dari pemerintah terkait kredit/pembiayaan kepemilikan rumah dan/atau pembangunan rumah swadaya.</td>
                        </tr>
                        <tr>
                            <td style={{width: "1cm", paddingLeft:"0.5cm", paddingBottom:"0.50cm"}}>4.</td> 
                            <td>Saya membeli Rumah Umum Tapak dengan harga Rp.164.500.000,- (Seratus Enam Puluh Empat Juta Lima Ratus Ribu Rupiah) dari pengembang PT. BANYUKE INTAN PERMAI.</td>
                        </tr>
                        <tr>
                            <td style={{width: "1cm", paddingLeft:"0.5cm", paddingBottom:"0.50cm"}}>5.</td> 
                            <td>Saya dan istri/suami* akan menggunakan Rumah Umum Tapak sebagai tempat tinggal saya dan/atau keluarga dalam kurun waktu paling lambat 1 (satu) tahun setelah serah terima rumah.</td>
                        </tr>
                        <tr>
                            <td style={{width: "1cm", paddingLeft:"0.5cm", paddingBottom:"0.50cm"}}>6.</td> 
                            <td>Saya dan istri/suami* tidak akan menyewakan/mengontrakkan, memperjual-belikan atau memindahtangankan dengan bentuk perbuatan hukum apapun, kecuali:</td>
                        </tr>
                        <tr>
                            <td colSpan={2} style={{width: "1cm", paddingLeft:"1cm"}}>a.	Penghunian telah melampaui 5 (lima) tahun untuk Rumah Umum Tapak;</td> 
                        </tr>
                        <tr>
                            <td colSpan={2} style={{width: "1cm", paddingLeft:"1cm"}}>b.	Penghunian telah melampaui 20 (dua puluh) tahun untuk Sarusun Umum;</td> 
                        </tr>
                        <tr>
                            <td colSpan={2} style={{width: "1cm", paddingLeft:"1cm"}}>c.	Pindah tempat tinggal sesuai ketentuan peraturan perundang-undangan;</td> 
                        </tr>
                        <tr>
                            <td colSpan={2} style={{width: "1cm", paddingLeft:"1cm"}}>d.	Meninggal dunia (pewarisan); atau</td> 
                        </tr>
                        <tr>
                            <td colSpan={2} style={{width: "1cm", paddingLeft:"1cm"}}>e.	Untuk kepentingan Bank BTN dalam rangka penyelesaian kredit bermasalah.</td> 
                        </tr>
                        <tr>
                            <td style={{width: "1cm", paddingLeft:"0.5cm", paddingBottom:"0.70cm"}}>7.</td> 
                            <td>Bersedia melakukan aktivasi ulang QR Code sesuai tata cara yang ditentukan Pusat Pengelolaan Dana Pembiayaan Perumahan (PPDPP) dan/atau Satuan Kerja Kementerian Pekerjaan Umum dan Perumahan Rakyat pada Rumah Umum Tapak/Sarusun Umum setiap tahun hingga tahun ke 5 (lima) sejak akad.</td>
                        </tr>
                        <tr>
                            <td style={{width: "1cm", paddingLeft:"0.5cm", paddingBottom:"0.50cm"}}>8.</td> 
                            <td>Bersedia memindahkan domisili kependudukan dalam KTP ke alamat agunan paling lambat 1 (satu) tahun sejak akad KPR Bersubsidi BTN.</td>
                        </tr>
                        <tr>
                            <td style={{width: "1cm", paddingLeft:"0.5cm", paddingBottom:"0.60cm"}}>9.</td> 
                            <td>Bahwa semua dokumen persyaratan yang disampaikan kepada Bank BTN untuk memperoleh fasilitas subsidi adalah benar dan dapat dipertanggungjawabkan keabsahannya baik secara formal maupun materiel.</td>
                        </tr>
                        <tr>
                            <td style={{width: "1cm", paddingLeft:"0.5cm", paddingBottom:"0.70cm"}}>10.</td> 
                            <td>Apabila di kemudian hari pernyataan saya ini tidak benar dan/atau tidak saya penuhi, saya bersedia mengembalikan seluruh subsidi yang telah saya terima dari pemerintah dan bersedia dikenakan sanksi sesuai dengan ketentuan peraturan perundang-undangan.</td>
                        </tr>

                        <tr style={{textalign:"left", height:"1cm"}}>
                            <td colSpan={2} style={{width:"100%"}}>
                                Demikian surat pernyataan ini saya buat dengan sebenar-benarnya tanpa paksaan dari pihak manapun.
                             </td>
                    </tr>
                    </tbody>
                </table>

                <table className={classes.tablePersetujuanTTD} style={{width:"100%", fontSize:"12px"}}>
                    <thead></thead>
                    <tbody>
                        <tr style={{textAlign:"center" , width :"15cm"}}>
                            <td style={{width : "5cm"}}></td>
                            <td style={{width : "5cm"}}>Jagoi Babang, 1 Januari 2022</td>
                        </tr>
                        <tr style={{textAlign:"center" , width :"15cm"}}>
                            <td style={{width : "5cm"}}>Menyetujui,</td>
                            <td style={{width : "5cm"}}>Yang membuat pernyataan,</td>
                        </tr>

                        <tr style={{textAlign:"center" , width :"15cm", height:"1cm"}}>
                            <td style={{width : "5cm"}}></td>
                            <td style={{width : "5cm", paddingTop:"0.5cm",paddingLeft:"1cm"}}> 
                                <p className={classes.materai} style={{width:"2cm"}}>
                                    Meterai
                                    <br></br>
                                    Rp 10.000,-
                                </p>
                                
                            </td>
                        </tr>
                        <tr style={{textAlign:"center", width :"15cm"}}>
                            <td style={{width : "5cm"}}>Nama Pasangan Pemohon</td>
                            <td style={{width : "5cm"}}>Nama Pemohon</td>
                        </tr>

                        <tr>
                            <td colSpan={2} style={{textAlign:"center"}}> Mengetahui, </td>
                            
                        </tr>
                        <tr>  
                            <td colSpan={2} style={{textAlign:"center"}}>Pimpinan Tempat Bekerja/Kepala Desa/Lurah*</td>  
                        </tr>
                        <tr>    
                            <td colSpan={2} style={{width : "5cm", textAlign:"center", paddingTop:"1cm"}}>……………………………………
                                <p color='grey' textalign='center'>
                                    <i>
                                        Nama Lengkap, Jabatan dan Stempel
                                    </i>
                                </p>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            
      
            <div className={classes.wrapHalaman8} style={{paddingTop:"2cm"}}>

                <h3 style={{ textDecorationLine: "underline", textAlign: "center", paddingTop:"0.4cm"}}>
                    SURAT PERNYATAAN PENGHUNIAN RUMAH UMUM BERSUBSIDI
                </h3>

                <table style={{paddingTop:"0.5cm", fontSize:"12px", width:"100%", borderSpacing:"0px"}}>
                    <thead></thead>
                    <tbody>
                        <tr style={{textalign:"left"}}>
                            <td colSpan={3}>
                                Yang bertanda tangan di bawah ini:
                            </td>
                        </tr>
                        <tr>
                            <td style={{width: "5cm", paddingLeft:"0.5cm"}}>Nama Lengkap</td>
                            <td style={{width: "0.4cm"}}>:</td>     
                            <td>Nama Pemohon</td>
                        </tr>
                        <tr>
                            <td style={{width: "5cm", paddingLeft:"0.5cm"}}>No. KTP</td>
                            <td style={{width: "0.4cm"}}>:</td>   
                            <td >Nomor KTP Pemohon</td>
                        </tr>
                        <tr>
                            <td style={{width: "5cm", paddingLeft:"0.5cm"}}>Tempat, Tanggal Lahir</td>
                            <td style={{width: "0.4cm"}}>:</td>   
                            <td >Tempat, Tanggal Lahir Pemohon</td>
                        </tr>
                        <tr>
                            <td style={{width: "5cm", paddingLeft:"0.5cm"}}>Pekerjaan</td>
                            <td style={{width: "0.4cm"}}>:</td>   
                            <td >Pekerjaan Pemohon</td>
                        </tr>
                        <tr>
                            <td style={{width: "5cm", paddingLeft:"0.5cm"}}>Alamat</td>
                            <td style={{width: "0.4cm"}}>:</td>   
                            <td >Alamat Pemohon</td>
                        </tr>
                    </tbody>
                </table>

                <table style={{fontSize:"12px", width:"100%", borderSpacing:"0px",textAlign:"justify", paddingTop:"0.5cm"}}>
                    <thead></thead>
                    <tbody>
                        <tr style={{textalign:"left", width:"5cm"}}>
                            <td colSpan={2} >
                                 Selaku Debitur KPR Bersubsidi BTN menyatakan dengan sesungguhnya bahwa:
                            </td>
                        </tr>
                        <tr>
                            <td style={{width: "1cm", paddingLeft:"0.5cm", paddingBottom:"0.50cm"}}>1.</td> 
                            <td colSpan={2}>Saya telah memahami ketentuan penghunian rumah sejahtera sebagaimana dimaksud di dalam Peraturan Menteri Pekerjaan Umum dan Perumahan Rakyat.</td>
                        </tr>
                        <tr>
                            <td style={{width: "1cm", paddingLeft:"0.5cm"}}>2.</td> 
                            <td colSpan={2}>Saya menyatakan bahwa:</td>
                        </tr>
                    </tbody>
                </table>

                <table style={{fontSize:"12px", width:"100%", borderSpacing:"0px",textAlign:"justify", paddingLeft:"1cm"}}>
                    <thead></thead>
                    <tbody>
                        <tr>
                            <td style={{width:"0.5cm"}}>
                                -
                            </td>
                            <td>
                                berpenghasilan tidak melebihi ketentuan batas penghasilan kelompok sasaran KPR Bersubsidi;
                            </td>
                        </tr>
                        <tr>
                            <td style={{width:"0.5cm"}}>
                                -
                            </td>
                            <td>
                                saya dan istri/suami*) tidak memiliki rumah;
                            </td>
                        </tr>
                        <tr>
                            <td style={{width:"0.5cm"}}>
                                -
                            </td>
                            <td>
                                saya dan istri/suami*) tidak pernah menerima subsidi kepemilikan rumah.
                            </td>
                        </tr>
                        <tr>
                            <td style={{width:"0.5cm", paddingBottom:"0.50cm"}}>
                                -
                            </td>
                            <td>
                                menggunakan sendiri dan menghuni rumah umum tapak atau sarusun umum sebagai tempat tinggal dalam jangka waktu paling lambat 1 (satu) tahun setelah serah terima rumah.
                            </td>
                        </tr>
                        <tr>
                            <td style={{width:"0.5cm", paddingBottom:"0.70cm"}}>
                                -
                            </td>
                            <td>
                                tidak akan menyewakan dan/atau mengalihkan kepemilikan rumah umum tapak atau sarusun umum dengan bentuk perbuatan hukum apapun, kecuali sesuai dengan ketentuan Peraturan Menteri Pekerjaan Umum dan Perumahan Rakyat.
                            </td>
                        </tr>
                    </tbody>
                </table>

                <table style={{fontSize:"12px", width:"100%", borderSpacing:"0px",textAlign:"justify"}}>
                    <thead></thead>
                    <tbody>
                        <tr>
                            <td style={{width: "1cm", paddingLeft:"0.5cm", paddingBottom:"0.50cm"}}>3.</td> 
                            <td colSpan={2}>Bahwa semua dokumen persyaratan yang disampaikan kepada Bank BTN untuk memperoleh KPR Bersubsidi BTN adalah benar dan dapat dipertanggungjawabkan keabsahannya.</td>
                        </tr>
                        <tr>
                            <td style={{width: "1cm", paddingLeft:"0.5cm", paddingBottom:"1.2cm"}}>4.</td> 
                            <td colSpan={2}>Apabila di kemudian hari pernyataan saya ini tidak benar dan/atau tidak saya penuhi, saya bersedia dan memberikan kuasa kepada Bank BTN untuk menghentikan fasilitas KPR Bersubsidi BTN dan/atau mengubah menjadi KPR BTN Non-Subsidi, setelah Bank BTN menerima surat permintaan penghentian KPR Bersubsidi dari pihak yang berwenang.</td>
                        </tr>
                        <tr>
                            <td style={{width: "1cm", paddingLeft:"0.5cm", paddingBottom:"0.50cm"}}>5.</td> 
                            <td colSpan={2}>Saya bersedia untuk menanggung segala biaya yang meliputi biaya asuransi, biaya pengikatan agunan, dan biaya lainnya yang timbul atas penghentian KPR Bersubsidi BTN.</td>
                        </tr>
                        <tr>
                            <td colSpan={3} style={{height:"1cm"}}>
                                Demikian surat pernyataan ini saya buat dengan sebenar-benarnya tanpa paksaan dari pihak manapun.
                            </td>
                        </tr>
                    </tbody>
                </table>

                <table className={classes.tablePersetujuanTTD} style={{width:"100%", fontSize:"12px"}}>
                    <thead></thead>
                    <tbody>
                        <tr style={{textAlign:"center" , width :"15cm"}}>
                            <td style={{width : "5cm"}}></td>
                            <td style={{width : "5cm"}}>Jagoi Babang, 1 Januari 2022</td>
                        </tr>
                        <tr style={{textAlign:"center" , width :"15cm"}}>
                            <td style={{width : "5cm"}}>Menyetujui,</td>
                            <td style={{width : "5cm"}}>Yang membuat pernyataan,</td>
                        </tr>

                        <tr style={{textAlign:"center" , width :"15cm", height:"1cm"}}>
                            <td style={{width : "5cm"}}></td>
                            <td style={{width : "5cm", paddingTop:"0.5cm",paddingLeft:"1cm"}}> 
                                <p className={classes.materai} style={{width:"2cm"}}>
                                    Meterai
                                    <br></br>
                                    Rp 10.000,-
                                </p>
                                
                            </td>
                        </tr>
                        <tr style={{textAlign:"center", width :"15cm"}}>
                            <td style={{width : "5cm"}}>Nama Pasangan Pemohon</td>
                            <td style={{width : "5cm"}}>Nama Pemohon</td>
                        </tr>

                        <tr>
                            <td colSpan={2} style={{textAlign:"center", paddingTop:"0.5cm"}}> Mengetahui, </td>
                            
                        </tr>
                        <tr>  
                            <td colSpan={2} style={{textAlign:"center"}}>
                                <b>
                                    <p>PT. BANK TABUNGAN NEGARA (PERSERO) Tbk.</p>
                                    <p>KANTOR CABANG ………………………</p>
                                </b>
                            </td>  
                        </tr>
                    </tbody>
                </table>
            </div>


            <div className={classes.wrapHalaman9} style={{paddingTop:"10cm"}}>

                <h3 style={{ textDecorationLine: "underline", textAlign: "center", paddingTop:"0.4cm"}}>
                        SURAT KUASA PENDEBETAN DANA
                </h3>

                <table style={{paddingTop:"0.5cm", fontSize:"12px", width:"100%", borderSpacing:"0px"}}>
                    <thead></thead>
                    <tbody>
                        <tr style={{textalign:"left"}}>
                            <td colSpan={3}>
                                Yang bertanda tangan di bawah ini:
                            </td>
                        </tr>
                         <tr>
                            <td style={{width: "5cm", paddingLeft:"0.5cm"}}>Nama Lengkap</td>
                            <td style={{width: "0.4cm"}}>:</td>     
                            <td>Nama Pemohon</td>
                        </tr>
                        <tr>
                            <td style={{width: "5cm", paddingLeft:"0.5cm"}}>No. KTP</td>
                            <td style={{width: "0.4cm"}}>:</td>   
                            <td >Nomor KTP Pemohon</td>
                        </tr>
                        <tr>
                            <td style={{width: "5cm", paddingLeft:"0.5cm"}}>Tempat, Tanggal Lahir</td>
                            <td style={{width: "0.4cm"}}>:</td>   
                            <td >Tempat, Tanggal Lahir Pemohon</td>
                        </tr>
                        <tr>
                            <td style={{width: "5cm", paddingLeft:"0.5cm"}}>Pekerjaan</td>
                            <td style={{width: "0.4cm"}}>:</td>   
                            <td >Pekerjaan Pemohon</td>
                        </tr>
                        <tr>
                            <td style={{width: "5cm", paddingLeft:"0.5cm"}}>Alamat</td>
                            <td style={{width: "0.4cm"}}>:</td>   
                            <td >Alamat Pemohon</td>
                        </tr>
                        <tr style={{textalign:"left"}}>
                            <td colSpan={3}>
                                Yang dalam hal ini bertindak untuk dan atas nama sendiri. Selanjutnya disebut “Pemberi Kuasa”.
                            </td>
                        </tr>

                        <tr style={{ height:"2cm", textAlign:"justify"}}>
                            <td colSpan={3}>
                                PT. Bank Tabungan Negara (Persero) Tbk., berkedudukan di Jalan Gajah Mada No. 01 Jakarta Pusat 
                                yang dalam hal ini diwakili oleh ……………………………….…………………… selaku ………………………………….………………… di 
                                PT. Bank Tabungan Negara (Persero) Tbk. Kantor Cabang …………………………………...
                                Selanjutnya disebut “Penerima Kuasa”.
                            </td>
                        </tr>

                        <tr style={{height:"2cm", textAlign:"justify"}}>
                            <td colSpan={3}>
                                Dengan ini Pemberi Kuasa memberi kuasa kepada Penerima Kuasa untuk melakukan pendebetan dana pada Nomor Rekening Tabungan 
                                Pemberi Kuasa dengan nomor : .......................................... atas nama (Nama Pemohon) atas biaya asuransi, 
                                biaya pengikatan agunan, dan biaya lainnya yang timbul atas penghentian KPR Bersubsidi BTN yang disebabkan oleh dokumen pernyataan 
                                yang tidak benar dan/atau tidak dipenuhi dalam proses pengajuan dan pelaksanaan KPR Bersubsidi BTN.
                            </td>
                        </tr>

                        <tr style={{height:"1cm", textAlign:"justify"}}>
                            <td colSpan={3}>
                                Kuasa ini diberikan dengan Hak Substitusi, tidak dapat dicabut kembali dan tidak akan berakhir karena sebab-sebab yang 
                                tercantum dalam pasal 1813 Kitab Undang-Undang Hukum Perdata atau karena sebab apapun juga.
                            </td>
                        </tr>
                    </tbody>
                </table>
                
                <table className={classes.tablePersetujuanTTD} style={{width:"100%", fontSize:"12px", paddingTop:"1.5cm"}}>
                    <thead></thead>
                    <tbody>
                        <tr style={{textAlign:"center" , width :"15cm"}}>
                            <td style={{width : "5cm"}}></td>
                            <td style={{width : "5cm"}}>Jagoi Babang, 1 Januari 2022</td>
                        </tr>
                        <tr style={{textAlign:"center" , width :"15cm"}}>
                            <td style={{width : "5cm"}}><b>PENERIMA KUASA</b></td>
                            <td style={{width : "5cm"}}><b>PEMBERI KUASA</b></td>
                        </tr>
                        <tr style={{textAlign:"center" , width :"15cm"}}>
                            <td style={{width : "5cm"}}><b>PT. BANK TABUNGAN NEGARA (PERSERO) Tbk.</b>
                            </td>
                            <td style={{width : "5cm"}}> </td>
                        </tr>
                        <tr style={{textAlign:"center" , width :"15cm"}}>
                            <td style={{width : "5cm"}}><b>KANTOR CABANG …………………</b>
                            </td>
                            <td style={{width : "5cm"}}> </td>
                        </tr>
                        <tr style={{textAlign:"center" , width :"15cm", height:"2cm"}}>
                            <td style={{width : "5cm"}}></td>
                            <td style={{width : "5cm", paddingTop:"1cm",paddingLeft:"1cm"}}> 
                                <p className={classes.materai} style={{width:"2cm"}}>
                                    Meterai
                                    <br></br>
                                    Rp 10.000,-
                                </p>
                                
                            </td>
                        </tr>
                        <tr style={{textAlign:"center", width :"15cm"}}>
                            <td style={{width : "5cm"}}>……………………………………
                                <p color='grey' textalign='center'>
                                    <i>
                                        Nama Lengkap, Jabatan
                                    </i>
                                </p>
                            </td>
                            <td style={{width : "5cm"}}>Nama Pemohon</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className={classes.wrapHalaman10} style={{paddingTop:"12.5cm"}}>

                <h3 style={{ textDecorationLine: "underline", paddingTop:"0.4cm", textAlign:"center"}}>
                    PERSYARATAN KELOMPOK SASARAN
                </h3>

                <div style={{width: "100%", paddingTop:"20px"}}>
                <table className={classes.tabelKelengkapanDokumenKPR} style={{textAlign: "center"}}>
                    <thead></thead>
                    <tbody>
                        <tr style={{backgroundColor:"#85B4DF", textAlign: "center"}}>
                            <td rowSpan={3}><b>NO.</b></td>
                            <td rowSpan={3}><b>PERSYARATAN</b></td>
                            <td colSpan={3}><b>KELOMPOK SASARAN</b></td>
                        </tr>
                        <tr style={{backgroundColor:"#85B4DF", textAlign: "center"}}>
                            <td colSpan={2}><b>KAWIN</b></td>
                            <td rowSpan={2}><b>LAJANG</b></td>
                        </tr>
                        <tr style={{backgroundColor:"#85B4DF", textAlign: "center"}}>
                            <td><b>PEMOHON</b></td>
                            <td><b>PASANGAN</b></td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td style={{textAlign:"left"}}>Kartu Tanda Penduduk (KTP)</td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td style={{textAlign:"left"}}>Kartu Keluarga (KK)</td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td style={{textAlign:"left"}}>Akta Nikah</td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td style={{textAlign:"left"}}>Tidak memiliki rumah *</td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td style={{textAlign:"left"}}>Belum pernah menerima subsidi perolehan rumah berupa pemilikan rumah dari Pemerintah *</td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td style={{textAlign:"left"}}>Nomor Pokok Wajib Pajak (NPWP) **</td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>7</td>
                            <td style={{textAlign:"left"}}>SPT Tahunan PPh Orang Pribadi sesuai peraturan perundang-undangan ***</td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>8</td>
                            <td style={{textAlign:"left"}}>Penghasilan tidak melebihi batas penghasilan yang ditentukan **</td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>9</td>
                            <td style={{textAlign:"left"}}>Surat Pemesanan rumah dari Pengembang yang paling sedikit memuat harga jual rumah dan alamat rumah</td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>10</td>
                            <td style={{textAlign:"left"}}>Surat pernyataan Pemohon</td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>    
                </table>              
            </div>
                <table style={{fontSize:"12px", paddingTop:"1cm"}}>
                    <thead></thead>
                    <tbody>
                        <tr>
                            <td colSpan={2} style={{textDecorationLine:"underline"}}><b>Catatan :</b></td>
                        </tr>
                        <tr>
                            <td style={{textAlign:"center"}}>*</td>
                            <td>dikecualikan untuk PNS/TNI/POLRI yang pindah domisili karena kepentingan dinas dan berlaku hanya sekali.</td>
                        </tr>
                        <tr>
                            <td style={{textAlign:"center"}}>**</td>
                            <td>berstatus kawin hanya dipersyaratkan suami/istri.</td>
                        </tr>
                        <tr>
                            <td style={{textAlign:"center"}}>***</td>
                            <td>dikecualikan untuk penghasilan di bawah PTKP.</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className={classes.wrapHalaman10} style={{paddingTop:"11.5cm"}}>

                <h3 style={{ textDecorationLine: "underline", paddingTop:"0.4cm", textAlign:"center"}}>
                    SURAT PERNYATAAN TIDAK MEMILIKI RUMAH
                </h3>

                <table style={{paddingTop:"0.5cm", fontSize:"12px", width:"100%", borderSpacing:"0px"}}>
                    <thead></thead>
                    <tbody>
                        <tr style={{textalign:"left"}}>
                            <td colSpan={3}>
                                Yang bertanda tangan di bawah ini:
                            </td>
                        </tr>
                         <tr>
                            <td style={{width: "5cm", paddingLeft:"0.5cm"}}>Nama Lengkap</td>
                            <td style={{width: "0.4cm"}}>:</td>     
                            <td>Nama Pemohon</td>
                        </tr>
                        <tr>
                            <td style={{width: "5cm", paddingLeft:"0.5cm"}}>No. KTP</td>
                            <td style={{width: "0.4cm"}}>:</td>   
                            <td >Nomor KTP Pemohon</td>
                        </tr>
                        <tr>
                            <td style={{width: "5cm", paddingLeft:"0.5cm"}}>Tempat, Tanggal Lahir</td>
                            <td style={{width: "0.4cm"}}>:</td>   
                            <td >Tempat, Tanggal Lahir Pemohon</td>
                        </tr>
                        <tr>
                            <td style={{width: "5cm", paddingLeft:"0.5cm"}}>Pekerjaan</td>
                            <td style={{width: "0.4cm"}}>:</td>   
                            <td >Pekerjaan Pemohon</td>
                        </tr>
                        <tr>
                            <td style={{width: "5cm", paddingLeft:"0.5cm"}}>Alamat</td>
                            <td style={{width: "0.4cm"}}>:</td>   
                            <td >Alamat Pemohon</td>
                        </tr>

                        <tr style={{textalign:"left", height:"1cm"}}>
                            <td colSpan={3}>
                                Menyatakan bahwa sampai dengan surat ini dibuat tidak memiliki hak kepemilikan atas rumah.
                            </td>
                        </tr>

                        <tr style={{textAlign:"left", height:"1cm", textalign:"justify"}}>
                            <td colSpan={3}>
                            Demikian surat pernyataan ini saya buat dengan sebenarnya tanpa paksaan dari pihak manapun dan 
                            apabila di kemudian hari pernyataan saya ini tidak benar, saya bersedia mengembalikan Fasilitas
                            Likuiditas Pembiayaan Perumahan yang saya terima.
                            </td>
                        </tr>
                    </tbody>
                </table>

                <table className={classes.tablePersetujuanTTD} style={{width:"100%", fontSize:"12px", paddingTop:"1.5cm"}}>
                    <thead></thead>
                    <tbody>
                        <tr style={{textAlign:"center" , width :"15cm"}}>
                            <td style={{width : "5cm"}}></td>
                            <td style={{width : "5cm"}}>Jagoi Babang, 1 Januari 2022</td>
                        </tr>
                        <tr style={{textAlign:"center" , width :"15cm"}}>
                            <td style={{width : "5cm"}}>Mengetahui,</td>
                            <td style={{width : "5cm"}}>Yang membuat pernyataan,</td>
                        </tr>
                        <tr style={{textAlign:"center" , width :"15cm"}}>
                            <td style={{width : "5cm"}}>Kepala Desa/Lurah,</td>
                            <td style={{width : "5cm"}}> </td>
                        </tr>
                        <tr style={{textAlign:"center" , width :"15cm", height:"2cm"}}>
                            <td style={{width : "5cm"}}></td>
                            <td style={{width : "5cm", paddingTop:"1cm",paddingLeft:"1cm"}}> 
                                <p className={classes.materai} style={{width:"2cm"}}>
                                    Meterai
                                    <br></br>
                                    Rp 10.000,-
                                </p>
                                
                            </td>
                        </tr>
                        <tr style={{textAlign:"center", width :"15cm"}}>
                            <td style={{width : "5cm"}}>……………………………………
                                <p color='grey' textalign='center'>
                                    <i>
                                        Nama Lengkap, Jabatan, dan Stempel
                                    </i>
                                </p>
                            </td>
                            <td style={{width : "5cm"}}>Nama Pemohon</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className={classes.wrapHalaman11} style={{paddingTop:"17cm"}}>

                <h3 style={{ textDecorationLine: "underline", paddingTop:"0.4cm", textAlign:"center"}}>
                    SURAT KUASA
                </h3>

                <table style={{paddingTop:"0.5cm", fontSize:"12px", width:"100%", borderSpacing:"0px"}}>
                    <thead></thead>
                    <tbody>
                        <tr style={{textalign:"left"}}>
                            <td colSpan={5}>
                                Yang bertanda tangan di bawah ini:
                            </td>
                        </tr>
                         <tr>
                            <td style={{width:"0.08cm"}}>I.</td>
                            <td colSpan={2} style={{width: "5cm", paddingLeft:"0.5cm"}}>Nama Lengkap</td>
                            <td style={{width: "0.4cm"}}>:</td>     
                            <td>Nama Pemohon</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td colSpan={2} style={{width: "5cm", paddingLeft:"0.5cm"}}>No. KTP</td>
                            <td style={{width: "0.4cm"}}>:</td>   
                            <td>Nomor KTP Pemohon</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td colSpan={2} style={{width: "5cm", paddingLeft:"0.5cm"}}>Tempat, Tanggal Lahir</td>
                            <td style={{width: "0.4cm"}}>:</td>   
                            <td >Tempat, Tanggal Lahir Pemohon</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td colSpan={2} style={{width: "5cm", paddingLeft:"0.5cm"}}>Pekerjaan</td>
                            <td style={{width: "0.4cm"}}>:</td>   
                            <td>Pekerjaan Pemohon</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td colSpan={2} style={{width: "5cm", paddingLeft:"0.5cm"}}>Alamat</td>
                            <td style={{width: "0.4cm"}}>:</td>   
                            <td>Alamat Pemohon</td>
                        </tr>
                        <tr style={{textalign:"left",height:"0.3cm"}}>
                            <td colSpan={4}> 
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td colSpan={2} style={{width: "5cm", paddingLeft:"0.5cm"}}>No. Rekening Simpanan</td>
                            <td style={{width: "0.4cm"}}>:</td>   
                            <td>……………………………………………………………................................</td>
                        </tr>
                        <tr>
                            <td ></td>
                            <td colSpan={2} style={{width: "5cm", paddingLeft:"0.5cm"}}>No. SP3K</td>
                            <td style={{width: "0.4cm"}}>:</td>   
                            <td>……………………………………………………………................................</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td colSpan={2} style={{width: "5cm", paddingLeft:"0.5cm"}}>Tanggal Akad KPR Bersubsidi</td>
                            <td style={{width: "0.4cm"}}>:</td>   
                            <td>……………………………………………………………................................</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td colSpan={2} style={{width: "5cm", paddingLeft:"0.5cm"}}>Nomor Rekening KPR Bersubsidi</td>
                            <td style={{width: "0.4cm"}}>:</td>   
                            <td>……………………………………………………………................................</td>
                        </tr>
                        <tr style={{textalign:"left"}}>
                            <td></td>
                            <td colSpan={4} style={{width: "5cm", paddingLeft:"0.5cm"}}>
                             Dalam hal ini bertindak untuk dan atas nama sendiri, selanjutnya disebut : <b>“Pemberi Kuasa”.</b>
                            </td>
                        </tr>
                        <tr style={{textalign:"left",height:"0.3cm"}}>
                            <td colSpan={5}> 
                            </td>
                        </tr>
                        <tr>
                            <td style={{width:"0.08cm", paddingBottom:"0.7cm", textAlign:"justify"}}>II.</td>
                            <td colSpan={4} style={{width:"100%", paddingLeft:"0.5cm"}}>
                                PT. Bank Tabungan Negara (Persero) Tbk, berkedudukan di Jalan Gajah Mada No.01 Jakarta Pusat yang 
                                dalam ini di wakili oleh ………………………………... selaku ……..……..…………….……… pada Bank BTN Kantor Cabang 
                                ……………………….… Selanjutnya disebut : <b>“Penerima Kuasa”.</b>
                            </td>
                        </tr>
                        <tr style={{textalign:"left",height:"0.3cm"}}>
                            <td colSpan={5}> 
                            </td>
                        </tr>
                    </tbody>
                </table>

                <table style={{fontSize:"12px", width:"100%", borderSpacing:"0px",textAlign:"justify", paddingTop:"0.3cm"}}>
                    <thead></thead>
                    <tbody>
                        <tr style={{textalign:"left", width:"5cm"}}>
                            <td colSpan={2} >
                                Dengan ini Pemberi Kuasa memberi kuasa kepada Penerima Kuasa untuk melakukan hal-hal sebagai berikut :
                            </td>
                        </tr>
                        <tr>
                            <td style={{width: "1cm", paddingLeft:"0.5cm", paddingBottom:"0.90cm"}}>1.</td> 
                            <td colSpan={2}>Membayarkan sejumlah dana kepada Penjual/Pengembang dari hasil pencairan kredit yang di terima oleh Pemberi Kuasa dari Bank BTN untuk pembayaran lunas harga jual rumah beserta lahan sesuai dengan tujuan pemberian kredit.</td>
                        </tr>
                        <tr>
                            <td style={{width: "1cm", paddingLeft:"0.5cm", paddingBottom:"1.50cm"}}>2.</td> 
                            <td colSpan={2}>Melakukan pemindahbukuan pencairan dana Subsidi Bantuan Uang Muka (SBUM/Dana Bantuan Pembiayaan Perumahan Berbasis Tabungan (BP2BT)* dari rekening simpanan milik Pemberi Kuasa di Bank BTN sebagaimana tersebut di atas senilai Rp……….……...……,-(….…...……..……………………………………) untuk digunakan sebagai pengurangan pokok kredit/pembayaran kekurangan uang muka pembelian Rumah Umum Tapak dalam hal Pemberi Kuasa mendapatkan fasilitas SBUM/Dana BP2BT*.</td>
                        </tr>
                        <tr>
                            <td style={{width: "1cm", paddingLeft:"0.5cm"}}>3.</td> 
                            <td colSpan={2}>Pembayaran dan pemindahbukuan dana sebagaimana dimaksud pada butir 1 dan butir 2 ditunjukkan kepada :</td>
                        </tr>
                    </tbody>
                </table>

                <table style={{fontSize:"12px", width:"100%", borderSpacing:"0px",textalign:"justify", paddingLeft:"1cm"}}>
                    <thead></thead>
                    <tbody>
                        <tr>
                            <td style={{width: "5cm", paddingLeft:"0.5cm"}}>Nama Pengembang</td>
                            <td style={{width: "0.4cm"}}>:</td>     
                            <td><b>PT. BANYUKE INTAN PERMAI</b></td>
                        </tr>
                        <tr>
                            <td style={{width: "5cm", paddingLeft:"0.5cm"}}>No. Rekening</td>
                            <td style={{width: "0.4cm"}}>:</td>   
                            <td><b>01122.01.30.000003.0</b></td>
                        </tr>
                        <tr>
                            <td style={{width: "5cm", paddingLeft:"0.5cm"}}>Rekening Atas Nama</td>
                            <td style={{width: "0.4cm"}}>:</td>   
                            <td><b>PT. Banyuke Intan Permai</b></td>
                        </tr>
                        <tr>
                            <td style={{width: "5cm", paddingLeft:"0.5cm"}}>BTN</td>
                            <td style={{width: "0.4cm"}}>:</td>   
                            <td><b>KCP Singkawang</b></td>
                        </tr>
                    </tbody>
                </table>

                <table style={{fontSize:"12px", width:"100%", borderSpacing:"0px",textAlign:"justify"}}>
                    <thead></thead>
                    <tbody>
                        <tr>
                            <td style={{width: "1cm", paddingLeft:"0.5cm", paddingBottom:"0.50cm"}}>4.</td> 
                            <td colSpan={2}>Memblokir, mendebet dan/atau memindahbukukan dana dari rekening simpanan milik Pemberi Kuasa di Bank BTN sebagaimana tersebut di atas untuk keperluan membayar :</td>
                        </tr>
                    </tbody>
                </table>

                <table style={{fontSize:"12px", width:"100%", borderSpacing:"3px",textAlign:"justify", paddingLeft:"1cm"}}>
                    <thead></thead>
                    <tbody>
                        <tr>
                            <td style={{width:"0.5cm",  paddingLeft:"0.5cm"}}>
                                a.
                            </td>
                            <td>
                                Biaya proses dan/atau pra-realisasi kredit,
                            </td>
                        </tr>
                        <tr>
                            <td style={{width:"0.5cm",  paddingLeft:"0.5cm"}}>
                                b.
                            </td>
                            <td>
                                Angsuran kredit yang meliputi pokok, bunga, denda, dan biaya lainnya; dan
                            </td>
                        </tr>
                        <tr>
                            <td style={{width:"0.5cm",  paddingLeft:"0.5cm", paddingBottom:"0.50cm"}}>
                                c.
                            </td>
                            <td>
                                Biaya asuransi, pengikatan agunan, dan biaya lainnya yang timbul karena terjadinya penghentian KPR Bersubsidi BTN dan/atau perubahan/konversi menjadi KPR Non-Subsidi.
                            </td>
                        </tr>
                    </tbody>
                </table>

                <table style={{fontSize:"12px", width:"100%", borderSpacing:"0px",textAlign:"justify"}}>
                    <thead></thead>
                    <tbody>
                        <tr>
                            <td style={{width: "1cm", paddingLeft:"0.5cm", paddingBottom:"0.80cm"}}>5.</td> 
                            <td colSpan={2}>Pembayaran, pemindahbukuan, pemblokiran, dan/atau pendebetan dana sebagaimana dimaksud pada butir 1 s.d butir 4 di atas dapat dilakukan oleh Bank BTN secara manual, otomatis dan/atau mekanisme transaksi lainnya yang berlaku di Bank BTN.</td>
                        </tr>
                    </tbody>
                </table>

                <table style={{fontSize:"12px", width:"100%", borderSpacing:"0px",textAlign:"justify", paddingTop:"0.3cm"}}>
                    <thead></thead>
                    <tbody>
                        <tr style={{ width:"5cm"}}>
                            <td colSpan={2} >
                                Demikian Surat Kuasa ini diberikan dengan Hak Substitusi, tidak dapat dicabut kembali dan tidak akan berakhir karena sebab-sebab yang tercantum dalam pasal 1813 Kitab Undang-Undang Hukum Perdata atau karena sebab apapun juga.
                            </td>
                        </tr>
                    </tbody>
                </table>

                <table className={classes.tablePersetujuanTTD} style={{width:"100%", fontSize:"12px", paddingTop:"0.8cm"}}>
                    <thead></thead>
                    <tbody>
                        <tr style={{textAlign:"center" , width :"15cm"}}>
                            <td style={{width : "5cm"}}></td>
                            <td style={{width : "5cm"}}>Jagoi Babang, 1 Januari 2022</td>
                        </tr>
                        <tr style={{textAlign:"center" , width :"15cm"}}>
                            <td style={{width : "5cm"}}><b>PENERIMA KUASA</b></td>
                            <td style={{width : "5cm"}}><b>PEMBERI KUASA</b></td>
                        </tr>
                        <tr style={{textAlign:"center" , width :"15cm"}}>
                            <td style={{width : "5cm"}}><b>PT. BANK TABUNGAN NEGARA (PERSERO) Tbk.</b>
                            </td>
                            <td style={{width : "5cm"}}> </td>
                        </tr>
                        <tr style={{textAlign:"center" , width :"15cm"}}>
                            <td style={{width : "5cm"}}><b>KANTOR CABANG …………………</b>
                            </td>
                            <td style={{width : "5cm"}}> </td>
                        </tr>
                        <tr style={{textAlign:"center" , width :"15cm", height:"2cm"}}>
                            <td style={{width : "5cm"}}></td>
                            <td style={{width : "5cm", paddingTop:"1cm",paddingLeft:"1cm"}}> 
                                <p className={classes.materai} style={{width:"2cm"}}>
                                    Meterai
                                    <br></br>
                                    Rp 10.000,-
                                </p>
                                
                            </td>
                        </tr>
                        <tr style={{textAlign:"center", width :"15cm"}}>
                            <td style={{width : "5cm"}}>……………………………………
                                <p color='grey' textalign='center'>
                                    <i>
                                        Nama Lengkap, Jabatan
                                    </i>
                                </p>
                            </td>
                            <td style={{width : "5cm"}}>Nama Pemohon</td>
                        </tr>
                    </tbody>
                </table>            
            </div>

            <div className={classes.wrapHalaman10} style={{paddingTop:"3cm"}}>
                <h3 style={{ textDecorationLine: "underline", paddingTop:"0.4cm", textAlign:"center"}}>
                     SURAT PERNYATAAN CALON DEBITUR KPR BERSUBSIDI BTN
                </h3>

                <table style={{paddingTop:"0.5cm", fontSize:"12px", width:"100%", borderSpacing:"0px"}}>
                    <thead></thead>
                    <tbody>
                        <tr style={{textalign:"left"}}>
                            <td colSpan={3}>
                                Yang bertanda tangan di bawah ini:
                            </td>
                        </tr>
                        <tr>
                            <td style={{width: "5cm", paddingLeft:"0.5cm"}}>Nama Lengkap</td>
                            <td style={{width: "0.4cm"}}>:</td>     
                            <td>Nama Pemohon</td>
                        </tr>
                        <tr>
                            <td style={{width: "5cm", paddingLeft:"0.5cm"}}>No. KTP</td>
                            <td style={{width: "0.4cm"}}>:</td>   
                            <td >Nomor KTP Pemohon</td>
                        </tr>
                        <tr>
                            <td style={{width: "5cm", paddingLeft:"0.5cm"}}>Tempat, Tanggal Lahir</td>
                            <td style={{width: "0.4cm"}}>:</td>   
                            <td >Tempat, Tanggal Lahir Pemohon</td>
                        </tr>
                        <tr>
                            <td style={{width: "5cm", paddingLeft:"0.5cm"}}>Pekerjaan</td>
                            <td style={{width: "0.4cm"}}>:</td>   
                            <td >Pekerjaan Pemohon</td>
                        </tr>
                        <tr>
                            <td style={{width: "5cm", paddingLeft:"0.5cm"}}>Alamat</td>
                            <td style={{width: "0.4cm"}}>:</td>   
                            <td >Alamat Pemohon</td>
                        </tr>
                        <tr style={{textalign:"left"}}>
                            <td colSpan={3}>
                                Selaku pemohon.  
                            </td>
                        </tr>

                        <tr style={{textalign:"left",height:"0.3cm"}}>
                            <td colSpan={3}> 
                            </td>
                        </tr>

                        <tr>
                            <td style={{width: "5cm", paddingLeft:"0.5cm"}}>Nama Lengkap</td>
                            <td style={{width: "0.4cm"}}>:</td>     
                            <td >Nama Pasangan Pemohon</td>
                        </tr>
                        <tr>
                            <td style={{width: "5cm", paddingLeft:"0.5cm"}}>No. KTP</td>
                            <td style={{width: "0.4cm"}}>:</td>   
                            <td >Nomor KTP Pasangan Pemohon</td>
                        </tr>
                        <tr>
                            <td style={{width: "5cm", paddingLeft:"0.5cm"}}>Tempat, Tanggal Lahir</td>
                            <td style={{width: "0.4cm"}}>:</td>   
                            <td >Tempat, Tanggal Lahir Pasangan Pemohon</td>
                        </tr>
                        <tr>
                            <td style={{width: "5cm", paddingLeft:"0.5cm"}}>Pekerjaan</td>
                            <td style={{width: "0.4cm"}}>:</td>   
                            <td >Pekerjaan Pasangan Pemohon</td>
                        </tr>
                        <tr>
                            <td style={{width: "5cm", paddingLeft:"0.5cm"}}>Alamat</td>
                            <td style={{width: "0.4cm"}}>:</td>   
                            <td >Alamat Pasangan Pemohon</td>
                        </tr>
                        <tr style={{textalign:"left"}}>
                            <td colSpan={3}>
                                Selaku suami/istri* pemohon.
                            </td>
                        </tr>
                        <tr style={{textalign:"left",height:"0.3cm"}}>
                            <td colSpan={3}> 
                            </td>
                        </tr>
                    </tbody>
                </table>

                <table style={{fontSize:"12px", width:"100%", borderSpacing:"0px",textAlign:"justify"}}>
                    <thead></thead>
                    <tbody>
                        <tr style={{textalign:"left"}}>
                            <td colSpan={2}>
                                 Menyatakan dengan sesungguhnya bahwa:
                            </td>
                        </tr>
                        <tr>
                            <td style={{width: "1cm", paddingLeft:"0.5cm", paddingBottom:"0.70cm"}}>1.</td> 
                            <td>Telah melaksanakan setiap proses permohonan KPR Bersubsidi BTN sesuai dengan ketentuan Bank BTN dan menyetujui SP3K dimaksud berdasarkan itikad baik, dalam keadaan bebas, mandiri dan tidak di bawah tekanan maupun pengaruh dari pihak lain (independency).</td>
                        </tr>
                        <tr>
                            <td style={{width: "1cm", paddingLeft:"0.5cm", paddingBottom:"0.70cm"}}>2.</td> 
                            <td>Telah menerima dan memahami dengan baik setiap penjelasan yang disampaikan Bank BTN mengenai fasilitas KPR Bersubsidi, hak dan kewajiban kami sebagai Debitur serta kewajiban lainnya sesuai ketentuan peraturan perundang-undangan.</td>
                        </tr>
                        <tr>
                            <td style={{width: "1cm", paddingLeft:"0.5cm", paddingBottom:"0.50cm"}}>3.</td> 
                            <td>Bersedia melakukan aktivasi ulang QR Code setiap tahun hingga tahun ke 5 (lima) sejak akad KPR Bersubsidi BTN sesuai dengan ketentuan Pemerintah.</td>
                        </tr>
                        <tr>
                            <td style={{width: "1cm", paddingLeft:"0.5cm", paddingBottom:"0.40cm"}}>4.</td> 
                            <td>Bersedia memindahkan domisili kependudukan dalam KTP ke alamat agunan paling lambat 1 (satu) tahun sejak akad KPR Bersubsidi BTN.</td>
                        </tr>
                        <tr>
                            <td style={{width: "1cm", paddingLeft:"0.5cm", paddingBottom:"0.50cm"}}>5.</td> 
                            <td>Seluruh dokumen persyaratan yang disampaikan kepada Bank BTN untuk memperoleh fasilitas subsidi adalah benar dan dapat dipertanggungjawabkan keabsahannya baik secara formil maupun materal.</td>
                        </tr>
                        <tr>
                            <td style={{width: "1cm", paddingLeft:"0.5cm", paddingBottom:"0.80cm"}}>6.</td> 
                            <td>Bersedia untuk menanggung segala biaya yang meliputi biaya asuransi, biaya pengikatan agunan, dan biaya lainnya yang timbul karena terjadinya penghentian KPR Bersubsidi BTN dan/atau perubahan/konversi menjadi KPR Non-Subsidi.</td>
                        </tr>
                        <tr>
                            <td style={{width: "1cm", paddingLeft:"0.5cm", paddingBottom:"1.6cm"}}>7.</td> 
                            <td>Tidak akan menjanjikan atau memberikan sesuatu baik secara langsung atau tidak langsung, baik atas inisiatif sendiri maupun orang lain, baik dengan menggunakan sarana elektronik atau tanpa sarana elektronik, baik dalam bentuk uang atau bukan uang seperti hadiah, cinderamata, komisi, pinjaman tanpa bunga, tiket perjalanan, fasilitas penginapan, perjalanan wisata, pengobatan cuma-cuma, hiburan dan fasilitas lainnya atau bentuk lainnya kepada setiap penjabat dan/atau pegawai Bank BTN termasuk anggota keluarga intinya.</td>
                        </tr>
                        <tr>
                            <td style={{width: "1cm", paddingLeft:"0.5cm", paddingBottom:"1.2cm"}}>8.</td> 
                            <td>Apabila dikemudian hari diketahui bahwa pernyataan kami ini dan pernyataan lainnya yang kami sampaikan kepada Bank BTN tidak benar dan/atau tidak saya penuhi, maka saya bersedia mengembalikan seluruh subsidi yang telah saya terima dari Pemerintah, bersedia dikenakan sanksi sesuai dengan ketentuan peraturan perundang-undangan dan bersedia mengubah/mengonversi menjadi KPR Non-Subsidi.</td>
                        </tr>
                    </tbody>
                </table>

                <table className={classes.tablePersetujuanTTD} style={{width:"100%", fontSize:"12px", paddingTop:"0.3cm"}}>
                    <thead></thead>
                    <tbody>
                        <tr style={{textAlign:"center" , width :"15cm"}}>
                            <td style={{width : "5cm"}}></td>
                            <td style={{width : "5cm"}}>Jagoi Babang, 1 Januari 2022</td>
                        </tr>
                        <tr style={{textAlign:"center" , width :"15cm"}}>
                            <td style={{width : "5cm"}}>Menyetujui,</td>
                            <td style={{width : "5cm"}}>Yang membuat pernyataan,</td>
                        </tr>

                        <tr style={{textAlign:"center" , width :"15cm", height:"1cm"}}>
                            <td style={{width : "5cm"}}></td>
                            <td style={{width : "5cm", paddingTop:"0.5cm",paddingLeft:"1cm"}}> 
                                <p className={classes.materai} style={{width:"2cm"}}>
                                    Meterai
                                    <br></br>
                                    Rp 10.000,-
                                </p>
                                
                            </td>
                        </tr>
                        <tr style={{textAlign:"center", width :"15cm"}}>
                            <td style={{width : "5cm"}}>Nama Pasangan Pemohon</td>
                            <td style={{width : "5cm"}}>Nama Pemohon</td>
                        </tr>

                        <tr>
                            <td colSpan={2} style={{textAlign:"center"}}> Mengetahui, </td>
                            
                        </tr>
                        <tr>  
                            <td colSpan={2} style={{textAlign:"center"}}>Pimpinan Tempat Bekerja/Kepala Desa/Lurah*</td>  
                        </tr>
                        <tr>    
                            <td colSpan={2} style={{width : "5cm", textAlign:"center", paddingTop:"1cm"}}>……………………………………
                                <p color='grey' textalign='center'>
                                    <i>
                                        Nama Lengkap, Jabatan dan Stempel
                                    </i>
                                </p>
                            </td>
                        </tr>

                    </tbody>
                </table>
            </div>

            <div className={classes.wrapHalaman11} style={{paddingTop:"5cm"}}>

                <h3 style={{ textDecorationLine: "underline", paddingTop:"0.4cm", textAlign:"center"}}>
                    SURAT PERNYATAAN 
                </h3>

                <table style={{paddingTop:"0.5cm", fontSize:"12px", width:"100%", borderSpacing:"0px"}}>
                    <thead></thead>
                    <tbody>
                        <tr style={{textalign:"left"}}>
                            <td colSpan={3}>
                                Yang bertanda tangan di bawah ini:
                            </td>
                        </tr>
                        <tr>
                            <td style={{width: "5cm", paddingLeft:"0.5cm"}}>Nama Lengkap</td>
                            <td style={{width: "0.4cm"}}>:</td>     
                            <td>Nama Pemohon</td>
                        </tr>
                        <tr>
                            <td style={{width: "5cm", paddingLeft:"0.5cm"}}>No. KTP</td>
                            <td style={{width: "0.4cm"}}>:</td>   
                            <td >Nomor KTP Pemohon</td>
                        </tr>
                        <tr>
                            <td style={{width: "5cm", paddingLeft:"0.5cm"}}>Tempat, Tanggal Lahir</td>
                            <td style={{width: "0.4cm"}}>:</td>   
                            <td >Tempat, Tanggal Lahir Pemohon</td>
                        </tr>
                        <tr>
                            <td style={{width: "5cm", paddingLeft:"0.5cm"}}>Pekerjaan</td>
                            <td style={{width: "0.4cm"}}>:</td>   
                            <td >Pekerjaan Pemohon</td>
                        </tr>
                        <tr>
                            <td style={{width: "5cm", paddingLeft:"0.5cm"}}>Alamat</td>
                            <td style={{width: "0.4cm"}}>:</td>   
                            <td >Alamat Pemohon</td>
                        </tr>
                        <tr style={{textalign:"left"}}>
                            <td colSpan={3}>
                                Selaku pemohon.  
                            </td>
                        </tr>

                        <tr style={{textalign:"left",height:"0.3cm"}}>
                            <td colSpan={3}> 
                            </td>
                        </tr>

                        <tr>
                            <td style={{width: "5cm", paddingLeft:"0.5cm"}}>Nama Lengkap</td>
                            <td style={{width: "0.4cm"}}>:</td>     
                            <td >Nama Pasangan Pemohon</td>
                        </tr>
                        <tr>
                            <td style={{width: "5cm", paddingLeft:"0.5cm"}}>No. KTP</td>
                            <td style={{width: "0.4cm"}}>:</td>   
                            <td >Nomor KTP Pasangan Pemohon</td>
                        </tr>
                        <tr>
                            <td style={{width: "5cm", paddingLeft:"0.5cm"}}>Tempat, Tanggal Lahir</td>
                            <td style={{width: "0.4cm"}}>:</td>   
                            <td >Tempat, Tanggal Lahir Pasangan Pemohon</td>
                        </tr>
                        <tr>
                            <td style={{width: "5cm", paddingLeft:"0.5cm"}}>Pekerjaan</td>
                            <td style={{width: "0.4cm"}}>:</td>   
                            <td >Pekerjaan Pasangan Pemohon</td>
                        </tr>
                        <tr>
                            <td style={{width: "5cm", paddingLeft:"0.5cm"}}>Alamat</td>
                            <td style={{width: "0.4cm"}}>:</td>   
                            <td >Alamat Pasangan Pemohon</td>
                        </tr>
                        <tr style={{textalign:"left"}}>
                            <td colSpan={3}>
                                Selaku suami/istri* pemohon.
                            </td>
                        </tr>
                        <tr style={{textalign:"left",height:"0.3cm"}}>
                            <td colSpan={3}> 
                            </td>
                        </tr>
                    </tbody>
                </table>

                <table style={{fontSize:"12px", width:"100%", borderSpacing:"0px",textAlign:"justify"}}>
                    <thead></thead>
                    <tbody>
                        <tr style={{textalign:"left"}}>
                            <td colSpan={2}>
                                 Menyatakan dengan sesungguhnya bahwa:
                            </td>
                        </tr>
                        <tr>
                            <td style={{width: "1cm", paddingLeft:"0.5cm", paddingBottom:"0.70cm"}}>a)</td> 
                            <td>Kami telah melihat, mengetahui serta menerima kondisi fisik bangun dan jalan lingkungan/masuk, sarana prasarana, drainase/saluran lingkungan atas rumah yang dibeli di lokasi :</td>
                        </tr>
                    </tbody>
                </table>

                <table style={{fontSize:"12px", width:"100%", borderSpacing:"0px",textAlign:"justify", paddingLeft:"1cm"}}>
                    <thead></thead>
                    <tbody>
                        <tr>
                            <td style={{width: "1cm", paddingLeft:"0.5cm"}}>-</td>
                            <td style={{width: "5cm"}}>Nama Perumahan</td>
                            <td style={{width: "0.4cm"}}>:</td>     
                            <td>SEKIDA VILLAGE PERMAI</td>
                        </tr>
                        <tr>
                            <td style={{width: "0.4cm", paddingLeft:"0.5cm"}}>-</td>
                            <td style={{width: "5cm"}}>No. Rumah</td>
                            <td style={{width: "0.4cm"}}>:</td>   
                            <td>(Nomor Rumah)</td>
                        </tr>
                        <tr>
                            <td style={{width: "0.4cm", paddingLeft:"0.5cm"}}>-</td>
                            <td style={{width: "5cm"}}>Developer</td>
                            <td style={{width: "0.4cm"}}>:</td>   
                            <td>PT. BANYUKE INTAN PERMAI</td>
                        </tr>
                    </tbody>
                </table>

                <table style={{fontSize:"12px", width:"100%", borderSpacing:"0px",textAlign:"justify"}}>
                    <thead></thead>
                    <tbody>
                        <tr>
                            <td style={{width: "1cm", paddingLeft:"0.5cm", paddingBottom:"0.70cm"}}>b)</td> 
                            <td>Kami tidak akan mengaitkan kondisi tersebut di atas dengan kewajiban pembayaran angsuran KPR BTN, kami mengetahui bahwa pihak Bank BTN hanya memberikan Fasilitas pinjaman dana untuk pembelian rumah tersebut dan berjanji akan membayar angsuran tertib dan lancar selambat-lambatnya tanggal 07 setiap bulannya</td>
                        </tr>
                    </tbody>
                </table>
    
                <table style={{fontSize:"12px", width:"100%", borderSpacing:"0px",textAlign:"justify", paddingTop:"0.3cm"}}>
                    <thead></thead>
                    <tbody>
                        <tr style={{textalign:"left", width:"5cm"}}>
                            <td colSpan={2} >
                                Demikian  surat  pernyataan  ini  kami buat  dengan  pertimbangan yang baik dan tanpa ada paksaan dari pihak manapun sebelum melakukan akad kredit.
                            </td>
                        </tr>
                    </tbody>
                </table>

                <table className={classes.tablePersetujuanTTD} style={{width:"100%", fontSize:"12px"}}>
                    <thead></thead>
                    <tbody>
                        <tr style={{textAlign:"center" , width :"15cm"}}>
                            <td style={{width : "5cm"}}></td>
                            <td style={{width : "5cm"}}>Jagoi Babang, 1 Januari 2022</td>
                        </tr>
                        <tr style={{textAlign:"center" , width :"15cm"}}>
                            <td style={{width : "5cm"}}>Menyetujui,</td>
                            <td style={{width : "5cm"}}>Yang membuat pernyataan,</td>
                        </tr>

                        <tr style={{textAlign:"center" , width :"15cm", height:"1cm"}}>
                            <td style={{width : "5cm"}}></td>
                            <td style={{width : "5cm", paddingTop:"0.5cm",paddingLeft:"1cm"}}> 
                                <p className={classes.materai} style={{width:"2cm"}}>
                                    Meterai
                                    <br></br>
                                    Rp 10.000,-
                                </p>
                                
                            </td>
                        </tr>
                        <tr style={{textAlign:"center", width :"15cm"}}>
                            <td style={{width : "5cm"}}>Nama Pasangan Pemohon</td>
                            <td style={{width : "5cm"}}>Nama Pemohon</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
});

export default DokumenLanjutanTemplateSurat;