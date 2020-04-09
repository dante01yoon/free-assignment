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
 } from 'src/comp/card/style';
 import { observer } from 'mobx-react-lite';
 import BlueButton from 'src/comp/button';
import { ProblemModel } from 'src/store/ProblemStore';
import { useStore } from 'src/lib/hooks';
const SimilarCard: FC<{
	index: number,
	data: ProblemModel
}> = observer(({
	index,
	data 
}) => {
	const { id, problemURL, problemType, unitName,  } = data 	
	const {
		clickedDataIndex, 
		addData,
		swapData
	}  = useStore('problem');
	const swapClick = () => {
		swapData(index);		
	}
	const addClick = () => {
		addData(index);
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
							<BlueButton isActive={false} onClick={addClick}> 추가 </BlueButton>
							<BlueButton isActive={false} onClick={swapClick}> 교체 </BlueButton>
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

export default SimilarCard;