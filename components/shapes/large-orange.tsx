import styled from 'styled-components'
import theme from '../Theme';
import Image from 'next/image';

const ShapeBackground = styled.div`
  width: 100%;
  min-width: 800px;
  overflow: hidden;
	background: transparent;
	position: absolute;
	left: 0;
	z-index: -1;
	img {
		position: relative;
		top: -50px;
		z-index: -1;
		width: 100%;
		@media ${theme.devices.small}{
		top: -80px;
		}
	}
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
			<Image priority src="/large-orange.svg" alt="decorative orange shape" width={1106} height={938} />
		</ShapeBackground>

	)
}




