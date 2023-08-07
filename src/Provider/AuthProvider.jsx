
import { GithubAuthProvider, GoogleAuthProvider,
     createUserWithEmailAndPassword, getAuth, onAuthStateChanged,
     sendPasswordResetEmail,
     signInWithEmailAndPassword, 
     signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../firebase.config";
import { createContext, useEffect, useState } from "react";

const auth = getAuth(app);
export const AuthContext = createContext(null);


const AuthProvider = ({ children }) => {
    const gogoolProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);



    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }


    const sighinInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }


    const createGogoolUser = () => {
        setLoading(true)
        return signInWithPopup(auth, gogoolProvider )
    }


    const createGithibUser = () => {
        setLoading(true)
       return signInWithPopup(auth, githubProvider )
    }




    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
           
        // if(currentUser?.email){
        //   fetch('https://shopwish-surver-shammi-riya.vercel.app/jwt',{
        //     method:"POST",
        //     headers:{
        //         'content-type':'application/json'
        //     },
        //     body:JSON.stringify({email:currentUser.email})

        //   })
        //   .then(res=>res.json())
        //   .then(data=>{console.log(data)})
        // }




                setLoading(false);
             })
            


           
            
        
        return () => {
            return unsubscribe();
        }
    }, [])








    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }






    const UpdateProfile = (name, photo) => {

        updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })

    }


const resetPassword = (email)=>{
    setLoading(true)
  return sendPasswordResetEmail(auth,email)
}




    const authInfo = {
        user,
        loading,
        createUser,
        sighinInUser,
        createGogoolUser,
        createGithibUser,
        UpdateProfile,
        resetPassword,
        logOut
    }



    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;