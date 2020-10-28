import { HttpClient } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  constructor(@Inject(HttpClient) private httpClient: HttpClient) { }

  public getCountryList() {
    return this.httpClient.get(`/country`);
  }
  public createCountry(country) {
    return this.httpClient.post(`/country`,country);
  }
  public updateCountry(country) {
    return this.httpClient.put(`/country`,country);
  }
  public removeCountry(id) {
    return this.httpClient.delete(`/country/${id}`);
  }
}
