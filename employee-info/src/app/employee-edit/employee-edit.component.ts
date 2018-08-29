import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EmployeeDataService } from '../employee-data.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent implements OnInit {
  employeeForm;
  employeeId: string;
  employeeName: string;
  employeeMobile: string;
  employeeEmail: string;
  employeeAddress: string;
  employeeSalary: string;
  employeeDomain: string;

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

    /* Get id of employee from URL and edit record */
    this.activatedRoute.paramMap.subscribe(params => {
      this.employeeId = params.get('id');
      if (this.employeeId) {
        this.empData.getSingleEmployee(this.employeeId).subscribe((result) => {
          this.employeeName = result['name'];
          this.employeeMobile = result['mobile'];
          this.employeeEmail = result['email'];
          this.employeeAddress = result['address'];
          this.employeeSalary = result['salary'];
          this.employeeDomain = result['domail'];
        });
      }
    });
  }

  /* Edit existing employee record */
  editEmployeeRecord() {
    this.employeeForm.value.id = this.employeeId;
    this.empData.editEmployee(this.employeeForm.value).subscribe((result) => {
      console.log('sssssssssssss', result);
      if (result) {
        this.router.navigate(['/list']);
      }
   });
  }
}
