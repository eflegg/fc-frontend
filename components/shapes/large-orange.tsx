import styled from 'styled-components'

const ShapeBackground = styled.div`
  width: 100%;
  min-width: 800px;
	background: transparent;
	position: absolute;
	left: 0;
	z-index: -1;
`;
const OrangeContainer = styled.img`
	position: relative;
	z-index: -1;
`;

export default function LargeOrangeShape({ customClass}){
    return (

<ShapeBackground className={customClass}>
  <OrangeContainer src="/large-orange.svg" alt="decorative orange shape" />
</ShapeBackground>

    )
}




