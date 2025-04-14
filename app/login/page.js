'use client';

import React from 'react';
import Image from 'next/image';
import LoginImage from '@/assets/images/loginImage.webp';

import FacebookIcon from '@/assets/icons/facebookIcon.png';
import GoogleIcon from '@/assets/icons/googleIcon.png';
import LinkedinIcon from '@/assets/icons/linkedinIcon.png';
import TwitterIcon from '@/assets/icons/twitterIcon.png';

import SignIn from '@/components/SignIn';

const Login = (props) => {
  return (
    <div className='container-fluid py-5'>
      <div className='row'>
        <div className='col-12 col-sm- col-lg-3'>
          <div>
            <SignIn />
          </div>
          <div className='d-flex flex-column'>
            <div className='container-fluid pt-5 pb-4'>
              <div className='row no-gutters'>
                <div className='col-sm-3 col-md-3 h-0 border-sm-0 border border-dark border-4 border-bottom-0 border-start-0 border-end-0 p-0 mt-2'/>
                <div className='col-md-6'>
                  <div className='text-center fw-bold'>
                    Or Sign In With
                  </div>
                </div>
                <div className='col-md-3 border border-dark border-4 border-top-0 border-start-0 border-end-0 p-0 mb-2'/>
              </div>
            </div>
            <div className='d-flex justify-content-around p-sm-3 p-lg-0'>
              <button onClick={() => null} className='socialButton'>
                <Image
                  src={GoogleIcon} 
                  height={'50'} 
                  width={'auto'} 
                  alt={'google-image'} 
                />
              </button>
              <button onClick={() => null} className='socialButton'>
                <Image 
                  src={FacebookIcon} 
                  height={'50'} 
                  width={'auto'} 
                  alt={'facebook-image'} 
                />
              </button>
              <button onClick={() => null} className='socialButton'>
                <Image 
                  src={LinkedinIcon} 
                  height={'50'} 
                  width={'auto'} 
                  alt={'linkedin-image'} 
                />
              </button>
              <button onClick={() => null} className='socialButton'>
                <Image 
                  src={TwitterIcon} 
                  height={'50'} 
                  width={'auto'} 
                  alt={'twitter-image'} 
                />
              </button>
            </div>
          </div>
        </div>
        <div className='col-12 col-lg-9'>
          <div className='d-lg-flex justify-content-center d-none'>
            <Image src={LoginImage} height={'450'} width={'auto'} alt={'login-image'} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
