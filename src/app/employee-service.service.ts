import { Injectable } from '@angular/core';
import { tableData } from './data';
import { Observable, of } from 'rxjs';
import { EMPLOYEE } from './employeeX';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  constructor() { }

  getEmployees(): Observable<EMPLOYEE[]> {
    return of(tableData);
  }

  add(EF: EMPLOYEE) {
    tableData.push(EF);
  }
}
