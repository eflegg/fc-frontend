import Link from "next/link"
import { useRef } from "react"

export function SubMenuItem({link, title, srText}){
    const lastSubItemRef = useRef<any>(null);
    return (
        <>
        <li ref={lastSubItemRef} className="submenu-item">
            <Link href={link}>{title}</Link><span className="sr-only">{srText}</span></li>
        </>
        )
      
}

