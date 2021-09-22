import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DataModel } from 'src/app/models/dataModel';

@Injectable({
  providedIn: 'root'
})
export class SupportedDeviceService {

  constructor(
    private http: HttpClient
  ) { }

  supportedDeviceGetAllUrl: "https://localhost:44320/api/SupportedDevice/GetAll"

  getSupportedDevice():Observable<DataModel> {
    return this.http.get<DataModel>(this.supportedDeviceGetAllUrl)
  }

}
