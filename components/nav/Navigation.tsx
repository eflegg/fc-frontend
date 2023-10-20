import styled from 'styled-components'
import theme from '../Theme'
import Link from 'next/link'
import { useState, useRef, useEffect } from 'react'
import uniqid from 'uniqid';
import NavCarete from '../../NavCarete';
import SubMenuItem from '../../Submenu';
import Submenu from '../../Submenu';
import { useClickOutside } from './useClickOutside';
import {useKeyPress} from './useKeyPress'

const Nav = styled.nav`
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
  const [subnav, setSubnav] = useState(null);
  const [subnavIndex, setSubnavIndex] = useState(null);
  function handleSubnavClick(menuId: any){
    if (subnav != menuId) {
      setSubnav(menuId);
   
    } else if (subnav === menuId)  {
      setSubnav(null);
    } 
  };

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
      useEffect(() => {
        const keyDownHandler = (event: any) => {
          if (event.key === "Escape") {
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

      useEffect(()=>{
        const shiftPressHander = (event: any)=>{
          if(shiftHeld && subnavIndex === 0){
            console.log('shift pressed');
            setSubnav(null);
          }
        };
        document.addEventListener("keydown", shiftPressHander);
        // clean up event listener
        return () => {
          document.removeEventListener("keydown", shiftPressHander);
        };
      })

      const buttonRef = useClickOutside(() => {
        setSubnav(null);
       });
       const subRef = useRef(null);

       const [shiftHeld, setShiftHeld] = useState(false);


       function downHandler({key}) {
         if (key === 'Shift') {
           setShiftHeld(true);
         }
       }
     
       function upHandler({key}) {
         if (key === 'Shift') {
           setShiftHeld(false);
         }
       }
     
       useEffect(() => {
         window.addEventListener('keydown', downHandler);
         window.addEventListener('keyup', upHandler);
         return () => {
           window.removeEventListener('keydown', downHandler);
           window.removeEventListener('keyup', upHandler);
         };
       }, []);


     
       useEffect(()=>{
        const arrowHandler =(event:any) =>{
          if(event.key === "ArrowUp"){
            const parent = document.activeElement.parentElement;
            const prevParent = parent.previousElementSibling;
            const prevSubitem = prevParent.childNodes[0];
            console.log('prev subitem: ', prevSubitem);
            console.log('arrow up pressed');
            (prevSubitem as HTMLAnchorElement).focus();
            return;
          }
          if(event.key === "ArrowDown"){
            console.log('arrow down pressed');
            const parent = document.activeElement.parentElement;
            const nextParent = parent.nextElementSibling;
            const nextSubitem = nextParent.childNodes[0];
            (nextSubitem as HTMLAnchorElement).focus();
          }
        };
        window.addEventListener('keydown', arrowHandler);
        return()=>{
          window.removeEventListener('keydown', arrowHandler);
        }
       })


function handleSubmenuBlur(length:number, position:number){
  if(!shiftHeld && length === position + 1 ){
    setSubnav(null);
  }

}
console.log('subnav index: ', subnavIndex);

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
<Nav className={size.width < 1000 ? "mobile-nav" : "desktop-nav"} aria-label="Flegg Creative navigation">
    <ul id="menu1" className="menu">
 
      {items && items.map((item, index)=>{
        return(
          <>
          {item.submenu ? (
            <li>
            <a href={item.link}>{item.title}</a>
            <button ref={buttonRef} onClick={()=> handleSubnavClick(item.title)} aria-expanded={subnav === item.title ? "true" : "false"} >btn</button>
            <ul ref={subRef} aria-hidden={subnav === item.title ? "false" : "true"} className="submenu">
              {item.submenu.map((subItem, index)=>{
                return(
                  <>
               <li>
                <a onFocus={()=>setSubnavIndex(index)}onBlur={()=> handleSubmenuBlur(item.submenu.length, index)} href={subItem.link}>{subItem.title}</a>
              </li>
                  </>
                )
              })}
            
           
            </ul>
           </li>
          ):(
            <li>
            <a href={item.link}>{item.title}</a>
           </li>
          )}
          </>
        )
        
      })}
    </ul>
</Nav>
</>
    )
}

