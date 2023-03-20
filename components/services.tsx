import { CMS_NAME, CMS_URL } from '../lib/constants'
import styled from 'styled-components'
import theme from '../components/Theme'
import ServiceCard from '../components/service-card'


const StyledServices = styled.section`

p {
    font-family: ${theme.type.body};
    color: ${theme.colours.cream};
    font-size: 1.8rem;
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
}

.blerb {
    width: 85%;
    margin: 30px auto;
    @media ${theme.devices.small} {
        width: 70%;
    margin: 50px auto;
    }
  
}
`
const services = [{ title: "photography", image: "/cheese.jpg" }, { title: "branding", image: "/lemonpeel.jpg" }, { title: "accesible webites", image: "/asparagus.png" }]

export default function Services() {

    return (
        <StyledServices>
            <div className='services'>
                <div className='card-holder'>
                    {services.map((service, index) => {
                        return (
                            <ServiceCard title={service.title} image={service.image} />

                        );
                    })}

                </div>
            </div>
            <div className='blerb'>
                <p>We’re Erin and Elizabeth Flegg, a sister duo  design and branding studio based in Montreal, and Vancouver Island. We work with small businesses and orgs, supporting them in building strong foundations.</p>

                   <p> We have a shared love of analog processes, combining film photography and print media with digital design and modern web technologies. In the age of internet overwhelm, it’s how we move at a more human pace. Whether you’re reimagining your branding, upgrading your website or starting from scratch, we’re here to help! </p>
            </div>

        </StyledServices>
    )
}