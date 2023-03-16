import styled from 'styled-components'
import theme from '../Theme';

const ShapeBackground = styled.div`
  width: 100%;
  min-width: 800px;
  overflow: hidden;
	background: transparent;
	position: absolute;
	left: 0;
	z-index: -1;
`;
const OrangeContainer = styled.img`
position: relative;
	top: -50px;
	z-index: -1;
@media ${theme.devices.small}{
	top: -80px;
}
	
`;

export default function LargeOrangeShape({ customClass }) {
	return (

		<ShapeBackground className={customClass}>
			<OrangeContainer src="/large-orange.svg" alt="decorative orange shape" />
		</ShapeBackground>

	)
}




