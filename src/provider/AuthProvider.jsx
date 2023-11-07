import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { auth } from "../config/firebaseConfig";
import { useLocation } from "react-router-dom";

export const AuthContext = createContext(null)

const googleProvider = new GoogleAuthProvider();



// eslint-disable-next-line react/prop-types
const AuthProvider = ({children}) => {
    const[user, setUser] = useState({});
    const[loading, setLoading] = useState(true)
    
    const googleLogin =()=>{
        setLoading(true)
       return signInWithPopup(auth, googleProvider)
    }

    const createUser = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signIn = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () =>{
        setLoading(true)
        return signOut(auth)
    }

    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
           setUser(user)
           setLoading(false)
          });
    },[])
    console.log(user)

    const handleUpdateProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
    }

    const authInfo ={googleLogin, createUser, signIn, logOut, user, handleUpdateProfile}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;