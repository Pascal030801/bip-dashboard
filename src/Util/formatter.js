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
    },

    convertNumberToPronounce: (number) => {
        if(number === 0) return '';
        if(number === 1) return 'Satu';
        if(number === 2) return 'Dua';
        if(number === 3) return 'Tiga';
        if(number === 4) return 'Empat';
        if(number === 5) return 'Lima';
        if(number === 6) return 'Enam';
        if(number === 7) return 'Tujuh';
        if(number === 8) return 'Delapan';
        if(number === 9) return 'Sembilan';
        if(number === 10) return 'Sepuluh';
        if(number === 11) return 'Sebelas';

        if(number > 11 && number < 20 ) return formatter.convertNumberToPronounce(number % 10) + ' Belas';
        if(number >= 20) return formatter.convertNumberToPronounce(Math.floor(number / 10)) + ' Puluh ' + formatter.convertNumberToPronounce(number % 10);

    },

    tertulisToTerbilang: (jumlahUang, mataUang) => {
        let terbilang = '';
        // 1.000.000.000
        if(Math.floor(jumlahUang / 1000000000) > 0 ) {
            terbilang += ' ' + formatter.convertNumberToPronounce(Math.floor(jumlahUang / 1000000000)) + ' Miliar'
            jumlahUang = jumlahUang - (Math.floor(jumlahUang / 1000000000) * 1000000000)
        }

        // 100.000.000
        if(Math.floor(jumlahUang / 100000000) > 0) {
            terbilang += ' ' + formatter.convertNumberToPronounce(Math.floor(jumlahUang / 100000000)) + ' Ratus Juta'
            jumlahUang = jumlahUang - (Math.floor(jumlahUang / 100000000) * 100000000)
        }

        // 1.000.000
        if(Math.floor(jumlahUang / 1000000) > 0) {
            terbilang = terbilang.replace('Juta', '')
            terbilang += ' ' + formatter.convertNumberToPronounce(Math.floor(jumlahUang / 1000000)) + ' Juta'
            jumlahUang = jumlahUang - (Math.floor(jumlahUang / 1000000) * 1000000)
        }

        // 100.000
        if(Math.floor(jumlahUang / 100000) > 0) {
            terbilang += ' ' + formatter.convertNumberToPronounce(Math.floor(jumlahUang / 100000)) + ' Ratus Ribu'
            jumlahUang = jumlahUang - (Math.floor(jumlahUang / 100000) * 100000)
        }

        // 1.000
        if(Math.floor(jumlahUang / 1000) > 0) {
            terbilang = terbilang.replace('Ribu', '')
            terbilang += ' ' + formatter.convertNumberToPronounce(Math.floor(jumlahUang / 1000)) + ' Ribu'
            jumlahUang = jumlahUang - (Math.floor(jumlahUang / 1000) * 1000)
        }

        // 100
        if(Math.floor(jumlahUang / 100) > 0) {
            terbilang += ' ' + formatter.convertNumberToPronounce(Math.floor(jumlahUang / 100)) + ' Ratus'
            jumlahUang = jumlahUang - (Math.floor(jumlahUang / 100) * 100)
        }

        return terbilang + ' ' + mataUang;
    },

    formatDate: (rawDate) => {
        const rawDateData = new Date(rawDate);
        const rawDateDataMonth = rawDateData.getMonth() < 11 ? `0${(rawDateData.getMonth() + 1)}` : rawDateData.getMonth() + 1;
        const rawDateDataDay = rawDateData.getDate() < 10 ? `0${rawDateData.getDate()}` : rawDateData.getDate();
        const formattedRawDate = `${rawDateDataDay}-${rawDateDataMonth}-${rawDateData.getFullYear()}`;

        return formattedRawDate;
    }
}

export default formatter;