import styled from 'styled-components'
import Link from 'next/link'
import { useState, useRef, useEffect } from 'react'

const DesktopNav = styled.nav`
.menu {
    button {
        display: flex;
        align-items: flex-start;
        svg {
            width: 15px;
        }
    }
    display: flex;
    align-items: center;
    li {
        margin: 0px 15px;
        display: flex;
        flex-direction: column;
       position: relative;
    }
}
.submenu {
    display: flex;
    flex-direction: column;
position: fixed;
transform: translateY(80%);
}
.submenu[aria-hidden="true"] {
   display: none;
   position: relative;
}

`


const items = [
    {title: "About", link: "about"}, 
    {title: "Contact", link: "contact"}, 
    {title: "Case Studies", link: "case-studies", submenu: [{title: "Aparagus Magazine", srText: "case study", link: "asparagus-magazine"},{title: "Hearth Place Counselling", srText: "case study", link: "hearthplace-counselling"}, {title: "Brendan Bailey", srText: "case study", link: "brendan-bailey"}]}, 
]

export function SubMenuItem({link, title, srText}){
const ref = useRef<any>(null);
return (
    <>
    <li ref={ref} className="submenu-item">
        <Link href={link}>{title}</Link><span className="sr-only">{srText}</span></li>
    </>
    )
  
}

export default function Navigation(){

    const [subnav, setSubnav] = useState(null);
    const handleSubnavClick = (menuId: any) => {
      if (subnav != menuId) {
        setSubnav(menuId);
      } else if (subnav == menuId) {
        setSubnav(null);
      } else {
        setSubnav(null);
      }
    };



    const ref = useRef<HTMLUListElement>(null);
    useEffect(() => {
      const checkIfClickedOutside = (e: any) => {
        // If the menu is open and the clicked target is not within the menu,
        // then close the menu
        if (subnav && ref.current && !ref.current.contains(e.target)) {
          setSubnav(null);
        }
      };
      document.addEventListener("mousedown", checkIfClickedOutside);
      return () => {
        // Cleanup the event listener
        document.removeEventListener("mousedown", checkIfClickedOutside);
      };
    }, [subnav]);

    useEffect(() => {
        const keyDownHandler = (event: any) => {
            const focusedElement = document.activeElement;
            const lastFocusableElement = ref.current.lastElementChild.querySelector("a");
    console.log(focusedElement, lastFocusableElement);
          if (!event.shiftKey && focusedElement === lastFocusableElement) {
            event.preventDefault();
            setSubnav(null);
          }
        };
        document.addEventListener("keydown", keyDownHandler);
        // clean up event listener
        return () => {
          document.removeEventListener("keydown", keyDownHandler);
        };
      }, []);

    useEffect(() => {
        const keyDownHandler = (event: any) => {
          if (event.key === "Escape") {
            event.preventDefault();
            setSubnav(null);
          }
        };
        document.addEventListener("keydown", keyDownHandler);
        // clean up event listener
        return () => {
          document.removeEventListener("keydown", keyDownHandler);
        };
      }, []);

    return (
<>
<DesktopNav aria-label="primary menu">
    <ul className="menu">
        {items.map((item, index)=>{
            return (
                <>
                {item.submenu ? (
                    <li><button onClick={()=> handleSubnavClick(item.title)} className="item-with-submenu" aria-expanded={subnav === item.title ? "true" : "false"} aria-label={`Submenu of ${item.title}`}>{item.title}<svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    role="presentation"
                >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <polyline points="6 9 12 15 18 9" />
                </svg></button>	
                    <ul  ref={ref} className="submenu" aria-hidden={subnav === item.title ? "false" : "true"}>
                        {item.submenu.map((submenuItem, index)=>{
return (
    <SubMenuItem link={`${item.link}/${submenuItem.link}`} title={submenuItem.title} srText={submenuItem.srText} />
)
                        })}
                    </ul>
                    </li>
                   
                ):(

                <li key={index} role="menuitem"><Link href={`/${item.link}`}>{item.title}
               </Link>
                </li>
                )}
                </>
            )
        })}
    </ul>
</DesktopNav>
</>
    )
}