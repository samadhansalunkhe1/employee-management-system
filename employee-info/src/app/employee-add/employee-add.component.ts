import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EmployeeDataService } from '../employee-data.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css']
})
export class EmployeeAddComponent implements OnInit {
  employeeForm;

  constructor(private empData: EmployeeDataService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.employeeForm = new FormGroup({
      name: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(4),
        // Validators.pattern('[a-zA-Z][a-zA-Z ]+')
      ])),
      mobile: new FormControl(''),
      email: new FormControl(''),
      address: new FormControl(''),
      salary: new FormControl(''),
      domain: new FormControl('')
    });
  }

  /* 1. Add mew employee record */
  addNewEmployeeRecord () {
    this.empData.addEmployee(this.employeeForm.value).subscribe((result) => {
      console.log(result);
      if (result) {
        this.router.navigate(['/list']);
      }
     });
  }

    // Sharing data between components
    // this.empData.empName.subscribe(employeeName => this.employeeName = employeeName);
    // this.empData.empMobile.subscribe(employeeMobile => this.employeeMobile = employeeMobile);
    // this.empData.empEmail.subscribe(employeeEmail => this.employeeEmail = employeeEmail);
    // this.empData.empAddress.subscribe(employeeAddress => this.employeeAddress = employeeAddress);
    // this.empData.empSalary.subscribe(employeeSalary => this.employeeSalary = employeeSalary);
    // this.empData.empDomain.subscribe(employeeDomain => this.employeeDomain = employeeDomain);
}
