import Link from "next/link"
import { useRef } from "react"

export function SubMenuItem({link, title, srText}){
    const ref = useRef<any>(null);
    return (
        <>
        <li ref={ref} className="submenu-item">
            <Link href={link}>{title}</Link><span className="sr-only">{srText}</span></li>
        </>
        )
      
}

