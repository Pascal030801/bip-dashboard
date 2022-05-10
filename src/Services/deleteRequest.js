import axios from 'axios';

const deleteRequest = async (url, token, params) => {
    try {
        const response = await axios.delete(url, {
            headers: {
                "AUTH-BIP-TOKEN": token
            },
            params: params
        });
        return response;
    } catch(err) {
        if(String(err?.response?.data?.message).toLowerCase() === 'token expired'){
            localStorage.removeItem('token');
            err.response.data.message = 'Login Kadaluarsa, Silahkan Muat Ulang Halaman Untuk Login Kembali'
            throw err;
        }else{
            throw err;
        }
    }
}

export default deleteRequest;