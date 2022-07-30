import React, { forwardRef, useRef } from 'react';
import classes from './DokumenPersiapanAkadTemplateSurat.module.css';

const DokumenPersiapanAkadTemplateSurat = forwardRef((props, documentTemplateRef) => {

    return (
        <div className={classes.DokumenPersiapanAkadTemplateSurat} ref={documentTemplateRef}>
            Dokumen Persiapan Akad Template Surat
        </div>
    )
});

export default DokumenPersiapanAkadTemplateSurat;