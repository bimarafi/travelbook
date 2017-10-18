import { IDiagnostic, IFlight, IRequired } from "../";

export interface IFlightDataResult {
  diagnostic: IDiagnostic;
  output_type: string;
  required: {
    separator: IRequired,
    conSalutation: IRequired,
    conFirstName: IRequired,
    conLastName: IRequired,
    conPhone: IRequired,
    conEmailAddress: IRequired,
    separator_adult1: IRequired,
    titleal: IRequired,
    firstnameal: IRequired,
    lastnameal: IRequired
  };
  departures: IFlight;
  returns: IFlight;
  login_status: string;
  token: string;
}
