const bankList = ['BNI', 'BPD KALBAR', 'BRI', 'BTN', 'Mandiri'];
const statusPerkawinanList = ['Belum Kawin', 'Kawin', 'Cerai Hidup', 'Cerai Mati'];

const formatter = {
    selectOptionProvinsi: (provinsiList) => {

    },
    filterKabupatenByProvinsiId: (kabupatenList, provinsiId) => {
        const kabupatens = kabupatenList.filter((kabupaten) => {
            return kabupaten.provinsiId === parseInt(provinsiId, 10);
        });

        return kabupatens;
    },
    selectOptionsKabupatenByProvinsiId: (kabupatenList, provinsiId) => {
        const kabupatens = formatter.filterKabupatenByProvinsiId(kabupatenList, provinsiId);

        const formattedKabupatens = [];
        if(kabupatens.length > 0){
            for(const kabupaten of kabupatens){
                formattedKabupatens.push(
                    <option key={kabupaten.id} value={kabupaten.id}>{kabupaten.nama}</option>
                );
            }
            return formattedKabupatens;
        }else{
            return [];
        }
    },
    filterKecamatanByKabupatenId: (kecamatanList, kabupatenId) => {
        const kecamatans = kecamatanList.filter((kecamatan) => {
            return kecamatan.kabupatenId === parseInt(kabupatenId, 10);
        });

        return kecamatans;
    },
    selectOptionsKecamatanByKabupatenId: (kecamatanList, kabupatenId) => {
        const kecamatans = formatter.filterKecamatanByKabupatenId(kecamatanList, kabupatenId);
        const formattedKecamatans = [];

        if(kecamatans.length > 0){
            for(const kecamatan of kecamatans){
                formattedKecamatans.push(
                    <option key={kecamatan.id} value={kecamatan.id}>{kecamatan.nama}</option>
                );
            }
            return formattedKecamatans;
        }else {
            return [];
        }
    },
    filterDesaByKecamatanId: (desaList, kecamatanId) => {
        const desas = desaList.filter((desa) => {
            return desa.kecamatanId === parseInt(kecamatanId);
        });
        return desas;
    },
    selectOptionsDesaByKecamatanId: (desaList, kecamatanId) => {
        const desas = formatter.filterDesaByKecamatanId(desaList, kecamatanId)
        const formattedDesas = [];

        if(desas.length > 0){
            for(const desa of desas){
                formattedDesas.push(
                    <option key={desa.id} value={desa.id}>{desa.nama}</option>
                );
            }
            return formattedDesas;
        }else{
            return [];
        }
    },
    selectOptionsBank: () => {
        const formattedBanks = [];

        for(const bank of bankList){
            formattedBanks.push(
                <option key={bank} value={bank}>{bank}</option>
            );
        }
        return formattedBanks;
    },
    selectOptionsStatusPerkawinan: () => {
        const formattedStatusPerkawinans = [];

        for(const statusPerkawinan of statusPerkawinanList){
            formattedStatusPerkawinans.push(
                <option key={statusPerkawinan} value={statusPerkawinan}>{statusPerkawinan}</option>
            );
        }
        return formattedStatusPerkawinans;
    }
}

export default formatter;