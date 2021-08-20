import { BranchData } from "./Branch";
import { FirmData } from "./Firm";

export interface CompanyData {
  id: number;
  active: boolean;
  created_at: string;
  updated_at: string;
  preview_image: string;
  branches: BranchData[];
  firm: FirmData;
}
