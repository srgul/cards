import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DataModel } from 'src/app/models/dataModel';
import { OperationClaims } from 'src/app/models/operationClaims';

@Injectable({
  providedIn: 'root'
})
export class OperationClaimService {

  constructor(
    private http: HttpClient
  ) { }

  operationClaimsApi = "https://localhost:44320/api/OperationClaim/GetAll";

  getOperationClaims():Observable<DataModel> {
    return this.http.get<DataModel>(this.operationClaimsApi)
  }

}
