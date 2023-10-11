import Link from 'next/link'
import {  useRef } from 'react'
import NavCarete from './nav-carete';

export default function SubMenuButton({onClick, title, subnav}:{subnav: string,title:string, onClick:any}){
const ref = useRef<HTMLButtonElement>(null);
return (
    <>
   <button ref={ref} 
    onClick={() => onClick(title)} className="item-with-submenu" aria-expanded={subnav === title ? "true" : "false"} aria-label={`Submenu of ${title}`}>
    {title}
     <NavCarete />
    </button>	
    </>
    )
  
}