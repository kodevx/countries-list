'use client'

import React from 'react'
import Country from './country';

const CountriesList = props => {

    const { countries } = props;

    console.log("countries: ",countries);

    return (
        <div className='container-md'>
            <div className='row row-cols-1 row-cols-lg-2 g-2 g-md-3 g-lg-4'>
                {countries.slice(0,12).map(country => (
                    <div className='col' key={country.name} >
                        <Country
                            countryDetails={country}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CountriesList;
