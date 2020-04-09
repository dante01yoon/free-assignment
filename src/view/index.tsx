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
import SimilarView from 'src/comp/Similar';
import { Gnb } from 'src/comp/layout'; 
const MainView: FC<{
}> = observer(({
}) => {
	const {requestProblem, simillarData,problemData} = useStore("problem");
	useEffect(()=> {
		requestProblem(); 
	},[])
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
								<SimilarView similarData={simillarData}/>
						}
					</StyledRightColumn>
				</Main>
		</LayoutContainer>
	)
});

export default MainView; 