import React from 'react';
import Image from 'next/image';
import LoginImage from '@/assets/images/loginImage.webp';

import SignIn from '@/components/SignIn';

const Login = (props) => {
  return (
    <div className='container-fluid py-5'>
      <div className='row'>
        <div className='col-12 col-sm- col-lg-3'>
          <SignIn />
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
