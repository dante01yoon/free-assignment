import styled, { ThemeProvider } from 'styled-components';

export const StyledPlaceholder = styled.div`
	width: 100%;
	height: 100%;
	background-color:	${p => p.theme.colors.white}; 
	display: flex;
	align-items:center;
	justify-content: center;
`;

export const StyledParagraph = styled.div`
	margin: 
	${p => p.theme.typo.des14skyGray};
`;

export const StyledTextBox = styled.div`
	line-height: 28px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;