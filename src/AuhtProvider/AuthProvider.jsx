import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { auth } from "../Firebase/Firebase.config";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {

  // state management
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  
  // google provider
  const googleProvider = new GoogleAuthProvider();
  const googleWithLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  
  // create new user
  const newUser = (email, password) =>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }

  // login user
  const loginUser = (email, password) =>{
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }

  // logOut user
  const logOut = () =>{
    setLoading(true)
    return signOut(auth)
  }

  const authInfo = {
    user,
    setUser,
    loading,
    setLoading,
    location,
    navigate,
    googleWithLogin,
    newUser,
    loginUser,
    logOut
  };


  useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
    setLoading(false);
  });

  return () => unsubscribe();
  
}, []);




  return (
    <AuthContext.Provider value={authInfo}> {children} </AuthContext.Provider>
  );
}
