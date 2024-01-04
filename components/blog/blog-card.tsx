import { CMS_NAME, CMS_URL } from '../../lib/constants'
import styled from 'styled-components'
import theme from '../Theme';
import Image from 'next/image';
import Link from 'next/link';

const BlogCardContainer = styled.div`

h1 {
    color: ${theme.colours.cream};
}
h2{
    font-family: ${theme.type.body};
    font-size: 1.8rem;
    
    line-height: 110%;
    font-weight: 700;
    margin-bottom: 1rem;
    color: ${theme.colours.black};
}
p{
    line-height: 110%;
    color: ${theme.colours.black};
    
    font-size: 1.2rem;
}
  @media ${theme.devices.medium} {
    display: flex;
    flex-direction: column;
   


div.outercard {
    border-bottom: 2px solid ${theme.colours.orange};
    padding: 2rem 0 0 0;
}    

.read-now {
    font-weight: 400;
    color: ${theme.colours.orange};
}

.label {
    // border: solid 1px purple;
    border-radius: 40px;
    max-width: 900px;
    
    h4 {
        font-family: ${theme.type.body};
        color: ${theme.colours.blue};
        font-size: 1rem;
        font-weight: 500;
    }
}

.description {
    p {
        font-family: ${theme.type.body};
        color: ${theme.colours.blue};
        font-size: 1.4rem;
        text-align: left;
        line-height: 115%;
        font-weight: 500;
    }
}

   
}
`

export default function BlogCard({ title, excerpt, slug }) {

    return (
        <Link href={"/blog/[slug]"} as={`/blog/${slug}`}>
            <BlogCardContainer>
                <div className='outercard'>

                    <div className='label'>
                        <h2>{title ? title : "Loading..."}</h2>

                    </div>
                    <div className="excerpt">
                        <span
                            className="blog-excerpt"
                            dangerouslySetInnerHTML={{ __html: excerpt }}
                        />
                    </div>

                    <p className="logotype read-now">Read the story</p>

                </div>
            </BlogCardContainer>
        </Link>
    )
}