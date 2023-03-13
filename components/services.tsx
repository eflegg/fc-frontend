import { CMS_NAME, CMS_URL } from '../lib/constants'
import styled from 'styled-components'
import theme from '../components/Theme'

const StyledServices = styled.section`

p {
    font-family: ${theme.type.body};
    color: ${theme.colours.cream};
    font-size: 1.8rem;
    font-weight: 300;
}

.images {
    border: solid 3px white;
display: flex;
flex-direction: row;
justify-content: space-around;

.photography, .branding, .websites {
    border: solid 1px pink;
    width: 33%;
    margin: 20px;
    }
}
.blerb {
    width: 70%;
    margin: 0 auto;
}
`

export default function Services() {
    return (
        <StyledServices>
            <div className='images'>
                <div className='photography'>
                    <img src="painter1.jpg" alt=""></img>
                    <p>Photography</p>
                </div>
                <div className='branding'>
                    <img src="ps-portfolio.svg" alt=""></img>
                    <p>Branding</p>
                </div>
                <div className='websites'>
                    <img src="am-portfolio.png" alt=""></img>
                    <p>Accessible Websites</p>
                </div>
            </div>
            <div className='blerb'>
                <p>We’re Erin and Elizabeth Flegg, a sister duo  design and branding studio based in Montreal, and Vancouver Island. We work with small businesses and orgs, supporting them in building strong foundations.

                    We have a shared love of analog processes, combining film photography and print media with digital design and modern web technologies. In the age of internet overwhelm, it’s how we move at a more human pace. Whether you’re reimagining your branding, upgrading your website or starting from scratch, we’re here to help! </p>
            </div>
        </StyledServices>
    )
}