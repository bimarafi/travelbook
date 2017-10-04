import { IDiagnostic } from "../diagnostic";
export interface ITokenReqResult {
  diagnostic: IDiagnostic;
  output_type: string;
  login_status: string;
  token: string;
}
