import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";

import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import auth from "../firebase/firebase.config";

export const AuthContext= createContext();

const googleProvider = new GoogleAuthProvider();

const githubProvider= new GithubAuthProvider();



const AuthProviders = ({children}) => {
            const [user,setUser] =useState(null)
            const [loading,setLoading]=useState(true)

            const createUser=(email,password)=>{
                          setLoading(true)
                           return createUserWithEmailAndPassword(auth,email,password)
                       }


                       const logOut=()=>{
                        setLoading(true)
                        return signOut(auth);
                      }

                       const signInUser=(email,password)=>{
                        setLoading(true)
                        return signInWithEmailAndPassword(auth,email,password)
                       }

                        
                       const googleLogin=()=>{
                        setLoading(true)
                        return signInWithPopup(auth, googleProvider)
          
                       }
                       const githubLogin=()=>{
                        setLoading(true)
                        return signInWithPopup(auth, githubProvider)
          
                       }



                       useEffect(()=>{
                        const unSubscribe =  onAuthStateChanged(auth,currentUser=>{
                             console.log('user in the on state chance',currentUser);
                             setUser(currentUser)
                             setLoading(false)
                          })
                          return()=>{
                             unSubscribe();
                          }
                         },[])

                        
          


            const authInfo={
                        user,
                        createUser,
                        signInUser,
                        googleLogin,
                        githubLogin,
                        logOut,
                       
                        loading,
  
            }
            return (
                       
                          <AuthContext.Provider value={authInfo}>
                           {children}
                          </AuthContext.Provider>     
                       
            );
};

export default AuthProviders;