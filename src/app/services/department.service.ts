import { HttpClient } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  constructor(@Inject(HttpClient) private httpClient: HttpClient) { }

  public getDepartmentList() {
    return this.httpClient.get(`/department`);
  }
  public createDepartment(department) {
    return this.httpClient.post(`/department`,department);
  }
  public updateDepartment(department) {
    return this.httpClient.put(`/department`,department);
  }
  public removeDepartment(id) {
    return this.httpClient.delete(`/department/${id}`);
  }
}
