import styled from 'styled-components'
import theme from '../Theme'
import { useEffect, useState } from 'react'

const StyledProcess = styled.section`
    position: relative;
    padding: 1rem;
    @media ${theme.devices.small}{
    padding: 2rem;
    }    
    p {
    font-size: 1.5rem;
    margin: 2rem 1rem;
    @media ${theme.devices.small}{
        margin: 4rem 0 4rem 0;
        font-size: 2.8rem;
    }
    @media ${theme.devices.medium}{
        font-size: 3rem;
        line-height: 120%;
        margin: 20rem 0 4rem 0;
    }
    }
    h3 {
    font-family: var(--brother);
    font-weight: 500;
    font-size: 1.3rem;
    color: var(--blue);
    margin: 2rem 1rem 0 1rem;
    @media ${theme.devices.small}{
        margin: 12rem 0 2rem 0;
        font-size: 2.5rem;
    }
    }
    h4 {
    font-family: "brother-1816", sans-serif;
    font-weight: 900;
    font-size: 2.1rem;
    line-height: 110%;
    color: rgb(201, 82, 60);
    text-transform: uppercase;
    margin: 0 1rem 2rem 1rem;
    @media ${theme.devices.small}{
        margin: 0;
        font-size: 4.7rem;
    }
    @media ${theme.devices.medium}{
        font-size: 6rem;
    }
    }
    .forget {
    text-align: right;
    }
    .home-graphic-2 {
    margin: 0;
    position: absolute;
    top: 620px;
    right: 100px;
    height: auto;
    width: 10rem;
    z-index: -10;
    @media ${theme.devices.medium}{
        width: 20rem;
        height: auto;
        top: 2080px;
        right: 300px;
    }
}
.home-graphic-2-b {
    position: absolute;
    width: 6rem;
    height: auto;
    top: 1080px;
    right: 200px;
    z-index: -10;
    @media ${theme.devices.small}{
        width: 20rem;
        height: auto;
        top: 2580px;
        right: 200px;
    }
    @media ${theme.devices.medium}{
        width: 20rem;
        height: auto;
        top: 2580px;
        left: 400px;
    }
}
.home-graphic-2-c {
    position: absolute;
    width: 4rem;
    height: auto;
    top: 1580px;
    right: 100px;
    z-index: -10;
    @media ${theme.devices.medium}{
        width: 25rem;
        height: auto;
        top: 3580px;
        left: 200px;
    }
}
`

export default function HomeProcess({}:{}){
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
        <>

<StyledProcess className="process-statement" data-scroll-section>
                <p data-scroll data-scroll-class="appear" data-scroll-repeat="true">
                    From process to final product, accessibility is the driving force behind our work. When you create
                    greater access for more people, you open doors for everyone.
                </p>
                <hr />
                <h3 data-scroll data-scroll-class="appear" data-scroll-repeat="true">This kind of thinking is</h3>
                <h4 data-scroll-class="appear" data-scroll-repeat="true">transformative</h4>
                <div className="forget-container">
                    <p className="forget" data-scroll data-scroll-class="appear" data-scroll-repeat="true">We forget about
                        limitations and push ourselves to create in new ways.</p>
                </div>
                <div className="flex graphic-container">
                    <figure style={{transform: `translateY(-${spinOffset * 0.9}px) rotate(${spinOffset * 0.04}deg)`}} className="home-graphic-2 para">
                        <img src="images/home-graphic-2.svg" alt="colourful decorative element" />
                    </figure>
                    <figure style={{transform: `translateY(-${spinOffset * 0.9}px) rotate(${spinOffset * 0.04}deg)`}} className="home-graphic-2-b para">
                        <img src="images/home-graphic-2.svg" alt="colourful decorative element" />
                    </figure>
                    <figure style={{transform: `translateY(-${spinOffset * 0.9}px) rotate(${spinOffset * 0.04}deg)`}} className="home-graphic-2-c para">
                        <img src="images/home-graphic-2.svg" alt="colourful decorative element" />
                    </figure>
                </div>

            </StyledProcess>


        </>
    )
}