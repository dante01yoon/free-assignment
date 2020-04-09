export type StatusCode = number;
export type APIError = {
	status_code: StatusCode; 
	status_message: string;
	error_message?: string;
	success?: boolean
};
export type ResponseWrapper<Data> = {
	"data": Data[]
}
export type WhenError = [APIError, undefined];
export type WhenSuccess<Data> = [undefined, ResponseWrapper<Data>];
export type APIResponse<Data> = WhenError | WhenSuccess<Data>; 