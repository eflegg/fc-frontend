import Alert from './alert'
import Footer from './footer'
import Meta from './meta'
import styled from 'styled-components'
import theme from '../components/Theme'
import Header from './header'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'


const OuterContainer = styled.div`
background: ${theme.colours.cream};
position: relative;
z-index: 1;
overflow: clip;
main {
  position: relative;
  height: 100%;
}
@media ${theme.devices.small}{

  *{
      cursor: none;
  }
      .cursor {
          width: 50px;
          height: 50px;
          border-radius: 100%;
          transition: all 200ms ease-out;
          position: fixed;
          pointer-events: none;
          left: 0;
          top: 0;
          background-color: var(--blue);
      
          z-index: 120;
      }
      .cursor-2 {
          width: 20px;
          height: 20px;
          border-radius: 100%;
          background-color: var(--purple);
          opacity: .3;
          position: fixed;
          transform: translate(-50%, -50%);
          pointer-events: none;
          transition: width .3s, height .3s, opacity .3s;
          z-index: 120;
      }
      .hover {
    width: 100px;
    height: 100px;
    opacity: 0.5;
    background-color: ${theme.colours.orange};
}
}

`




export default function PageWrapper({ children, fade, noFooter, noFade }:{children: any, fade?:boolean, noFooter?:boolean, noFade?:boolean}) {


  useEffect(()=>{
    const cursor = document.querySelector('.cursor') as any;
const a = document.querySelectorAll('a') as NodeListOf<HTMLAnchorElement>;
const cursorinner = document.querySelector('.cursor-2') as any;

document.addEventListener('mousemove', (e) => {
    const x = e.clientX;
    // console.log(`the x pos= ${x}`);
    const y = e.clientY;
    cursor.style.transform = `translate3d(calc(${x}px - 50%), calc(${y}px - 50%), 0)`;
  });

  document.addEventListener('mousemove', (e) => {
    const x = e.clientX;
    const y = e.clientY;
    cursorinner.style.left = `${x}px`;
    cursorinner.style.top = `${y}px`;
  });

  document.addEventListener('mousedown', () => {
    cursorinner.classList.add('cursorinnerhover');
  });
  
  document.addEventListener('mouseup', () => {
    cursorinner.classList.remove('cursorinnerhover');
  });

  a.forEach(item => {
    console.log(item);
    item.addEventListener('mouseover', () => {
      cursor.classList.add('hover');
    });
    item.addEventListener('mouseleave', () => {
      cursor.classList.remove('hover');
    });
  });
  })

  const [fading, setFading]= useState(false);
  const router = useRouter()

  const handleClick = (e:any, path:any) => {
    e.preventDefault();
    setFading(true);
    console.log('path: ', path);
    setTimeout(()=>{
     router.push('/' + path);
     console.log('default resumed');
    }, 500);
    router.pathname == path ? setFading(false) : null
    
   };


  return (
    <>
      <Meta />
      <OuterContainer>

        <Header onLinkClick ={handleClick}/>

        <main  className={`${fading ? "fade-out" :""}  ${fade ? "fade-out" :""} ${!noFade ? "fade-in" :""} main-content scroll `} data-scroll-container id="main-content">{children}</main>

        <Footer noFooter={noFooter}/>
        <div className="cursor"></div>
            <div className="cursor-2"></div>
      </OuterContainer>
    </>
  )
}
