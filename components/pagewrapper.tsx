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
`




export default function PageWrapper({ children, fade }:{children: any, fade?:boolean}) {

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

        <main  className={`${fading ? "fade-out" :""} main-content scroll `} data-scroll-container id="main-content">{children}</main>

        <Footer />
      </OuterContainer>
    </>
  )
}
