import { http } from './useHttpModule';
import { 
	APIResponse
} from './types';
import {
	ProblemModel
} from 'src/store/ProblemStore';
const BASE = ''
const GET_PROBLEM_LIST = '/fe-problems.json';
const GET_SIMILLAR_LIST = '/fe-simillar.json';

export const requestProblem = () : Promise<APIResponse<ProblemModel>> => {
	return http.GET<ProblemModel>(`${GET_PROBLEM_LIST}`); 
}//${BASE}
export const requestSimillar = (): Promise<APIResponse<ProblemModel>> => {
	return http.GET<ProblemModel>(`${BASE}${GET_SIMILLAR_LIST}`); 
}

