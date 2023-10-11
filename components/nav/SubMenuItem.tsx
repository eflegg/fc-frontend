import Link from 'next/link'
import {  useRef } from 'react'

export default function SubMenuItem({link, title, srText, customKey}:{customKey: any, link: string,title:string, srText:string}){
const ref = useRef<any>(null);
return (
    <>
    <li key={customKey} ref={ref} className="submenu-item">
        <Link href={link}>{title}</Link><span className="sr-only">{srText}</span></li>
    </>
    )
  
}