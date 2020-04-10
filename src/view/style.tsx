import styled from 'styled-components'; 

export const LayoutContainer = styled.div`
margin: 0 auto;  
position: relative;
width: 1301px;
height: 100vh;

`;

export const GnbContainer = styled.div`
	position:relative;
	width: 100%;
	height: 48px;
`;

export const Main = styled.main`
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: space-between;
	overflow: hidden;
	
`;

export const StyledColumn = styled.div`
	
`
export const ShadowedBox = styled.div`
	box-shadow: 2px 0 0 ${p => p.theme.colors.border};
`;
export const StyledLeftColumn = styled(StyledColumn)`
	overflow-y: auto;
	width: 646px;
	height: 100%;
	
`; 

export const StyledRightColumn = styled(StyledColumn)`
	overflow-y: auto;
	width: 646px;
	height: auto;
	margin-top: 3px;
`; 

export const StyledSimilarTitle = styled.div``