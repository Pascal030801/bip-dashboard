import React, { forwardRef, useRef } from 'react';
import classes from './DokumenPersiapanAkadTemplateSurat.module.css';

const DokumenPersiapanAkadTemplateSurat = forwardRef((props, documentTemplateRef) => {

    return (
        <div className={classes.DokumenPersiapanAkadTemplateSurat} ref={documentTemplateRef}>
            <div className={classes.wrapHalaman1} style={{paddingTop:"0.5cm"}}>

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
                                Dengan ini menyatakan telah mengetahui, memahami dan menerima kondisi Prasarana, Sarana, 
                                dan Utilitas Umum (PSU) dan/atau Dokumen Perizinan Mendirikan Bangunan atas pembelian unit 
                                rumah pada proyek Perumahan SEKIDA VILLAGE PERMAI, Blok (Nomor Rumah), yang dikembangkan oleh 
                                PT. BANYUKE INTAN PERMAI dengan kondisi sebagai berikut:
                            </td>
                        </tr>

                        <tr >
                            <td style={{width: "1cm", paddingLeft:"0.5cm"}}>1.</td> 
                            <td>
                               Kondisi jalan lingkungan masih dalam proses pembangunan/belum selesai
                            </td>
                        </tr>

                        <tr style={{textalign:"left"}}>
                            <td colSpan={2} style={{paddingTop:"0.3cm"}}>
                                Sehubungan dengan hal di atas, kami menyatakan tidak akan mengaitkan penyelesaian kondisi di atas dengan pembayaran angsuran KPR Bersubsidi BTN.
                            </td>
                        </tr>

                        <tr style={{textalign:"left"}}>
                            <td colSpan={2} style={{paddingTop:"0.3cm"}}>
                                Demikian surat pernyataan ini dibuat dan ditandatangani dengan sebenarnya, dan untuk dipergunakan sebagaimana mestinya.
                            </td>
                        </tr>

                    </tbody>
                </table>


                <table className={classes.tablePersetujuanTTD} style={{width:"100%", fontSize:"12px", paddingTop:"0.5cm"}}>
                    <thead></thead>
                    <tbody>

                        <tr style={{textAlign:"center" , width :"15cm"}}>
                            <td style={{width : "5cm"}}></td>
                            <td style={{width : "5cm"}}>Jagoi Babang, 1 Januari 2022</td>
                        </tr>

                        <tr style={{textAlign:"center" , width :"15cm"}}>
                            <td style={{width : "5cm"}}>Yang Menyetujui,</td>
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
                            <td style={{width : "5cm", paddingTop:"0.5cm"}}>(Nama Pasangan Pemohon)</td>
                            <td style={{width : "5cm", paddingTop:"0.5cm"}}>(Nama Pemohon)</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className={classes.wrapHalaman2} style={{paddingTop:"13cm"}}>

                <h3 style={{paddingTop:"0.4cm", textAlign:"center"}}>
                    SURAT PERNYATAAN PEMERIKSAAN KELAIKAN FUNGSI BANGUNAN GEDUNG
                </h3>

                <hr style={{ width: "100%", marginTop: "2px" }} color='black'></hr>

                <table style={{paddingLeft:"4.5cm",fontSize:"11px"}}>
                    <thead></thead>
                    <tbody>

                        <tr>
                            <td style={{width:"4cm"}}>Nomor Surat Pernyataan</td>
                            <td style={{width:"0.2cm"}}>:</td>
                            <td >……………………………….</td>
                        </tr>

                        <tr>
                            <td style={{width:"4cm"}}>Tanggal</td>
                            <td style={{width:"0.2cm"}}>:</td>
                            <td >……………………………….</td>
                        </tr>

                    </tbody>
                </table>

                <table style={{fontSize:"11px",  borderSpacing:"0px", paddingTop:"0.5cm", textAlign:"justify"}}>
                    <thead></thead>
                    <tbody>

                        <tr>
                            <td colSpan={4}>
                                Pada hari ini, ………………… , ………………………….. ,Yang Bertanda tangan di bawah ini,
                                Penyedia Jasa Pengawasan teknis pembina penyelenggara bangunan gedung:
                            </td>
                        </tr>

                        <tr>
                            <td style={{ width: "1cm", paddingLeft:"0.5cm", paddingTop:"0.5cm"}}>
                                a.
                            </td>
                            <td style={{width:"7cm", paddingTop:"0.5cm"}}>
                                Nama Penanggung Jawab
                            </td>
                            <td style={{width:"0.2cm" , paddingTop:"0.5cm"}}>
                                :
                            </td>
                            <td style={{paddingTop:"0.5cm"}}>
                                Suwardi Purnama, ST.
                            </td>
                        </tr>

                        <tr>
                            <td style={{ width: "1cm", paddingLeft:"0.5cm"}}>
                                b.
                            </td>
                            <td style={{width:"7cm"}}>
                                Nama Perusahaan/Instansi Teknis
                            </td>
                            <td style={{width:"0.2cm"}}>
                                :
                            </td>
                            <td>
                                -
                            </td>
                        </tr>

                        <tr>
                            <td colSpan={4} style={{paddingTop:"0.5cm"}}>
                                Telah melaksanakan pemeriksaan kelaikan fungsi bangunan Gedung pada 
                                <p>
                                    1. Bangunan Gedung
                                </p>
                            </td>
                        </tr>

                        
                        <tr>
                            <td style={{ width: "1cm", paddingLeft:"0.5cm"}}>
                                a.
                            </td>
                            <td style={{width:"7cm"}}>
                                Fungsi Utama
                            </td>
                            <td style={{width:"0.2cm"}}>
                                :
                            </td>
                            <td>
                                Tempat Tinggal
                            </td>
                        </tr>

                        <tr>
                            <td style={{ width: "1cm", paddingLeft:"0.5cm"}}>
                                b.
                            </td>
                            <td style={{width:"7cm"}}>
                                Fungsi Tambahan
                            </td>
                            <td style={{width:"0.2cm"}}>
                                :
                            </td>
                            <td>
                                -
                            </td>
                        </tr>

                        <tr>
                            <td style={{ width: "1cm", paddingLeft:"0.5cm"}}>
                                c.
                            </td>
                            <td style={{width:"7cm"}}>
                                Jenis Bangunan Gedung
                            </td>
                            <td style={{width:"0.2cm"}}>
                                :
                            </td>
                            <td>
                                Rumah Tinggal 
                            </td>
                        </tr>

                        <tr>
                            <td style={{ width: "1cm", paddingLeft:"0.5cm"}}>
                                d.
                            </td>
                            <td style={{width:"7cm"}}>
                                Nama Bangunan Gedung
                            </td>
                            <td style={{width:"0.2cm"}}>
                                :
                            </td>
                            <td>
                                SEKIDA VILLAGE PERMAI
                            </td>
                        </tr>

                        <tr>
                            <td style={{ width: "1cm", paddingLeft:"0.5cm"}}>
                                e.
                            </td>
                            <td style={{width:"7cm"}}>
                                Nomor Pendaftaran Bangunan Gedung
                            </td>
                            <td style={{width:"0.2cm"}}>
                                :
                            </td>
                            <td>
                                (Nomor Rumah)
                            </td>
                        </tr>
                        
                        <tr>
                            <td colSpan={4} style={{paddingTop:"0.5cm"}}>
                                2. Lokasi Bangunan Gedung
                            </td>
                        </tr>

                        <tr>
                            <td style={{ width: "1cm", paddingLeft:"0.5cm"}}>
                                a.
                            </td>
                            <td style={{width:"7cm"}}>
                                Kampung
                            </td>
                            <td style={{width:"0.2cm"}}>
                                :
                            </td>
                            <td>
                                -
                            </td>
                        </tr>

                        <tr>
                            <td style={{ width: "1cm", paddingLeft:"0.5cm"}}>
                                b.
                            </td>
                            <td style={{width:"7cm"}}>
                                Desa
                            </td>
                            <td style={{width:"0.2cm"}}>
                                :
                            </td>
                            <td>
                                Sekida
                            </td>
                        </tr>

                        <tr>
                            <td style={{ width: "1cm", paddingLeft:"0.5cm"}}>
                                c.
                            </td>
                            <td style={{width:"7cm"}}>
                                Kecamatan
                            </td>
                            <td style={{width:"0.2cm"}}>
                                :
                            </td>
                            <td>
                                Jagoi Babang
                            </td>
                        </tr>

                        <tr>
                            <td style={{ width: "1cm", paddingLeft:"0.5cm"}}>
                                d.
                            </td>
                            <td style={{width:"7cm"}}>
                                Kabupaten/kota
                            </td>
                            <td style={{width:"0.2cm"}}>
                                :
                            </td>
                            <td>
                                Bengkayang
                            </td>
                        </tr>

                        <tr>
                            <td style={{ width: "1cm", paddingLeft:"0.5cm"}}>
                                e.
                            </td>
                            <td style={{width:"7cm"}}>
                                Provinsi
                            </td>
                            <td style={{width:"0.2cm"}}>
                                :
                            </td>
                            <td>
                                Kalimantan Barat
                            </td>
                        </tr>

                        
                        <tr>
                            <td style={{ width: "1cm", paddingLeft:"0.5cm"}}>
                                f.
                            </td>
                            <td style={{width:"7cm"}}>
                                Alamat Lokasi terletak di
                            </td>
                            <td style={{width:"0.2cm"}}>
                                :
                            </td>
                            <td>
                                Jalan Pararel Aruk-Jagoi
                            </td>
                        </tr>

                        <tr>
                            <td colSpan={4} style={{paddingTop:"0.5cm"}}>
                                3. Permohonan 
                            </td>
                        </tr>

                        <tr>
                            <td style={{ width: "1cm", paddingLeft:"0.5cm"}}>
                                a.
                            </td>
                            <td style={{width:"7cm"}}>
                                Penerbitan Sertifikat Laik Fungsi
                            </td>
                            <td style={{width:"0.2cm"}}>
                                :
                            </td>
                            <td>
                                Nomor …………. Tanggal ……….
                            </td>
                        </tr>

                        <tr>
                            <td style={{ width: "1cm", paddingLeft:"0.5cm"}}>
                                b.
                            </td>
                            <td style={{width:"7cm"}}>
                                Penerbitan Sertifikat Laik Fungsi
                            </td>
                            <td style={{width:"0.2cm"}}>
                                :
                            </td>
                            <td>
                                Nomor …………. Tanggal ……….
                            </td>
                        </tr>

                        <tr>
                            <td style={{ width: "1cm", paddingLeft:"0.5cm"}}>
                                
                            </td>
                            <td style={{width:"7cm"}}>
                                Perpanjang ke
                            </td>
                            <td style={{width:"0.2cm"}}>
                                :
                            </td>
                            <td>
                                
                            </td>
                        </tr>
                    </tbody>
                </table>

                <table style={{fontSize:"11px",  borderSpacing:"0px", paddingTop:"0.5cm", textAlign:"justify"}}>
                    <thead></thead>
                    <tbody>

                        <tr>
                            <td colSpan={4}>
                                Dengan ini menyatakan bahwa :
                            </td>
                        </tr>

                        <tr>
                            <td style={{ width: "1cm", paddingLeft:"0.5cm"}}>
                                1.
                            </td>
                            <td style={{width:"8cm"}}>
                                Persyaratan Administratif 
                            </td>
                            <td style={{width:"0.2cm"}}>
                                :
                            </td>
                            <td>
                                Lengkap
                            </td>
                        </tr>

                        <tr>
                            <td style={{ width: "1cm", paddingLeft:"0.5cm"}}>
                                2.
                            </td>
                            <td colSpan={2} style={{width:"8cm"}}>
                                Persyaratan Teknis
                            </td>
                        </tr>

                        <tr>
                            <td style={{ width: "1cm", paddingLeft:"0.5cm"}}>
                                
                            </td>

                            <td style={{width:"8cm"}}>
                                a. Fungsi Bangunan Gedung
                            </td>

                            <td style={{width:"0.2cm"}}>
                                :
                            </td>

                            <td>
                                Rumah Tinggal
                            </td>
                        </tr>

                        
                        <tr>
                            <td style={{ width: "1cm", paddingLeft:"0.5cm"}}>
                                
                            </td>

                            <td style={{width:"8cm"}}>
                                b. Peruntukan 
                            </td>

                            <td style={{width:"0.2cm"}}>
                                :
                            </td>

                            <td>
                                Tempat Tinggal
                            </td>
                        </tr>

                        <tr>
                            <td style={{ width: "1cm", paddingLeft:"0.5cm"}}>
                                
                            </td>

                            <td style={{width:"8cm"}}>
                                c. Tata Bangunan	
                            </td>

                            <td style={{width:"0.2cm"}}>
                                :
                            </td>

                            <td>
                                Type 36
                            </td>
                        </tr>

                        <tr>
                            <td style={{ width: "1cm", paddingLeft:"0.5cm"}}>
                                
                            </td>

                            <td style={{width:"8cm"}}>
                                d. Kelayakan Fungsi Bangunan Gedung dinyatakan	
                            </td>

                            <td style={{width:"0.2cm"}}>
                                :
                            </td>

                            <td>
                                Lain fungsi seluruhnya
                            </td>
                        </tr>

                        <tr>
                            <td colSpan={4} style={{paddingTop:"0.5cm"}}>
                                Sesuai dengan kesimpulan berdasarkan analisis terhadap daftar simak pemeriksaan kelaikan fungsi bangunan gedung terlampir.
                            </td>
                        </tr>

                        <tr>
                            <td colSpan={4}>
                                Surat pernyataan ini berlaku sepanjang tidak ada perubahan yang dilakukan oleh pemilik/pengguna yang mengubah sistem dana
                                atau spesifikasi atau gangguan penyebab lainnya yang dibuktikan kemudian.
                            </td>
                        </tr>

                        <tr>
                            <td colSpan={4}>
                                Selanjutnya pemilik/pengguna bangunan gedung dapat mengurus permohonan penertiban sertifikat laik Fungsi Bangunan 
                                Gedung.
                            </td>
                        </tr>

                        <tr>
                            <td colSpan={4}>
                                Demikian Surat Pernyataan ini dibuat dengan penuh tanggung jawab dan profesional.
                            </td>
                        </tr>
                    </tbody>
                </table>

                <table className={classes.tabelPersetujuanPemohonTTD} style={{textalign:"center", paddingTop:"0.5cm"}}>
                    <thead></thead>
                    <tbody>
                        <tr>
                            <td style={{width:"5cm"}}>Jagoi Babang, ……………………….2022</td>
                        </tr>
                        <tr>
                            <td>Penyedia Jasa Pengawas,
                                <p>Selaku Penanggung Jawab,</p>
                            </td>
                        </tr>

                        <tr style={{textAlign:"center" , width :"15cm", height:"1cm"}}>
                            
                            <td style={{width : "5cm", paddingTop:"0.7cm",paddingLeft:"1cm"}}> 
                                <p className={classes.materai} style={{width:"2cm"}}>
                                    Meterai
                                    <br></br>
                                    Rp 10.000,-
                                </p>
                
                            </td>
                        </tr>

                        <tr>
                            <td style={{paddingTop:"0.5cm"}}>
                                <b>SUWARDY PURNAWAN, S.T.</b>                  
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className={classes.wrapHalaman3} style={{paddingTop:"8cm"}}>
                <img src={'./surat_pernyataan_pemeriksaan_kelaikan_fungsi_bangunan_gedung_lampiran identitas/KTP_SuwardyPurnawan.jpg'} alt="KTP" className={classes.LampiranDokumen}/>
            </div>

            <div className={classes.wrapHalaman4} style={{paddingTop:"2cm"}}>
                <img src={'./surat_pernyataan_pemeriksaan_kelaikan_fungsi_bangunan_gedung_lampiran identitas/SertifikatKeahlian_SuwardyPurnawan.png'} alt="SertifikatKeahlian" className={classes.LampiranDokumen}/>
            </div>

        </div>
    )
});

export default DokumenPersiapanAkadTemplateSurat;