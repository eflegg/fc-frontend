import Link from 'next/link'
import {  useRef, useEffect } from 'react'
import uniqid from 'uniqid';

function SubMenuItem({link, title, srText, customKey}:{customKey: any, link: string,title:string, srText:string}){
   

return (
    <>
    <li key={customKey}  className="submenu-item">
        <Link href={link}>{title}</Link><span className="sr-only">{srText}</span></li>
    </>
    )
  
}

export default function Submenu({submenuItems, subnav, title, callback}:{submenuItems:any, subnav: string, title: string, callback:any}){

    const subMenuRef = useRef<any>(null)

    useEffect(()=>{
        const closeSubmenuHandler = (event: any)=>{
            const focusedElement = document.activeElement;
            
            const firstSubmenuItem = subMenuRef.current.children[0].querySelector("a");
            const lastSubmenuItem = subMenuRef.current.lastElementChild.querySelector("a");



            if (!event.shiftKey && focusedElement === lastSubmenuItem) {
                event.preventDefault();
                callback();
                return;
              }
              if (event.shiftKey && focusedElement === firstSubmenuItem) {
                callback();
                return;
            }
        };
        document.addEventListener("keydown", closeSubmenuHandler);
        // clean up event listener
        return () => {
          document.removeEventListener("keydown", closeSubmenuHandler);
        };
    },[])


    return (
        <>
        <ul ref={subMenuRef} className="submenu" aria-hidden={subnav === title ? "false" : "true"}>
            {submenuItems && submenuItems.map((submenuItem, index)=>{
                return (
                    <SubMenuItem customKey={uniqid()} link={`${submenuItem.link}/${submenuItem.link}`} title={submenuItem.title} srText={submenuItem.srText} />
                )
            })}
        </ul>
        </>
    )
}
