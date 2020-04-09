import React, { FC,ReactNode } from 'react';
import { observer } from 'mobx-react-lite';
import {
	StyledBlueButton
} from './style';
const BlueButton:FC<{
	children?: ReactNode,
	isActive?: boolean,
	onClick?: () => void
}> = observer(({
	isActive = false,
	children = '',
	onClick
}) => {
	const handleOnClick = onClick;
	return(
		<StyledBlueButton isActive={isActive} onClick={handleOnClick}>
			{children}
		</StyledBlueButton>
	)
});

export default BlueButton;