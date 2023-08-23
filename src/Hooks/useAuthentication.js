import {db} from "../firebase/config"
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
    signOut,
} from "firebase/auth";

import { useState, useEffect } from "react";

export const useAuthentication = () => {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(null);

    // deal with memory leak
    const [cancelled, setCancelled] = useState(false);

    const auth = getAuth();

    function checkIfIsCancelled() {
        if (cancelled) {
        return;
        }
    }

    const creatUser = async (data) =>{
        checkIfIsCancelled()
        setError(null)
        setLoading(true)

        try {
            const {user} = await createUserWithEmailAndPassword(
                auth,
                data.email,
                data.password
            )

            await updateProfile(user, {
                displayName: data.displayName
            })
            setLoading(false)   
            return user

        } catch (error) {
            console.log(error.message)
            console.log(typeof error.message)  
            
            let systenErrorMessage

            if(error.message.includes("Password")){
                systenErrorMessage = "A senha precias de pelo menos 6 caracteres."                
            }else if(error.message.includes("email-already")){
                systenErrorMessage = "Email já cadastrado."  
            }else{
                systenErrorMessage = "Ocorreu algum erro, por favor tente mais tarde."
            }
            setLoading(false)
            setError(systenErrorMessage)
        }        
    }

    const logout = () => {
        checkIfIsCancelled();
    
        signOut(auth);
    };

    useEffect(() =>{
        return () => setCancelled(true);
    }, [])

    return{
        auth,
        creatUser,
        error,
        loading,
        logout
    }

}