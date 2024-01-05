import { CMS_NAME, CMS_URL } from '../../lib/constants'
import styled from 'styled-components'
import theme from '../Theme'
import NewsLetter from '../signup'
import LeadMagnetContainer from '../forms/LeadMagnetContainer'


const StyledIntro = styled.section`


  .intro {
    padding: 1rem;
    flex-direction: column;
    h1, .h1 {
      font-size: 2.5rem;
    font-weight: 900;
      @media ${theme.devices.medium}{
        font-size: 8rem;
      }
     }
  }
  .flegg {
    color: ${theme.colours.green};
  }
    .hero {
    position: relative;
    margin-top: 10rem;
    @media ${theme.devices.medium}{

    }
}
    .audience {
      justify-content: flex-end;
        top: 400px;
        p {
          text-align: right;
          width: 60%;
          color: black;
        }
        @media ${theme.devices.medium}{

        }
    }

    .focused {
      @media ${theme.devices.medium}{

        align-self: center;
      }
        color: ${theme.colours.blue};
    }

    .designs {
      color: ${theme.colours.purple};
      @media ${theme.devices.medium}{
          margin-left: 14rem;
        }
    }





`



export default function Intro({  }:{}) {
 
  return (
   



    <StyledIntro className="hero" data-scroll-section>
                <hgroup className="intro flex">
                    <h1 className="flegg" data-scroll data-scroll-speed="3" data-scroll-class="appear"
                        data-scroll-repeat="true">Flegg Creative</h1>
                    <h2 className="focused h1" data-scroll data-scroll-speed="2" data-scroll-class="appear"
                        data-scroll-repeat="true">Accessibly <br />Focused
                        <h2 className="designs h1" data-scroll data-scroll-speed="1" data-scroll-class="appear"
                            data-scroll-repeat="true">Designs</h2>
                    </h2>
                    <div className="audience flex">
                        <p data-scroll data-scroll-class="appear" data-scroll-repeat="true">Your audience is larger than
                            you
                            think. Our approach will help you reach all of your people,
                            regardless
                            of ability</p>
                    </div>
                </hgroup>
                <figure className="home-graphic para" data-scroll data-scroll-speed="2">
                    <img src="images/graphic.svg" alt="decorative element" />
                </figure>

        </StyledIntro>

  
   
  )
}
