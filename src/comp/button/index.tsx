import React, { FC,ReactNode } from 'react';
import {
	StyledBlueButton
} from './style';
const BlueButton:FC<{
	children?: ReactNode,
	isActive?: boolean 
}> = ({
	isActive = false,
	children = ''
}) => {
	return(
		<StyledBlueButton isActive={isActive}>
			{children}
		</StyledBlueButton>
	)
}

export default BlueButton;