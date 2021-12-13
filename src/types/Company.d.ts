import { BranchData } from "./Branch";
import { CompanySettingsData } from "./CompanySettings";
import { FirmData } from "./Firm";

export interface CompanyData {
  id: number;
  active: boolean;
  created_at: string;
  updated_at: string;
  preview_image: string;
  ucfe_code: string;
  ucfe_terminal: string;
  ucfe_url: string;
  ucfe_password: string;
  branches: BranchData[];
  firm: FirmData;
  settings: CompanySettingsData;
}
