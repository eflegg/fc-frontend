import Link from 'next/link'
import styled from 'styled-components'
import theme from '../components/Theme'
import Navigation from './nav/Navigation'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'


const HeaderContainer = styled.header`

transition: all .5s ease-in-out;
z-index: 99;
position: fixed;
padding: 1rem;
background-color: ${theme.colours.cream};
width: 100%;
left: 0;
&.header-viz {
  top: 0;
  transition: all .5s ease-in-out;
}
&.header-not-viz{
  top: -100px;
  transition: all .5s ease-in-out;
}
.home, hr {
  z-index: 30;
  position: relative;
}
@media ${theme.devices.small}{
  padding: 0 2rem 0 2rem;
}

hgroup {

        display: flex;
        align-items: baseline;
        justify-content: space-between;
        h1 {
          font-size: 2rem;
        }
    }
`
const SkipLink = styled.a`
transform: translate(200%);
transition: all .25s ease-in;
position: fixed;
right: 10px;
top: 110px;
font-size: 18px;
font-family: ${theme.type.body};
border-radius: 60px;
   padding: 5px 25px;
   border: 0px;
   cursor: pointer;
   transition: all 0.15s ease-in;
   background: ${theme.colours.blue};
     transition: all 0.15s ease-in;
     color: ${theme.colours.pink};
   &:hover {
    background: ${theme.colours.pink};
     transition: all 0.15s ease-in;
     color: ${theme.colours.blue};
   }
&:focus {
  transform: translate(0%);
transition: all .25s ease-in;
}
  
`

export default function Header({onLinkClick}:{onLinkClick: any}) {

  const [headerInView, setHeaderInView]= useState(true);

  useEffect(()=> {
    var prevScrollPos = window.scrollY;
  console.log(`the scroll position starts at ${prevScrollPos}px`);
  const headerScrollHandler =()=>{
    const currentScrollPos = window.scrollY;


    if (prevScrollPos > currentScrollPos) {
      setHeaderInView(true);
    } else {
      setHeaderInView(false);
    }
    prevScrollPos = currentScrollPos;
  }


  window.addEventListener('scroll', headerScrollHandler);
  return()=>{
    window.removeEventListener('scroll', headerScrollHandler);
  }
  })

  const [fading, setFading]= useState(false);
  const router = useRouter()

// const handleClick = (e:any, path:any) => {
//  e.preventDefault();
//  setFading(true);
//  console.log('path: ', path);
//  setTimeout(()=>{
//   router.push('/' + path);
//   console.log('default resumed');
//   setFading(false);
//  }, 1000);
 
// };

  return (
  <HeaderContainer className={`${headerInView ? "header-viz": "header-not-viz"} `} id="top-nav">
    <hr className="top" />
      <SkipLink tabIndex={0} className="language--btn" href="#main-content">Skip to main content</SkipLink>

      <hgroup>
   

      <a onClick={(e)=> onLinkClick(e, "/")} tabIndex={0} href="/">
      <h1 className="logo home fade">
        Flegg Creative
      </h1>
      </a>

  

      <Navigation onLinkClick={onLinkClick}/>

     
      </hgroup>
      <hr className="bottom" />
  </HeaderContainer>
  )
}
