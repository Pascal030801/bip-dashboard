import React, { forwardRef, useRef } from 'react';
import classes from './DokumenLanjutanTemplateSurat.module.css';

const DokumenLanjutanTemplateSurat = forwardRef((props, documentTemplateRef) => {

    return (
        <div className={classes.DokumenLanjutanTemplateSurat} ref={documentTemplateRef}>
            Dokumen Lanjutan Template Surat
        </div>
    )
});

export default DokumenLanjutanTemplateSurat;