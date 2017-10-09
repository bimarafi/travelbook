import { IFlightInfo } from "./flight-info";

export interface IFlight {
  flight_id: string;
  airlines_name: string;
  flight_number: string;
  departure_city: string;
  arrival_city: string;
  stop: string;
  price_value: number;
  price_adult: number
  price_child: number;
  price_infant: number;
  timestamp: Date;
  has_food: boolean;
  multiplier: number;
  check_in_baggage: number;
  show_promo_tag: boolean;
  is_promo: boolean;
  airport_tax: boolean;
  check_in_baggage_unit: string;
  simple_departure_time: Date;
  simple_arrival_time: Date;
  long_via: string;
  departure_city_name: string;
  arrival_city_name: string;
  full_via: string;
  markup_price_string: string;
  need_baggage: boolean;
  best_deal: boolean;
  duration: string;
  image: string;
  departure_flight_dat: Date;
  departure_flight_date_str: string;
  departure_flight_date_str_short: string;
  arrival_flight_date: Date;
  arrival_flight_date_str: string;
  arrival_flight_date_str_short: string;
  flight_infos: { flight_info: IFlightInfo[] };
  sss_key: string;
}
