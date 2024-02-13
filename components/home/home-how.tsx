import styled from 'styled-components'
import theme from '../Theme'
import { useEffect } from 'react'
import { Waypoint } from 'react-waypoint';
import UseWaypoint from '../useWaypoint';

const StyledHow = styled.section`
    position: relative;
    @media ${theme.devices.small}{
        padding: 2rem 2rem 12rem 2rem;
        overflow: hidden;
    }
    p {
    font-size: 1.4rem;
    margin: 0 1rem 0 1rem;
    color: var(--blue);
    font-weight: 500;
    @media ${theme.devices.small}{
        font-size: 2.5rem;
        margin: 0;
    }
}
hr {
    margin: 1.6rem 1rem;
    @media ${theme.devices.small}{
        margin: 2rem 0;
    }
 
}
.services {
    color: black;
    font-weight: 700;
    font-size: 1.8rem;
    @media ${theme.devices.small}{
        font-size: 3rem;
    }
}
button {
    margin-left: 1rem;
}
.btn-transparent {
    margin-left: auto;
    margin-bottom: 1rem;
}
.home-graphic {
    top: 180px;
    right: 50px;
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
        right: -200px;
        top: 420px;
    }
}
`

export default function HomeHow({}:{}){

    function isInViewport(line) {  
        const rect = line.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
      };

//   useEffect(()=>{
//     const scrollHandler = ()=>{
//       var scroll = window.requestAnimationFrame ||
//        // IE Fallback
//         function(callback){ window.setTimeout(callback, 1000/60)};
//     const container = document.querySelector('.home-services');
//     const line = document.querySelectorAll('hr');
//   console.log(line);
//   console.log(container);
//   function loop() {
//     line.forEach(function (line) {
//         console.log(line);
//             if (isInViewport(line)) {
//                 line.classList.add('grow');
//             } else {
//                 line.classList.remove('grow');
//             }
            
//         });
//         scroll(loop);
//     };
    
//     loop();
  
//     };
//     window.addEventListener('scroll', scrollHandler);
//     return()=>{
//       window.removeEventListener('scroll', scrollHandler);
//     }
//   }, []);

 

    return (
        <StyledHow className="home-services" data-scroll-section>

            <p>how can we help?</p>
            <UseWaypoint animClass="grow">
                <hr />
                </UseWaypoint>
                <p className="services">Web Developement</p>
                <UseWaypoint animClass="grow">
                <hr />
                </UseWaypoint>
                
                <p className="services">Graphic Design</p>
                <UseWaypoint animClass="grow">
                <hr />
                </UseWaypoint>
                <p className="services">Branding & Strategy</p>
                <UseWaypoint animClass="grow">
                <hr />
                </UseWaypoint>
                <a className="fade" href="contact.html">
                    <span className="btn-transparent">get in touch</span>
                </a>
                <figure className="home-graphic">
                    <img src="images/graphic.svg" alt="colourful graphic element" />
                </figure>
        </StyledHow>
    )
}





