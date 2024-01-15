import styled from 'styled-components'
import theme from '../Theme'
import Link from 'next/link'
import { useState, useRef, useEffect } from 'react'
import uniqid from 'uniqid';
import NavCarete from './NavCarete';
import SubMenuItem from '../../Submenu';
import Submenu from '../../Submenu';
import { useClickOutside } from './useClickOutside';
import {useKeyPress} from './useKeyPress'

const NavContainer = styled.section`
  .mobile-menu--toggle{
  z-index: 30;
  position: relative;
}
`

const Nav = styled.nav`
a {
  font-family: "brother-1816", sans-serif;
    font-weight: 400;
    color: rgb(201, 82, 60);
    text-decoration: none;
    /* margin-right: 3rem; */
    &:visited {
      color: rgb(201, 82, 60);
    text-decoration: underline;
    }
    &:hover {
      color: #1D76FC;
    font-style: italic;
    }
    &:focus {
      color: #1D76FC;
    font-style: italic;
    }
    &:active {
      color: #1D76FC;
    font-style: italic;
    text-decoration: underline;
    }
  
}
.submenu {
  position: relative;
}

&.mobile-nav {
    .menu {
      transition: all .25s ease-in;
      opacity: 0;
      width: 0vw;
      height: 0vh;
      &.nav-open {
        transition: all .25s ease-in;
        opacity: 1;
        width: 100vw;
    height: 100vh;
      }
   
      background: peachpuff;
      z-index: 10;
    display: flex;
    flex-direction: column;
    top: 0;
    left: 0;
    position: fixed;
    justify-content: flex-start;
   padding-top: 100px;
    align-items: flex-start;
    padding-left: 20px;
    li {
      position: relative;
    }
    a {
      text-align: left;
      font-size: 4rem;
    }
  }
  .submenu {
    position: relative;
    top: 3px;
    left: 10px;
    a {
      font-size: 1.5rem;
    }
  }

}

&.desktop-nav {
    .item-with-submenu {
  a {
    margin-right: 2rem;
  }
  display: flex;
  .submenu {
    top: 10px;
  left: 20px;
  position: absolute;
  top: 35px;
    left: 0px;
    background: ${theme.colours.cream};
    padding: 10px;
    li{
      margin-left: 0px;
      line-height: 110%;
      margin-bottom: 10px;
    }
  }
  }
  .menu {
      display: flex;
      align-items: flex-end;
      li {
          margin: 0px 15px;
          color: ${theme.colours.blue};
          font-weight: 600;
          display: flex;
          flex-direction: column;
         position: relative;
         &:hover {
            width: 100%;
           
          }
      }
  }

}
button{
  position: absolute;
  left: 155px;
  top: 14px;
  @media (min-width: 500px){
    left: 50px;
    right: 0px;
    
  top: 3px;
  }
  width: 50px;
  svg {
    transform: rotate(0deg);
    transition: all .25s ease-in;
    width: 80px;
    @media (min-width: 500px){

      width: 30px;
    }
  }
}
button[aria-expanded="true"]{
  svg {
    transform: rotate(180deg);
    transition: all .25s ease-in;
  }
}
.submenu[aria-hidden="true"] {
   display: none;
   position: relative;
  
  
}

`

interface Items {
  title: string;
  link: string;
  submenu?: any;
}

const items = [
    {title: "about", link: "about"}, 
    {title: "work", link: "work", submenu: [{title: "Aparagus Magazine", srText: "case study", link: "asparagus-magazine"},{title: "Hearth Place Counselling", srText: "case study", link: "hearthplace-counselling"}, {title: "Brendan Bailey", srText: "case study", link: "brendan-bailey"}]}, 
    {title: "blog", link: "blog"}, 
    {title: "contact", link: "contact"}, 
  
    //  {title: "Services", link: "services", submenu: [{title: "Websites", srText: "service", link: "websites"},{title: "Marketing Plans", srText: "service", link: "marketing-plans"}, {title: "Brand Design", srText: "service", link: "brand-design"}]}, 
]



  interface WindowSpecs {
    width: any;
    height: any;
    scrollY: any;
  }

export default function Navigation(){
  const [navOpen, setNavOpen]= useState(false);
  const [subnav, setSubnav] = useState(null);
  const [subnavIndex, setSubnavIndex] = useState(null);

  function handleNavClick(){
    navOpen ? setNavOpen(false) : setNavOpen(true);
    console.log('i am clicked');
  }

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

console.log('items: ', items);

    return (
        <NavContainer>
      {size.width < 500 ?  (
<div className="mobile-menu--toggle">
    <button 
    onClick={()=>handleNavClick()}
      aria-label="menu" 
      aria-expanded={navOpen ? "true" : "false"} 
      >Menu
    </button>
    {/* <span>Menu</span> */}
</div>
):null}

<Nav className={size.width < 500 ? "mobile-nav" : "desktop-nav"} aria-label="Flegg Creative navigation">
    <ul id="menu1" className={`${navOpen ? "nav-open" : "" } menu`}>
 
      {items && items.map((item, index)=>{
        return(
          <>
          {item.submenu ? (
            <li className="item-with-submenu">
             
            <a href={item.link}>{item.title}</a>
            <button ref={buttonRef} onClick={()=> handleSubnavClick(item.title)} aria-expanded={subnav === item.title ? "true" : "false"} ><NavCarete /></button>
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
            <>
            <li>
            <a href={`/${item.link}`}>{item.title}</a>
           </li>
     
          </>
        )
        
      }
     
      </>
      )})}
    </ul>
</Nav>
</NavContainer>
    )
}

