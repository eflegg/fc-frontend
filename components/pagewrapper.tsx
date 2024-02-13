import Alert from './alert'
import Footer from './footer'
import Meta from './meta'
import styled from 'styled-components'
import theme from '../components/Theme'
import Header from './header'
import { useState } from 'react'
import { useRouter } from 'next/router'


const OuterContainer = styled.div`
background: ${theme.colours.cream};
position: relative;
z-index: 1;
overflow: hidden;
main {
  position: relative;
  height: 100%;
}
`




export default function PageWrapper({ children, fade, noFooter }:{children: any, fade?:boolean, noFooter?:boolean}) {

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

        <main  className={`${fading ? "fade-out" :""} ${fade ? "fade-out" :""} main-content scroll `} data-scroll-container id="main-content">{children}</main>

        <Footer noFooter={noFooter}/>
      </OuterContainer>
    </>
  )
}
