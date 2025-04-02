'use client'

import React from 'react'
import Country from './country';

const CountriesList = props => {

    const { countries } = props;

    console.log("countries: ",countries);

    return (
        <div className='container-md'>
            <div className='row row-cols-2 row-gap-4'>
                {countries.slice(0,10).map(country => (
                    <Country
                        key={country.name} 
                        countryDetails={country}
                    />
                ))}
            </div>
        </div>
    )
 }

export default CountriesList;
