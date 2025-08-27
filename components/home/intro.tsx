import { CMS_NAME, CMS_URL } from '../../lib/constants'
import styled from 'styled-components'
import theme from '../Theme'
import { useEffect, useState } from 'react'


const StyledIntro = styled.section`
    position: relative;
    margin-top: 10rem;
    @media ${theme.devices.small}{
      margin-top: 5rem;
      }
  .intro {
    padding: 1rem;
    flex-direction: column;
    align-items: flex-start;
        justify-content: space-between;
    @media ${theme.devices.small}{
      padding: 4rem;
    }
    h1, .h1 {
      /* font-size: 2.5rem; */
      font-weight: 900;
   
      @media ${theme.devices.medium}{
        font-size: 8rem;
      }
     }
  }
  .flegg {
    color: ${theme.colours.green};
    @media ${theme.devices.small}{    
      align-self: center;
    }
  }
  .audience {
    justify-content: flex-end;
    p {
      text-align: right;
      width: 60%;
      color: black;
    }
    @media ${theme.devices.small}{
      position: absolute;
    top: 260px;
    right: 6.3rem;
    width: 60%;
    }
    @media ${theme.devices.medium}{
      top: 400px;
      right: 10.3rem;
    }
  }
  .focused {
    color: ${theme.colours.blue};
  }
  .designs {
    color: ${theme.colours.purple};
    @media ${theme.devices.small}{    
      align-self: center;
    }
  }
    figure.home-graphic {
    margin: 0;
    position: absolute;
    top: 100px;
    right: 100px;
    width: 110%;
    height: auto;
    z-index: -10;
    @media ${theme.devices.small}{
      width: 100%;
        top: 180px;
        right: 200px;
    }
    @media ${theme.devices.medium}{
      right: 600px;
    }
    img{
      object-fit: fill;
    }
}





`



export default function Intro({  }:{}) {
  const [spinOffset, setSpinOffset] = useState(null);

  useEffect(()=>{
      const graphicHandler = ()=>{
          const graphic = document.querySelectorAll('.para');
          let offset = window.scrollY;
          console.log(offset);
          graphic.forEach(element => {
              setSpinOffset(offset);
          // element.style.transform = `translateY(-${offset * 0.9}px) rotate(${offset * 0.04}deg)`;
          
          });
      }
      window.addEventListener('scroll', graphicHandler);
      return()=>{
        window.removeEventListener('scroll', graphicHandler);
      }
  })
 
  return (
   



    <StyledIntro className="hero" data-scroll-section>
                <hgroup className="intro flex">
                    <h1 className="flegg" data-scroll data-scroll-speed="3" data-scroll-class="appear"
                        data-scroll-repeat="true">Flegg Creative</h1>
                    <h2 className="focused h1" data-scroll data-scroll-speed="2" data-scroll-class="appear"
                        data-scroll-repeat="true">Accessibility <br />Focused
                    </h2>
                        <h2 className="designs h1" data-scroll data-scroll-speed="1" data-scroll-class="appear"
                            data-scroll-repeat="true">Designs</h2>
                    <div className="audience flex">
                        <p data-scroll data-scroll-class="appear" data-scroll-repeat="true">Your audience is larger than
                            you
                            think. Our approach will help you reach all of your people,
                            regardless
                            of ability</p>
                    </div>
                </hgroup>
                <figure style={{transform: `translateY(-${spinOffset * 0.9}px) rotate(${spinOffset * 0.04}deg)`}} className="home-graphic para" data-scroll data-scroll-speed="2">
                    <img src="images/graphic.svg" alt="decorative element" />
                </figure>

        </StyledIntro>

  
   
  )
}
