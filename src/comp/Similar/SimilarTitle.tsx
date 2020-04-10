import React, { FC } from 'react';
import { observer } from 'mobx-react-lite';
import { 
	StyledTitleContainer,
	StyledTitle
} from './style'; 

const SimilarTitle: FC<{
	title: string
}> = observer(({
	title
}) => {
	return(
		<StyledTitleContainer>
			<StyledTitle>{title}</StyledTitle>
		</StyledTitleContainer>
	)
});

export default SimilarTitle;