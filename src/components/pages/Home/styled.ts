import styled from 'styled-components';
import { color, ColorProps } from 'styled-system';
import { flexBox, transition } from 'styles/mixins';
import { spacing } from 'styles/vars';

export const Wrapper = styled.div<ColorProps>`
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	${flexBox('center')}
	${color}
	${transition()}
`;

export const Text = styled.div`
	padding: ${spacing(3)};
	color: #fff;
	font-size: 70px;
`;

