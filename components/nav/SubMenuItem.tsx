import Link from 'next/link'
import {  useRef } from 'react'

export default function SubMenuItem({link, title, srText, customKey, customRef}:{customKey: any, link: string,title:string, srText:string, customRef:any}){

return (
    <>
    <li key={customKey} ref={customRef} className="submenu-item">
        <Link href={link}>{title}</Link><span className="sr-only">{srText}</span></li>
    </>
    )
  
}