'use client'

import React from 'react'
import Country from './country';

const CountriesList = props => {

    const { 
        countries, 
        selectedRegion,
        countriesToShow 
    } = props;

    return (
        <div className='container-md'>
            <div className='d-flex justify-content-center pb-4 pt-2 fs-3 fw-semibold'>{selectedRegion}</div>
            <div className='row row-cols-1 row-cols-lg-2 g-2 g-md-3 g-lg-4'>
                {countries.slice(0, countriesToShow).map(country => (
                    <div className='col' key={country.name} >
                        <Country countryDetails={country} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CountriesList;
