import { CMS_NAME, CMS_URL } from '../lib/constants'
import styled from 'styled-components'
import theme from '../components/Theme'
import NewsLetter from '../components/signup'
import LeadMagnetContainer from './forms/LeadMagnetContainer'


const StyledIntro = styled.section`
position: relative;
h2 {
  font-family: 'Source sans', sans-serif;
  color: ${theme.colours.cream};
  font-size: 4.2rem;
  font-weight: 800;
  text-align: center;
  line-height: 105%;
  width: 80%;
  margin: 120px auto 0;
  @media ${theme.devices.small} {
  font-size: 6rem;
  font-weight: 900;
  }
  @media ${theme.devices.medium} {
    font-size: 8rem;
    margin: 140px auto 0;
    }
}


.cta {
  margin: 50px;
  @media ${theme.devices.small}{ 
     display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 50px 80px 150px 80px;
    }
  }
 
.hire-us {
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media ${theme.devices.small} {
    margin-top: 0px;
  }
  h3 {
    text-align: center;
  }
}
  p {
    font-family: ${theme.type.body};;
    color: ${theme.colours.cream};
    font-size: 3.8rem;
    font-weight: 700;
    @media ${theme.devices.small}{
       font-weight: 900;
      font-size: 4.8rem;
    }
  }
.newscontainer{
  @media ${theme.devices.small} {
    max-width: 60%;
    }
  
}
  .btn-contact {
    background: ${theme.colours.pink};
    color: ${theme.colours.blue};
    font-family: ${theme.type.body};
    font-size: 2.2rem;
    padding: 10px 20px;
    border-radius: 40px;
    @media ${theme.devices.small} {
      font-size: 2.4rem;
      padding: 10px 40px;
      border-radius: 60px;
    }
    :hover {
      background: ${theme.colours.orange};
      color: ${theme.colours.cream};
    }
  }

`



export default function Intro({ languageChoice, heroText }) {
 
  return (
    <StyledIntro className="styled-intro">
  
      {languageChoice === "English" ? (
        <h2 className="tagline">
          {heroText.heroTextEnglish}
        </h2>
      ) : (
        <h2>
          {heroText.heroTextFrench}</h2>
      )}

      <div className='cta'>
        <div className='newscontainer'>
          <LeadMagnetContainer languageChoice={languageChoice} text={`${languageChoice === "English" ? heroText.leadMagnetEnglish : heroText.leadMagnetFrench}`} buttonText={`${languageChoice === "English" ? heroText.buttonTextEnglish : heroText.buttonTextFrench}`} />
        </div>
        <div className='hire-us'>
          <h3>{`${languageChoice === "English" ? heroText.hireUsEnglish : heroText.hireUsFrench}`}</h3>
          <a href="mailto:hello@fleggcreative.ca">
            <button className='btn-contact'>Contact</button>
          </a>
        </div>
      </div>
    </StyledIntro>
  )
}
