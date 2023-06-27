import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseResponse } from 'src/app/model/api/base-response.model';

import { ISomeWebService } from '../interface/isomewebservice';

@Injectable({
  providedIn: 'root'
})
export class MockSomeWebService implements ISomeWebService {

  constructor() { }

  getSomeData(code: string): Observable<BaseResponse<any>> {
    throw new Error('Method not implemented.');
  }
  
  postSomeData(request: any): Observable<BaseResponse<any>> {
    throw new Error('Method not implemented.');
  }
}
