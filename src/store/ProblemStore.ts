import { observable, action } from 'mobx';
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
	@observable clickedDataIndex: number = 0; 
	@observable disabled : boolean = true; 
	
	constructor(rootStore:RootStore){
		super();
		this.rootStore = rootStore; 
	}

	@action.bound
	addData(id: number, uniqIndex: number): void {
		const foundData = this.simillarData.find((data,index) =>{
			return data.id === id; 
		})
		if(foundData){ 
			this.problemData?.splice(this.clickedDataIndex+1, 0 , foundData);
		}
	}
	@action.bound
	switchData(uniqueIndex: number ): void {
		const temp = this.problemData[this.clickedDataIndex];
		!this.disabled && (this.problemData[this.clickedDataIndex] = this.simillarData[uniqueIndex]);
		this.simillarData[uniqueIndex] = temp;
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
			this.onRequest();
			if(this.simillarData?.length ===0){
				this.onRequest();
				const [, jsonResponse] = await requestSimillar();
				const data = jsonResponse?.data;
				data && data?.length > 0 && (this.simillarData = [...this.problemData, ...data]); 
			}
		} catch(error) {
			this.onFailure();
		}
		this.onSuccess(); 
	}
	@action.bound
	changeClickedIndex(index:number){
		this.clickedDataIndex = index;
	}
}