import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { EMPLOYEE } from '../employeeX';
import { EmployeeServiceService } from '../employee-service.service';
import { take } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  employees: EMPLOYEE[];
  displayedColumns: string[] = ['name', 'userName', 'email', 'Action']; // ms7t address
   // Error empService argument not assignable to parameter of unkown[]
  dataSource;

  constructor(private empService:
              EmployeeServiceService,
              private router: Router,
              private ActiveRoute: ActivatedRoute
    ) {}

  ngOnInit() {
    this.getEmployees();
    this.dataSource = new MatTableDataSource();
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getEmployees() {
    this.empService.getEmployees().subscribe(employeesX => this.dataSource = employeesX);
    // this.employees = this.empService.getEmployees"el function de hia ele gwa el service();// befor observable
  }

  onDelete(id: number): void {
    if (confirm('Are you sure ?')) {
      this.empService.delete(id).pipe(take(1))
        .subscribe(resp => {
          this.getEmployees();
        });
      }
  }

  getEmployeeDetails(id: number) {
    this.router.navigate(['../employee/' + id], { relativeTo: this.ActiveRoute });
    // this.router.navigate(['../employee']);
    // this.empService.updateEmployee(id, updatedData);
  }
}
