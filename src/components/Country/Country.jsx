import React, { useState } from 'react';
import './style.css'
const Country = ({country, handleVisitedCountries}) => {
    const {name, flags, languages, area} = country;

    let [visit, setVisit] = useState(false)

    let visitHandle = () => {
        setVisit(!visit)
        handleVisitedCountries(country)
    }

    return (
        <div className='country-box'>
            <h3>{name.common}</h3>
            <img src={flags.png} alt="dj" />
            <div>
                <span>Area: {area}</span><br />
                <button onClick={visitHandle}> {visit ? 'Visited' : 'Going'}</button>
                <span> {visit ? 'Visited this country!' : 'I want to go!'}</span>
            </div>
        </div>
    );
};

export default Country;