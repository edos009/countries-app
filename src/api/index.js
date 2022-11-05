import axios from "axios";

const httpClient = axios.create({
  baseURL: "https://restcountries.com/v2",
});

export const getCountries = () => httpClient.get("/all");

export const getCountry = (countryId) => httpClient.get(`/name/${countryId}`);
