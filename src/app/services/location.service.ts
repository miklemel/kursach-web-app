import { HttpClient } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  constructor(@Inject(HttpClient) private httpClient: HttpClient) { }

  public getLocationList() {
    return this.httpClient.get(`/location`);
  }
  public createLocation(location) {
    return this.httpClient.post(`/location`,location);
  }
  public updateLocation(location) {
    return this.httpClient.put(`/location`,location);
  }
  public removeLocation(id) {
    return this.httpClient.delete(`/location/${id}`);
  }
}
