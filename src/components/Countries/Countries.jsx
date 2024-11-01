import { useEffect, useState } from "react";
import Country from "../country/country";
import './style.css'
const Countries = () => {
    let [countries, setCountries] = useState([])
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
        .then(response => response.json())
        .then(json => setCountries(json))
    }, [])

    let [visitedCountries, setVisitedCountries] = useState([])

    let handleVisitedCountries = (country) => {
        if (!visitedCountries.find((item) => item === country)){
            setVisitedCountries([...visitedCountries, country])
        }else{
            setVisitedCountries(visitedCountries.filter((item) => item !== country));
        }
    }

    return (
        <div>
            <b>All countries</b><br/>
            <b>Visited Countries: {visitedCountries.length}</b>
            <div className="countries">
                {
                    countries.map((country, index) => (
                        <Country handleVisitedCountries={handleVisitedCountries} key= {index} country= {country}></Country>
                    ))
                }
            </div>
        </div>
    );
};

export default Countries;