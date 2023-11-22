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
    font-family: "Source Sans Pro";
    font-size: 3.6rem;
    text-align: center;
    line-height: 110%;
    font-weight: 700;
    margin-bottom: 20px;
    color: ${theme.colours.cream};
}
p{
    line-height: 105%;
    color: ${theme.colours.cream};
    text-align: center;
    font-size: 1.8rem;
}
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
   /* background: rgba(231, 165, 186, .7); */
   background: rgba(24,23,43, .7);
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: space-around;
   @media ${theme.devices.medium} {
    min-height: 200px;
    }
    &:hover {
        box-shadow: 0 6px 6px hsl(0deg 0% 0% / 0.2);
    
      transition: all 0.25s ease-in;
    }
    transition: all 0.25s ease-in;
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

export default function BlogCard({ title, excerpt, slug }) {
  
    return (
        <Link href={"/blog/[slug]"} as={`/blog/${slug}`}>
        <BlogCardContainer>
            <div className='outercard'>
            
                <div className='label'>
                    <h2>{title}</h2>
                 
                </div>
                <div className="excerpt">
                <p
        className="blog-excerpt"
        dangerouslySetInnerHTML={{ __html: excerpt }}
      />
                </div>

                

            </div>
        </BlogCardContainer>
        </Link>
    )
}