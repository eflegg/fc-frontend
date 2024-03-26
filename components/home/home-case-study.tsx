
import styled from 'styled-components'
import theme from '../Theme'

import Link from 'next/link'



const StyledServices = styled.section`
  display: flex;
    flex-direction: column;
    h2 {
    font-size: 1.2rem;
}

.case-study-home-links {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: flex-end;

}
p, h2 {
    color: ${theme.colours.cream};
    font-weight: 400;
    margin: 0;
}
.asp-link {
    color: ${theme.colours.green};
}

figure.arrow-icon {
    width: 1rem;
    transform: rotateY(0) rotate(-45deg);
    margin: 0;
    img {
    object-fit: fill;
}
}
.bg-green__home {
    background-color:${theme.colours.green};
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 0 2rem 2rem;
    margin-top: 5rem;
    @media ${theme.devices.medium}{
        margin-top: 3rem;
    }

}
.home-mobile-mockup {
    position: relative;
    margin-bottom: 2.5rem;
    top: -10px;
    left: 0;
    @media ${theme.devices.small}{
        margin-bottom: 9rem;
    }
    @media ${theme.devices.medium}{
        margin-bottom: 15rem;
    }
    img {
      border-radius: 30px;
    }
}
`


export default function HomeCaseStudy({}) {

    return (
        <StyledServices className="home-case-study" data-scroll-section>
       
       <div className="case-study-home-links" data-scroll data-scroll-class="appear" data-scroll-repeat="true">
    <Link href="/work/asparagus-magazine">
        <span className="btn-transparent">case study</span>
    </Link>

    <a href="https://www.asparagusmagazine.com" target="_blank">
        <div className="flex">
            <p className="asp-link" data-scroll data-scroll-class="appear" data-scroll-repeat="true">
                asparagusmagazine.com</p>
            <figure className="arrow-icon">
                <img src="images/arrow-right-solid.svg" alt="arrow icon" />
            </figure>
        </div>
    </a>
</div>

<div className="bg-green__home flex">
    <figure className="home-mobile-mockup">
        <img src="images/asp-mobile-mockups.jpg" alt="mockup of asparagus magazine on mobile" />
    </figure>
    <h2 data-scroll data-scroll-class="appear" className="fade" data-scroll-repeat="true">Award-winning Asparagus
        Magazine</h2>
    <p data-scroll data-scroll-class="appear" className="fade" data-scroll-repeat="true">website design and build</p>
</div>

        </StyledServices>
    )
}