/**
 * @global
 * @typedef {Object} Validation
 * @property {boolean} isValid - Validation result
 * @property {string} message - Validation message
 */

const validation = {
    realNumber: (input) => {
        if(/^[]?(\d+)$/.test(input)){
            return {isValid: true, message: 'Angka'};
        }else{
            return {isValid: false, message: 'Bukan Angka'};
        }
    },
    empty: (input) => {
        if(typeof input === Array){
            if(input.length === 0){
                return {isValid: false, message: 'Kolom tidak boleh kosong'}
            }else{
                return {isValid: true, message: 'Sudah Sesuai'}
            }
        }else{
            if(input === '' || input === null || input === undefined){
                return {isValid: false, message: 'Kolom tidak boleh kosong'}
            }else{
                return {isValid: true, message: 'Sudah Sesuai'}
            }
        }
    },
    nik: (input) => {
        if(!validation.realNumber(input).isValid){
            return {isValid: false, message: 'Input yang di ijinkan hanya angka'};
        }else if(input.length !== 16){
            return {isValid: false, message: 'NIK tidak valid'};
        }else if(!validation.empty(input.trim()).isValid){
            return {isValid: false, message: 'NIK tidak boleh kosong'};
        }

        return {isValid: true, message: 'Sudah Sesuai'};
    }
}

export default validation;