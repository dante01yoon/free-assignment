import { css, ThemeProvider, createGlobalStyle } from 'styled-components'; 
import React, { FC, ReactNode } from 'react';
import { Theme } from 'src/theme/interface'; 
import { colors } from 'src/theme/color';
import { typography } from 'src/theme/typography';
import { reset } from 'styled-reset';


const freeWheelinTheme: Theme<
	typeof colors,
	typeof typography
> = {
	colors: colors,
	typo: typography
}

export const globalStyle = css`
	body {
		background-color: ${p => p.theme.colors.background};
		height: 100vh;
	}
	a, ul,li {
		text-decoration: none; 
		list-style: none; 
		color: black; 
	}
	${reset}
`;

const ReactGlobalStyle = createGlobalStyle`
	${globalStyle}
`;

const FreeWheelinThemeProvider:FC<{
	children?: ReactNode
}> = ({
	children
}) => {
	return(
		<ThemeProvider theme={freeWheelinTheme}>
			<ReactGlobalStyle/>
			{children}			
		</ThemeProvider>
	)
}

export default FreeWheelinThemeProvider; 
