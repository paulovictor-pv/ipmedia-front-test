import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {
  private apiUrl: string = "https://restcountries.com/v3.1";

  constructor(private httpClient: HttpClient) { }

  getRegionCountries(region:string): Observable<any> {
    return this.httpClient.get<any>(`${this.apiUrl}/name/${region}`)
    .pipe(res =>res, error=> error);
  }

}
