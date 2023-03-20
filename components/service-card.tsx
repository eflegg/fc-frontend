import { CMS_NAME, CMS_URL } from '../lib/constants'
import styled from 'styled-components'
import theme from '../components/Theme'

const ServiceCard = styled.div`
.outercard {
   height: 360px;
//    border: solid 3px yellow;
   border-radius: 20px;
   background: rgba(231, 165, 186, .7);
    // background: ${theme.colours.pink};
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: space-evenly;
 
.image-container {
    height: 280px;
    padding: 0px 12px 10px 12px;
    // border: solid 2px black;
    border-radius: 20px;
    
    img {
        height: 100%;
        width: 100%;
        border-radius: 20px;
        object-fit: cover;
    }

}
.label {
    // border: solid 1px green;
    border-radius: 40px;
    width: 300px;
    text-align: center;
    p {
        font-family: ${theme.type.body};
        color: ${theme.colours.blue};
        font-size: 1.8rem;
        font-weight: 300;
    }
}

   
}
`

export default function Services({ title, image }) {
    return (
        <ServiceCard>
            <div className='outercard'>
                <div className='image-container'>
                    <img src={image}></img>
                </div>
                <div className='label'>
                    <p> {title}</p>
                </div>
            </div>
        </ServiceCard>
    )
}