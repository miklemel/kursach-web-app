import { HttpClient } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  constructor(@Inject(HttpClient) private httpClient: HttpClient) { }

  public getEmployeeList() {
    return this.httpClient.get(`/employee`);
  }
  public createEmployee(employee) {
    return this.httpClient.post(`/employee`,employee);
  }
  public updateEmployee(employee) {
    return this.httpClient.put(`/employee`,employee);
  }
  public removeEmployee(id) {
    return this.httpClient.delete(`/employee/${id}`);
  }
}
