'use client'
import React from 'react';
import Image from 'next/image';
import { Button } from 'react-bootstrap';

import Slider from '@/components/Slider';
import CountriesList from '@/components/CountriesList';
import useHome from '@/customHooks/Home/useHome';

import SnowMountain from '@/assets/images/snowMountains.jpg';
import { ImagesList } from '@/constants/images';

const Home = function (props) {

  const { 
    countries,
    isPending,
    countriesToShow,
    isLoadMoreDisabled,
    handleLoadMore
  } = useHome();

  return (
    <div>
      <div className='container-fluid'>
        <div className='row no-gutters'>
          <div className='col-sm-4 col-md-5 border border-4 border-bottom-0 border-start-0 border-end-0 p-0 m-0'/>
          <div className='col-md-2'>
            <div className='fs-2 font-weight-bolder text-center'>
              WELCOME
            </div>
          </div>
          <div className='col-md-5 border border-4 border-top-0 border-start-0 border-end-0 p-0 m-0'/>
        </div>
      </div>
      <div className='container-fluid pt-5'>
        <div className='row'>
          <div className='col-sm-12 col-xl-9 order-xl-0 order-1'>
            <Slider images={ImagesList} />
          </div>
          <div className='col-sm-12 col-xl-3 pt-4 pt-xl-0 pb-4 pb-xl-0 order-xl-1 order-0'>
            <div className='row'>
              <Image src={SnowMountain} height={'550'} width={'auto'} alt={`right-image`} />
            </div>
          </div>
        </div>
      </div>
      <div className='pt-5'>
        <CountriesList 
          countriesToShow={countriesToShow}
          countries={countries} 
        />
      </div>
      <Button 
        className={'loadMoreBtn'}
        disabled={isPending || isLoadMoreDisabled} 
        onClick={handleLoadMore}
      >
        Load more
      </Button>
    </div>
  )
}

export default Home;
