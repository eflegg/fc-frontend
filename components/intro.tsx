import { CMS_NAME, CMS_URL } from '../lib/constants'
import styled from 'styled-components'
import theme from '../components/Theme'
import NewsLetter from '../components/signup'
import LeadMagnetContainer from './forms/LeadMagnetContainer'


const StyledIntro = styled.section`
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
p.asp-link {
    color: var(--green);
}

figure.arrow-icon {
    width: 1rem;
    transform: rotateY(0) rotate(-45deg);
    margin: 0;
    img {
    object-fit: fill;
}
}
.home-mobile-mockup {
    margin: 0 1rem;
    position: absolute;
    top: -10px;
    left: 0;
    img {
      border-radius: 30px;
    }
}




`



export default function Intro({  }:{}) {
 
  return (
   

<StyledIntro className="home-case-study" data-scroll-section>

<div className="case-study-home-links" data-scroll data-scroll-class="appear" data-scroll-repeat="true">
    <a href="work-single-page.html">
        <button className="btn-transparent">case study</button>
    </a>

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

<div className="bg-green flex">
    <figure className="home-mobile-mockup">
        <img src="images/asp-mobile-mockups.jpg" alt="mockup of asparagus magazine on mobile" />
    </figure>
    <h2 data-scroll data-scroll-class="appear" data-scroll-repeat="true">Award-winning Asparagus
        Magazine</h2>
    <p data-scroll data-scroll-class="appear" data-scroll-repeat="true">website design and build</p>
</div>
</StyledIntro>
  
   
  )
}
