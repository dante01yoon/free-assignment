import styled from 'styled-components'; 

export const StyledTitleContainer = styled.div`
	background-color: ${p=> p.theme.colors.skyBackground};
	height: 36px;
	display: flex;
	padding: 0 25px;
	align-items: center;
`;

export const StyledTitle = styled.div`
${p => p.theme.typo.title14smallBlack};
	display:flex;
	align-items:center;
`;