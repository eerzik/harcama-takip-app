import { useState,useEffect } from "react";
import { db } from "../firebase/config";
import { onSnapshot,collection } from "firebase/firestore";

export const useCollection=(col)=>{
    const[belgeler,setBelgeler]=useState(null)
    const[hata,setHata]=useState(null)

    useEffect(()=>{
        let ref=collection(db,col);
        const unsubscribe=onSnapshot(ref,snapshot=>{
            let sonuclar=[]
            snapshot.docs.forEach(doc=>{
                sonuclar.push({...doc.data(),id:doc.id})
            })
            setBelgeler(sonuclar);
            setHata(null)
        },error=>{
            console.log(error);
            setHata('Veriler Getirilemedi!');
        })

        return ()=>unsubscribe()
    },[col])

    return {belgeler,hata}
}