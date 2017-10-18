import { Injectable } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Http, Headers } from '@angular/http';
import { Platform } from 'ionic-angular';
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
  API_URL: string = 'http://api.traveltravelbook.com/';
  headers: Headers;
  token: string;
  constructor(public http: Http, public datePipe: DatePipe, public platform:Platform) {
    this.headers = new Headers();
    this.headers.append('Accept', 'application/json');
    if(platform.is('core')){
      this.API_URL = '';
    }
  }

  /**
   * Ambil list bandara
   * @param {string} name Nama kota/bandara
   * @returns {Observable<IAirportCode[]>} Array airport code
   */
  getAirports(name: string): Observable<IAirportCode[]> {
    return this.http.get(this.API_URL + "v1/airports", { params: { q: name } })
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
    return this.http.get(this.API_URL + "v1/get_token")
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
    return this.http.post(this.API_URL + "v1/search_flight", body, { headers: this.headers })
      .map((response) => {
        let results: IResponse.IFlightSearchResults = response.json();
        return results;
      });
  }

  getFlightData(data: IRequest.ISearchFlightDataQuery): Observable<IResponse.IFlightDataResult> {
    return this.http.post(this.API_URL + "v1/get_flight_data", data, { headers: this.headers })
      .map((response) => {
        let result: IResponse.IFlightDataResult = response.json();
        return result;
      });
  }

}
