import { IAirportCode } from "../airport-code";

export interface ISearchFlightFormData {
  from: IAirportCode;
  to: IAirportCode;
  goDate: number;
  retDate: number;
  roundtrip: boolean;
  adult: number;
  child: number;
  infant: number;
  bussiness: boolean;
}
