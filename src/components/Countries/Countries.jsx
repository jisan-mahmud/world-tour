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
    return (
        <div>
            <b>All countries</b>
            <div className="countries">
                {
                    countries.map((country, index) => (
                        <Country key= {index} country= {country}></Country>
                    ))
                }
            </div>
        </div>
    );
};

export default Countries;