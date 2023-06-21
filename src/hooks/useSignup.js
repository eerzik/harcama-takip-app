import { useState, useEffect } from "react";
import { auth } from "../firebase/config";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useAuthContext } from "./useAuthContext";

export const useSignup = () => {



    const [iptal, setIptal] = useState(false);
    useEffect(() => {
        return () => setIptal(true)
    }, [])

    const { dispatch } = useAuthContext();

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

            dispatch({ type: 'LOGIN', payload: res.user })

            if (!iptal) {
                setBekliyor(false)
                setHata(null)
            }
        } catch (error) {
            console.log(error.message);
            if (!iptal) {
                setHata(error.message)
                setBekliyor(false)
            }
        }
    }

    return { signup, hata, bekliyor }
}