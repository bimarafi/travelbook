import { IAirportCode } from "../airport-code";
export interface IAirportSearchResults {
  total_count: number;
  resources: IAirportCode[];
}
