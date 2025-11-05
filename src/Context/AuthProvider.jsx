import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { auth } from '../Pages/Firebase.config';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';

const AuthProvider = ({children}) => {  

 const [user,setUser]=useState(null) 


 const createUser=(email,password)=>{
     
      return createUserWithEmailAndPassword(auth,email , password)
 } 

 const SignInUser=(email,password)=>{
   return  signInWithEmailAndPassword(auth,email ,password)
 } 

 const SignOutUser=()=>{
   return signOut(auth)
 }
  



  useEffect(()=>{
    const unsubscribe= onAuthStateChanged(auth,(currentUser)=>{
        setUser(currentUser)
    }) 
    return ()=>{ 
      unsubscribe()
    }
  },[])

  const AuthInfo={ 
    user,
    createUser ,
    SignInUser ,
   SignOutUser 

  }

    return ( 


       <AuthContext value={AuthInfo}>

        {children}
       </AuthContext>
    );
};

export default AuthProvider;