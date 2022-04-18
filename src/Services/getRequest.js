import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const getRequest = async (url, token, params) => {

    try {
        const response = await axios.get(url, {
            headers: {
                "AUTH-BIP-TOKEN": token
            },
            params: params
        });
        return response;
    } 
    catch(err) {
        if(String(err?.response?.data?.message).toLowerCase() === 'token expired'){
            // localStorage.removeItem('token');
            // console.log(localStorage.getItem('token'))
            err.response.data.message = 'Login Kadaluarsa, Silahkan Refresh Untuk Login Kembali'
            throw err;
        }else{
            throw err;
        }        
    }
}

export default getRequest;