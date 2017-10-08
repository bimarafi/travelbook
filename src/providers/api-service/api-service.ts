import { Injectable } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

import { Observable } from 'rxjs/Observable';

import {
  IAirportCode, IForm, IResponse, IRequest
} from "../../interfaces";
/*
  API service v1
*/
@Injectable()
export class ApiService {
  headers: Headers;
  token: string;
  constructor(public http: Http, public datePipe: DatePipe) {
    this.headers = new Headers();
    this.headers.append('Accept', 'application/json');
  }

  /**
   * Ambil list bandara
   * @param {string} name Nama kota/bandara
   * @returns {Observable<IAirportCode[]>} Array airport code
   */
  getAirports(name: string): Observable<IAirportCode[]> {
    return this.http.get("v1/airports", { params: { q: name } })
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
    return this.http.get("v1/get_token")
      .map((response) => {
        let results: IResponse.ITokenReqResult = response.json();
        this.token = results.token;
        return results.token;
      });
  }

  /**
   * Cari penerbangan
   * @param {IForm.ISearchFlightFormData} data
   * @returns {IResponse.IFlightSearchResults}
   */
  searchFlight(data: IForm.ISearchFlightFormData): Observable<IResponse.IFlightSearchResults> {
    let goDateString: string = this.datePipe.transform(data.goDate, 'yyyy-MM-dd');
    let retDateString: string = this.datePipe.transform(data.retDate, 'yyyy-MM-dd');
    let body: IRequest.ISearchFlightQuery = {
      token: this.token,
      flight_form: {
        from: data.from.id,
        to: data.to.id,
        go_date: goDateString,
        ret_date: retDateString,
        adult: data.adult,
        child: data.child,
        infant: data.infant,
        sort: data.sort,
      }
    }
    return this.http.post("v1/search_flight", body, { headers: this.headers })
      .map((response) => {
        let results: IResponse.IFlightSearchResults = response.json();
        return results;
      });
  }

}
