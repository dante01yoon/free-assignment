
import styled from 'styled-components'; 

type ButtonProps = {
  isActive?: boolean;
};

export const StyledBlueButton = styled.button<ButtonProps>`
  ${p => p.theme.typo.button14skyBlue}}
  border: 1px solid ${p=>p.theme.colors.border};
  border-radius: 3px;
  width: 80px;
  height: 36px;
  background-color: transparent;
	cursor: pointer;
	padding: 0px;
	margin: 0 8px;
  ${p =>
    p.isActive
      ? `
    border: 1px solid ${p.theme.colors.skyBlue};
    background-color: ${p.theme.colors.skyBlue};
    color: ${p.theme.colors.white};
  `
			: `
	`
	}
 
`;
