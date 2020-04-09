import React, { FC, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import Placeholder from 'src/comp/placeholder';
import { 
	LayoutContainer,
	GnbContainer,
	Main,
	StyledRightColumn
} from './style';
import { useStore } from 'src/lib/hooks';
import ProblemView from 'src/comp/Problem'; 
import { Gnb } from 'src/comp/layout'; 
const MainView: FC<{
}> = observer(({
}) => {
	const {requestProblem, requestSimillar, simillarData,problemData} = useStore("problem");
	useEffect(()=> {
		if(problemData.length === 0) {
			requestProblem(); 
		}
	})
	return(
		<LayoutContainer>
			<GnbContainer>
				<Gnb/>
			</GnbContainer>
			<Main>
					<ProblemView problemData={problemData}/>
					<StyledRightColumn>
						{
							simillarData?.length === 0  
							?
								<Placeholder/>
							:
								''
						}
					</StyledRightColumn>
				</Main>
		</LayoutContainer>
	)
});

export default MainView; 