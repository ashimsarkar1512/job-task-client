import { useContext, useState } from "react";
import { FaEye, FaEyeSlash, } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from "../../Provider/AuthProviders";


const Login = () => {

    const [loginError,setLoginError]=useState('')
    const [success,setSuccess]=useState('')
    const [showPassword,setShowPassword]=useState(false);
    const location=useLocation();
    const navigate=useNavigate();
                
      const {  signInUser,  googleLogin}=useContext(AuthContext);
  
  
      const handleLogin=(event)=>{
      event.preventDefault()
          const form=event.target;
          
          const email=form.email.value;
          const password=form.password.value;
          console.log(email,password);
  
          if (password.length<6){
              setLoginError (toast.error('password at list 6 characters'))
              return;
            }
            else if(!/[A-Z]/.test(password)){
              setLoginError (toast.error('password should be one uppercase'))
              return;
            }
            else if(!/[a-z]/.test(password)){
              setLoginError (toast.error('password should be one lowercase'))
              return;
            }
               
            setLoginError('')
            setSuccess(' ')
             signInUser(email,password)
             .then(()=>{
              setSuccess(toast.success('login successfully'))
             })
             .catch(error=>{
              console.error(error)
              setLoginError (toast.error(error.message))
             })
            
      }
      
      const handleSocialLogin =socialProvider=>{
        socialProvider()
        .then(result=>{
          if(result.user){
            setSuccess(toast.success("login successfully "))
            setTimeout(()=>{
              navigate(location?.state? location.state:'/')
            },3000);
          }
        
        })
      }

    
            return (
                        <div className='flex mb-52  flex-col lg:flex-row '>
                        <div className='w-[80%] mx-auto lg:w-[50%] mt-32 '>
                            <h1 className="text-2xl font-bold text-center text-green-500 my-5">Log in to your account</h1>
                            <div className='w-full lg:w-[75%] mx-auto '>
                                <form  onSubmit={handleLogin} className='space-y-10'>
                                    <input className='block w-full rounded outline-none border-b-2 focus:border-orange-500 p-2' type="email" name="email" id="" placeholder='Email' required />
                                    <input className='block w-full rounded outline-none border-b-2 focus:border-orange-500 p-2' type="password" name="password" id="" placeholder='Password' required />
                                    <button className='btn w-full text-white bg-green-600 '>Log in</button>
                                </form>
                                < hr className='my-5' />
                                <span className="absolute lg:right-1/3 lg:top-[47%]  right-[15%] top-[125%]" onClick={()=>setShowPassword(!showPassword)}>
                             {
                              showPassword? <FaEyeSlash className="text-white  "></FaEyeSlash>:<FaEye  className="text-white"></FaEye>
                             }
                            </span>
            
                            </div>
                           <div className="text-4xl flex gap-5 ml-28 lg:ml-64 md:ml-64">
                           <button   onClick={()=>handleSocialLogin(googleLogin)} > <FcGoogle ></FcGoogle></button>
                          
                           </div>
                    <h1 className="font-medium text-center mt-5">Do not have account ? <Link className="text-blue-500 font-semibold" to={'/register'}>Register</Link> </h1>
                            
                    <ToastContainer></ToastContainer>
                        </div>
                      
                    </div>
            );
};

export default Login;