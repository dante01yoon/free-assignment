import React, { FC, ReactNode } from 'react';
import { 
	StyledGnbLeft,
	StyledGnbRight,
	TitleRight,
	TitleLeft,
} from './style'; 

export const Gnb: FC<{
	children?: ReactNode
}> = ({children}) => {
	return(
		<>
			<StyledGnbLeft>
				<TitleLeft>
						학습지 상세편집
				</TitleLeft> 
			</StyledGnbLeft>
			<StyledGnbRight>
				<TitleRight>
						문항 교체/추가
				</TitleRight>
			</StyledGnbRight>
		</>
	)	
}

