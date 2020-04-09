import { Typography } from 'src/theme/interface';

const DEFAULT_FONT_FAMILY = 'font-family: Noto Sans KR';
const DEFAULT_LINE_HEIGHT = 'line-height: 14px';
const DEFAULT_TYPOGRAPHY_STYLE = `
  ${DEFAULT_FONT_FAMILY};
  ${DEFAULT_LINE_HEIGHT};
`;
const FONT_WEIGHT = {
  BOLD: 'font-weight: 700',
	SEMIBOLD: 'font-weight: 600',
	MEDIUM: 'font-weight: 500',
	REGULAR: 'font-weight: 400',
	NORMAL: 'font-weight: normal' 
};

export const typography: Typography = Object.freeze(
	{
		title14Black: `
			${DEFAULT_TYPOGRAPHY_STYLE};
			${FONT_WEIGHT.BOLD};
			line-height: 20px; 
			color: #000000; 
		`,
		title14smallBlack: `
			${DEFAULT_TYPOGRAPHY_STYLE};
			${FONT_WEIGHT.BOLD};
			line-height: 20px; 
			color: #4C4C4C;
		`,
		title14skyGray: `
			${DEFAULT_TYPOGRAPHY_STYLE};
			${FONT_WEIGHT.BOLD};
			color: #9F9F9F; 
		`,
		button14skyBlue: `
			${DEFAULT_TYPOGRAPHY_STYLE};
			${FONT_WEIGHT.BOLD};
			color: #00ABFF;
		`,
		button24thickBlue: `
			${DEFAULT_TYPOGRAPHY_STYLE};
			${FONT_WEIGHT.BOLD};
			font-size:24px;
			line-height: 35px; 
			color: #00ABFF;
		`,
		des14skyGray: `
			${DEFAULT_TYPOGRAPHY_STYLE};
			${FONT_WEIGHT.NORMAL};
			line-height:28px;
			color: #9F9F9F; 
		`
	}
)
