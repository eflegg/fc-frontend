import { CMS_NAME, CMS_URL } from '../lib/constants'
import styled from 'styled-components'
import theme from '../components/Theme'
import LeadMagnetContainer from '../components/forms/LeadMagnetContainer'

const NewsLetter = styled.div`
// width: 30%;
// margin: 80px;
display: flex;
flex-direction: column;
// align-items: center;

.input {
    display: flex;
    flex-direction: column;
}

h3 {
    color: ${theme.colours.cream};
    font-family: ${theme.type.body};
    font-size: 2.2rem;
    line-height: 110%;
    margin-bottom: 10px;
    @media ${theme.devices.small}{
        font-size: 3.6rem;
    font-weight: 400;
    line-height: 110%;
    }
    
}


.btn-sign-up {
    :hover {
        background: ${theme.colours.green};
        color: ${theme.colours.cream};
      }
    color: ${theme.colours.blue};
    font-family: ${theme.type.body};
    font-size: 2.6rem;
    background-color: ${theme.colours.pink};
    margin-top: 15px;
    padding: 10px 40px;
    border-radius: 40px;
   width: fit-content;
    
}
button, input {
  /* &:focus-within {
    border: 4px dotted #18172B;
  } */
}
`

export default function SignUp({ text, buttonText }) {
    return (
        <NewsLetter>
            <LeadMagnetContainer text={text} buttonText={buttonText} />
        </NewsLetter>
    )
}