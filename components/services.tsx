import { CMS_NAME, CMS_URL } from '../lib/constants'
import styled from 'styled-components'
import theme from '../components/Theme'
import ServiceCard from '../components/service-card'


const StyledServices = styled.section`
.services-title{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    h3 {
        font-family: ${theme.type.body};
        font-size: 4.4rem;
        line-height: 110%;
        font-weight: 700;
        margin-bottom: 20px;
        color: ${theme.colours.cream};
      }
}

p {
    font-family: ${theme.type.body};
    color: ${theme.colours.cream};
    font-size: 1.8rem;
    line-height: 2.4rem;
    font-weight: 300;
    margin: 15px 0px;
}

.services {
    // border: solid 3px white;
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
  grid-template-columns: repeat(auto-fill, minmax(min(20.5rem, 100%), 1fr));
  grid-row-gap: 30px;
  grid-column-gap: 30px;
  justify-content: center;
  width: 90%;
  margin: 0 auto;
  list-style: none;
  /* max-width: 1200px; */
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
const services = [{ title: "Strategy", image: "/cheese.jpg" }, { title: "Branding", image: "/lemonpeel.jpg" }, { title: "Accessible webites", image: "/asparagus.png" }]

export default function Services() {

    return (
        <StyledServices>
            <div className='services'>
                <div className='card--grid'>
                    <div className="services-title">

                    <h3>What we offer</h3>
                    </div>
                    {services.map((service, index) => {
                        return (
                            <ServiceCard title={service.title} image={service.image} />

                        );
                    })}

                </div>
            </div>
            <div className='blerb'>
                <p>We’re Erin and Elizabeth Flegg, a sister duo  design and branding studio based in Montreal, and Vancouver Island. We work with small businesses and orgs, supporting them in building strong foundations.</p>

                   <p> We have a shared love of analog processes, combining film photography and print media with digital design and modern web technologies. In the age of internet overwhelm, it’s how we move at a more human pace.</p>
            </div>

        </StyledServices>
    )
}