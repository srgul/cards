import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DataModel } from 'src/app/models/dataModel';

@Injectable({
  providedIn: 'root'
})
export class UserOperationClaimService {

  constructor(
    private http: HttpClient
  ) { }

  getUserOperationClaimApi = "https://localhost:44320/api/UserOperationClaim/GetAll";

  getUserOpertaionClaim():Observable<DataModel> {
    return this.http.get<DataModel>(this.getUserOperationClaimApi)
  }

}
