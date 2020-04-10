import React, { FC } from 'react';
import { observer } from 'mobx-react-lite';
import { 			
	StyledLeftColumn,
	ShadowedBox	
} from 'src/view/style';
import { ProblemModel } from 'src/store/ProblemStore';
import Card from 'src/comp/card'; 
const ProblemView: FC<{
	problemData : ProblemModel[]
}> = observer(({
	problemData
}) => {
	console.log(problemData.length);
	return(
		<ShadowedBox>
			<StyledLeftColumn>
				{
					problemData.length >0  
						?
							problemData.map((value,index) => {
								return <Card key={index} index={index} data={value}/> 
							})
						: ''
				}
			</StyledLeftColumn>
		</ShadowedBox>
	)
});

export default ProblemView;