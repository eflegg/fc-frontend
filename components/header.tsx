import Link from 'next/link'
import styled from 'styled-components'
import theme from '../components/Theme'

const HeaderContainer = styled.header`
position: absolute;

width: 100%;
top: 0;
left: 0;

  h1 {
  
  font-family: 'Abril fatface', cursive;
  font-size: 3.8rem;
  color: ${theme.colours.blue};
 display: table;
  line-height: 1;
  background: ${theme.colours.pink};
  margin-left: 60px;
  position: relative;
  top: 15px;
  border-radius: 60%;
  a{
    display: table;
  }
  @media ${theme.devices.ipad} {
  font-size: 4rem;
  margin-left: 45px;
  top: 15px;
  }
  @media ${theme.devices.medium} {
  font-size: 5.6rem;
  margin-left: 60px;
  top: 20px;
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
  <HeaderContainer>
      <SkipLink className="language--btn" href="#main-content">Skip to main content</SkipLink>
      <a href="/">
      <h1 className="logo">
        Flegg Creative
      </h1>
      </a>
  </HeaderContainer>
  )
}
