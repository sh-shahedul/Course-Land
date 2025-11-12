import React, { use,  useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../../Provider/AuthContext';
import { PiEyeBold } from 'react-icons/pi';
import { TbEyeClosed } from 'react-icons/tb';
import toast from "react-hot-toast"
import { FcGoogle } from 'react-icons/fc';
import { getFriendlyMessage } from '../../Components/ErrorMessage/errorMessage';



const LogIn = () => {
   const[success,setSuccess]=useState('')
   const[error,setError]=useState('')
   const [email, setEmail] = useState("");
    const navigate = useNavigate()
   const [show,setShow]=useState(false)
    
  const {signinUser,googleUser} =use(AuthContext)
   const location = useLocation()    
   const handelGoogleLogin=()=>{
           googleUser()
           .then((result)=>{
             console.log(result.user)
             toast.success("🎉 Login Successful!");
             navigate(location.state|| '/')
            
            
           })
           .catch(error=>{
            console.log(error)
            setError('Something error!')
           })
    }
   const handelLogin=(e)=>{
     e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value
          setError('')
          setSuccess('')
        signinUser(email,password)
          .then(result=>{
            console.log(result.user)
             e.target.reset()
             toast.success("🎉 Login Successful!");
             navigate(location.state|| '/')
            setSuccess('login Successful')   
         })
         .catch( error=>{
            console.log(error.message)
            const message = getFriendlyMessage(error.code)
            setError(message)
            return
         })
     }   
  const handelShow =()=>{
        setShow(!show)
      }
       return (
        <div className='flex justify-center min-h-screen items-center'>
             <div className="card border border-white w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
            <form onSubmit={handelLogin}>
                <fieldset className="fieldset">
          <h2 className='text-2xl font-semibold text-center py-6 bg-linear-to-r from-pink-500 via-purpel-500 to-indigo-600 text-transparent bg-clip-text'>Login your account</h2>
          {/* email  */}
         <label className="label text-gray-600 dark:text-gray-300 font-semibold">Email Address</label>

          <input 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email" 
          name='email' 
          className="input w-full border border-pink-400 placeholder-gray-400 dark:placeholder-gray-300 focus:outline-none focus:ring-0 focus:border-pink-500 px-4 rounded-full"
            placeholder="Email" />
           <label className="label text-gray-600 dark:text-gray-300 font-semibold">Password</label>
                   <div className='relative'>
                     <input 
                     type={show? 'text':'password'} 
                     name='password' 
                     className="input w-full border border-pink-400 placeholder-gray-400 focus:outline-none focus:ring-0 focus:border-pink-500 px-4 dark:placeholder-gray-300 rounded-full "
                     placeholder="Password" />         
                     <p onClick={()=>handelShow(!show)} className='absolute top-3 right-5 cursor-pointer'>{show?<PiEyeBold size={18}/>:<TbEyeClosed size={18}/>}</p>
                   </div>
          <div><Link to='/forgotpass'  state={{ email: email }} type='button' className="link link-hover font-bold">Forgot password?</Link></div>
           {
            error &&  <h1 className='text-red-600 font-medium'>{error}</h1>
          }
          {
            success &&  <h1 className='text-green-600 font-medium'>{success}</h1>
          }
          <button type='submit' className="w-full text-center bg-linear-to-r from-pink-500 via-purple-600 to-indigo-500 text-white font-medium py-2 rounded-full hover:from-indigo-500 hover:to-pink-500 transition-all duration-300 mt-2">LogIn</button>       
                 </fieldset>
            </form>
               <p className='divider'>OR</p>
                <button onClick={handelGoogleLogin} className="btn w-full btn-outline border-pink-400 text-pink-500 hover:bg-white hover:border-border-500 flex items-center justify-center gap-2 transition rounded-full">
                <FcGoogle size={18} />Login with Google </button>
              <p className='font-semibold text-center py-3'>Dont’t Have An Account ? <Link to='/register' className='text-secondary underline'>Register</Link></p>
      </div>
    </div>  
        </div>
    );
};

export default LogIn;