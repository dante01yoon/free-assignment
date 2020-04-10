import styled from 'styled-components'; 

export const StyledGnbLeft = styled.nav`
	position: absolute;
	display: flex;
	width: 646px;
	height: 48px;
	align-items: center;
	box-shadow: 2px 0 0 ${p => p.theme.colors.border}; 
	background-color: ${p => p.theme.colors.white};
`; 

export const StyledGnbRight = styled.nav`
	right: 0;
	position: absolute;
	display: flex;
	align-items: center;
	width: 646px;
	height: 48px;
	background-color: ${p => p.theme.colors.white}
`;
export const Title = styled.div`
	align-items: center;
	display: flex;
	height: 21px;
`
export const TitleLeft = styled(Title)`
	margin-left: 25px;
	${ p => p.theme.typo.title14smallBlack}
`;
export const TitleRight = styled(Title)`
	${ p => p.theme.typo.title14smallBlack}
	margin: 0 auto; 
`