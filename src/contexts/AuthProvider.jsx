import React, { createContext, useEffect, useState } from 'react'
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, 
  signOut , updateProfile as firebaseUpdateProfile, 
  createUserWithEmailAndPassword,
  signInWithPopup} from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    //create an account
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    //signup with gmail
    const signUpWithGmail= () => {
        return signInWithPopup(auth, googleProvider);
    }

    //login with email and password
    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }
    
    //logout functionality
    const logOut = () => {
        return signOut(auth);
    }

    //update profile
    const updateUserProfile =({name, photoURL}) =>{
      return firebaseUpdateProfile(auth.currentUser, {
        displayName: name, photoURL: photoURL
      })
    }
 
     //check signed-in user
      useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
          setUser(currentUser);
          setLoading(false);
        })
        return () =>{
          return unsubscribe();
        }
         
      })


    const authInfo = {
        user,
        signUpWithGmail,
        createUser,
        login,
        logOut,
        updateUserProfile,
        loading
    }
    
  return (

    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  )
}
export default AuthProvider