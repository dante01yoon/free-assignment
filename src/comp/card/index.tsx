import React, { FC } from 'react'; 
import { 
	StyledCard,
	StyledImg,
	StyledTitleBox,
	StyledTitle,
	StyledTypeName,
	StyledButtonBox,
	StyledTitleNestedBox,
	StyledContentBox,
	StyledContentColumnFirst,
	StyledContentColumnSecond,
	StyledNumber
 } from './style';
 import { observer } from 'mobx-react-lite';
 import BlueButton from 'src/comp/button';
import { ProblemModel } from 'src/store/ProblemStore';
import { useStore } from 'src/lib/hooks';
const Card: FC<{
	index: number,
	data: ProblemModel
}> = observer(({
	index,
	data 
}) => {
	const { id, problemURL, problemType, unitName, } = data 	
	const {
		clickedDataIndex, 
		requestSimillar, 
		changeClickedIndex,
		removeData 
	}  = useStore('problem');
	const simillarClick = () => {
		requestSimillar();
		changeClickedIndex(index); 
	}
	const removeClick = () => {
		removeData(index);
	}
	return (
		<>
			<StyledCard>
				<StyledTitleBox>
						<StyledTypeName>{ problemType }</StyledTypeName>
						<StyledTitleNestedBox>
							<StyledTitle>
								{ unitName }
							</StyledTitle>
						</StyledTitleNestedBox>
						<StyledButtonBox>
							<BlueButton isActive={index===clickedDataIndex} onClick={simillarClick}> 유사문항 </BlueButton>
							<BlueButton isActive={false} onClick={removeClick}> 삭제 </BlueButton>
						</StyledButtonBox>
				</StyledTitleBox>
				<StyledContentBox>
					<StyledContentColumnFirst>
						<StyledNumber>
							{ index+1 }
						</StyledNumber>
					</StyledContentColumnFirst>
					<StyledContentColumnSecond>
						<StyledImg src={problemURL}/>		
					</StyledContentColumnSecond>
				</StyledContentBox>	
			</StyledCard>
		</>
	)
});

export default Card;