import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { ConfigurationService } from './configuration.service';
import { ISomeWebService } from './interface/isomewebservice';
import { BaseResponse } from '../model/api/base-response.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SomeWebService implements ISomeWebService {

  constructor(
    private httpClient: HttpClient,
    private configurationService: ConfigurationService
  ) { }

  public getSomeData(code: string): Observable<BaseResponse<any>> {
    let qsParams = new HttpParams()
      .append('code', code);
    return this.httpClient.get<BaseResponse<any>>(
      `${this.configurationService.webPortalBaseUrl}data`,
      {
        params: qsParams
      }
    );
  }

  public postSomeData(request: any): Observable<BaseResponse<any>> {
    return this.httpClient.post<BaseResponse<any>>(
      `${this.configurationService.webPortalBaseUrl}data/person`,
      request
    );
  }
}
