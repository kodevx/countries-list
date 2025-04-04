import React from 'react';
import Image from 'next/image';
import LoginImage from '@/assets/images/loginImage.webp';

import SignIn from '@/components/SignIn';

const Login = (props) => {
  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-12 col-lg-7'>
          <SignIn />
        </div>
        <div className='col-12 col-lg-5'>
          <Image src={LoginImage} height={'450'} width={'auto'} alt={'login-image'} />
        </div>
      </div>
    </div>
  );
}

export default Login;
