import Alert from './alert'
import Footer from './footer'
import Meta from './meta'
import styled from 'styled-components'
import theme from '../components/Theme'
import Header from './header'
import { useEffect } from 'react'



const OuterContainer = styled.div`
background: ${theme.colours.cream};
position: relative;
z-index: 1;
overflow: hidden;
`





export default function PageWrapper({ children }) {



  return (
    <>
      <Meta />
      <OuterContainer>

        <Header />

        <main className="main-content scroll" data-scroll-container id="main-content">{children}</main>

        <Footer />
      </OuterContainer>
    </>
  )
}
