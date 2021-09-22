import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DiscoveredDevice } from '../models/discoveredDevice';

@Injectable({
  providedIn: 'root'
})
export class DiscoveredDeviceServiceService {

  constructor(
    private http: HttpClient,
  ) { }

  discoveredDeviceApi       = "https://localhost:44320/api/DiscoveredDevice/GetAll";
  deleteDiscoveredDeviceUrl = "https://localhost:44320/api/DiscoveredDevice/Delete?id=";
  GetIPDevice               = "https://localhost:44320/api/DiscoveredDevice/GetById?id=";

  getDiscoveredDevice():Observable<DiscoveredDevice>{
    return this.http.get<DiscoveredDevice>(this.discoveredDeviceApi);
  }

  getByIdDevice(id):Observable<DiscoveredDevice>{
    return this.http.get<DiscoveredDevice>(this.GetIPDevice + id)
  }

  deleteDiscoveredDevice(id):Observable<DiscoveredDevice> {
    return this.http.get<DiscoveredDevice>(this.deleteDiscoveredDeviceUrl + id)
  }
}
