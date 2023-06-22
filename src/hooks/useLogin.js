import { useState, useEffect } from "react";
import { auth } from "../firebase/config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useAuthContext } from "./useAuthContext";

export const useLogin = () => {

    const { dispatch } = useAuthContext();
    const [iptal, setIptal] = useState(false)
    const [hata, setHata] = useState(null)
    const [bekliyor, setBekliyor] = useState(false)


    useEffect(() => {
        return () => setIptal(true)
  
    }, [])

    const login = async (email, password) => {
        setHata(null)
        setBekliyor(true)

        try {
            const res = await signInWithEmailAndPassword(auth, email, password)
            //console.log(res.user)
            if (!res) {
                throw new Error("Login işleminde hata oldu");
            }

            dispatch({ type: 'LOGIN', payload: res.user })
            if (!iptal) {
                setBekliyor(false)
                setHata(null)
            }

        } catch (error) {
            if (!iptal) {
                setHata(error.message)
                setBekliyor(false)
            }
            console.log(error.message);

        }
    }

    return { login, hata, bekliyor }
}