
import styled from 'styled-components'; 

type ButtonProps = {
  isActive?: boolean;
};

export const StyledBlueButton = styled.button<ButtonProps>`
  ${p => p.theme.typo.button14skyBlue}}
  border: 1px solid ${p=>p.theme.colors.border};
  border-radius: 3px;
  width: 70px;
  height: 24px;
  background-color: transparent;
  cursor: pointer;
	margin: 0 8px;
  ${p =>
    p.isActive
      ? `
    border: 1px solid ${p.theme.colors.skyBlue};
    background-color: ${p.theme.colors.white};
    color: ${p.theme.colors.white};
  `
			: `
	`
	}
 
`;
