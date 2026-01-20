import React, { Children, useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../../Firebase/firebase.init';

const GoogleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {

const [user,setUser]=useState(null);
const [loading,setLoading] = useState(true)    

const CreateUser = (email,password) =>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password)
}

const LogInUser = (email,password) =>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
}

const LogOut = () =>{
    setLoading(true)
    return signOut(auth);
}

const signInWithGoogle = () =>{
    setLoading(true);
    return signInWithPopup(auth, GoogleProvider)
}



useEffect(()=>{
   const unSubscribe = onAuthStateChanged(auth, currentUser =>{
    setUser(currentUser);
    setLoading(false);
   }) 
   return ()=>{
    unSubscribe();
   }
},[] )

    const authInfo = {
        user,
        loading,
        CreateUser,
        LogInUser,
        LogOut,
        signInWithGoogle,
    }

    return (
      <AuthContext value={authInfo}>
        {children}
      </AuthContext>
    );
};

export default AuthProvider;