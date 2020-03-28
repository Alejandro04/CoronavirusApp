const API_BASE_ADDRESS_GENERALDATA = 'https://covid19.mathdro.id/api/countries/';
const API_BASE_ADDRESS_CHARTDATA = 'https://api.covid19api.com/dayone/country/';

export default class Api {

    static setCountry(payload) {
        const uri = API_BASE_ADDRESS_GENERALDATA + `${payload.country}`;
        return fetch(uri, {
            method: 'GET'
        });
    }

    static setCountryChartConfirmed(payload) {
        const uri = API_BASE_ADDRESS_CHARTDATA + `${payload}/status/confirmed`;
        return fetch(uri, {
            method: 'GET'
        });
    }

    static setCountryChartDeath(payload) {
        const uri = API_BASE_ADDRESS_CHARTDATA + `${payload}/status/deaths`;
        return fetch(uri, {
            method: 'GET'
        });
    }
}