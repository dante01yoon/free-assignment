import { ActionStatus } from 'src/lib/actionStatus'; 
import { action, observable } from 'mobx'; 
import { RootStore } from './RootStore'; 
import { APIError } from 'src/api/types'; 

export class APIStore {
	@observable status: ActionStatus = ActionStatus.Initial;
	@observable error?: APIError;
	rootStore?: RootStore; 

	@action.bound
	onRequest(){
		this.status = ActionStatus.Request;
		this.error = undefined;  
	}

	@action.bound
	onSuccess(): void {
		this.status = ActionStatus.Success;
		this.error = undefined; 
	}

	@action.bound 
	onFailure(error?: APIError): void {
		this.status = ActionStatus.Failure;
		error && (this.error = error); 
	}
}