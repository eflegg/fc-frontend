import Container from './container'
import { EXAMPLE_PATH } from '../lib/constants'
import styled from 'styled-components'
import theme from '../components/Theme'

const OuterContainer = styled.div`
background: ${theme.colours.orange};
border: solid 2px yellow;

signup {
  border: solid 2px green;
}

div {
  border: solid 2px pink;
}

h3 {
  color: ${theme.colours.cream};
}

input {
  margin: 10px;
}

  h1 { 
  font-family: 'Abril Fatface', cursive;
  font-size: 4.8rem;
  color: ${theme.colours.cream};
}


`

export default function Footer() {
  return (
    <footer className="bg-accent-1 border-t border-accent-2">
      <OuterContainer>
        <Container>
          <div className="flex flex-row">
            <div className="signup py-28 flex lg:flex-col items-center">
              <h3 className="text-4xl lg:text-5xl font-bold leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
                Sign up for our e-mail newsletter
              </h3>
              <input>

              </input>

              <input>

              </input>

              <button>
                Sign up
              </button>


            </div>
            <div className="flex flex-col items-center lg:pl-4 lg:w-1/2">
              <div className='hire-us flex flex-col items-center lg:pl-4 lg:w-1/2'>
                <a
                  href="https://nextjs.org/docs/basic-features/pages"
                  className="mx-3 bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
                >
                  contact
                </a>
                <h3>
                  Hire us
                </h3>
              </div>
              <div className='logo'>
                <h1>Flegg Creative</h1>
              </div>
            </div>
          </div>
        </Container>
      </OuterContainer>
    </footer>
  )
}
