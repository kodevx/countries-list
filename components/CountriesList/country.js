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
        <div className={'container p-3 border border-2 border-dark'+ ' boxShadow'}>
            <div className='row'>
                <div className='col-5 col-sm-4 col-md-3 col-lg-5 col-xl-4 col-xxl-3'>
                    <img src={flag} height={'90'} width={'140'} alt={`${name}-country-image`} />
                </div>
                <div className='col-7 col-sm-8 col-md-9 col-lg-7 col-xl-8 col-xxl-9'>
                    <div className='text-dark fs-5 fw-semibold'>{name}</div>
                    <div className='fs-6 text-body-secondary'>{region}</div>
                </div>
            </div>
        </div>
    )
}

export default Country;
