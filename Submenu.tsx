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

    const ref = useRef<any>(null)

    useEffect(()=>{
        const closeSubmenuHandler = (event: any)=>{
            const focusedElement = document.activeElement;
            console.log('focused element: ', focusedElement);
            const firstSubmenuItem = ref.current.children[0].querySelector("a");
            const lastSubmenuItem = ref.current.lastElementChild.querySelector("a");

console.log('first focus element: ', firstSubmenuItem);
console.log('last focus element: ', lastSubmenuItem);

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
        document.addEventListener("keyup", closeSubmenuHandler);
        // clean up event listener
        return () => {
          document.removeEventListener("keyup", closeSubmenuHandler);
        };
    },[])

    return (
        <>
        <ul ref={ref} className="submenu" aria-hidden={subnav === title ? "false" : "true"}>
            {submenuItems && submenuItems.map((submenuItem, index)=>{
                return (
                    <SubMenuItem customKey={uniqid()} link={`${submenuItem.link}/${submenuItem.link}`} title={submenuItem.title} srText={submenuItem.srText} />
                )
            })}
        </ul>
        </>
    )
}
