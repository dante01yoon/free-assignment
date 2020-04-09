import React, { FC } from 'react';
import {
	StyledPlaceholder,
	StyledParagraph,
	StyledTextBox,
	EditBlueButton
} from './style';

const Placeholder: FC = () => {

	return (
		<StyledPlaceholder>
			<StyledTextBox>
				<StyledParagraph>
					<EditBlueButton > 
						유사문항
					</EditBlueButton>
					버튼을 누르면 
				</StyledParagraph>
				<StyledParagraph>
					해당 문제의 유사 문항을 볼 수 있습니다. 
				</StyledParagraph>
			</StyledTextBox>
		</StyledPlaceholder>
	)
}	

export default Placeholder; 