import { CMS_NAME, CMS_URL } from '../lib/constants'
import styled from 'styled-components'
import theme from '../components/Theme'
import NewsLetter from '../components/signup'


const StyledIntro = styled.section`
h2 {
  font-family: 'Source sans', sans-serif;
  color: ${theme.colours.cream};
  font-size: 3rem;
  font-weight: 800;
  text-align: center;
  line-height: 105%;
  width: 80%;
  margin: 80px auto 0;
  @media ${theme.devices.small} {
  font-size: 4rem;
  font-weight: 900;
  }
  @media ${theme.devices.medium} {
    font-size: 5rem;
    margin: 140px auto 0;
    }
}

h1 {
  font-family: 'Abril fatface', cursive;
  font-size: 2.4rem;
  color: ${theme.colours.blue};
  margin-left: 60px;
  position: relative;
  top: 10px;
  @media ${theme.devices.small} {
  font-size: 3.5rem;
  // position: relative;
  top: 30px;
  }
}

.cta {
  margin: 50px;
  @media ${theme.devices.small}{ 
     display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 50px 80px 200px 80px;
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
  p {
    text-align: center;
  }
}
  p {
    font-family: ${theme.type.body};;
    color: ${theme.colours.cream};
    font-size: 2.4rem;
    font-weight: 700;
    @media ${theme.devices.small}{
       font-weight: 900;
      font-size: 3rem;
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
    font-size: 1.6rem;
    padding: 10px 20px;
    border-radius: 40px;
    @media ${theme.devices.small} {
      font-size: 2rem;
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
        Building accessible brands at a more human pace.
      </h2>
      <div className='cta'>
        <div className='newscontainer'>
          <NewsLetter text="Find out why we put accessibility first" buttonText="Get the story" />
        </div>
        <div className='hire-us'>
          <p>Hire Us</p>
          <button className='btn-contact'>Contact</button>
        </div>
      </div>
    </StyledIntro>
  )
}
