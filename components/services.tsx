import { CMS_NAME, CMS_URL } from '../lib/constants'
import styled from 'styled-components'
import theme from '../components/Theme'
import ServiceCard from '../components/service-card'



const StyledServices = styled.section`
.services-title{
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: flex-start;
  
    h3 {
        font-family: ${theme.type.body};
        font-size: 5.4rem;
        text-align: left;
        line-height: 110%;
        font-weight: 700;
        margin-bottom: 20px;
        color: ${theme.colours.cream};
      }
}

p {
    font-family: ${theme.type.body};
    color: ${theme.colours.cream};
    font-size: 2.8rem;
    line-height: 3.8rem;
    font-weight: 300;
    margin: 15px 0px;
}

.services {

    margin-bottom: 100px;

.label {
    // border: solid 2px yellow;
    margin: 0 20px 0 20px;
    text-align: center;
    }

.card-holder {
    // border: solid 2px blue;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media ${theme.devices.small} {
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-around;
        padding: 0px;
         }
    }
    .card--grid {
       
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(38.5rem, 100%), 1fr));
  grid-row-gap: 30px;
  grid-column-gap: 30px;
  justify-content: center;
  width: 90%;
  margin: 0 auto 75px;
  list-style: none;
  max-width: 1000px;

}
}

.blerb {
    width: 85%;
    margin: 30px auto;
    @media ${theme.devices.small} {
        width: 70%;
    margin: 50px auto 80px;
    }
  
}
`
const services = [{ title: "Brand strategy", image: "/Youbou-23.jpg", description: "We begin by identifying goals and creating a plan to meet them", alt: "Image of the chef at Youbou Bar & Grill pouring wine into a bowl of ingredients" }, { title: "Design", image: "/gustaboat.jpeg", description: "Then we bring it to life, translating strategy into a visual identity with brand photography, print media and web design", alt: "Image of a sailboat on the water displaying a custom-designed sail for Gusta" }, { title: "Accessible websites", image: "/asparagus-small.png", description: "Finally, we give a home, building a beautiful, accessible website to invite your community into", alt: "Image of three web mockups, mobile, tablet and desktop, displaying Asparagus Magazine's website" }]

export default function Services() {

    return (
        <StyledServices>
            <div className='services'>
                <div className='card--grid'>
                    <div className="services-title">

                        <h3>What we offer</h3>
                        <p>From first meeting to final product, we believe it all starts with accessibility. That means our client processes are approachable and flexible, our designs are human-centred and our websites can be used by as many people as possible, regardless of ability.</p>
                    </div>
                    {services.map((service, index) => {
                        return (
                            <ServiceCard alt={service.alt} key={index} title={service.title} image={service.image} description={service.description} />

                        );
                    })}

                </div>
                <div className='blerb'>

                    <h3>Who we are</h3>
                    <p>We’re Erin and Elizabeth Flegg, a sister duo design and branding studio based in Montreal, and Vancouver Island. We have a shared love of analog processes, combining film photography and print media with digital design and modern web technologies. </p>

                    <p>In the age of internet overwhelm, it’s one of the ways we move at a more human pace.</p>
                </div>
            </div>


        </StyledServices>
    )
}