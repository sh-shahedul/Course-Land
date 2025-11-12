import { use, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../../Provider/AuthContext";
import toast from "react-hot-toast";
import { getFriendlyMessage } from "../../Components/ErrorMessage/errorMessage";
import { PiEyeBold } from "react-icons/pi";
import { TbEyeClosed } from "react-icons/tb";


 const Register = () => {
   const {createUser,googleUser,updateProfileuser,setuser}=use(AuthContext)
   const[error,setError]=useState('')
    const[show,setShow]=useState(false)
    const[success,setSuccess]=useState('')
    const navigate = useNavigate()
    const handelRegister=(e)=>{
           e.preventDefault()
           const form = e.target
           const name = form.name.value
           const photo = form.photo.value
           const email = form.email.value
           const password = form.password.value
           const term = form.term.checked
           const patternLength = /^.{6,}$/;
           const patternLower = /[a-z]/;
           const patternUpper = /[A-Z]/;
           if(!patternLength.test(password)){
        setError("❌ Password must be at least 6 characters long.")
        return
        }
        if(!patternLower.test(password)){
          setError("⚠️ Password must contain at least  one lowercase letter.")
            return
        }
        if(!patternUpper.test(password)){
          setError("⚠️ Password must contain at least one uppercase letter.")
            return
        }
        // console.log(name,photo,email,password)

 
         setError('')
        if(!term){
            setError('Please accpect our term and conditon.')
            return
            }
           setSuccess('')
        createUser(email,password)
       .then(result=>{
        console.log(result.user)
          setSuccess('Login Successful!')
            e.target.reset()
            toast.success("🎉 Login Successful!");
            updateProfileuser({ displayName : name ,  photoURL : photo  })
            .then(()=>{
             setuser({...result.user , displayName : name ,  photoURL : photo  })
            })
             .catch((error)=>{
                const message = getFriendlyMessage(error.code)
                setError(message)
                
            })
         navigate('/')
       })
       .catch(error=>{
         const message = getFriendlyMessage(error.code)
                setError(message)
       })
        
    }
       const handelGoogleUser =()=>{
       googleUser()
             .then((result)=>{           
             console.log(result.user)           
             toast.success("🎉 Login Successful!");
             navigate('/')           
           })
              .catch(error=>{
              const message = getFriendlyMessage(error.code)
              setError(message)
           })
       }
       const handelShow = ()=>{
        setShow(!show)
       }
     return (
        <div className='flex justify-center min-h-screen items-center py-15 '>
             <div className="card border border-white w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">

            <form onSubmit={handelRegister}>
                <fieldset className="fieldset">
                    <h2 className='text-2xl font-semibold text-center py-6 bg-linear-to-r from-pink-500 via-purple-500 to-indigo-500 text-transparent bg-clip-text'>Register your account</h2>
                    <hr className='text-gray-200 pb-4' />
               {/* name  */}
          <label className="label text-gray-800 dark:text-gray-300  font-semibold">Name</label>
          <input 
          type="text" 
          required
          name='name'
           className="input w-full border border-pink-400 placeholder-gray-400 focus:outline-none focus:ring-0 focus:border-pink-500 px-4 dark:placeholder-gray-300 rounded-full"
           placeholder="Your Name" />
            {/* photo  URL  */}
           <label className="label text-gray-800 dark:text-gray-300  font-semibold">PhotoURL</label>
          <input 
           type="text"
          
           name='photo' 
           className="input w-full border border-pink-400 placeholder-gray-400 focus:outline-none focus:ring-0 focus:border-pink-500 px-4 dark:placeholder-gray-300 rounded-full "
            placeholder="Photo URL" />
               {/* email  */}
          <label className="label text-gray-800 dark:text-gray-300  font-semibold">Email</label>
          <input
           required
           type="email"
            name='email'
            className="input w-full border border-pink-400 placeholder-gray-400 focus:outline-none focus:ring-0 focus:border-pink-500 px-4 dark:placeholder-gray-300 rounded-full " 
             placeholder="Email" />
          {/* password  */}
          <label className="label text-gray-800 dark:text-gray-300  font-semibold">Password</label>
          <div className='relative'>
            <input 
            type={show? 'text': 'password'}
            required
            name='password' 
            className="input w-full border border-pink-400 placeholder-gray-400 focus:outline-none focus:ring-0 focus:border-pink-500 px-4 dark:placeholder-gray-300  rounded-full"
            placeholder="Password" />


            <p onClick={()=>handelShow(!show)} className='absolute top-3 right-4 cursor-pointer'>{show?<PiEyeBold size={18}/>:<TbEyeClosed size={18}/>}</p>
          </div>
          

           {/* term  */}
          

              <label className="label mt-2 flex items-center gap-2">
                                <input type="checkbox" name="term"   className="checkbox checked:border-pink-500 checked:bg-pink-400 checked:text-white"/>
                                <p className="text-gray-600 dark:text-gray-300  font-medium">I agree to the <span className="text-pink-500 font-bold">terms & conditions</span>.</p>
                            </label>
          {
            error &&  <h1 className='text-red-600 font-medium'>{error}</h1>
          }
          {
            success &&  <h1 className='text-green-600 font-medium'>{success}</h1>
          }
           <button type='submit' className="w-full text-center bg-linear-to-r from-pink-500 via-purple-600 to-indigo-500 text-white font-medium py-2 rounded-full hover:from-indigo-500 hover:to-pink-500 transition-all duration-300 mt-2">Register</button>
                 </fieldset>
            </form>
              <p className='divider'>OR</p>
                <button onClick={handelGoogleUser} className="btn w-full btn-outline border-pink-400 text-pink-500 hover:bg-white hover:border-border-500 flex items-center justify-center gap-2 transition rounded-full">
                <FcGoogle size={18} />
                Login with Google
                </button>
              <p className='font-semibold text-center py-3'>All ready Have An Account ? <Link to='/login' className='text-secondary underline'>Login</Link></p>
      </div>
    </div>
        </div>
    );
  };
  export default Register;
