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




export default function PageWrapper({ children, languageChoice, fade }) {


  return (
    <>
      <Meta />
      <OuterContainer>

        <Header />

        <main  className={`${fade ? "fade-out" :""} main-content scroll `} data-scroll-container id="main-content">{children}</main>

        <Footer />
      </OuterContainer>
    </>
  )
}
