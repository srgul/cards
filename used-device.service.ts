import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UsedDevice } from '../models/usedDeviceModel';

@Injectable({
  providedIn: 'root'
})
export class UsedDeviceService {

  constructor(
    private http:HttpClient
  ) { }

  private usedDeviceUrl = "https://localhost:44320/api/UsedDevice/GetAll"
  private addUsedDeviceUrl = "https://localhost:44320/api/UsedDevice/Add"

  data():Observable<UsedDevice[]> {
    return this.http.get<UsedDevice[]>(this.usedDeviceUrl)
  }

  addUsedDevice(device){
    return this.http.post(this.addUsedDeviceUrl,device)
  }

}
