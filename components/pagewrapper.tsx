import Alert from './alert'
import Footer from './footer'
import Meta from './meta'
import styled from 'styled-components'
import theme from '../components/Theme'
import Header from './header'

const OuterContainer = styled.div`
background: ${theme.colours.green};
position: relative;
z-index: 1;
overflow: hidden;


  /* button, input, li {
  &:focus-within {
    border: 4px dotted #18172B;
  } */
}


`

export default function PageWrapper({ preview, children, languageChoice }) {
  
  return (
    <>
      <Meta />
      <OuterContainer>
    
<Header />
         
          <main id="main-content">{children}</main>

        <Footer languageChoice={languageChoice} />
      </OuterContainer>
    </>
  )
}
