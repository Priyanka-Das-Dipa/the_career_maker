import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { auth } from "../config/firebaseConfig";

export const AuthContext = createContext(null)

const googleProvider = new GoogleAuthProvider();



// eslint-disable-next-line react/prop-types
const AuthProvider = ({children}) => {
    const[user, setUser] = useState({});
    
    const googleLogin =()=>{
       return signInWithPopup(auth, googleProvider)
    }

    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signIn = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () =>{
        return signOut(auth)
    }

    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
           setUser(user)
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