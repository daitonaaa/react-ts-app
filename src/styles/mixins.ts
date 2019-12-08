export const flexBox = (justify?: string, alignItems?: string, direction?: string, display?: string) => `
	display: ${display || 'flex'};
  justify-content: ${justify || 'flexStart'};
  align-items: ${alignItems || 'center'};
  flex-direction: ${direction || 'initial'};
`;

export const textEllipsis = () => `
	overflow: hidden;
  white-space: $whiteSpace;
  text-overflow: ellipsis;
`;

export const textVerticalHidden = (color?: string, height?: number) => `
	position: relative;
  overflow: hidden;

  &:after {
    position: absolute;
    content: '';
    bottom: 0;
    left: 0;
    width: 100%;
    height: ${height || 20}px;
    background: linear-gradient(to bottom, rgba(255, 255, 255, 0.2) 0%, ${color || '#fff'} 100%);
  }
`;

export const transition = (type?: 'base' | 'fast' | 'fade') => {
	const types = {
		base: '.3s ease',
		fast: '.2s ease',
		fade: '0.4s cubic-bezier(0.16, 1.01, 0.2, 1.03)',
	};

	return `transition: ${types[type || 'base']}`;
}
