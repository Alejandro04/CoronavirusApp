const API_BASE_ADDRESS = 'https://covid19.mathdro.id/api/countries/';

export default class Api {
   
    static getCountries() {
       const uri = API_BASE_ADDRESS + "venezuela";
       return fetch(uri, {
           method: 'GET'
       });
   }

   static setCountry(payload) {
    const uri = API_BASE_ADDRESS + `${payload.country}`;
    return fetch(uri, {
        method: 'GET'
    });
   }
}