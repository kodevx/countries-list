'use client'
import React from 'react';
import useHome from '@/customHooks/Home/useHome';

const Home = function (props) {

  const { 
    countries,
    isPending,
    selectedRegion
  } = useHome();

  console.log("refinedCountries: ",countries);
  console.log("Selected Region: ",selectedRegion);
  console.log("isPending: ",isPending);

  return (
    <div>home</div>
  )
}

export default Home;
