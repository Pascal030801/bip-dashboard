import React, { forwardRef, useRef } from 'react';
import classes from './DokumenPengajuanTemplateSurat.module.css';

const DokumenPengajuanTemplateSurat = forwardRef((props, documentTemplateRef) => {

    return (
        <div className={classes.DokumenPengajuanTemplateSurat} ref={documentTemplateRef}>
            <div className={classes.kop}>
                <img src='/LogoHD.jpg' className={classes.logoPerusahaan} />
                <div className={classes.kop_title}>
                    <h1>
                        PT. BANYUKE INTAN PERMAI
                    </h1>
                    <p>
                        Developer & Kontraktor
                    </p>
                    <p>
                        Alamat: Jln. Affandi A. Rani / Jalur II No. 7 Rt. 005/Rw. 002 Desa Hilir Tengah Kec. Ngabang, Kab. Landak - 78357
                    </p>
                    <p>
                        Telp/Hp: 0812 5672 421
                    </p>
                </div>
            </div>
        </div>
    )
});

export default DokumenPengajuanTemplateSurat;