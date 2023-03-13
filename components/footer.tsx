// import Container from './container'
import { EXAMPLE_PATH } from '../lib/constants'
import styled from 'styled-components'
import theme from '../components/Theme'
import NewsLetter from '../components/signup'

const OuterContainer = styled.div`
background: ${theme.colours.orange};
border: solid 2px yellow;
display: flex;
flex-direction: row;


.footer-container {
  border: solid 3px green;
  display: flex;
  flex-grow: 2;
  padding: 80px;
}

.hire-us {
  padding: 80px;
  display: flex;
  flex-direction: column;
  border solid 2px blue;
  align-items: flex-end;
  justify-content: flex-end;

  h1 {
    font-family: ${theme.type.logoType};
    font-size: 4.5rem;
    color: ${theme.colours.cream};
    text-align: right;
    line-height: auto;
  }

  h2 {
    font-family: ${theme.type.body};
    font-weight: 900;
    font-size: 4rem;
    color: ${theme.colours.cream};
  }

  button {
    background: ${theme.colours.pink};
    font-family: ${theme.type.body};
    color: ${theme.colours.blue};
    font-size: 2rem;
    padding: 3px;
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
