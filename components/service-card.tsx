import { CMS_NAME, CMS_URL } from '../lib/constants'
import styled from 'styled-components'
import theme from '../components/Theme'
import Image from 'next/image';

const ServiceCardContainer = styled.div`
  @media ${theme.devices.medium} {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    /* height: 500px; */
    }

.outercard {
    margin: 10px;
   padding: 12px;
   border-radius: 20px;
   background: rgba(231, 165, 186, .7);
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: space-around;
   @media ${theme.devices.medium} {
    height: 500px;
    }
.image-container {
    width: 95%;
    height: 73%;
    border-radius: 20px;
    img {
        height: 100%;
        width: 100%;
        border-radius: 20px;
        object-fit: cover;
    }

}
.label {
    // border: solid 1px purple;
    border-radius: 40px;
    width: 300px;
    text-align: center;
    h4 {
        font-family: ${theme.type.body};
        color: ${theme.colours.blue};
        font-size: 2.8rem;
        font-weight: 500;
    }
}

.description {
    p {
        font-family: ${theme.type.body};
        color: ${theme.colours.blue};
        font-size: 2rem;
        text-align: center;
        line-height: 115%;
        font-weight: 500;
    }
}

   
}
`

export default function ServiceCard({ singleService, languageChoice }) {
  
    return (
        <ServiceCardContainer>
            <div className='outercard'>
                <div className='image-container'>
                    <Image src={singleService.image.sourceUrl} alt={languageChoice === "French" ? singleService.altEnglish : singleService.altFrench} width={720} height={1080}/>
                    {/* <img src={image} alt={alt}></img> */}
                </div>
                <div className='label'>
                    <h4> {languageChoice === "French" ? singleService.titleEnglish : singleService.titleFrench}</h4>
                </div>

                <div className='description'>
                    <p>{languageChoice === "French" ? singleService.descriptionEnglish : singleService.descriptionFrench}</p>
                </div>
            </div>
        </ServiceCardContainer>
    )
}