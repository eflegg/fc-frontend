import { CMS_NAME, CMS_URL } from '../lib/constants'
import styled from 'styled-components'
import theme from '../components/Theme'

const NewsLetter = styled.div`
// width: 30%;
// margin: 80px;
display: flex;
flex-direction: column;

h3 {
    color: ${theme.colours.cream};
    font-family: ${theme.type.body};
    font-size: 2rem;
    font-weight: 400;
}
input {
    margin: 10px 0px 10px 0px;
}

.btn-sign-up {
    color: ${theme.colours.blue};
    font-family: ${theme.type.body};
    background-color: ${theme.colours.pink};
    padding: 5px 10px;
    border-radius: 40px;
    width: 40%;
}
`

export default function SignUp() {
    return (
        <NewsLetter>
            <h3>
                Sign up for our e-mail newsletter
            </h3>
            <input></input>
            <input></input>
            <button className='btn-sign-up'>
                Sign up
            </button>
        </NewsLetter>
    )
}