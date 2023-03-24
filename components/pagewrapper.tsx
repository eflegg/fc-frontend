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
.inner-container{
  position: absolute; 
  top: 0;
  left: 0;
  background: ${theme.colours.pink};
  opacity: 0;
  height: 100%;
  width: 100%;
}
`

export default function PageWrapper({ preview, children }) {
  return (
    <>
      <Meta />
      <OuterContainer>
        <div className="inner-container">

        </div>
        <div className="min-h-screen ">
          {/* <Alert preview={preview} /> */}
          <main>{children}</main>
        </div>
        <Footer />
      </OuterContainer>
    </>
  )
}
