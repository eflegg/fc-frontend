import React, { useState } from 'react'
import { Waypoint } from 'react-waypoint';




export default function UseWaypoint({enterProp, leaveProp, children, animClass}:{enterProp?: any, leaveProp?:any, children: any, animClass?:string}){

    const [isVisible, setIsVisible]= useState(false);
    function handleEnter(){
        enterProp ? enterProp() : null;
        setIsVisible(true);

    }
    function handleLeave(){
       leaveProp ? leaveProp(): null;
        setIsVisible(false);
    }

    return (
        <>
        <Waypoint onEnter={()=>handleEnter()} onLeave={()=>handleLeave()}>
            <span className={`${animClass} ${isVisible ? "activated" : "not-activated" }`}>
            {children}
            </span>
        </Waypoint>
        </>
    )
}