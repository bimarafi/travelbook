import { IDiagnostic } from "../";

export interface IHotelDetailResults {
  diagnostic: IDiagnostic;
  output_type: string;
  general: {
    latitude: string;
    longitude: string;
    address: string;
    description: string;
  }
  breadcrumb: {
    business_name: string;
    star_rating: number;
  }
  all_photo: { photo: { filename: string; } }
  results: {
    result: {
      room_name: string;
      photo_url: string;
      room_available: number;
      oldprice: number;
      price: number;
      with_breakfast: boolean;
      value_added: string;
      room_description: string;
      list_promo_policy: {
        tier_one: string;
        tier_two: string;
        policy: string;
      };
    };
  }
  avail_facilities: {
    avail_facility: {
      facility_type: string;
      facility_name: string;
    }
  }
  addinfos: {
    addinfo: string;
  }
  login_status: string;
  token: string;
}
