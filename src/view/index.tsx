import React, { FC, useEffect } from 'react';
import Placeholder from 'src/comp/placeholder';
import { 
	LayoutContainer,
	GnbContainer,
	Main,
	StyledLeftColumn,
	StyledRightColumn
} from './style'; 
import { Gnb } from 'src/comp/layout'; 
const MainView: FC<{
	placeholder?: boolean
}> = ({
	placeholder = true
}) => {
	return(
		<LayoutContainer>
			<GnbContainer>
				<Gnb/>
			</GnbContainer>
			<Main>
					<StyledLeftColumn>
						dummy	left
					</StyledLeftColumn>
					<StyledRightColumn>
						{
							placeholder 
							?
								<Placeholder/>
							:
								''
						}
					</StyledRightColumn>
				</Main>
		</LayoutContainer>
	)
}

export default MainView; 