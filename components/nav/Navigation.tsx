import styled from 'styled-components'
import theme from '../../components/Theme'
import Link from 'next/link'
import { useState, useRef, useEffect } from 'react'
import NavCarete from './nav-carete'
import SubMenuItem from './SubmenuItem'
import { useMediaQuery } from "@uidotdev/usehooks";

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
position: fixed;
transform: translateY(80%);
}
}
 .item-with-submenu {
          display: flex;
          align-items: flex-start;
          svg {
            width: 15px;
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
    const handleSubnavClick = (menuId: any) => {
      console.log('menuId ', menuId);
         console.log('subnav ', subnav);
         if (subnav === menuId) {
        setSubnav(null);
     
      } else  if (subnav !== menuId) {
        setSubnav(menuId);
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
                    <li>
                      <button  onClick={()=> handleSubnavClick(item.title)} className="item-with-submenu" aria-expanded={subnav === item.title ? "true" : "false"} aria-label={`Submenu of ${item.title}`}>{item.title}
                      <NavCarete />
                    </button>	
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