import { Component, OnInit } from '@angular/core';
import { EmployeeDataService } from '../employee-data.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employeeList = [];

  constructor(private empData: EmployeeDataService, private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.showEmployeeList();
  }

  showEmployeeList = function () {
    this.empData.getAllEmployee().subscribe((result) => {
     console.log(result);
      this.employeeList = result;
    });
  };

  /* Delete existing employee record */
  deleteEmployeeRecord(employeeId) {
    alert(employeeId);
    this.empData.deleteEmployee(employeeId).subscribe((result) => {
      console.log('sam in delete', result);
      if (result) {
       window.location.href = '/list';
      }
    });
  }
}
