import Alert from './alert'
import Footer from './footer'
import Meta from './meta'
import styled from 'styled-components'
import theme from '../components/Theme'
import Header from './header'
import { useState } from 'react'



const OuterContainer = styled.div`
background: ${theme.colours.cream};
position: relative;
z-index: 1;
overflow: hidden;
`




export default function PageWrapper({ children, fade }:{children: any, languageCHoice?:string, fade?:boolean}) {


  return (
    <>
      <Meta />
      <OuterContainer>

        <Header />

      {/* main content needs to check for class .faded. it also needs
      to be attached to a timeout so the class is removed when the
      next page is loaded
      
      since this main element applies to every page via the PageWrapper
      component, the prop to control it needs to be passed from the
      page (right now only work single) into that page's PageWrapper 
      and down here to the main element

      Go to slug.tsx in the work folder
      */}

        <main  className={`${fade ? "fade-out" :""} main-content scroll `} data-scroll-container id="main-content">{children}</main>

        <Footer />
      </OuterContainer>
    </>
  )
}
