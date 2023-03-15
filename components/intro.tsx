import { CMS_NAME, CMS_URL } from '../lib/constants'
import styled from 'styled-components'
import theme from '../components/Theme'
import NewsLetter from '../components/signup'

const StyledIntro = styled.section`
h2 {
  font-family: 'Source sans', sans-serif;
  color: ${theme.colours.cream};
  font-size: 5rem;
  font-weight: 900;
  text-align: center;
  width: 80%;
  margin: 140px auto 0;
}

h1 {
  font-family: 'Abril fatface', cursive;
  font-size: 3.5rem;
  color: ${theme.colours.blue};
  margin-left: 80px;
  position: relative;
  top: 30px;
}

.cta {
  margin: 40px 80px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 50px 80px 200px 80px;

  p {
    font-family: ${theme.type.body};;
    color: ${theme.colours.cream};
    font-weight: 900;
    font-size: 3rem;
  }

  .btn-contact {
    background: ${theme.colours.pink};
    color: ${theme.colours.blue};
    font-family: ${theme.type.body};
    font-size: 1.8rem;
    padding: 10px 40px;
    border-radius: 60px;
  }
}
`



export default function Intro() {
  return (
    <StyledIntro className="flex-col">
      <h1 className="logo">
        Flegg Creative
      </h1>
      <h2 className="tagline">
        Building accessible brands at a human pace.
      </h2>
      <div className='cta'>
        <div className='newscontainer'>
          <NewsLetter />
        </div>
        <div className='hire-us'>
          <p>Hire Us</p>
          <button className='btn-contact'>Contact</button>
        </div>
      </div>
    </StyledIntro>
  )
}
