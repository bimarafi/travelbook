import { IDiagnostic, IFlight, IRequired } from "../";

export interface IFlightDataResult {
  diagnostic: { IDiagnostic, lioncaptcha: string, lionsessionid: string };
  output_type: string;
  required: {
    separator: IRequired,
    conSalutation: { IRequired, resource: {id: string, name: string}[]},
    conFirstName: IRequired,
    conLastName: IRequired,
    conPhone: IRequired,
    conEmailAddress: IRequired,
    separator_adult1: IRequired,
    titleal: { IRequired, resource: {id: string, name: string}[]},
    firstnameal: IRequired,
    lastnameal: IRequired
  };
  departures: IFlight;
  returns: IFlight;
  login_status: string;
  token: string;
}
