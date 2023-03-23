// import Container from './container'
import { EXAMPLE_PATH } from '../lib/constants'
import styled from 'styled-components'
import theme from '../components/Theme'
import NewsLetter from '../components/signup'

const OuterContainer = styled.div`
display: flex;
flex-direction: column;
@media ${theme.devices.medium}{

flex-direction: row;
}
position: relative;
  .copyright {
    position: absolute;
    left: 10px;
    bottom: 10px;
    font-size: 2.4rem;
    font-family: ${theme.type.body};
    
color: ${theme.colours.cream};
  
  }
background: ${theme.colours.orange};


.footer-container {
 /* border: solid 3px green; */
  /* display: flex;
  flex-grow: 2; */
  padding: 40px;
  @media ${theme.devices.medium} {
    padding: 80px;
  }
  
}

.hire-us {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 40px;

  /* border: 3px solid yellow; */
  @media ${theme.devices.small}{
 
  align-items: flex-end;
  justify-content: flex-end;
  }
  @media ${theme.devices.medium}{
  padding: 80px 60px;
  max-width: 60%;
 
  }
 

  .h1 {
    font-family: ${theme.type.logoType};
    font-size: 4.6rem;
    margin: 25px 0;
    color: ${theme.colours.cream};
    line-height: 100%;
    text-align: right;
    @media ${theme.devices.small}{
      font-size: 5.4rem;
    }
    @media ${theme.devices.medium}{
      font-size: 6rem;
    }
  }

  h3 {
    font-family: ${theme.type.body};
    font-size: 3.4rem;
    line-height: 110%;
    font-weight: 600;
    margin-bottom: 20px;
    color: ${theme.colours.cream};
    @media ${theme.devices.small}{
    font-weight: 700;
    font-size: 4.4rem;
    text-align: right;
    }
  }

  button {
    width: fit-content;
    background: ${theme.colours.pink};
    font-family: ${theme.type.body};
    color: ${theme.colours.blue};
    font-size: 2.4rem;
    padding: 10px 40px;
    border-radius: 60px;
    @media ${theme.devices.small}{
    }
  }

}



`



export default function Footer() {
  return (
    <footer className="">
      <OuterContainer>
        <div className="copyright">
          Flegg Creative {(new Date().getFullYear())}
        </div>
        <div className="footer-container">
          <NewsLetter text="Get our newsletter" buttonText="Sign up" />
        </div>
        <div className='hire-us flex flex-col'>

          <h3>
            Got questions? Wondering if we're a good fit? Just give us a shout.
          </h3>
          <button>
            Contact
          </button>
          <h4 className="h1">Flegg Creative</h4>
        </div>

      </OuterContainer>
    </footer>
  )
}
