import deleteRequest from "./deleteRequest";
import getRequest from "./getRequest";

const BASE_PATH_API = process.env.REACT_APP_API_URL;
const token = localStorage.getItem('token');

/**
* @global
* @typedef {Object} PeopleInformation
* @property {number} id - CekIDBI id
* @property {string} full_name - Nama Lengkap
* @property {string} position - Pekerjaan
* @property {string} place_of_birth - Tempat Lahir
* @property {Date} date_of_birth - Tanggal Lahir
* @property {number} nik_id - nomor NIK
* @property {number} npwp_id - nomor NPWP
* @property {number} kk_id - nomor KK
* @property {number} provinsi_id - provinsi ID
* @property {number} kabupaten_id - kabupaten ID
* @property {number} kecamatan_id - kecamatan ID
* @property {number} desa_id - desa ID
* @property {number} rtrw - RT RW alamat
* @property {number} full_address - alamat lengkap
* @property {number} phone_number - nomor telpon
* @property {number} status_perkawinan - status pengajuan
* @property {number} foto_ktp_path - folder foto KTP
*/

/**
* @global
* @typedef {Object} CekIDBI
* @property {number} id - CekIDBI id
* @property {string} bank_terpilih - Bank accept the debt
* @property {number} perumahan_id - Perumahan choosed to buy
* @property {number} profilPengajuId - profil pengaju id
* @property {PeopleInformation} profil_pengaju - profil pengaju data
* @property {number} profilePasanganPengajuId - profil pasangan pengaju id
* @property {PeopleInformation} profile_pasangan_pengaju - profil pasangan pengaju data
* @property {string} status - status pengajuan
*/

const ApiService = {
    getToken: () => {
        return localStorage.getItem('token');
    },
    getHouseAreas: async (params) => {
        try {
            return await getRequest(`${BASE_PATH_API}/house_areas`, ApiService.getToken(), params);
        } catch (error) {
            throw error;
        }
    },
    getCekIdBis: async (params) => {
        try {
            return await getRequest(`${BASE_PATH_API}/cek_id_bis`, ApiService.getToken(), params);
        } catch (error) {
            throw error;
        }
    },
    getDokumenPengajuans: async (params) => {
        try {
            return await getRequest(`${BASE_PATH_API}/dokumen_pengajuans`, ApiService.getToken(), params);
        } catch (error) {
            throw error;
        }
    },
    getProvinsis: async (params) => {
        try {
            return await getRequest(`${BASE_PATH_API}/provinsis`, ApiService.getToken(), params);
        } catch (error) {
            throw error;
        }
    },
    getKabupatens: async (params) => {
        try {
            return await getRequest(`${BASE_PATH_API}/kabupatens`, ApiService.getToken(), params);
        } catch (error) {
            throw error;
        }
    },
    getKecamatans: async (params) => {
        try {
            return await getRequest(`${BASE_PATH_API}/kecamatans`, ApiService.getToken(), params);
        } catch (error) {
            throw error;
        }
    },
    getDesas: async (params) => {
        try {
            return await getRequest(`${BASE_PATH_API}/desas`, ApiService.getToken(), params);
        } catch (error) {
            throw error;
        }
    },
    getHouses: async (params) => {
        try {
            return await getRequest(`${BASE_PATH_API}/houses`, ApiService.getToken(), params);
        } catch (error) {
            throw error;
        }
    },
    /**
     * 
     * @param {*} cekIdBI__ID 
     * @param {*} params 
     * @returns {Promise<{data: CekIDBI}>}
     */
    getCekIdBiByID: async (cekIdBI__ID, params) => {
        try {
            return await getRequest(`${BASE_PATH_API}/cek_id_bi/${cekIdBI__ID}`, ApiService.getToken(), params);
        } catch (error) {
            throw error;
        }
    },

    getDokumenPengajuanByID: async (dokumenPengajuan__ID, params) => {
        try {
            return await getRequest(`${BASE_PATH_API}/dokumen_pengajuan/${dokumenPengajuan__ID}`, ApiService.getToken(), params);
        } catch (error) {
            throw error;
        }
    },
    
    deleteCekIdBiByID: async (cekIdBI__ID, params) => {
        try {
            return await deleteRequest(`${BASE_PATH_API}/cek_id_bi/${cekIdBI__ID}`, ApiService.getToken(), params);
        } catch (error) {
            throw error;
        }
    },
    deleteDokumenPengajuanByID: async (DokumenPengajuan__ID, params) => {
        try {
            return await deleteRequest(`${BASE_PATH_API}/dokumen_pengajuan/${DokumenPengajuan__ID}`, ApiService.getToken(), params);
        } catch (error) {
            throw error;
        }
    },

    getDokumenLanjutans: async (params) => {
        try {
            return await getRequest(`${BASE_PATH_API}/dokumen_lanjutans`, ApiService.getToken(), params);
        } catch (error) {
            throw error;
        }
    },

    getDokumenLanjutanByID: async (dokumenLanjutan__ID, params) => {
        try {
            return await getRequest(`${BASE_PATH_API}/dokumen_lanjutan/${dokumenLanjutan__ID}`, ApiService.getToken(), params);
        } catch (error) {
            throw error;
        }
    },
    
    deleteDokumenLanjutanByID: async (DokumenLanjutan__ID, params) => {
        try {
            return await deleteRequest(`${BASE_PATH_API}/dokumen_lanjutan/${DokumenLanjutan__ID}`, ApiService.getToken(), params);
        } catch (error) {
            throw error;
        }
    },
}

export default ApiService;