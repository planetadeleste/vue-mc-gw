import { CompanyData } from "./Company";

export interface BranchData {
  id: number;
  company_id: number;
  country_id: number;
  state_id: number;
  town_id: number;
  active: boolean;
  is_default: boolean;
  name: string;
  code: string;
  address: string;
  phone: string;
  email: string;
  company: CompanyData;
  created_at: string;
  updated_at: string;
  ucfe_code: string;
  ucfe_terminal: string;
  ucfe_password: string;
}
