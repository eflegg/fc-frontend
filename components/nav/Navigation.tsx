import styled from 'styled-components'
import theme from '../../components/Theme'
import Link from 'next/link'
import { useState, useRef, useEffect } from 'react'
import NavCarete from './nav-carete';

import SubMenuItem from './SubMenuItem'

import { useOutsideClick } from './useOutsideClick';

import uniqid from 'uniqid';


const DesktopNav = styled.nav`
&.mobile-nav {
  .menu {
    display: flex;
    flex-direction: column;
    top: 0;
    left: 0;
    background: hotpink;
    position: fixed;
    width: 100vw;
    height: 100vh;
  }
  @media ${theme.devices.medium}{
    display: none;
  }
}
.submenu {
  position: relative;
  top: 10px;
  left: 20px;
}
&.desktop-nav {
  background: springgreen;
  display: none;
   @media ${theme.devices.medium}{
    display: flex;
  }
  .menu {
     
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
position: absolute;
left: 0;
top: 30px;
}
}
 .item-with-submenu {
  position: relative;
    display: flex;
    align-items: flex-start;
    svg {
      width: 15px;
       /* transform: rotate(0deg); */
    }
  
}
.item-with-submenu[aria-expanded="true"]{
  svg {
    transform: rotate(180deg);
  }
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
     {title: "Services", link: "services", submenu: [{title: "Websites", srText: "case study", link: "websites"},{title: "Marketing Plans", srText: "case study", link: "marketing-plans"}, {title: "Brand Design", srText: "case study", link: "brand-design"}]}, 
]

  interface WindowSpecs {
    width: any;
    height: any;
    scrollY: any;
  }

 


export default function Navigation(){

 

 function useWindowSpecs() {
    // Initialize state with undefined width/height so server and client renders match
    // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
    const [windowSpecs, setWindowSpecs] = useState<WindowSpecs>({
      width: undefined,
      height: undefined,
      scrollY: undefined,
    });

    useEffect(() => {
      //sets the window size when client loads
      // only execute all the code below in client side
      //nextjs needs this or will throw an error that variable doesn't exist
      function handleResize() {
        // Set window width/height to state
        setWindowSpecs({
          width: window.innerWidth,
          height: window.innerHeight,
          scrollY: window.scrollY,
        });
      }
      if (typeof window !== "undefined") {
        // Handler to call on window resize
        // Add event listener
        window.addEventListener("resize", handleResize);
        window.addEventListener("scroll", handleResize);
        // Call handler right away so state gets updated with initial window size
        handleResize();
        // Remove event listener on cleanup
        return () => window.removeEventListener("resize", handleResize);
      }
    }, []); // Empty array ensures that effect is only run on mount
    return windowSpecs;
  }

  //updates when the client loads so you can use it
  const size = useWindowSpecs();

    const [subnav, setSubnav] = useState(null);
    console.log('subnav: ', subnav);

    function handleSubnavClick(menuId: any){

      console.log('menuId ', menuId);
      if (subnav != menuId) {
        setSubnav(menuId);
     
      } else if (subnav === menuId)  {
        setSubnav(null);
      } 
    };



    const subref = useRef<HTMLLIElement>(null);
    const ref = useOutsideClick(() => {
    setSubnav(null);
  });


    useEffect(() => {
        const keyDownHandler = (event: any) => {
            const focusedElement = document.activeElement;
            // console.log('active element: ', document.activeElement);
            // console.log('subref.current: ', subref.current);
            const lastFocusableElement = subref.current.lastElementChild.querySelector("a");
          console.log(focusedElement, lastFocusableElement);
          if (!event.shiftKey && focusedElement === lastFocusableElement) {
            event.preventDefault();
            setSubnav(null);
            return;
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
{size.width < 1000 ?  (
<div>
    <button 
      aria-label="menu" 
      aria-expanded="false" 
      className="mobile-menu--toggle">
    </button>
    <span>Menu</span>
</div>
):null}
<DesktopNav className={size.width < 1000 ? "mobile-nav" : "desktop-nav"} aria-label="primary menu">
    <ul className="menu">
        {items.map((item, index)=>{
            return (
                <>
                {item.submenu ? (
                    <li tabIndex={1} role="menuitem" key={uniqid()}>
                      <button ref={ref} onClick={()=> handleSubnavClick(item.title)} className="item-with-submenu" aria-expanded={subnav === item.title ? "true" : "false"} aria-label={`Submenu of ${item.title}`}>{item.title}
                      <NavCarete />
                    </button>	
                    {/* <SubMenuButton subnav={subnav} onClick={handleSubnavClick} title={item.title} /> */}
                    <ul   className="submenu" aria-hidden={subnav === item.title ? "false" : "true"}>
                        {item.submenu.map((submenuItem, index)=>{
                          return (
                              <SubMenuItem customRef={subref} customKey={uniqid()} link={`${item.link}/${submenuItem.link}`} title={submenuItem.title} srText={submenuItem.srText} />
                          )
                        })}
                    </ul>
                    </li>
                   
                ):(
                <li key={uniqid()} role="menuitem"><Link href={`/${item.link}`}>{item.title}
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