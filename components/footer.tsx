// import Container from './container'
import { EXAMPLE_PATH } from '../lib/constants'
import styled from 'styled-components'
import theme from '../components/Theme'
import NewsLetter from '../components/signup'

const OuterContainer = styled.div`
background: ${theme.colours.orange};
// border: solid 2px yellow;
@media ${theme.devices.medium}{
  display: flex;
flex-direction: row;
}

.footer-container {
  // border: solid 3px green;
  display: flex;
  flex-grow: 2;
  padding: 40px;
  @media ${theme.devices.small} {
    padding: 80px;
  }
  
}

.hire-us {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 40px;
  @media ${theme.devices.small}{
  padding: 80px;
  // border solid 2px blue;
  align-items: flex-end;
  justify-content: flex-end;
  
  }
 

  h1 {
    font-family: ${theme.type.logoType};
    font-size: 2rem;
    margin-top: 20px;
    color: ${theme.colours.cream};
    line-height: auto;
    text-align: right;
    @media ${theme.devices.small}{
      font-size: 3rem;
    }
    @media ${theme.devices.medium}{
      font-size: 3.8rem;
    }
  }

  h2 {
    font-family: ${theme.type.body};
    font-size: 2.4rem;
    font-weight: 700;
    color: ${theme.colours.cream};
    @media ${theme.devices.small}{
      font-weight: 900;
    font-size: 3rem;
    }
  }

  button {
    width: fit-content;
    background: ${theme.colours.pink};
    font-family: ${theme.type.body};
    color: ${theme.colours.blue};
    font-size: 2rem;
    padding: 10px 40px;
    border-radius: 60px;
    @media ${theme.devices.small}{
    }
  }

}
}


`



export default function Footer() {
  return (
    <footer className="">
      <OuterContainer>
        <div className="footer-container">
          <NewsLetter />
        </div>
        <div className='hire-us flex flex-col'>
          <h2>
            Hire us
          </h2>
          <button>
            contact
          </button>
          <h1>Flegg Creative</h1>
        </div>

      </OuterContainer>
    </footer>
  )
}
