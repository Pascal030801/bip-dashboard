import axios from 'axios';

const getRequest = async (url, token, params) => {
    try {
        const response = await axios.get(url, {
            headers: {
                "AUTH-BIP-TOKEN": token
            },
            params: params
        });
        return response;
    } catch(err) {
        throw err
    }
}

export default getRequest;