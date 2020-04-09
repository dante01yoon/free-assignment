import React, { FC } from 'react'; 
import { 
	StyledCard,
	StyledImg,
	StyledTitleBox,
	StyledTitle,
	StyledTypeName,
	StyledButtonBox
 } from './style';
 import BlueButton from 'src/comp/button';
import { ProblemModel } from 'src/store/ProblemStore';
const Card: FC<{
	data: ProblemModel
}> = ({
	data 
}) => {
	const { id, problemURL, problemType, unitName} = data 	
	return (
		<>
			<StyledCard>
				<StyledTitleBox>
						<StyledTypeName>{ problemType }</StyledTypeName>
						<StyledTitle>{ unitName }</StyledTitle>
						<StyledButtonBox>
							<BlueButton isActive={false}> 유사문항 </BlueButton>
							<BlueButton isActive={false}> 삭제 </BlueButton>
						</StyledButtonBox>
				</StyledTitleBox>
				<StyledImg src={problemURL}/>			
			</StyledCard>
		</>
	)
}

export default Card;