import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RawLog } from '../models/rawLog';

@Injectable({
  providedIn: 'root'
})
export class RawlogService {
  
  constructor(
    private http: HttpClient
  ) { }

  rawLogApi:string = "https://localhost:44320/api/RawLog/GetAll?";

  getRawLogData(collectionName:string, page:number, limit:number):Observable<RawLog> {
    return this.http.get<RawLog>(this.rawLogApi+"collectionName="+collectionName+"&page="+page+"&limit="+limit)
   }
}
