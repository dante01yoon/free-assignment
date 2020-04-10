import { observable, action, computed } from 'mobx';
import { RootStore } from './RootStore';
import { APIStore } from './APIStore';
import { requestProblem, requestSimillar } from 'src/api/problemList';
export type ProblemModel = {
	id: number,
	unitCode: number,
	answerData: string,
	problemType: string,
	problemURL: string,
	unitName: string,
	needCheckLayout: number,
	source: number,
	hide: number,
	curriculumNumber: number,
	cebuCode: number,
	totalTimes: number,
	correctTimes: number,
	hwpExist: number,
	scorable: number,
	tagTop: null | undefined,
	bookDataId: number
}

export class ProblemStore extends APIStore{
	
	@observable problemData:	ProblemModel[] = []; 
	@observable simillarData: ProblemModel[] = []; 
	@observable dataIndex: number | undefined = void 0;
	@observable clickedDataIndex?: number; 
	@observable disabled : boolean = true; 
	
	constructor(rootStore:RootStore){
		super();
		this.rootStore = rootStore; 
	}

	@action.bound
	addData(index: number): void {
	
		const foundData = this.simillarData[index]; 
		if(foundData && this.clickedDataIndex){ 
			this.problemData?.splice(this.clickedDataIndex+1, 0 , foundData);
		}
	}
	@action.bound
	swapData(uniqueIndex: number ): void {
		if( this.clickedDataIndex ){
			const temp =  this.problemData[this.clickedDataIndex];
			this.problemData[this.clickedDataIndex] = this.simillarData[uniqueIndex];
		
			this.simillarData[uniqueIndex] = temp;
		}
	}
	@action.bound
	removeData(index:number){
		this.problemData?.splice(index,1);
		this.problemData?.length === 0  && (this.simillarData = []); 
	}
	@action.bound
	async requestProblem(){
		try{
			this.onRequest(); 
			const [,jsonResponse] = await requestProblem();
		  const data = jsonResponse?.data;
			data && data.length > 0 && (	this.problemData = [ ...this.problemData, ...data]); 
			
		} catch(error){ 
			this.onFailure(); 
		}
		this.onSuccess(); 
	}
	@action.bound
	async requestSimillar(){
		try {
			/***
			 * 유사문제를 눌렀을 때 기존 유사문제 리스트가 리프레시 되는 것인지
			 * 앱 전체가 종료되기 전에는 state를 유지해야하는 것인지 판단이 서지를 않아
			 * 두 가지 모두 구현하였습니다.
			 */
			// if(this.simillarData?.length ===0){
			// 	this.onRequest();
			// 	const [, jsonResponse] = await requestSimillar();
			// 	const data = jsonResponse?.data;
			// 	data && data?.length > 0 && (this.simillarData = [...this.problemData, ...data]); 
			// }
			this.onRequest();
			const [, jsonResponse] = await requestSimillar();
			const data = jsonResponse?.data;
			data && (this.simillarData = data);
		} catch(error) {
			this.onFailure();
		}
		this.onSuccess(); 
	}
	@action.bound
	changeClickedIndex(index:number){
		this.clickedDataIndex = index;
	}
	@computed get getTitleByIndex() {
		return (this.problemData && (this.clickedDataIndex !== void 0)
			? 
				this.problemData[this.clickedDataIndex ].unitName
			: 
				''
		)
	}
}