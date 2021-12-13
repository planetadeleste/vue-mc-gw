import { CompanyData } from "./Company";
import { FirmData } from "./Firm";

export interface BranchData {
  id: number;
  company_id: number;
  active: boolean;
  is_default: boolean;
  created_at: string;
  updated_at: string;
  company: CompanyData;
  firm: FirmData;
}
