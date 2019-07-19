import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';
import { EmployeeServiceService } from '../employee-service.service';
import { EMPLOYEE } from '../employeeX';
import { Router, ActivatedRoute } from '@angular/router';
import { take, subscribeOn } from 'rxjs/operators';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employeesForm: FormGroup;
  userId;
  constructor(
    private fb: FormBuilder,
    private empService: EmployeeServiceService,
    private router: Router,
    private ActiveRoute: ActivatedRoute) {

    this.employeesForm = this.fb.group({
      name: ['',  [Validators.required]],
      username: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      // address: this.fb.group({
      //   street: [''],
      //   suite: [''],
      //   city: [''],
      //   zipcode: [''],
      //   geo: this.fb.group({
      //     lat: [''],
      //     lng: [''],
      //   }),
      // }),
    });
  }


  ngOnInit() {
    // console.log(this.employeesForm.controls.email.errors);
    this.userId = this.ActiveRoute.snapshot.params.id;
    this.getEmployeeForm(this.userId);
  }

  onSubmit(newData: EMPLOYEE) {
    if (this.edit()) {
      this.empService.updateEmployee(this.userId, this.employeesForm.value)
      .pipe(take(1))
      .subscribe(resp => this.router.navigate(['/table']));
    } else {
    console.warn(this.employeesForm.value);
    this.empService.addEmployee(newData);
    if (this.onSubmit) {
      console.log('success');
    }
    }
    // this.empService.add(this.employeesForm.value);
    // this.employeesForm.reset();
  }

  edit() {
    return !!this.userId;
  }

  getEmployeeForm(id: number) {
    if (this.userId) {
    this.empService.getOneEmployee(id).pipe(take(1)).subscribe(resp => this.employeesForm.patchValue(resp));
    }
  }

  getErrorMessage() {
    // return this.email.hasError('required') ? 'You must enter a value' :
    // this.email.hasError('email') ? 'Not a valid email' :
    // '';
  }

}
