import React, { forwardRef, useRef } from 'react';
import classes from './DokumenKelengkapanAkadTemplateSurat.module.css';

const DokumenKelengkapanAkadTemplateSurat = forwardRef((props, documentTemplateRef) => {

    return (
        <div className={classes.DokumenKelengkapanAkadTemplateSurat} ref={documentTemplateRef}>
            Dokumen Kelengkapan Akad Template Surat
        </div>
    )
});

export default DokumenKelengkapanAkadTemplateSurat;