import { IDiagnostic, INearbyAttraction } from "../";
import { IBreadcrumb } from "../breadcrumb";
import { IHotel } from "../hotel";

export interface IHotelDetailResults {
  diagnostic: IDiagnostic;
  output_type: string;
  primaryPhotos: string;
  breadcrumb: IBreadcrumb;
  results: { result: IHotel[]; }
  all_photo: {
    photo: {
      file_name: string;
      photo_type: string;
    }[]
  }
  primaryPhotos_large: string;
  avail_facilities: {
    avail_facility: {
      facility_type: string;
      facility_name: string;
    }[]
  }
  nearby_attractions: {
    nearby_attraction: INearbyAttraction[]
  }
  list_internal_review: any[];
  summary_internal_review: {
    average: string;
    max_rating: number;
    detail: {
      category: string;
      value: string;
    }[]
  }
  general: {
    address: string;
    description: string;
    latitude: string;
    longitude: string;
  }
  login_status: string;
  token: string;
}
