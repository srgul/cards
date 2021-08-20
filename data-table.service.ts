import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { lineChartData } from '../pages/dashboard/line-data';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataTableService {

  constructor(private http: HttpClient) { }

  lineTableDataApi = "http://localhost:3000/data";

  getlineTableData():Observable<lineChartData[]> {
    return this.http.get<lineChartData[]>(this.lineTableDataApi)
  }
}
