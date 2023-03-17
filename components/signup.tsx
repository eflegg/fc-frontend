import { CMS_NAME, CMS_URL } from '../lib/constants'
import styled from 'styled-components'
import theme from '../components/Theme'

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
    @media ${theme.devices.small}{
        font-size: 2.6rem;
    font-weight: 400;
    }
    
}
input {
    margin: 10px 0px 10px 0px;
}

.btn-sign-up {
    color: ${theme.colours.blue};
    font-family: ${theme.type.body};
    font-size: 2rem;
    background-color: ${theme.colours.pink};
    padding: 10px 40px;
    border-radius: 40px;
   width: fit-content;
    
}
`

export default function SignUp() {
    return (
        <NewsLetter>
            <h3>
                Find out why we put accessibility first
            </h3>
            {/* <div className='input'>
                <label> */}
            {/* Name */}
            <input type="name" />
            {/* </label>
                <label> */}
            {/* Email */}
            <input type="email" />
            {/* </label> */}

            <button className='btn-sign-up'>
                Find Out
            </button>
        </NewsLetter>
    )
}