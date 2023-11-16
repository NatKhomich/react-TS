import axios from "axios";

const instance = axios.create({
    withCredentials: true
})

export const countryAPI = {
    getCountry() {
        return instance.get('https://restcountries.com/v3.1/all')
    }
}