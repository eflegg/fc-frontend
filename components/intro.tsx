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
  margin: 0 auto;
}

h1 {
  font-family: 'Abril fatface', cursive;
  font-size: 3.5rem;
  color: ${theme.colours.blue};
}

.newscontainer {
  width: 40%;
  margin: 80px;
}
`



export default function Intro() {
  return (
    <StyledIntro className="flex-col">
      <h1 className="logo">
        Flegg Creative
      </h1>
      <h2 className="tagline">
        We support small businesses every step of the way
      </h2>
      <div className='newscontainer'>
        <NewsLetter />
      </div>
    </StyledIntro>
  )
}
