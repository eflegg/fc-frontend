import Alert from './alert'
import Footer from './footer'
import Meta from './meta'
import styled from 'styled-components'
import theme from '../components/Theme'

const OuterContainer = styled.div`
background: ${theme.colours.green};
position: relative;
z-index: 1;
overflow: hidden;

  button, input {
  &:focus-within {
    border: 4px dotted #18172B;
  }

}

`

export default function PageWrapper({ preview, children, languageChoice }) {
  
  return (
    <>
      <Meta />
      <OuterContainer>
       
        <div className="min-h-screen ">
          {/* <Alert preview={preview} /> */}
          <main>{children}</main>
        </div>
        <Footer languageChoice={languageChoice} />
      </OuterContainer>
    </>
  )
}
