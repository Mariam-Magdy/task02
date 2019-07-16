import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';
import { EmployeeServiceService } from '../employee-service.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employeesForm: FormGroup;
  items: FormArray;
  orderForm: FormGroup;
  constructor(private fb: FormBuilder, private empService: EmployeeServiceService) {

    this.employeesForm = this.fb.group({
      fullName: ['',  [Validators.required]],
      userName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', [Validators.required]]
    });
  }


  ngOnInit() {
    console.log(this.employeesForm.controls.email.errors);
  }

  onSubmit() {
    console.warn(this.employeesForm.value);
    this.empService.add(this.employeesForm.value);
    this.employeesForm.reset();
  }

  getErrorMessage() {
    // return this.email.hasError('required') ? 'You must enter a value' :
    // this.email.hasError('email') ? 'Not a valid email' :
    // '';
  }

}
