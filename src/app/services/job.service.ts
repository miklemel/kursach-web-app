import { HttpClient } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JobService {
  constructor(@Inject(HttpClient) private httpClient: HttpClient) { }

  public getJobList() {
    return this.httpClient.get(`/job`);
  }
  public createJob(job) {
    return this.httpClient.post(`/job`,job);
  }
  public updateJob(job) {
    return this.httpClient.put(`/job`,job);
  }
  public removeJob(id) {
    return this.httpClient.delete(`/job/${id}`);
  }
}
