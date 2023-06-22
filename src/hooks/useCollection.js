import { useState, useEffect, useRef } from "react";
import { db } from "../firebase/config";
import { onSnapshot, collection, query, where } from "firebase/firestore";

export const useCollection = (col, _query) => {
    const [belgeler, setBelgeler] = useState(null)
    const [hata, setHata] = useState(null)
    const q = useRef(_query).current;
    
    //console.log("sorgu",q);
   
    useEffect(() => {
        let ref = collection(db, col);
        
        if(q){
            ref=query(ref,where(...q))
        }

        const unsubscribe = onSnapshot(ref, snapshot => {
            let sonuclar = []
            snapshot.docs.forEach(doc => {
                sonuclar.push({ ...doc.data(), id: doc.id })
            })
            setBelgeler(sonuclar);
            setHata(null)
        }, error => {
            console.log(error);
            setHata('Veriler Getirilemedi!');
        })

        return () => unsubscribe()
    }, [col])

    return { belgeler, hata }
}