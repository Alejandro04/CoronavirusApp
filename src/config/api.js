const API_BASE_ADDRESS_GENERALDATA = 'https://covid19.mathdro.id/api/countries/';
const API_BASE_ADDRESS_CHARTDATA_CONFIRMED = 'https://api.covid19api.com/dayone/country/';

export default class Api {

    static getCountries() {
        const uri = API_BASE_ADDRESS_GENERALDATA + "noncountry";
        return fetch(uri, {
            method: 'GET'
        });
    }

    static setCountry(payload) {
        const uri = API_BASE_ADDRESS_GENERALDATA + `${payload.country}`;
        return fetch(uri, {
            method: 'GET'
        });
    }

    static setCountryChartConfirmed(payload) {
        const uri = API_BASE_ADDRESS_CHARTDATA_CONFIRMED + `${payload.country}/status/confirmed`;
        return fetch(uri, {
            method: 'GET'
        });
    }

    static setCountryChartRecovered(payload) {
        console.log("recovered")
        const uri = API_BASE_ADDRESS_CHARTDATA_CONFIRMED + `${payload.country}/status/recovered`;
        return fetch(uri, {
            method: 'GET'
        });
    }

    static setCountryChartDeath(payload) {
        const uri = API_BASE_ADDRESS_CHARTDATA_CONFIRMED + `${payload.country}/status/deaths`;
        return fetch(uri, {
            method: 'GET'
        });
    }
}