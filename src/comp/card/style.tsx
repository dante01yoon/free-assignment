import styled from 'styled-components'; 

export const StyledCard = styled.div`
	display: flex;
	align-items: center;
	height:306px;
	width:100%;
	background-color: ${p=> p.theme.colors.white};
`;

export const StyledImg = styled.img`
	width: 300px;
	height: 211px;
`;

export const StyledTitleBox = styled.div`
	height: 52px;
	width: 100%;
`;

export const StyledTitle = styled.div`
	line-clamps: 2;
	width: 340px; 
	height: 100%;
	${p => p.theme.typo.title14smallBlack}
`
export const StyledTypeName = styled.div`
	width:43px;
	height: 100%;
	${p => p.theme.typo.title14skyGray}
`
export const StyledButtonBox = styled.div`
	display: flex;
	align-items: cetner;
	height: 100%; 
`;