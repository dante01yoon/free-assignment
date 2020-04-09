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

export const EditBlueButton = styled.button`
  ${p => p.theme.typo.button14skyBlue}}
  border: 1px solid ${p=>p.theme.colors.border};
  border-radius: 3px;
  width: 70px;
  height: 24px;
  background-color: transparent;
	cursor: pointer;
	padding: 0px;
	margin: 0 8px;
	font-size:12px;
`