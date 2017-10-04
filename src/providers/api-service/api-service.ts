import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { Observable } from 'rxjs/Observable';

import {
  IAirportCode, IResponse
} from "../../interfaces";
/*
  API service v1
*/
@Injectable()
export class ApiService {
  private API_URL: string = "http://api.traveltravelbook.com/v1/";
  constructor(public http: Http) {
    console.log('Hello ApiServiceProvider Provider');
  }

  /**
   * Ambil list bandara
   * @param {string} name Nama kota/bandara
   * @returns {Observable<IAirportCode[]>} Array airport code
   */
  getAirports(name: string): Observable<IAirportCode[]> {
    return this.http.get(this.API_URL + "airports", { params: { q: name } })
      .map((response) => {
        let results: IResponse.IAirportSearchResults = response.json();
        return results.resources;
      });
  }

  /**
   * Ambil token
   * @returns {Observable<string>} token
   */
  getToken(): Observable<string> {
    return this.http.get(this.API_URL + "get_token", { params: { q: name } })
      .map((response) => {
        let results: IResponse.ITokenReqResult = response.json();
        return results.token;
      });
  }

}
