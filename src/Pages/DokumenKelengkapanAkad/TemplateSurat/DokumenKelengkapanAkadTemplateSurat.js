import React, { forwardRef, useRef } from 'react';
import classes from './DokumenKelengkapanAkadTemplateSurat.module.css';

const DokumenKelengkapanAkadTemplateSurat = forwardRef((props, documentTemplateRef) => {

    return (
        <div className={classes.DokumenKelengkapanAkadTemplateSurat} ref={documentTemplateRef}>
            <div className={classes.wrapHalaman1}>
                 <div className={classes.wrapKop}>
                    <div className={classes.kop}>
                        <img src={'/LogoHD.jpg'} alt="Logo" className={classes.logoPerusahaan} />
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

                    <h3 style={{ textDecorationLine: "underline", textalign: "center", height:"1cm" }}>
                        CHECKLIST
                    </h3>

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
                            <td style={{width:"0.825cm",textalign:"center"}}>
                                <b>E</b>
                            </td>
                            <td style={{width:"13.2cm", fontSize:"14px"}}>
                                <b>Berita Acara Serah Terima Buku Panduan KPR Sejahtera</b>
                            </td>
                            <td style={{width:"0.825cm"}}></td>
                        </tr>
                        <tr>
                            <td style={{width:"0.825cm", textalign:"center"}}>
                                <b>F</b>
                            </td>
                            <td style={{width:"13.2cm", fontSize:"14px"}}>
                                <b>Surat Pernyataan Pemeriksaan Kelaikan Fungsi Bangunan Gedung</b>
                            </td>
                            <td style={{width:"0.825cm"}}></td>
                        </tr>
                        <tr>
                            <td style={{width:"0.825cm", textalign:"center"}}>
                                <b>G</b>
                            </td>
                            <td style={{width:"13.2cm", fontSize:"14px"}}>
                                <b>Foto dokumentasi akad kredit pemohon KPR Bersubsidi BTN</b>
                            </td>
                            <td style={{width:"0.825cm"}}></td>
                        </tr>
                        <tr>
                            <td style={{width:"0.825cm", textalign:"center"}}>
                                <b>H</b>
                            </td>
                            <td style={{width:"13.2cm", fontSize:"14px"}}>
                                <b>Berita Acara Serah Terima (BAST) Rumah Umum Tapak/Sarusun Umum</b>
                            </td>
                            <td style={{width:"0.825cm"}}></td>
                        </tr>
                        <tr>
                            <td style={{width:"0.825cm", textalign:"center"}}>
                                <b>I</b>
                            </td>
                            <td style={{width:"13.2cm", fontSize:"14px"}}>
                                <b>PSU Developer</b>
                            </td>
                            <td style={{width:"0.825cm"}}></td>
                        </tr>
                        <tr>
                            <td style={{width:"0.825cm", textalign:"center"}}>
                                <b>J</b>
                            </td>
                            <td style={{width:"13.2cm", fontSize:"14px"}}>
                                <b>BPHTB dan Pajak-Pajak</b>
                            </td>
                            <td style={{width:"0.825cm"}}></td>
                        </tr>
                        <tr>
                            <td style={{width:"0.825cm", textalign:"center"}}>
                                <b>K</b>
                            </td>
                            <td style={{width:"13.2cm", fontSize:"14px"}}>
                                <b>Fotocopy SP3K</b>
                            </td>
                            <td style={{width:"0.825cm"}}></td>
                        </tr>
                        <tr>
                            <td style={{width:"0.825cm", textalign:"center"}}>
                                <b>L</b>
                            </td>
                            <td style={{width:"13.2cm", fontSize:"14px"}}>
                                <b>Daftar Harga Jual</b>
                            </td>
                            <td style={{width:"0.825cm"}}></td>
                        </tr>
                    </tbody>         
                </table>
            </div>

            
            <div className={classes.wrapHalaman2}>
                <div className={classes.Border}>
                    <h3 style={{ textDecorationLine: "underline", textalign: "center", paddingTop:"0.3cm" }}>
                         BERITA ACARA SERAH TERIMA
                    </h3>
                    <h3 style={{ textDecorationLine: "underline", textalign: "center" }}>
                         BUKU PANDUAN KPR SEJAHTERA (FLPP)
                    </h3>
                    <table style={{paddingTop:"1cm", fontSize:"12px"}}>
                        <thead>
                        </thead>
                        <tbody>
                            <tr style={{textalign:"left", height:"2cm"}}>
                                <td colSpan={3} style={{width:"100%", textAlign:"justify", fontSize:"14px"}}>
                                    Berdasarkan SP3K/PPJB/AJB*) No. .......................... tanggal : ....... ..................... 20….. 
                                    telah dilakukan serah terima pada tanggal ....... ..................... 20….. dari Bank BTN Kantor Cabang 
                                    ………………………..........., selanjutnya disebut <b>“Pihak Pertama”</b>;
                                    <p>
                                        Kepada Debitur KPR Sejahtera:
                                    </p>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    <table style={{fontSize:"12px", width:"100%", borderSpacing:"0px"}}>
                        <thead></thead>
                        <tbody>
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
                                <td style={{width: "5cm", paddingLeft:"0.5cm"}}>Alamat</td>
                                <td style={{width: "0.4cm"}}>:</td>   
                                <td >Alamat Pemohon</td>
                            </tr>
                            <tr>
                                <td style={{width: "5cm", paddingLeft:"0.5cm"}}>No. Telepon/Hp.</td>
                                <td style={{width: "0.4cm"}}>:</td>   
                                <td >No. Telepon/Hp.</td>
                            </tr>
                        </tbody>
                    </table>

                    <table style={{fontSize:"12px"}}>
                        <thead>
                        </thead>
                        <tbody>
                            <tr style={{textalign:"left", height:"1cm"}}>
                                <td colSpan={3} style={{width:"100%", textAlign:"justify", fontSize:"14px"}}>
                                    selanjutnya disebut <b>Pihak Kedua”</b>
                                </td>
                            </tr>
                            <tr style={{textalign:"left", height:"1cm"}}>
                                <td colSpan={3} style={{width:"100%", textAlign:"justify", fontSize:"14px"}}>
                                    Atas 1 (satu) eksemplar Buku Panduan KPR Sejahtera FLPP yang selanjutnya disebut “Obyek Serah Terima”,
                                </td>
                            </tr>
                            <tr style={{textalign:"left", height:"1cm"}}>
                                <td colSpan={3} style={{width:"100%", textAlign:"justify", fontSize:"14px"}}>
                                    bahwa Pihak Pertama telah menyerahkan Obyek Serah Terima kepada Pihak Kedua pada tanggal tersebut di atas.
                                </td>
                            </tr>
                            <tr style={{textalign:"left", height:"1cm"}}>
                                <td colSpan={3} style={{width:"100%", textAlign:"justify", fontSize:"14px"}}>
                                    Demikian berita acara serah terima ini ditandatangani oleh kedua belah pihak dan dapat dipertanggungjawabkan.
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    <table className={classes.tablePersetujuanTTD} style={{width:"100%", fontSize:"12px"}}>
                        <thead></thead>
                        <tbody>
                            <tr style={{textAlign:"center" , width :"15cm"}}>
                                <td style={{width : "5cm"}}>Pihak Pertama,</td>
                                <td style={{width : "5cm"}}>Pihak Kedua,</td>
                            </tr>
                            <tr style={{textAlign:"center" , width :"15cm"}}>
                                <td style={{width : "5cm"}}>
                                    <b>PT BANK TABUNGAN NEGARA (PERSERO) Tbk</b>
                                    <p>
                                        <b>
                                            KANTOR CABANG 
                                        </b>
                                    </p>
                                    <p>
                                        <b>
                                            ………………………
                                        </b>
                                    </p>
                                </td>
                                <td style={{width : "5cm", paddingBottom:"0.5cm"}}>
                                    <b>DEBITUR</b>
                                    <p>
                                        <b>KPR SEJAHTERA FLPP</b>
                                    </p> 

                                </td>
                            </tr>

                            <tr style={{textAlign:"center" , width :"15cm"}}>
                                <td style={{width : "5cm", height:"2cm"}}></td>
                                <td style={{width : "5cm", height:"2cm"}}></td>
                            </tr>

                            <tr style={{textAlign:"center", width :"15cm"}}>
                                <td style={{width : "5cm"}}>(……………………………………)
                                    <p color='grey' textalign='center'>
                                        <i>
                                            Nama Lengkap, Jabatan
                                        </i>
                                    </p>
                                </td>

                                <td style={{width : "5cm"}}>(……………………………………)
                                    <p color='grey' textalign='center'>
                                        <i>
                                            Nama Lengkap
                                        </i>
                                    </p>
                                </td>
                            </tr>

                            <tr style={{width :"15cm"}}>
                                <td style={{width : "5cm"}}>
                                    *) Coret yang tidak perlu
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            
            <div className={classes.wrapHalaman3}>
                <h4 style={{textalign: "center", paddingTop:"0.5cm" }}>
                    SURAT PERNYATAAN KELAIKAN FUNGSI BANGUNAN RUMAH UMUM TAPAK
                </h4>
                <table style={{fontSize:"12px", width:"100%",paddingTop:"1cm", paddingLeft:"0.2cm"}}>
                    <thead></thead>
                    <tbody>
                        <tr>
                            <td style={{width: "2cm"}}>Nomor</td>
                            <td style={{width: "0.4cm"}}>:</td>     
                            <td style={{lineHeight:"0.7"}}>
                                (Nomor Surat)
                                <p>
                                    …………………………………
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td style={{width: "2cm"}}>Tanggal</td>
                            <td style={{width: "0.4cm"}}>:</td>   
                            <td style={{lineHeight:"0.7"}}>
                                (Tanggal)
                                <p>
                                    …………………………………
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td style={{width: "2cm"}}>Lampiran</td>
                            <td style={{width: "0.4cm"}}>:</td>   
                            <td style={{lineHeight:"0.7"}}>
                                (Lampiran)
                                <p>
                                    …………………………………
                                </p>
                            </td>
                        </tr>
                    </tbody>
                </table>

                <table style={{fontSize:"12px", width:"100%", borderSpacing:"0px", paddingTop:"0.5cm"}}>
                    <thead></thead>
                    <tbody>
                        <tr>
                            <td colSpan={4} style={{height:"0.7cm"}}>
                                Pada hari ini, tanggal... bulan... tahun..., yang bertanda tangan di bawah ini ;
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={4} style={{textAlign:"justify", paddingLeft:"0.5cm"}}>
                                Penyedia jasa Pengkaji Teknis/Penyedia jasa Pengawas Konstruksi/Penyedia jasa Manajemen Konstruksi <i>(coret yang tidak perlu)</i>
                            </td>
                        </tr>
                        <tr>
                            <td style={{width: "1cm", paddingLeft:"0.5cm"}}>-</td>
                            <td style={{width: "5cm"}}>Nama Perorangan/Perusahaan/Instansi</td>
                            <td style={{width: "0.4cm"}}>:</td>     
                            <td>SUWARDY PURNAWAN, S.T.</td>
                        </tr>
                        <tr>
                            <td style={{width: "0.4cm", paddingLeft:"0.5cm"}}>-</td>
                            <td style={{width: "5cm"}}>Bidang Keahlian</td>
                            <td style={{width: "0.4cm"}}>:</td>   
                            <td>S-1 TEKNIK SIPIL BANGUNAN GEDUNG</td>
                        </tr>
                        <tr>
                            <td style={{width: "0.4cm", paddingLeft:"0.5cm"}}>-</td>
                            <td style={{width: "5cm"}}>Nomor Sertifikat Keahlian/Badan Usaha</td>
                            <td style={{width: "0.4cm"}}>:</td>   
                            <td>1104293/1.2.201.2.150.14.1002650</td>
                        </tr>
                        <tr>
                            <td style={{width: "0.4cm", paddingLeft:"0.5cm"}}>-</td>
                            <td style={{width: "5cm"}}>Alamat</td>
                            <td style={{width: "0.4cm"}}>:</td>   
                            <td>JL. CEMPAKA, Gg. Hj. RUSTINAH SINGKAWANG TENGAH</td>
                        </tr>
                        <tr>
                            <td style={{width: "0.4cm", paddingLeft:"0.5cm"}}>-</td>
                            <td style={{width: "5cm"}}>Telepon</td>
                            <td style={{width: "0.4cm"}}>:</td>   
                            <td>0812 5706 8494</td>
                        </tr>
                        <tr>
                            <td style={{width: "0.4cm", paddingLeft:"0.5cm"}}>-</td>
                            <td style={{width: "5cm"}}>Email</td>
                            <td style={{width: "0.4cm"}}>:</td>   
                            <td>suwardy_purnawan@yahoo.com</td>
                        </tr>
                    </tbody>
                </table>

                <table style={{fontSize:"12px", paddingTop:"0.5cm", borderSpacing:"0px"}}>
                    <thead></thead>
                    <tbody>
                        <tr>
                            <td colSpan={4} style={{paddingLeft:"0.5cm"}}>
                                Telah melaksanakan Pemeriksaan Kelaikan Fungsi Bangunan Rumah pada:
                            </td>
                        </tr>
                        <tr>
                            <td style={{width: "0.4cm", paddingLeft:"0.5cm"}}>1)</td>
                            <td style={{width: "5cm", paddingLeft:"0.3cm"}}>Nama bangunan</td>
                            <td style={{width: "0.4cm"}}>:</td>   
                            <td>SEKIDA VILLAGE PERMAI</td>
                        </tr>
                        <tr>
                            <td style={{width: "0.4cm", paddingLeft:"0.5cm", paddingBottom:"0.5cm"}}>2)</td>
                            <td style={{width: "5cm", paddingLeft:"0.3cm", paddingBottom:"0.5cm"}}>Alamat bangunan</td>
                            <td style={{width: "0.4cm", paddingBottom:"0.5cm"}}>:</td>   
                            <td>Jalan Pararel Aruk-Jagoi, Desa Sekida, Jagoi Babang, Bengkayang, Provinsi Kalimantan Barat</td>
                        </tr>
                        <tr>
                            <td style={{width: "0.7cm", paddingLeft:"0.5cm"}}>3)</td>
                            <td style={{width: "5cm", paddingLeft:"0.3cm"}}>Posisi koordinat</td>
                            <td style={{width: "0.4cm"}}>:</td>   
                            <td>.....................</td>
                        </tr>
                        <tr>
                            <td style={{width: "0.4cm", paddingLeft:"0.5cm"}}>4)</td>
                            <td style={{width: "5cm", paddingLeft:"0.3cm"}}>Fungsi bangunan</td>
                            <td style={{width: "0.4cm"}}>:</td>   
                            <td>RUMAH TINGGAL</td>
                        </tr>
                        <tr>
                            <td style={{width: "0.4cm", paddingLeft:"0.5cm"}}>5)</td>
                            <td style={{width: "5cm", paddingLeft:"0.3cm"}}>Klasifikasi kompleksitas</td>
                            <td style={{width: "0.4cm"}}>:</td>   
                            <td>.....................</td>
                        </tr>
                        <tr>
                            <td style={{width: "0.4cm", paddingLeft:"0.5cm"}}>6)</td>
                            <td style={{width: "5cm", paddingLeft:"0.3cm"}}>Ketinggian bangunan</td>
                            <td style={{width: "0.4cm"}}>:</td>   
                            <td>4,97 m<sup>2</sup></td>
                        </tr>
                        <tr>
                            <td style={{width: "0.4cm", paddingLeft:"0.5cm"}}>7)</td>
                            <td style={{width: "5cm", paddingLeft:"0.3cm"}}>Jumlah lantai bangunan</td>
                            <td style={{width: "0.4cm"}}>:</td>   
                            <td>1 LANTAI</td>
                        </tr>
                        <tr>
                            <td style={{width: "0.4cm", paddingLeft:"0.5cm"}}>8)</td>
                            <td style={{width: "5cm", paddingLeft:"0.3cm"}}>Luas lantai bangunan</td>
                            <td style={{width: "0.4cm"}}>:</td>   
                            <td>36 m<sup>2</sup></td>
                        </tr>
                        <tr>
                            <td style={{width: "0.4cm", paddingLeft:"0.5cm"}}>9)</td>
                            <td style={{width: "5cm", paddingLeft:"0.3cm"}}>Luas tanah</td>
                            <td style={{width: "0.4cm"}}>:</td>   
                            <td>.....................</td>
                        </tr>
                    </tbody>
                </table>
                
                <table style={{fontSize:"12px", paddingTop:"0.5cm", borderSpacing:"1px"}}>
                    <thead></thead>
                    <tbody>
                        <tr>
                            <td colSpan={4} style={{paddingLeft:"0.5cm"}}>
                                Berdasarkan hasil pemeriksaan persyaratan kelaikan fungsi yang terdiri dari:
                            </td>
                        </tr>
                        <tr>
                            <td style={{width: "0.4cm", paddingLeft:"0.5cm"}}>1)</td>
                            <td colSpan={2} style={{paddingLeft:"0.3cm"}}>Pemeriksaan dokumen administratif Bangunan Gedung;</td>
                        </tr>
                        <tr>
                            <td style={{width: "0.4cm", paddingLeft:"0.5cm"}}>2)</td>
                            <td colSpan={2} style={{paddingLeft:"0.3cm"}}>Pemeriksaan persyaratan teknis Bangunan Gedung, yaitu;</td>
                        </tr>
                    </tbody>
                </table>

                <table style={{fontSize:"12px", borderSpacing:"1px"}}>
                    <thead></thead>
                    <tbody>
                        <tr>
                            <td colSpan={4} style={{paddingLeft:"1.1cm"}}>
                                a. pemeriksaan persyaratan tata bangunan, meliputi:
                            </td>
                        </tr>
                        <tr>
                            <td style={{width: "0.4cm", paddingLeft:"1.4cm", textAlign:"right"}}>i.</td>
                            <td colSpan={2} style={{paddingLeft:"0.3cm"}}>persyaratan peruntukan Bangunan Gedung;</td>
                        </tr>
                        <tr>
                            <td style={{width: "0.4cm", paddingLeft:"1.4cm", textAlign:"right"}}>ii.</td>
                            <td colSpan={2} style={{paddingLeft:"0.3cm"}}>persyaratan intensitas Bangunan Gedung; dan</td>
                        </tr>
                        <tr>
                            <td style={{width: "0.4cm", paddingLeft:"1.4cm", textAlign:"right"}}>iii.</td>
                            <td colSpan={2} style={{paddingLeft:"0.3cm"}}>persyaratan arsitektur Bangunan Gedung;</td>
                        </tr>
                        <tr>
                            <td colSpan={4} style={{paddingLeft:"1.1cm"}}>
                                b. pemeriksaan persyaratan keandalan Bangunan Gedung meliputi:
                            </td>
                        </tr>
                        <tr>
                            <td style={{width: "0.4cm", paddingLeft:"1.4cm", textAlign:"right"}}>i.</td>
                            <td colSpan={2} style={{paddingLeft:"0.3cm"}}>persyaratan keselamatan;</td>
                        </tr>
                        <tr>
                            <td style={{width: "0.4cm", paddingLeft:"1.4cm", textAlign:"right"}}>ii.</td>
                            <td colSpan={2} style={{paddingLeft:"0.3cm"}}>persyaratan kesehatan;</td>
                        </tr>
                        <tr>
                            <td style={{width: "0.4cm", paddingLeft:"1.4cm", textAlign:"right"}}>iii.</td>
                            <td colSpan={2} style={{paddingLeft:"0.3cm"}}>persyaratan kenyamanan; dan</td>
                        </tr>
                        <tr>
                            <td style={{width: "0.4cm", paddingLeft:"1.4cm", textAlign:"right"}}>iv.</td>
                            <td colSpan={2} style={{paddingLeft:"0.3cm"}}>persyaratan kemudahan.</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            
            <div className={classes.wrapHalaman4}>
                <p style={{fontSize:"12px", height:"1cm", paddingTop:"0.5cm"}}>
                    Dengan ini menyatakan bahwa:
                </p>
                <h4 style={{textalign: "center" }}>
                    BANGUNAN RUMAH DINYATAKAN LAIK FUNGSI
                </h4>

                <table style={{fontSize:"12px", paddingTop:"0.5cm", textAlign:"justify"}}>
                    <thead></thead>
                    <tbody>
                        <tr>
                            <td style={{height:"1cm"}}>
                                Sesuai kesimpulan dari analisis  dan evaluasi terhadap hasil pemeriksaan dokumen dan pemeriksaan kondisi Bangunan Rumah sebagaimana termuat dalam Laporan Pemeriksaan Kelaikan Fungsi Bangunan Rumah terlampir.
                            </td>
                        </tr>
                        <tr>
                            <td style={{height:"1cm"}}>
                                Surat pernyataan ini berlaku sepanjang tidak ada perubahan yang dilakukan oleh pemilik Bangunan Rumah/Pengguna Bangunan Rumah terhadap Bangunan Rumah atau penyebab gangguan lainnya yang dibuktikan kemudian.
                            </td>
                        </tr>
                        <tr>
                            <td style={{height:"1cm"}}>
                                Demikian surat pernyataan ini dibuat dengan penuh tanggung jawab profesional sesuai dengan ketentuan dalam Undang-Undang Nomor 2 Tahun 2017 tentang Jasa Konstruksi.
                            </td>
                        </tr>
                    </tbody>
                </table>

                <table className={classes.tabelPersetujuanPemohonTTD} style={{textalign:"center", paddingTop:"1cm"}}>
                    <thead></thead>
                    <tbody>
                        <tr>
                            <td style={{width:"5cm"}}>Jagoi Babang, ……………………….2022</td>
                        </tr>
                        <tr>
                            <td>Pelaksana Pemeriksaan Kelaikan Fungsi,</td>
                        </tr>
                        <tr>
                            <td style={{width:"5.775cm", paddingLeft:"20px", paddingTop:"1.5cm"}}> 
                                <p className={classes.materai} style={{fontSize:"10px", textAlign:"center", width:"2cm", height:"1cm", paddingTop:"0.2cm"}}>
                                    Tanda tangan
                                    <br></br>
                                    Di atas Materai
                                </p>
                                <br></br>
                            </td>
                        </tr>
                        <tr>
                            <td style={{paddingTop:"0.7cm"}}>
                                SUWARDY PURNAWAN, S.T.                  
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            
            <div className={classes.wrapHalaman5}>
                <img src={"./surat_kelaikan_fungsi_bangunan_rumah_umum_tapak_SekidaVillagePermai/Halaman 1.jpg"} className={classes.LampiranDokumen}/>
            </div>

            
            <div className={classes.wrapHalaman6}>
                <img src={"./surat_kelaikan_fungsi_bangunan_rumah_umum_tapak_SekidaVillagePermai/Halaman 2.jpg"} className={classes.LampiranDokumen}/>
            </div>

            
            <div className={classes.wrapHalaman7}>
                <img src={"./surat_kelaikan_fungsi_bangunan_rumah_umum_tapak_SekidaVillagePermai/Halaman 3.jpg"} className={classes.LampiranDokumen}/>
            </div>


            <div className={classes.wrapHalaman8}>
                <img src={"./surat_kelaikan_fungsi_bangunan_rumah_umum_tapak_SekidaVillagePermai/Halaman 4.jpg"} className={classes.LampiranDokumen}/>
            </div>


            <div className={classes.wrapHalaman9}>
                <img src={"./surat_kelaikan_fungsi_bangunan_rumah_umum_tapak_SekidaVillagePermai/Halaman 5.jpg"} className={classes.LampiranDokumen}/>
            </div>


            <div className={classes.wrapHalaman10}>
                <img src={"./surat_kelaikan_fungsi_bangunan_rumah_umum_tapak_SekidaVillagePermai/Halaman 6.jpg"} className={classes.LampiranDokumen}/>
            </div>


            <div className={classes.wrapHalaman11}>
                <img src={"./surat_kelaikan_fungsi_bangunan_rumah_umum_tapak_SekidaVillagePermai/Halaman 7.jpg"} className={classes.LampiranDokumen}/>
            </div>


            <div className={classes.wrapHalaman12}>
                <img src={"./surat_kelaikan_fungsi_bangunan_rumah_umum_tapak_SekidaVillagePermai/Halaman 8.jpg"} className={classes.LampiranDokumen}/>
            </div>


            <div className={classes.wrapHalaman13}>
                <img src={"./surat_kelaikan_fungsi_bangunan_rumah_umum_tapak_SekidaVillagePermai/Halaman 9.jpg"} className={classes.LampiranDokumen}/>
            </div>

            
            <div className={classes.wrapHalaman14}>
                <h3 style={{textalign: "center", paddingTop:"0.5cm"}}>
                    BERITA ACARA SERAH TERIMA
                    <p>
                        RUMAH UMUM TAPAK
                    </p>
                </h3>
                <hr style={{ width: "100%", marginTop: "2px" }} color='black'></hr>

                <p style={{textAlign:"center", fontSize:"12px"}}>
                    Nomor : (Nomor Surat)
                </p>

                <table style={{fontSize:"12px", width:"100%", borderSpacing:"0px", paddingTop:"1cm"}}>
                    <thead></thead>
                    <tbody>
                        <tr>
                            <td colSpan={4} style={{height:"0.7cm", textAlign:"justify"}}>
                                Berdasarkan PPJB/AJB*) ........................... No..................... Tanggal :.................................. 
                                telah dilakukan serah terima pada tanggal, ............................. dari : PT. BANYUKE INTAN PERMAI, selanjutnya disebut <b>“Pihak Pertama”</b>;
                            </td>
                        </tr>

                        <tr>
                            <td colSpan={4} style={{paddingTop:"0.7cm"}}>
                                Kepada pembeli:
                            </td>
                        </tr>
                        
                        <tr>
                            <td style={{width: "0.5cm"}}>1.</td>
                            <td style={{width: "5cm"}}>Nama Lengkap</td>
                            <td style={{width: "0.4cm"}}>:</td>     
                            <td>(Nama Pemohon)</td>
                        </tr>

                        <tr>
                            <td style={{width: "0.5cm"}}>2.</td>
                            <td style={{width: "5cm"}}>No. KTP</td>
                            <td style={{width: "0.4cm"}}>:</td>     
                            <td>(Nomor KTP Pemohon)</td>
                        </tr>

                        <tr>
                            <td style={{width: "0.5cm"}}>3.</td>
                            <td style={{width: "5cm"}}>Alamat</td>
                            <td style={{width: "0.4cm"}}>:</td>     
                            <td>(Alamat Pemohon)</td>
                        </tr>

                        <tr>
                            <td style={{width: "0.5cm"}}>4.</td>
                            <td style={{width: "5cm"}}>No. Telepon/Hp.</td>
                            <td style={{width: "0.4cm"}}>:</td>     
                            <td>(No. Telepon/Hp.)</td>
                        </tr>

                        <tr>
                            <td colSpan={4}>
                                Selanjutnya disebut <b>“Pihak Kedua”</b>
                            </td>
                        </tr>
                    </tbody>
                </table>

                <table style={{fontSize:"12px", width:"100%", borderSpacing:"0px", paddingTop:"0.5cm"}}>
                    <thead></thead>
                    <tbody>

                        <tr>
                            <td colSpan={4}>
                                Atas 1 (Satu) unit Rumah Umum Tapak pada lokasi sebagai berikut:
                            </td>
                        </tr>
                        
                        <tr>
                            <td style={{width: "0.5cm"}}>1.</td>
                            <td style={{width: "5cm"}}>Nama Perumahan</td>
                            <td style={{width: "0.4cm"}}>:</td>     
                            <td>(SEKIDA VILLAGE PERMAI)</td>
                        </tr>

                        <tr>
                            <td style={{width: "0.5cm"}}>2.</td>
                            <td style={{width: "5cm"}}>No. Rumah</td>
                            <td style={{width: "0.4cm"}}>:</td>     
                            <td>(Nomor Rumah)</td>
                        </tr>

                        <tr>
                            <td style={{width: "0.5cm"}}>3.</td>
                            <td style={{width: "5cm"}}>Luas Tanah dan Lantai Tanah</td>
                            <td style={{width: "0.4cm"}}>:</td>     
                            <td>36 / (Luas Tanah)</td>
                        </tr>

                        <tr>
                            <td style={{width: "0.5cm"}}>4.</td>
                            <td style={{width: "5cm"}}>Alamat</td>
                            <td style={{width: "0.4cm"}}>:</td>     
                            <td>Jalan Pararel Aruk-Jagoi, Desa Sekida</td>
                        </tr>

                        <tr>
                            <td style={{width: "0.5cm"}}>5.</td>
                            <td style={{width: "5cm"}}>Kecamatan/Kabupaten/Provinsi</td>
                            <td style={{width: "0.4cm"}}>:</td>     
                            <td>Jagoi Babang / Bengkayang / Kalimantan Barat</td>
                        </tr>

                        <tr>
                            <td colSpan={4}>
                                Selanjutnya disebut <b>“Objek Serah Terima”</b>
                            </td>
                        </tr>
                    </tbody>
                </table>

                <table style={{fontSize:"12px", width:"100%", borderSpacing:"0px", paddingTop:"0.5cm"}}>
                    <thead></thead>
                    <tbody>

                        <tr>
                            <td colSpan={4}>
                                Objek Serah Terima dengan kondisi laik fungsi dan dilengkapi dengan:
                            </td>
                        </tr>
                        
                        <tr>
                            <td style={{width: "0.7cm", paddingLeft:"0.1cm"}}>1.</td>
                            <td colSpan={2}>Jaringan air bersih sudah berfungsi;</td>
                        </tr>

                        <tr>
                            <td style={{width: "0.7cm", paddingLeft:"0.1cm"}}>2.</td>
                            <td colSpan={2}>Jaringan listrik sudah berfungsi;</td>
                        </tr>

                        <tr>
                            <td style={{width: "0.7cm", paddingLeft:"0.1cm"}}>3.</td>
                            <td colSpan={2}>Jalan lingkungan sudah selesai dan berfungsi;</td>
                        </tr>

                        <tr>
                            <td style={{width: "0.7cm", paddingLeft:"0.1cm"}}>4.</td>
                            <td colSpan={2}>Saluran / drainase lingkungan sudah selesai dan berfungsi;</td>
                        </tr>

                        <tr>
                            <td style={{width: "0.7cm", paddingLeft:"0.1cm"}}>5.</td>
                            <td colSpan={2}>Saluran air limbah / air kotor rumah tangga sudah selesai dab berfungsi; dan</td>
                        </tr>

                        <tr>
                            <td style={{width: "0.7cm", paddingLeft:"0.1cm"}}>6.</td>
                            <td colSpan={2}>Sarana pewadahan sampah individual dan tempat pembuangan sampah sementara.</td>
                        </tr>

                        <tr>
                            <td colSpan={4} style={{height:"1cm"}}>
                                Demikian berita acara serah terima ini ditandatangani oleh kedua belah pihak dan dapat dipertanggungjawabkan.
                            </td>
                        </tr>
                    </tbody>
                </table>

                <table className={classes.tablePersetujuanTTD} style={{width:"100%", fontSize:"12px", paddingTop:"1cm"}}>
                    <thead></thead>
                    <tbody>
                        <tr style={{textAlign:"center" , width :"15cm"}}>
                            <td style={{width : "5cm"}}>
                                <b>
                                    PIHAK PERTAMA
                                    <p>
                                        PT. BANYUKE INTAN PERMAI
                                    </p>
                                </b>
                            </td>
                            <td style={{width : "5cm"}}> 
                                <b>
                                    PIHAK KEDUA
                                </b>
                            </td>
                        </tr>
                        

                        <tr style={{textAlign:"center", width :"15cm", height:"4cm"}}>
                            <td style={{width : "5cm"}}>
                                YUDA SISWANTO
                            </td>

                            <td style={{width : "5cm"}}>
                                (Nama Pemohon)
                            </td>
                        </tr> 
                    </tbody>
                </table>
            </div>

            
            <div className={classes.wrapHalaman15}>
                <h3 style={{textalign: "center", paddingTop:"0.5cm"}}>
                    SURAT PERNYATAAN PENYELESAIAN 
                    <p>
                        PRASARANA, SARANA & UTILITAS PERUMAHAN
                    </p>
                </h3>
                <hr style={{ width: "100%", marginTop: "2px" }} color='black'></hr>

                <table style={{paddingTop:"0.5cm", fontSize:"12px", textAlign:"justify"}}>
                    <thead></thead>
                    <tbody>
                        <tr style={{textalign:"left"}}>
                            <td colSpan={3} style={{width:"100%"}}>
                            Saya yang bertanda tangan di bawah ini:
                            </td>
                        </tr>

                        <tr>
                            <td style={{width: "5cm", paddingLeft:"0.5cm"}}>Nama</td>
                            <td style={{width: "0.4cm"}}>:</td>     
                            <td>YUDA SISWANTO</td>
                        </tr>

                        <tr>
                            <td style={{width: "5cm", paddingLeft:"0.5cm"}}>No. KTP</td>
                            <td style={{width: "0.4cm"}}>:</td>   
                            <td>6107040209950001</td>
                        </tr>

                        <tr>
                            <td style={{width: "5cm", paddingLeft:"0.5cm", paddingBottom:"0.4cm"}}>Alamat Kantor</td>
                            <td style={{width: "0.4cm", paddingBottom:"0.4cm"}}>:</td>   
                            <td>Jalan Raya Bengkayang – Sanggau Ledo, Rangkang, Sebalo, Kecamatan Bengkayang, Kabupaten Bengkayang, Kalimantan Barat</td>
                        </tr>

                        <tr>
                            <td style={{width: "5cm", paddingLeft:"0.5cm"}}>No. Telepon /HP</td>
                            <td style={{width: "0.4cm"}}>:</td>   
                            <td>0852 7059 4208</td>
                        </tr>

                        <tr>
                            <td style={{width: "5cm", paddingLeft:"0.5cm", paddingBottom:"0.4cm"}}>Jabatan</td>
                            <td style={{width: "0.4cm", paddingBottom:"0.4cm"}}>:</td>   
                            <td>Direktur utama yang mewakili PT. Banyuke Intan Permai selaku pengembang pada proyek perumahan SEKIDA VILLAGE PERMAI</td>
                        </tr>

                        <tr>
                            <td style={{width: "5cm", paddingLeft:"0.5cm"}}>No. Blok</td>
                            <td style={{width: "0.4cm"}}>:</td>   
                            <td>(Nomor Rumah)</td>
                        </tr>

                    </tbody>
                </table>

                <table style={{paddingTop:"0.5cm", fontSize:"12px", textAlign:"justify"}}>
                    <thead></thead>
                    <tbody>
                        <tr style={{textalign:"left"}}>
                            <td colSpan={2} style={{width:"100%"}}>
                                Menyatakan hal-hal sebagai berikut:
                            </td>
                        </tr>

                        <tr>
                            <td style={{width: "2.5cm", paddingLeft:"0.5cm", paddingBottom:"0.8cm"}}>1.</td>
                            <td>
                                Bahwa rumah sejahtera tapak yang dijual oleh PT. Banyuke Intan Permai dan 
                                diserah terima kepada debitur bank BTN pada saat akad kredit adalah dalam kondisi 
                                siap huni dan telah memenuhi persyaratan teknis keselamatan, keamanan dan kehandaian 
                                bangunan sesuai dengan ketentuan pemerintah yang berlaku.
                            </td>         
                        </tr>

                        <tr>
                            <td style={{width: "1.5cm", paddingLeft:"0.5cm", paddingBottom:"0.8cm"}}>2.</td>
                            <td>
                                Bahwa pada saat surat pernyataan ini ditandatangani, PT. Banyuke Intan Permai telah
                                menyerahkan bukti pembayaran biaya penyambungan listrik dari PLN dan jalan lingkungan 
                                telah dilakukan pengerasan badan jalan dan berfungsi.
                            </td>         
                        </tr>

                        <tr>
                            <td style={{width: "1.5cm", paddingLeft:"0.5cm", paddingBottom:"0.4cm"}}>3.</td>
                            <td>
                                Bahwa PT. Banyuke Intan Permai bersedia menyelesaikan jalan lingkungan paling 
                                lambat 3 (tiga) bulan sejak perjanjian kredit/akad pembiayaan KPR Bersubsidi.
                            </td>         
                        </tr>

                        <tr>
                            <td style={{width: "1.5cm", paddingLeft:"0.5cm", paddingBottom:"0.4cm"}}>4.</td>
                            <td>
                                Bahwa PT. Banyuke Intan Permai bersedia menyediakan dana jaminan kepada Bank BTN 
                                berupa dana yang ditahan (dana retensi) dengan rincian sebagai berikut
                            </td>         
                        </tr>                      
                    </tbody>
                </table>

                <table style={{fontSize:"12px", textAlign:"justify"}}>
                    <thead></thead>
                    <tbody>
                        <tr>
                            <td style={{width: "1.7cm", paddingLeft:"1cm", paddingBottom:"0.4cm"}}>4.1.</td>
                            <td>
                                Dana yang ditahan untuk setiap debitur/unit rumah, berjumlah paling sedikit 2 (dua) kali nilai jalan lingkungan yang belum terselesaikan.
                            </td>         
                        </tr> 

                        <tr>
                            <td style={{width: "1.7cm", paddingLeft:"1cm"}}>4.2.</td>
                            <td>
                                Nilai jalan lingkungan adalah berdasarkan penilaian (apraisal) Bank BTN.
                            </td>         
                        </tr> 

                        <tr>
                            <td style={{width: "1.7cm", paddingLeft:"1cm", paddingBottom:"0.4cm"}}>4.3.</td>
                            <td>
                                Dana yang ditahan diambil dari hasil setiap pencairan KPR Bersubsidi untuk setiap debitur/unit rumah yang jalan lingkungan yang belum terselesaikan.
                            </td>         
                        </tr>

                    </tbody>
                </table>

                <table style={{fontSize:"12px", textAlign:"justify"}}>
                    <thead></thead>
                    <tbody>
                        <tr>
                            <td style={{width: "1cm", paddingLeft:"0.5cm", paddingBottom:"0.7cm"}}>5.</td>
                            <td>
                                Dalam hal PT. Banyuke Intan Permai tidak dapat menyelesaikan kewajiban sebagaimana 
                                dimaksud butir 3 di atas, maka bersedia dan menyetujui dana jaminan sebagaimana dimaksud 
                                butir 4 di atas digunakan oleh Bank BTN untuk memastikan kewajiban penyelesaian jalan 
                                lingkungan dengan ketentuan pemerintah yang berlaku.
                            </td>         
                        </tr>

                        <tr style={{textalign:"left"}}>
                            <td colSpan={2} style={{width:"100%"}}>
                                Surat pernyataan ini adalah bagian yang tidak terpisahkan dari Perjanjian Kerja Sama (PKS) 
                                dengan Bank BTN kantor cabang ………………… tentang penyediaan dukungan KPR BTN Bersubsidi Nomor 
                                ………………….………………………tanggal ………….……………….
                            </td>
                        </tr>

                        <tr style={{textalign:"left"}}>
                            <td colSpan={2} style={{width:"100%"}}>
                                Demikian surat pernyataan ini dibuat dengan sebenarnya tanpa paksaan dari pihak manapun dan 
                                apabila dikemudian hari pernyataan ini tidak benar, maka bersedia menerima konsekuensi sesuai 
                                dengan ketentuan pemerintah dan perundang-undangan yang berlaku.
                            </td>
                        </tr>
                    </tbody>
                </table>

                <table className={classes.tabelPersetujuanPemohonTTD} style={{textalign:"center", paddingTop:"1cm"}}>
                    <thead></thead>
                    <tbody>
                        <tr>
                            <td style={{width:"5cm"}}>Jagoi Babang, ……………………….2022</td>
                        </tr>
                        <tr>
                            <td>Yang membuat pernyataan,,</td>
                        </tr>
                        <tr>
                            <td style={{width:"5.775cm", paddingLeft:"20px", paddingTop:"1.5cm"}}> 
                                <p className={classes.materai} style={{fontSize:"10px", textAlign:"center", width:"2cm", height:"1cm", paddingTop:"0.2cm"}}>
                                Meterai
                                    <br></br>
                                    Rp10.000,-
                                </p>
                                <br></br>
                            </td>
                        </tr>
                        <tr>
                            <td style={{paddingTop:"0.3cm", textDecoration:"underline"}}>
                                YUDA SISWANTO               
                            </td>
                        </tr>
                        <tr>
                            <td>
                                 Direktur          
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            
            <div className={classes.wrapHalaman16}>
                <h3 style={{textalign: "center", textDecorationLine:"underline", paddingTop:"0.5cm"}}>
                    DAFTAR SIMAK
                </h3>

                <table style={{fontSize:"12px", width:"100%", borderSpacing:"3px", paddingTop:"0.8cm", textAlign:"justify"}}>
                    <thead></thead>
                    <tbody>

                        <tr>
                            <td style={{width: "0.5cm", paddingBottom:"0.5cm"}}>1.</td>
                            <td style={{width: "5cm", paddingBottom:"0.5cm"}}>Lokasi</td>
                            <td style={{width: "0.4cm", paddingBottom:"0.5cm"}}>:</td>     
                            <td colSpan={3}>
                                Jalan Pararel Aruk-Jagoi, Desa Sekida, Kecamatan Jagoi Babang, Kabupaten Bengkayang, 
                                Provinsi Kalimantan Barat
                            </td>
                        </tr>

                        <tr>
                            <td style={{width: "0.5cm"}}>2.</td>
                            <td style={{width: "5cm"}}>Bagian</td>
                            <td style={{width: "0.4cm"}}>:</td>     
                            <td colSpan={3}>

                            </td>
                        </tr>

                        <tr>
                            <td style={{width: "0.5cm"}}>3.</td>
                            <td style={{width: "5cm"}}>Tahun Dibangun</td>
                            <td style={{width: "0.4cm"}}>:</td>     
                            <td colSpan={3}>
                                2022
                            </td>
                        </tr>
                        
                        <tr>
                            <td style={{width: "0.5cm"}}>4.</td>
                            <td style={{width: "5cm"}}>Luas (m²)</td>
                            <td style={{width: "0.4cm"}}>:</td>     
                            <td>
                                36 m²
                            </td>
                            <td style={{width: "4cm"}}>Tinggi rata-rata</td>
                            <td style={{width: "0.5cm"}}>:</td>   
                            <td>
                                3,20 m
                            </td> 
                        </tr>
                    </tbody>
                </table>


                <table style={{fontSize:"12px", width:"100%", paddingTop:"0.5cm", borderSpacing:"3px", textAlign:"justify"}}>
                    <thead></thead>
                    <tbody>
                        <tr>
                            <td style={{width: "0.5cm"}}>5.</td>
                            <td style={{width: "5cm"}}>Bahan Bangunan</td>
                            <td style={{width: "0.4cm"}}>:</td>     
                            <td colSpan={3}>
                                <p>
                                    <input className={classes.checkBox} type="checkbox" checked={true} readOnly={true}></input> Balok Beton
                                </p>
                            </td>
                        </tr>

                        <tr>
                            <td style={{width: "0.5cm"}}></td>
                            <td style={{width: "5cm"}}></td>
                            <td style={{width: "0.4cm"}}></td>     
                            <td colSpan={3}>
                                <p>
                                    <input className={classes.checkBox} type="checkbox" checked={false} readOnly={true}></input> Batu Bata
                                </p>
                            </td>
                        </tr>

                        <tr>
                            <td style={{width: "0.5cm"}}></td>
                            <td style={{width: "5cm"}}></td>
                            <td style={{width: "0.4cm"}}></td>     
                            <td colSpan={3}>
                                <p>
                                    <input className={classes.checkBox} type="checkbox" checked={false} readOnly={true}></input> Struktur Kayu
                                </p>
                            </td>
                        </tr>
                    </tbody>
                </table>

                <table style={{fontSize:"12px", width:"100%", paddingTop:"0.5cm", borderSpacing:"3px", textAlign:"justify"}}>
                    <thead></thead>
                    <tbody>
                        <tr>
                            <td style={{width: "0.5cm"}}>6.</td>
                            <td style={{width: "5cm"}}>Tipe</td>
                            <td style={{width: "0.4cm"}}>:</td>     
                            <td style={{width: "3cm"}}>
                                <p>
                                    <input className={classes.checkBox} type="checkbox" checked={false} readOnly={true}></input> Basement
                                </p>
                            </td>
                            <td style={{width: "3cm"}}>
                                <p>
                                    <input className={classes.checkBox} type="checkbox" checked={false} readOnly={true}></input> Crow Space
                                </p>
                            </td>
                            <td >
                                <p>
                                    <input className={classes.checkBox} type="checkbox" checked={false} readOnly={true}></input> Stab
                                </p>
                            </td>
                        </tr>
                    </tbody>
                </table>

                <table style={{fontSize:"12px", width:"100%", paddingTop:"0.5cm", borderSpacing:"3px", textAlign: "justify"}}>
                    <thead></thead>
                    <tbody>
                        <tr>
                            <td style={{width: "0.5cm"}}>7.</td>
                            <td style={{width: "4.2cm"}}>Kerusakan</td>
                            <td style={{width: "3cm", textAlign:"center"}}>Tidak Ada</td>     
                            <td style={{width: "3cm", textAlign:"center"}}>Kecil</td>
                            <td style={{width: "3cm", textAlign:"center"}}>Sedang</td>
                            <td style={{paddingLeft:"0.5cm", textAlign:"center"}}>Besar</td>
                        </tr>

                        <tr>
                            <td style={{width: "0.5cm"}}></td>
                            <td style={{width: "4.2cm"}}>Garis</td>
                            <td style={{width: "3cm", textAlign:"center"}}>
                                <p>
                                    <input className={classes.checkBox} type="checkbox" checked={true} readOnly={true}></input>
                                </p>
                            </td>     
                            <td style={{width: "3cm", textAlign:"center"}}>
                                <p>
                                    <input className={classes.checkBox} type="checkbox" checked={false} readOnly={true}></input>
                                </p>
                            </td>
                            <td style={{width: "3cm", textAlign:"center"}}>
                                <p>
                                    <input className={classes.checkBox} type="checkbox" checked={false} readOnly={true}></input>
                                </p>
                            </td>
                            <td style={{paddingLeft:"0.5cm", textAlign:"center"}}>
                                <p>
                                    <input className={classes.checkBox} type="checkbox" checked={false} readOnly={true}></input>
                                </p>
                            </td>
                        </tr>

                        <tr>
                            <td style={{width: "0.5cm"}}></td>
                            <td style={{width: "4.2cm"}}>Retak Struktur</td>
                            <td style={{width: "3cm", textAlign:"center"}}>
                                <p>
                                    <input className={classes.checkBox} type="checkbox" checked={true} readOnly={true}></input>
                                </p>
                            </td>     
                            <td style={{width: "3cm", textAlign:"center"}}>
                                <p>
                                    <input className={classes.checkBox} type="checkbox" checked={false} readOnly={true}></input>
                                </p>
                            </td>
                            <td style={{width: "3cm", textAlign:"center"}}>
                                <p>
                                    <input className={classes.checkBox} type="checkbox" checked={false} readOnly={true}></input>
                                </p>
                            </td>
                            <td style={{paddingLeft:"0.5cm", textAlign:"center"}}>
                                <p>
                                    <input className={classes.checkBox} type="checkbox" checked={false} readOnly={true}></input>
                                </p>
                            </td>
                        </tr>

                        <tr>
                            <td style={{width: "0.5cm"}}></td>
                            <td style={{width: "4.2cm"}}>Retak Permukaan</td>
                            <td style={{width: "3cm", textAlign:"center"}}>
                                <p>
                                    <input className={classes.checkBox} type="checkbox" checked={true} readOnly={true}></input>
                                </p>
                            </td>     
                            <td style={{width: "3cm", textAlign:"center"}}>
                                <p>
                                    <input className={classes.checkBox} type="checkbox" checked={false} readOnly={true}></input>
                                </p>
                            </td>
                            <td style={{width: "3cm", textAlign:"center"}}>
                                <p>
                                    <input className={classes.checkBox} type="checkbox" checked={false} readOnly={true}></input>
                                </p>
                            </td>
                            <td style={{paddingLeft:"0.5cm", textAlign:"center"}}>
                                <p>
                                    <input className={classes.checkBox} type="checkbox" checked={false} readOnly={true}></input>
                                </p>
                            </td>
                        </tr>

                        <tr>
                            <td style={{width: "0.5cm"}}></td>
                            <td style={{width: "4.2cm"}}>Heaving (Bergelombang) </td>
                            <td style={{width: "3cm", textAlign:"center"}}>
                                <p>
                                    <input className={classes.checkBox} type="checkbox" checked={true} readOnly={true}></input>
                                </p>
                            </td>     
                            <td style={{width: "3cm", textAlign:"center"}}>
                                <p>
                                    <input className={classes.checkBox} type="checkbox" checked={false} readOnly={true}></input>
                                </p>
                            </td>
                            <td style={{width: "3cm", textAlign:"center"}}>
                                <p>
                                    <input className={classes.checkBox} type="checkbox" checked={false} readOnly={true}></input>
                                </p>
                            </td>
                            <td style={{paddingLeft:"0.5cm", textAlign:"center"}}>
                                <p>
                                    <input className={classes.checkBox} type="checkbox" checked={false} readOnly={true}></input>
                                </p>
                            </td>
                        </tr>

                        <tr>
                            <td style={{width: "0.5cm"}}></td>
                            <td style={{width: "4.2cm"}}>Leaks (Bocor) </td>
                            <td style={{width: "3cm", textAlign:"center"}}>
                                <p>
                                    <input className={classes.checkBox} type="checkbox" checked={true} readOnly={true}></input>
                                </p>
                            </td>     
                            <td style={{width: "3cm", textAlign:"center"}}>
                                <p>
                                    <input className={classes.checkBox} type="checkbox" checked={false} readOnly={true}></input>
                                </p>
                            </td>
                            <td style={{width: "3cm", textAlign:"center"}}>
                                <p>
                                    <input className={classes.checkBox} type="checkbox" checked={false} readOnly={true}></input>
                                </p>
                            </td>
                            <td style={{paddingLeft:"0.5cm", textAlign:"center"}}>
                                <p>
                                    <input className={classes.checkBox} type="checkbox" checked={false} readOnly={true}></input>
                                </p>
                            </td>
                        </tr>

                        <tr>
                            <td style={{width: "0.5cm"}}></td>
                            <td style={{width: "4.2cm"}}>Settlement (Penurunan) </td>
                            <td style={{width: "3cm", textAlign:"center"}}>
                                <p>
                                    <input className={classes.checkBox} type="checkbox" checked={true} readOnly={true}></input>
                                </p>
                            </td>     
                            <td style={{width: "3cm", textAlign:"center"}}>
                                <p>
                                    <input className={classes.checkBox} type="checkbox" checked={false} readOnly={true}></input>
                                </p>
                            </td>
                            <td style={{width: "3cm", textAlign:"center"}}>
                                <p>
                                    <input className={classes.checkBox} type="checkbox" checked={false} readOnly={true}></input>
                                </p>
                            </td>
                            <td style={{paddingLeft:"0.5cm", textAlign:"center"}}>
                                <p>
                                    <input className={classes.checkBox} type="checkbox" checked={false} readOnly={true}></input>
                                </p>
                            </td>
                        </tr>

                        <tr>
                            <td style={{width: "0.5cm"}}></td>
                            <td style={{width: "4.2cm"}}>Sill Plate Pot</td>
                            <td style={{width: "3cm", textAlign:"center"}}>
                                <p>
                                    <input className={classes.checkBox} type="checkbox" checked={true} readOnly={true}></input>
                                </p>
                            </td>     
                            <td style={{width: "3cm", textAlign:"center"}}>
                                <p>
                                    <input className={classes.checkBox} type="checkbox" checked={false} readOnly={true}></input>
                                </p>
                            </td>
                            <td style={{width: "3cm", textAlign:"center"}}>
                                <p>
                                    <input className={classes.checkBox} type="checkbox" checked={false} readOnly={true}></input>
                                </p>
                            </td>
                            <td style={{paddingLeft:"0.5cm", textAlign:"center"}}>
                                <p>
                                    <input className={classes.checkBox} type="checkbox" checked={false} readOnly={true}></input>
                                </p>
                            </td>
                        </tr>
                    </tbody>
                </table>

                <table style={{fontSize:"12px", width:"100%", paddingTop:"0.5cm", borderSpacing:"3px", textAlign: "justify"}}>
                    <thead></thead>
                    <tbody>
                    <tr>
                            <td style={{width: "0.5cm"}}>8.</td>
                            <td style={{width: "5.5cm"}}>Kondisi Menyeluruh</td>     
                            <td style={{width: "3cm"}}>
                                <p>
                                    <input className={classes.checkBox} type="checkbox" checked={false} readOnly={true}></input> Kurang
                                </p>
                            </td>
                            <td>
                                <p>
                                    <input className={classes.checkBox} type="checkbox" checked={false} readOnly={true}></input> Sedang
                                </p>
                            </td>
                        </tr>

                        <tr>
                            <td style={{width: "0.5cm"}}></td>
                            <td style={{width: "5.5cm"}}></td>     
                            <td style={{width: "3cm"}}>
                                <p>
                                    <input className={classes.checkBox} type="checkbox" checked={true} readOnly={true}></input> Baik
                                </p>
                            </td>
                            <td>
                                <p>
                                    <input className={classes.checkBox} type="checkbox" checked={false} readOnly={true}></input> Sangat Baik
                                </p>
                            </td>
                        </tr> 
                    </tbody>
                </table>

                <table style={{fontSize:"12px", width:"100%", paddingTop:"0.5cm", borderSpacing:"3px", textAlign:"justify"}}>
                    <thead></thead>
                    <tbody>
                        <tr>
                            <td style={{width: "0.5cm"}}>9.</td>
                            <td style={{width: "5cm"}}>Estimasi Masa Manfaat (Tahun)</td>
                            <td style={{width: "0.1cm"}}>:</td>
                            <td>
                                <p>
                                    Test
                                </p>
                                <hr style={{width:"100%", height:"0.01cm"}}  color='grey'></hr>       
                            </td>  
                        </tr>

                        <tr>
                            <td style={{width: "0.5cm"}}>10.</td>
                            <td style={{width: "5cm"}}>Kesimpulan</td>
                            <td style={{width: "0.1cm"}}>:</td>
                            <td>
                                <p style={{paddingTop:"0.5cm"}}>
                                    Test
                                </p>
                                <br></br>
                                <hr style={{width:"100%", height:"0.01cm"}}  color='grey'></hr>       
                            </td>  
                        </tr>

                        <tr>
                            <td style={{width: "0.5cm"}}>11.</td>
                            <td style={{width: "5cm"}}>Pemeriksa</td>
                            <td style={{width: "0.1cm"}}>:</td>
                            <td style={{width: "4cm", textAlign:"center", paddingRight:"1.5cm"}}>
                                (Tanda Tangan) Tanggal	:
                            </td>    
                        </tr>

                        <tr>
                            <td style={{width: "0.5cm", paddingTop:"1.5cm"}}></td>
                            <td style={{width: "5cm", paddingTop:"1.5cm"}}></td>
                            <td style={{width: "0.1cm", paddingTop:"1.5cm"}}></td>
                            <td style={{width: "9cm", paddingTop:"1.5cm"}}>SUWARDY PURNAWAN, S.T.</td>  
                        </tr>

                        <tr>
                            <td style={{width: "0.5cm"}}>12.</td>
                            <td style={{width: "5cm"}}>Blok</td>
                            <td style={{width: "0.1cm"}}>:</td>
                            <td>
                                <p>
                                    (Nomor Rumah)
                                </p>
                                <hr style={{width:"100%", height:"0.01cm"}}  color='grey'></hr>       
                            </td>  
                        </tr>
                    </tbody>
                </table>

                <table className={classes.tabelPersetujuanPemohonTTD} style={{textalign:"center", paddingTop:"1cm"}}>
                    <thead></thead>
                    <tbody>
                        <tr>
                            <td style={{width:"5cm"}}>Jagoi Babang, ……………………….2022</td>
                        </tr>
                        <tr>
                            <td>
                                Disetujui,
                                <p>
                                    Penyedia Jasa Pengawas,
                                </p>
                            </td>
                        </tr>
                        
                        <tr>
                            <td style={{paddingTop:"2cm"}}>
                                <b>SUWARDY PURNAWAN, S.T. </b>                 
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            
            <div className={classes.wrapHalaman17}>
                 <div className={classes.wrapKop} style={{paddingTop:"0.5cm"}}>
                    <div className={classes.kop}>
                        <img src={'/LogoHD.jpg'} alt="Logo" className={classes.logoPerusahaan} />
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
        
                <h3 style={{ textDecorationLine: "underline", textalign: "center" }}>
                    DAFTAR HARGA RUMAH
                </h3>

                <div className={classes.wraptabelHarga}>
                    <div className={classes.DaftarHarga}>             
                    <table className={classes.tabelHarga} style={{ fontSize:"10px"}}>
                        <thead></thead> 
                        <tbody>
                            <tr>
                                <td style={{width:"1.5cm"}}>No. Unit</td>
                                <td style={{width:"1.5cm"}}>No. SHM</td>
                                <td style={{width:"2.5cm"}}>Harga Jual</td>
                            </tr>

                            <tr>
                                <td>A01</td>
                                <td>1460</td>
                                <td>Rp. 164.500.000</td>
                            </tr>

                            <tr>
                                <td>A02</td>
                                <td>1459</td>
                                <td>Rp. 164.500.000</td>
                            </tr>

                            <tr>
                                <td>A03</td>
                                <td>1458</td>
                                <td>Rp. 164.500.000</td>
                            </tr>

                            <tr>
                                <td>A04</td>
                                <td>1457</td>
                                <td>Rp. 164.500.000</td>
                            </tr>

                            <tr>
                                <td>A05</td>
                                <td>1456</td>
                                <td>Rp. 164.500.000</td>
                            </tr>

                            <tr>
                                <td>A06</td>
                                <td>1455</td>
                                <td>Rp. 164.500.000</td>
                            </tr>

                            <tr>
                                <td>A07</td>
                                <td>1454</td>
                                <td>Rp. 164.500.000</td>
                            </tr>

                            <tr>
                                <td>A08</td>
                                <td>1465</td>
                                <td>Rp. 164.500.000</td>
                            </tr>

                            <tr>
                                <td>A09</td>
                                <td>1464</td>
                                <td>Rp. 164.500.000</td>
                            </tr>

                            <tr>
                                <td>A10</td>
                                <td>1463</td>
                                <td>Rp. 164.500.000</td>
                            </tr>

                            <tr>
                                <td>A11</td>
                                <td>1462</td>
                                <td>Rp. 164.500.000</td>
                            </tr>

                            <tr>
                                <td>A12</td>
                                <td>1461</td>
                                <td>Rp. 164.500.000</td>
                            </tr>

                            <tr>
                                <td>A13</td>
                                <td>1471</td>
                                <td>Rp. 164.500.000</td>
                            </tr>

                            <tr>
                                <td>A14</td>
                                <td>1470</td>
                                <td>Rp. 164.500.000</td>
                            </tr>

                            <tr>
                                <td>A15</td>
                                <td>1469</td>
                                <td>Rp. 164.500.000</td>
                            </tr>

                            <tr>
                                <td>A16</td>
                                <td>1468</td>
                                <td>Rp. 164.500.000</td>
                            </tr>

                            <tr>
                                <td>A17</td>
                                <td>1467</td>
                                <td>Rp. 164.500.000</td>
                            </tr>

                            <tr>
                                <td>A18</td>
                                <td>1475</td>
                                <td>Rp. 164.500.000</td>
                            </tr>

                            <tr>
                                <td>A19</td>
                                <td>1474</td>
                                <td>Rp. 164.500.000</td>
                            </tr>

                            <tr>
                                <td>A20</td>
                                <td>1473</td>
                                <td>Rp. 164.500.000</td>
                            </tr>

                            <tr>
                                <td>A21</td>
                                <td>1472</td>
                                <td>Rp. 164.500.000</td>
                            </tr>

                            <tr>
                                <td>A22</td>
                                <td>1479</td>
                                <td>Rp. 164.500.000</td>
                            </tr>

                            <tr>
                                <td>A23</td>
                                <td>1478</td>
                                <td>Rp. 164.500.000</td>
                            </tr>

                            <tr>
                                <td>A24</td>
                                <td>1477</td>
                                <td>Rp. 164.500.000</td>
                            </tr>

                            <tr>
                                <td>A25</td>
                                <td>1481</td>
                                <td>Rp. 164.500.000</td>
                            </tr>

                            <tr>
                                <td>A26</td>
                                <td>1480</td>
                                <td>Rp. 164.500.000</td>
                            </tr>

                            <tr>
                                <td>A27</td>
                                <td>1484</td>
                                <td>Rp. 164.500.000</td>
                            </tr>

                            <tr>
                                <td>A28</td>
                                <td>1483</td>
                                <td>Rp. 164.500.000</td>
                            </tr>

                            <tr>
                                <td>B01</td>
                                <td>1498</td>
                                <td>Rp. 164.500.000</td>
                            </tr>

                            <tr>
                                <td>B02</td>
                                <td>1497</td>
                                <td>Rp. 164.500.000</td>
                            </tr>

                            <tr>
                                <td>B03</td>
                                <td>1496</td>
                                <td>Rp. 164.500.000</td>
                            </tr>

                            <tr>
                                <td>B04</td>
                                <td>1495</td>
                                <td>Rp. 164.500.000</td>
                            </tr>

                            <tr>
                                <td>B05</td>
                                <td>1494</td>
                                <td>Rp. 164.500.000</td>
                            </tr>

                            <tr>
                                <td>B06</td>
                                <td>1493</td>
                                <td>Rp. 164.500.000</td>
                            </tr>

                            <tr>
                                <td>B07</td>
                                <td>1492</td>
                                <td>Rp. 164.500.000</td>
                            </tr>

                            <tr>
                                <td>B08</td>
                                <td>1491</td>
                                <td>Rp. 164.500.000</td>
                            </tr>

                            <tr>
                                <td>B09</td>
                                <td>1490</td>
                                <td>Rp. 164.500.000</td>
                            </tr>

                            <tr>
                                <td>B10</td>
                                <td>1489</td>
                                <td>Rp. 164.500.000</td>
                            </tr>

                            <tr>
                                <td>B11</td>
                                <td>1488</td>
                                <td>Rp. 164.500.000</td>
                            </tr>

                            <tr>
                                <td>B12</td>
                                <td>1487</td>
                                <td>Rp. 164.500.000</td>
                            </tr>

                            <tr>
                                <td>B13</td>
                                <td>1486</td>
                                <td>Rp. 164.500.000</td>
                            </tr>

                            <tr>
                                <td>B14</td>
                                <td>1485</td>
                                <td>Rp. 164.500.000</td>
                            </tr>

                            <tr>
                                <td>B15</td>
                                <td>1511</td>
                                <td>Rp. 164.500.000</td>
                            </tr>

                            <tr>
                                <td>B16</td>
                                <td>1510</td>
                                <td>Rp. 164.500.000</td>
                            </tr>

                            <tr>
                                <td>B17</td>
                                <td>1509</td>
                                <td>Rp. 164.500.000</td>
                            </tr>

                            <tr>
                                <td>B18</td>
                                <td>1508</td>
                                <td>Rp. 164.500.000</td>
                            </tr>

                            <tr>
                                <td>B19</td>
                                <td>1507</td>
                                <td>Rp. 164.500.000</td>
                            </tr>                          

                        </tbody>
                    </table>

                    <table className={classes.tabelHarga} style={{fontSize:"10px"}}>
                        <thead></thead> 
                        <tbody>
                            <tr>
                                <td style={{width:"1.5cm"}}>No. Unit</td>
                                <td style={{width:"1.5cm"}}>No. SHM</td>
                                <td style={{width:"2.5cm"}}>Harga Jual</td>
                            </tr>

                            <tr>
                                <td>B20</td>
                                <td>1506</td>
                                <td>Rp. 164.500.000</td>
                            </tr>

                            <tr>
                                <td>B21</td>
                                <td>1505</td>
                                <td>Rp. 164.500.000</td>
                            </tr>

                            <tr>
                                <td>B22</td>
                                <td>1504</td>
                                <td>Rp. 164.500.000</td>
                            </tr>

                            <tr>
                                <td>B23</td>
                                <td>1503</td>
                                <td>Rp. 164.500.000</td>
                            </tr>

                            <tr>
                                <td>B24</td>
                                <td>1502</td>
                                <td>Rp. 164.500.000</td>
                            </tr>

                            <tr>
                                <td>B25</td>
                                <td>1501</td>
                                <td>Rp. 164.500.000</td>
                            </tr>

                            <tr>
                                <td>B26</td>
                                <td>1500</td>
                                <td>Rp. 164.500.000</td>
                            </tr>

                            <tr>
                                <td>B27</td>
                                <td>1599</td>
                                <td>Rp. 164.500.000</td>
                            </tr>

                            <tr>
                                <td>C01</td>
                                <td>1523</td>
                                <td>Rp. 164.500.000</td>
                            </tr>
                            
                            <tr>
                                <td>C02</td>
                                <td>1522</td>
                                <td>Rp. 164.500.000</td>
                            </tr>

                            <tr>
                                <td>C03</td>
                                <td>1521</td>
                                <td>Rp. 164.500.000</td>
                            </tr>

                            <tr>
                                <td>C04</td>
                                <td>1520</td>
                                <td>Rp. 164.500.000</td>
                            </tr>

                            <tr>
                                <td>C05</td>
                                <td>1519</td>
                                <td>Rp. 164.500.000</td>
                            </tr>

                            <tr>
                                <td>C06</td>
                                <td>1518</td>
                                <td>Rp. 164.500.000</td>
                            </tr>

                            <tr>
                                <td>C07</td>
                                <td>1517</td>
                                <td>Rp. 164.500.000</td>
                            </tr>

                            <tr>
                                <td>C08</td>
                                <td>1516</td>
                                <td>Rp. 164.500.000</td>
                            </tr>

                            <tr>
                                <td>C09</td>
                                <td>1515</td>
                                <td>Rp. 164.500.000</td>
                            </tr>

                            <tr>
                                <td>C10</td>
                                <td>1514</td>
                                <td>Rp. 164.500.000</td>
                            </tr>

                            <tr>
                                <td>C11</td>
                                <td>1513</td>
                                <td>Rp. 164.500.000</td>
                            </tr>

                            <tr>
                                <td>C12</td>
                                <td>1512</td>
                                <td>Rp. 164.500.000</td>
                            </tr>

                            <tr>
                                <td>C13</td>
                                <td>1534</td>
                                <td>Rp. 164.500.000</td>
                            </tr>

                            <tr>
                                <td>C14</td>
                                <td>1533</td>
                                <td>Rp. 164.500.000</td>
                            </tr>

                            <tr>
                                <td>C15</td>
                                <td>1532</td>
                                <td>Rp. 164.500.000</td>
                            </tr>

                            <tr>
                                <td>C16</td>
                                <td>1531</td>
                                <td>Rp. 164.500.000</td>
                            </tr>

                            <tr>
                                <td>C17</td>
                                <td>1530</td>
                                <td>Rp. 164.500.000</td>
                            </tr>

                            <tr>
                                <td>C18</td>
                                <td>1529</td>
                                <td>Rp. 164.500.000</td>
                            </tr>

                            <tr>
                                <td>C19</td>
                                <td>1528</td>
                                <td>Rp. 164.500.000</td>
                            </tr>

                            <tr>
                                <td>C20</td>
                                <td>1527</td>
                                <td>Rp. 164.500.000</td>
                            </tr>

                            <tr>
                                <td>C21</td>
                                <td>1526</td>
                                <td>Rp. 164.500.000</td>
                            </tr>

                            <tr>
                                <td>C22</td>
                                <td>1525</td>
                                <td>Rp. 164.500.000</td>
                            </tr>

                            <tr>
                                <td>C23</td>
                                <td>1524</td>
                                <td>Rp. 164.500.000</td>
                            </tr>

                            <tr>
                                <td>D01</td>
                                <td>1549</td>
                                <td>Rp. 164.500.000</td>
                            </tr>

                            <tr>
                                <td>D02</td>
                                <td>1548</td>
                                <td>Rp. 164.500.000</td>
                            </tr>

                            <tr>
                                <td>D03</td>
                                <td>1547</td>
                                <td>Rp. 164.500.000</td>
                            </tr>

                            <tr>
                                <td>D04</td>
                                <td>1546</td>
                                <td>Rp. 164.500.000</td>
                            </tr>

                            <tr>
                                <td>D05</td>
                                <td>1545</td>
                                <td>Rp. 164.500.000</td>
                            </tr>

                            <tr>
                                <td>D06</td>
                                <td>1544</td>
                                <td>Rp. 164.500.000</td>
                            </tr>

                            <tr>
                                <td>D07</td>
                                <td>1543</td>
                                <td>Rp. 164.500.000</td>
                            </tr>

                            <tr>
                                <td>D08</td>
                                <td>1540</td>
                                <td>Rp. 164.500.000</td>
                            </tr>

                            <tr>
                                <td>D09</td>
                                <td>1541</td>
                                <td>Rp. 164.500.000</td>
                            </tr>

                            <tr>
                                <td>D10</td>
                                <td>1542</td>
                                <td>Rp. 164.500.000</td>
                            </tr>

                            <tr>
                                <td>D11</td>
                                <td>1539</td>
                                <td>Rp. 164.500.000</td>
                            </tr>

                            <tr>
                                <td>D12</td>
                                <td>1538</td>
                                <td>Rp. 164.500.000</td>
                            </tr>

                            <tr>
                                <td>D13</td>
                                <td>1537</td>
                                <td>Rp. 164.500.000</td>
                            </tr>

                            <tr>
                                <td>D14</td>
                                <td>1535</td>
                                <td>Rp. 164.500.000</td>
                            </tr>

                            <tr>
                                <td>D15</td>
                                <td>1536</td>
                                <td>Rp. 164.500.000</td>
                            </tr>
                            
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

        </div>
    )
});

export default DokumenKelengkapanAkadTemplateSurat;