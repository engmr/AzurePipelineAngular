import { Observable } from "rxjs";
import { BaseResponse } from "src/app/model/api/base-response.model";

export interface ISomeWebService {
	getSomeData(code: string): Observable<BaseResponse<any>>;
	postSomeData(request: any): Observable<BaseResponse<any>>;
}
