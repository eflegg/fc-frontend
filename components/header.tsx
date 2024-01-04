import Link from 'next/link'
import styled from 'styled-components'
import theme from '../components/Theme'
import Navigation from './nav/Navigation'


const HeaderContainer = styled.header`
/* position: absolute; */

transform: translate3d(0, 0, 0);
transition: all .5s ease-in-out;
padding: 1rem;
@media ${theme.devices.small}{
  padding: 0 2rem 0 2rem;
}
position: fixed;
top: 0;
width: 100%;
background-color: var(--background);
z-index: 99;
width: 100%;
top: 0;
left: 0;



hgroup {

        display: flex;
        align-items: baseline;
        justify-content: space-between;
        h1 {
          font-size: 2rem;
        }
    }
`
const SkipLink = styled.a`
transform: translate(200%);
transition: all .25s ease-in;
position: fixed;
right: 10px;
top: 110px;
font-size: 18px;
font-family: ${theme.type.body};
border-radius: 60px;
   padding: 5px 25px;
   border: 0px;
   cursor: pointer;
   transition: all 0.15s ease-in;
   background: ${theme.colours.blue};
     transition: all 0.15s ease-in;
     color: ${theme.colours.pink};
   &:hover {
    background: ${theme.colours.pink};
     transition: all 0.15s ease-in;
     color: ${theme.colours.blue};
   }
&:focus {
  transform: translate(0%);
transition: all .25s ease-in;
}
  
`

export default function Header() {
  return (
  <HeaderContainer id="top-nav">
    <hr className="top" />
      <SkipLink tabIndex={0} className="language--btn" href="#main-content">Skip to main content</SkipLink>

      <hgroup>
   

      <a tabIndex={0} href="/">
      <h1 className="logo home fade">
        Flegg Creative
      </h1>
      </a>

  

      <Navigation />

     
      </hgroup>
      <hr className="bottom" />
  </HeaderContainer>
  )
}
