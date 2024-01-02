import Alert from './alert'
import Footer from './footer'
import Meta from './meta'
import styled from 'styled-components'
import theme from '../components/Theme'

import Link from 'next/link'

import Button from './buttons/Button'


const OuterContainer = styled.div`
background: ${theme.colours.green};

position: relative;
z-index: 1;
overflow: hidden;


  /* button, input, li {
  &:focus-within {
    border: 4px dotted #18172B;
  } 
}
*/

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
    
<Header />
         
          <main id="main-content">{children}</main>

        <Footer languageChoice={languageChoice} />
      </OuterContainer>
    </>
  )
}
