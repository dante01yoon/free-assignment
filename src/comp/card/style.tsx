import styled from 'styled-components'; 

export const StyledCard = styled.div`
	min-height:306px;
	width:100%;
	background-color: ${p=> p.theme.colors.white};
`;

export const StyledImg = styled.img`
	width: 300px;
	height: auto;
`;

export const StyledTitleBox = styled.div`
	display: flex;
	align-items: center;
	height: 52px;
	border-bottom: 1px solid #F5F5F5;
	padding: 0 15px 0 38px;
	margin-top: 3px;
`;
export const StyledTitleNestedBox = styled.div`
	margin-top: 2px;
	width: 340px; 
	display: flex;
	align-items: center;
`;
export const StyledTitle = styled.div`
	line-clamps: 2;
	
	${p => p.theme.typo.title14smallBlack}
`
//주관식, 객관식 
export const StyledTypeName = styled.div`
	width:43px;
	height: 100%;
	display: flex; 
	align-items: center;
	margin-right: 15px;
	${p => p.theme.typo.title14skyGray}
`
export const StyledButtonBox = styled.div`

`;

export const StyledContentBox = styled.div`
	display: flex;
`
export const StyledContentColumnFirst = styled.div`
	width: 108px;
	height: 255px;
	display:flex;
	justify-content: center;
`; 
export const StyledContentColumnSecond = styled.div`
width: 150px;
padding:13px 0;
`; 
export const StyledNumber = styled.div`
	${p=>p.theme.typo.button24thickBlue};
	padding: 11px 0;
`;