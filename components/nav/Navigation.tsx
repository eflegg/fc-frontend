import styled from 'styled-components'
import theme from '../../components/Theme'
import Link from 'next/link'
import { useState, useRef, useEffect } from 'react'
import uniqid from 'uniqid';
import NavCarete from '../../NavCarete';
import SubMenuItem from '../../Submenu';
import Submenu from '../../Submenu';
import { useOutsideClick } from './useClickOutside';

const DesktopNav = styled.nav`
&.mobile-nav {
    .menu {
      z-index: 10;
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
/* position: absolute; */
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
     {title: "Services", link: "services", submenu: [{title: "Websites", srText: "service", link: "websites"},{title: "Marketing Plans", srText: "service", link: "marketing-plans"}, {title: "Brand Design", srText: "service", link: "brand-design"}]}, 
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
      function handleSubnavClick(menuId: any){
        if (subnav != menuId) {
          setSubnav(menuId);
       
        } else if (subnav === menuId)  {
          setSubnav(null);
        } 
      };

     
      useEffect(() => {
        const keyDownHandler = (event: any) => {
          console.log('keypress: ', event.key);
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

      const ref = useOutsideClick(() => {
        setSubnav(null);
       });


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
                    <li  role="menuitem" key={uniqid()}>
                      <button ref={ref} onClick={()=> handleSubnavClick(item.title)} className="item-with-submenu" aria-expanded={subnav === item.title ? "true" : "false"} aria-label={`Submenu of ${item.title}`}>{item.title}
                      <NavCarete />
                    </button>	
                    <Submenu callback={setSubnav}submenuItems={item.submenu} title={item.title} subnav={subnav} />
                   
                
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

