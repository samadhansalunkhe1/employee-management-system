import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeDataService } from '../employee-data.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  employeeId: string;
  employeeName: string;
  employeeMobile: string;
  employeeEmail: string;
  employeeAddress: string;
  employeeSalary: string;
  employeeDomain: string;

  constructor(private empData: EmployeeDataService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
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

}
