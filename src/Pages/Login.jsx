// import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { use } from 'react';
import { AuthContext } from '../Context/AuthContext';
// import { auth } from './Firebase.config';

const Login = () => { 
   const { SignInUser}=use(AuthContext) 
   console.log(SignInUser)
    const HandleSubmit =(e)=>{
             e.preventDefault() 
             const email=e.target.email.value 
             const password=e.target.password.value 
             console.log(email,password) 
             e.target.reset()

              SignInUser(email,password) 
              .then(res=>res.user)
              .catch(error=>console.log(error))
  
            
  
 
  
  
    }
  
  
  
  
  



    return (
      <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
   
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <form className="fieldset" onSubmit={HandleSubmit}>
          <label className="label">Email</label>
          <input type="email" name='email' className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" name='password' className="input" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Login</button>
        </form>
      </div>
    </div>
  </div>
</div>
    );
};

export default Login;