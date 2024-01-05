import styled from 'styled-components'
import theme from '../Theme'

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
    return (
        <StyledHow class="home-services" data-scroll-section>

            <p>how can we help?</p>
                <hr />
                <p className="services">Web Developement</p>
                <hr />
                <p className="services">Graphic Design</p>
                <hr />
                <p className="services">Branding & Strategy</p>
                <hr />
                <a className="fade" href="contact.html">
                    <span className="btn-transparent">get in touch</span>
                </a>
                <figure className="home-graphic">
                    <img src="images/graphic.svg" alt="colourful graphic element" />
                </figure>
        </StyledHow>
    )
}