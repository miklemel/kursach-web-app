import { HttpClient } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegionService {
  constructor(@Inject(HttpClient) private httpClient: HttpClient) { }

  public getRegionList() {
    return this.httpClient.get(`/region`);
  }
  public createRegion(region) {
    return this.httpClient.post(`/region`,region);
  }
  public updateRegion(region) {
    return this.httpClient.put(`/region`,region);
  }
  public removeRegion(id) {
    return this.httpClient.delete(`/region/${id}`);
  }
}
