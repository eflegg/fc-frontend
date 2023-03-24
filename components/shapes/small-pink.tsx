import styled from 'styled-components'
import Image from 'next/image';

const ShapeBackground = styled.div`
 max-width: 50%;
 min-width: 400px;
	background: transparent;
	position: absolute;
	left: 0;
	z-index: -1;
	img {
		position: relative;
	z-index: -1;
	}
`;
const PinkContainer = styled.img`
	position: relative;
	z-index: -1;
`;

export default function SmallPinkShape({ customClass}){
    return (

<ShapeBackground className={customClass}>
	<Image src="/small-pink.svg" alt="decorative pink shape" width={546} height={320} />
 
</ShapeBackground>

    )
}




