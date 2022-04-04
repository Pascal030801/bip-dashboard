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
        throw err
    }
}

export default deleteRequest;