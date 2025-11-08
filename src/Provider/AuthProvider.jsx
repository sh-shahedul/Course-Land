import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged,  sendPasswordResetEmail,  signInWithEmailAndPassword,  signInWithPopup, signOut, updateProfile } from 'firebase/auth';
 import { auth } from '../FireBase/fireBase.init';

//  googole provider 
const googleProvider = new GoogleAuthProvider()



const AuthProvider = ({children}) => {
    const[user,setuser]=useState(null)
     const[loading,setLoading]=useState(true)

        // email pass 
     const createUser = (email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
     }
        // sign in 
     const signinUser =(email,password)=>{
       setLoading(true)
     return signInWithEmailAndPassword(auth,email,password)
  }


    //  googleUser 
     const googleUser = ()=>{
        setLoading(true)
        return signInWithPopup(auth,googleProvider)
     }

    //  forgot pass 
     const forgotUser = (email)=>{
       setLoading(true)
       return  sendPasswordResetEmail(auth,email)
   }

    //    update profile 
     const updateProfileuser = (updateData)=>{
    return updateProfile(auth.currentUser,updateData )
        }
    //   sign out 
     const signOutUser =()=>{
        return signOut(auth)
     }

      //observer
  useEffect(()=>{
    const unSubscribe= onAuthStateChanged(auth, (currentuser)=>{
        console.log('current ',currentuser)
        setuser(currentuser)
        setLoading(false)
    })
    return()=>{
        unSubscribe()
    }
   },[])
    const userInfo ={
        updateProfileuser,
        forgotUser,
        signinUser,
        googleUser,
        createUser,
        signOutUser,
        setuser,
        user,
        loading,
     }

    return (
        <div>
           <AuthContext  value={userInfo}>
            {children}
            </AuthContext> 
        </div>
    );
};

export default AuthProvider;