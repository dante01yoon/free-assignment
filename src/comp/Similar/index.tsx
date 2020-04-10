import React, { FC } from 'react';
import { observer } from 'mobx-react-lite';
import { 			
	StyledLeftColumn,
		
} from 'src/view/style';
import StyledSimilarTitle from './SimilarTitle';
import { ProblemModel } from 'src/store/ProblemStore';
import SimilarCard from 'src/comp/SimilarCard'; 
const SimilarView: FC<{
	title: string, 
	similarData : ProblemModel[]
}> = observer(({
	similarData,
	title
}) => {
	return(
		<>
			<StyledSimilarTitle title={title}/> 
			<StyledLeftColumn>
				{
					similarData.length >0  
						?
							similarData.map((value,index) => {
								return <SimilarCard key={index} index={index} data={value}/> 
							})
						: ''
				}
			</StyledLeftColumn>
		</>
	)
});

export default SimilarView;