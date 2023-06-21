import { useState } from "react";
import { auth } from "../firebase/config";

import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";


export const useSignup = () => {
    const [hata, setHata] = useState(null)
    const [bekliyor, setBekliyor] = useState(false)
    const signup = async (email, password, displayName) => {
        setHata(null)
        setBekliyor(true)

        try {
            const res = await createUserWithEmailAndPassword(auth, email, password)
            console.log(res.user)
            if (!res) {
                throw new Error("üye olma işleminde hata oldu");
            }
            await updateProfile(res.user, { displayName })
            setBekliyor(false)
            setHata(null)
        } catch (error) {
            console.log(error.message);
            setHata(error.message)
            setBekliyor(false)
        }
    }

    return {signup,hata,bekliyor}
}