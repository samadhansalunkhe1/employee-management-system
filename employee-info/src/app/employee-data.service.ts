import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class EmployeeDataService {

  constructor(private httpClient: HttpClient) { }

  getAllEmployee() {
   // return this.httpClient.get('http://localhost:3000/employees');
   return this.httpClient.get('http://localhost:5000/api/employees');
  }

  addEmployee(employee) {
    console.log('sam in service');
    console.log(employee);
    console.log('sam in service');
    const employee1 = '{"name: "sam", "mobile": "123", "email": "sam@gmail.com"}';
    const headers = {'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'};
    // return this.httpClient.post('http://localhost:3000/employees', employee);
    return this.httpClient.post('http://localhost:5000/api/employee', employee1, {'headers': headers});
  }

  getSingleEmployee(empId) {
   // return this.httpClient.get('http://localhost:3000/employees/' + empId);
   return this.httpClient.get('http://localhost:5000/api/employees/' + empId);
  }

  editEmployee (employee) {
     return this.httpClient.patch('http://localhost:3000/employees/' + employee.id, employee);
  }

  // getEmpData(edata) {
  //   const data = {
  //     name: edata.name ? edata.name : '',

  //   };
  // }


// Below code is using for sharing data between components */
  // editEmployeeRecord(empUser) {
  //   this.employeeName.next(empUser.name);
  //   this.employeeMobile.next(empUser.mobile);
  //   this.employeeEmail.next(empUser.email);
  //   this.employeeAddress.next(empUser.address);
  //   this.employeeSalary.next(empUser.salary);
  //   this.employeeDomain.next(empUser.domain);
  // }


  // private employeeName = new BehaviorSubject<string>('');
  // empName = this.employeeName.asObservable();

  // private employeeMobile = new BehaviorSubject<string>('');
  // empMobile = this.employeeMobile.asObservable();

  // private employeeEmail = new BehaviorSubject<string>('');
  // empEmail = this.employeeEmail.asObservable();

  // private employeeAddress = new BehaviorSubject<string>('');
  // empAddress = this.employeeAddress.asObservable();

  // private employeeSalary = new BehaviorSubject<string>('');
  // empSalary = this.employeeSalary.asObservable();

  // private employeeDomain = new BehaviorSubject<string>('');
  // empDomain = this.employeeDomain.asObservable();
}
