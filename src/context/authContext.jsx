import { createContext, useEffect, useState } from "react";
import { auth } from "../components/firebase";
import {onAuthStateChanged} from 'firebase/auth'

const authContext = createContext()

export const AuthProvider =  ({children}) =>{

    const [currentUser, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const unsub = onAuthStateChanged(auth, (user)=>{
            setUser(user)
            console.log(user)
            setLoading(false)
        })

        return () =>{
            unsub
        }
        
    },[])

    return (<authContext.Provider value={{currentUser}}>
        {loading ? <p>Loading...</p> : children}
    </authContext.Provider>)
}

export default authContext



