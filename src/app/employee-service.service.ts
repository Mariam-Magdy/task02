import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { EMPLOYEE } from './employeeX';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  constructor(private http: HttpClient) { }

  getEmployees(): Observable<EMPLOYEE[]> {
    return this.http.get<EMPLOYEE[]>('https://jsonplaceholder.typicode.com/users');
  }

  getOneEmployee(id: number) {
    return this.http.get('https://jsonplaceholder.typicode.com/users/' + id);
  }

  delete(id: number) {
    return this.http.delete('https://jsonplaceholder.typicode.com/posts/' + id);
  }

  updateEmployee(id: number, updatedData: EMPLOYEE) {
    return this.http.patch('https://jsonplaceholder.typicode.com/posts/' + id, updatedData);
  }

  addEmployee(newData: EMPLOYEE) {
    return this.http.post('https://jsonplaceholder.typicode.com/posts', newData);
  }

  // add(EF: EMPLOYEE) {
  //   tableData.push(EF);
  // }
}
