import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Data } from '@angular/router';
import { Observable } from 'rxjs';
import { DataModel } from 'src/app/models/dataModel';
import { UserModel } from 'src/app/models/userModel';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(
    private http: HttpClient
  ) { }

  userAllApi = "https://localhost:44320/api/User/GetAll";

  getUser():Observable<UserModel> {
    return this.http.get<UserModel>(this.userAllApi)
  }

}
