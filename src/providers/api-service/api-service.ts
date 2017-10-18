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
  constructor(public http: Http, public datePipe: DatePipe, public platform: Platform) {
    this.headers = new Headers();
    this.headers.append('Accept', 'application/json');
    if (platform.is('core')) {
      this.API_URL = '';
    }
  }

  /**
   * Ambil list bandara
   * @param {string} name Nama kota/bandara
   * @returns {Observable<IAirportCode[]>} Array airport code
   */
  getAirports(name: string): Promise<IAirportCode[]> {
    return new Promise((resolve, reject) => {
      this.http.get(this.API_URL + "v1/airports", { params: { q: name } })
        .subscribe(
        response => {
          let results: IResponse.IAirportSearchResults = response.json();
          resolve(results.resources);
        },
        err => reject(err));
    });
  }

  /**
   * Ambil token
   * @returns {Observable<string>} token
   */
  getToken(): Promise<string> {
    return new Promise((resolve, reject) => {
      this.http.get(this.API_URL + "v1/get_token")
        .subscribe(
        response => {
          let results: IResponse.ITokenReqResult = response.json();
          this.token = results.token;
          resolve(results.token);
        },
        err => reject(err));
    });
  }

  /**
   * Cari penerbangan
   * @param {IForm.ISearchFlightFormData} data
   * @returns {IResponse.IFlightSearchResults}
   */
  searchFlight(data: IForm.ISearchFlightFormData): Promise<IResponse.IFlightSearchResults> {
    return new Promise((resolve, reject) => {
      this.getToken().then(token => {
        let body: IRequest.ISearchFlightQuery = {
          token: token,
          flight_form: {
            from: data.from.id,
            to: data.to.id,
            go_date: data.goDate,
            ret_date: data.retDate,
            adult: data.adult,
            child: data.child,
            infant: data.infant,
            sort: data.sort,
          }
        }
        this.http.post(this.API_URL + "v1/search_flight", body, { headers: this.headers })
          .subscribe(
          response => {
            let results: IResponse.IFlightSearchResults = response.json();
            if (data.roundtrip && (results.returns === undefined || results.returns.result.length === 0)) {
              reject(new Error('Returns flight empty'));
            }
            if (results.departures === undefined || results.departures.result.length === 0) {
              reject(new Error('Departures flight empty'));
            }
            resolve(results);
          },
          err => reject(err));
      });
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
