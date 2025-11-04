import React from 'react';
import { AuthContext } from './AuthContext';

const AuthProvider = ({children}) => { 

  const AuthInfo={ 
    user:'fuad@gmail.com'

  }

    return ( 


       <AuthContext value={AuthInfo}>

        {children}
       </AuthContext>
    );
};

export default AuthProvider;