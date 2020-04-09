import { http } from './useHttpModule';
import { 
	APIResponse
} from './types';
import {
	ProblemModel
} from 'src/store/ProblemStore';
const BASE = 'localhost:8002'
const GET_PROBLEM_LIST = '/dummy/fe-problem.json';
const GET_SIMILLAR_LIST = '/dummy/fe-simillar.json';

export const requestProblem = () : Promise<APIResponse<ProblemModel>> => {
	return http.GET<ProblemModel>(`${BASE}${GET_PROBLEM_LIST}`); 
}
export const requestSimillar = (): Promise<APIResponse<ProblemModel>> => {
	return http.GET<ProblemModel>(`${BASE}${GET_SIMILLAR_LIST}`); 
}

