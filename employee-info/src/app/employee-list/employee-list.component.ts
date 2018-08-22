import { Component, OnInit } from '@angular/core';
import { EmployeeDataService } from '../employee-data.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employeeList = [];

  constructor(private empData: EmployeeDataService) { }

  ngOnInit() {
    this.showEmployeeList();
  }

  showEmployeeList = function () {
    this.empData.getAllEmployee().subscribe((result) => {
     console.log(result);
      this.employeeList = result;
    });
  };

  // editEmployee (employee) {
  //   this.empData.editEmployeeRecord(employee);
  // }
}
