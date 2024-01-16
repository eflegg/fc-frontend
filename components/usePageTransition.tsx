import React, { useState } from 'react'
import { useRouter } from 'next/router'




export default function UseWaypoint({clickProp, path, children}:{clickProp?: any, path?:any, children: any}){

    const [isFading, setIsFading]= useState(false);
    function handleLinkClick(){
        clickProp ? clickProp() : null;
       

    }
   

    return (
        <>
            <span className="">
            {children}
            </span>
        </>
    )
}