

import styled from 'styled-components'
import theme from '../components/Theme'

import Image from 'next/image';
import SignUpContainer from './forms/SignUpContainer';

const OuterContainer = styled.div`
display: flex;
flex-direction: column;
@media ${theme.devices.medium}{

flex-direction: row;
}
position: relative;
  .copyright {
    position: absolute;
    bottom: 10px;
    left: 10px;
    font-size: 2.4rem;
    font-family: ${theme.type.body};
    color: ${theme.colours.cream};
  @media ${theme.devices.small}{
    position: absolute;
    left: 80px;
    bottom: 10px;
  }
  }
background: ${theme.colours.orange};

.insta {
  width: 40px;
  height: 40px;
  position: absolute;
  left: 250px;
  bottom: 10px;
  z-index: 10;
  
}


.footer-container {

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
  // text-align: center;
  padding: 40px;

  /* border: 3px solid yellow; */
  @media ${theme.devices.small}{
 
  align-items: flex-end;
  justify-content: flex-end;
  }
  @media ${theme.devices.medium}{
  // padding: 80px 60px;
  max-width: 60%;
 
  }
 

  .h1 {
    font-family: ${theme.type.logoType};
    font-size: 4.6rem;
    margin: 80px 0;
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
    :hover {
      background: ${theme.colours.green};
      color: ${theme.colours.cream};
    }
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



export default function Footer(props) {
  return (
    <footer className="">
      <OuterContainer>


        <div className="copyright">

          <a className="insta" aria-label="Link to Flegg Creative Instgram account" href="https://www.instagram.com/fleggcreative/" target='_blank'>
            <Image src="/instagram.svg" alt="Instagram link" width={40} height={40} />

          </a>
          <p>hello@fleggcreative.ca</p>
          &copy; Flegg Creative {(new Date().getFullYear())}
        </div>
        <div className="footer-container">
          <SignUpContainer languageChoice={props.languageChoice} text={`${props.languageChoice === "English" ? "Get our newsletter" : "Recevoir notre infolettre" }`} buttonText={`${props.languageChoice === "English" ? "Sign up" : "Abonnez-vous" }`} />
        </div>
        <div className='hire-us flex flex-col'>

      


          <h3>
          {`${props.languageChoice === "English" ? " Got questions? Wondering if we're a good fit? Just give us a shout." : " Avez-vous des questions? Vous vous demandez si nous sommes le duo qu'il vous faut? Ecrivez-nous." }`}
           
          </h3>
          <a href="mailto:hello@fleggcreative.ca">
            <button>
              Contact
            </button>
          </a>
          <h4 className="h1">Flegg Creative</h4>
        </div>

      </OuterContainer>
    </footer>
  )
}
