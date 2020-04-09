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
 import BlueButton from 'src/comp/button';
import { ProblemModel } from 'src/store/ProblemStore';
const Card: FC<{
	index: number,
	data: ProblemModel
}> = ({
	index,
	data 
}) => {
	const { id, problemURL, problemType, unitName} = data 	
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
							<BlueButton isActive={false}> 유사문항 </BlueButton>
							<BlueButton isActive={false}> 삭제 </BlueButton>
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
}

export default Card;