import Alert from './alert'
import Footer from './footer'
import Meta from './meta'
import styled from 'styled-components'
import theme from '../components/Theme'
import Navigation from './nav/Navigation'
import Link from 'next/link'

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
h1 {
 
  font-family: 'Abril fatface', cursive;
  font-size: 3.8rem;
  color: ${theme.colours.blue};
  display: table;
  line-height: 1;
  background: ${theme.colours.pink};
  margin-left: 60px;
  position: relative;
  
  border-radius: 60%;
  @media ${theme.devices.ipad} {
  font-size: 4rem;
margin-left: 45px;

  }
  @media ${theme.devices.medium} {
  font-size: 5.6rem;
  margin-left: 60px;

  }
}

`

const Header = styled.header`
position: absolute;
display: flex;
align-items: center;
top: 15px;
@media ${theme.devices.medium} {

  top: 20px;
  }
  
`

export default function PageWrapper({ preview, children, languageChoice }) {
  
  return (
    <>
      <Meta />
      <OuterContainer>
        <div className="pagewrapper">
          <Header>

      <h1 className="logo">
        <Link href="/">
        Flegg Creative
        </Link>
      </h1>
         <Navigation />
          </Header>
          <main id="main-content">{children}</main>
        </div>
        <Footer languageChoice={languageChoice} />
      </OuterContainer>
    </>
  )
}
