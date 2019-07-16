import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { EMPLOYEE } from '../employeeX';
import { EmployeeServiceService } from '../employee-service.service';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  employees: EMPLOYEE[];
  displayedColumns: string[] = ['fullName', 'userName', 'email', 'phoneNumber', 'Buttons'];
   // Error empService argument not assignable to parameter of unkown[]
  dataSource;

  constructor(private empService: EmployeeServiceService) {}

  ngOnInit() {
    this.getEmployees();
    this.dataSource = new MatTableDataSource(this.employees);
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getEmployees() {
    this.empService.getEmployees().subscribe(employeesX => this.employees = employeesX);
    // this.employees = this.empService.getEmployees"el function de hia ele gwa el service();// befor observable
  }

}
