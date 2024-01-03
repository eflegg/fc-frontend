
import styled from 'styled-components'
import theme from '../Theme';
import Image from 'next/image';
import Link from 'next/link';

const CardContainer = styled.div`
border: 2px solid blue;
border-radius: 10px;
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