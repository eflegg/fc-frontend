
import styled from 'styled-components'
import theme from '../Theme';
import Image from 'next/image';
import Link from 'next/link';

const CardContainer = styled.div`
// border: 2px solid blue;
border-radius: 20px;
margin: 1rem 1rem 2rem 1rem;
position: relative;
@media ${theme.devices.medium} {
    border-radius: 20px;
    margin: 2rem;
}

.outercard {
    width: 100%;
    height: 250px;
    border-radius: 20px;
    background-color: darkslategrey;
    // background-color: black;
    h2 {
        color: ${theme.colours.cream};
        position: absolute;
        bottom: 0;
        left: 1rem;
        font-size: 2rem;
    }
}

.outercard img {
    object-fit: cover;
    width: 100%;
    height: 100;
    opacity: .4;
    transition: .3s ease-in-out;
    border-radius: 20px;
}

.outercard img:hover {
         opacity: 1;
}
`

export default function CaseStudyCard({ study }) {

    return (
        <Link href={"/work/[slug]"} as={`/work/${study.node.slug}`}>
            <CardContainer>
                <div className='outercard'>
                    <Image
                        width={500}
                        height={300}
                        src={study.node.featuredImage.node.sourceUrl}
                        alt={study.node.featuredImage.node.altText}
                    />

                    <div className='label'>
                        <h2>{study.node.title ? study.node.title : "Loading..."}</h2>

                    </div>




                </div>
            </CardContainer>
        </Link>
    )
}