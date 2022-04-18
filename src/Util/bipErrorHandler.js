const bipErrorHandler = (err) => {
    if(err.response) {
        return err.response.data.message
    }else{
        return 'Kesalahan Sistem Harap Hubungi Pihak IT';
    }
}

export default bipErrorHandler;