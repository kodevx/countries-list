'use client'

import React from 'react';
import Image from 'next/image';

const Country = props => {

    const { countryDetails } = props;

    const {
        flag,
        name,
        region,
        // independent
    } = countryDetails;

    console.log("countryDetails: ",countryDetails);

    return (
        <div className='container p-4 border border-1'>
            <div className='row'>
                <div className='col-12 col-lg-4'>
                    <img src={flag} height={'90'} width={'140'} alt={`${name}-country-image`} />
                </div>
                <div className='col-12 col-lg-8'>
                    <div>{name}</div>
                    <div>{region}</div>
                </div>
            </div>
        </div>
    )
}

export default Country;
