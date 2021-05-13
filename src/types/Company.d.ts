import {
  CountryData,
  StateData,
  TownData,
} from "@planetadeleste/vue-mc-location";
import { BranchData } from "./Branch";

export interface CompanyData {
  id: number;
  name: string;
  created_at: string;
  updated_at: string;
  active: boolean;
  slug: string;
  code: string;
  description: string;
  preview_image: string;
  doc_id: string;
  doc_type: string;
  address: string;
  country_id: number;
  country_code: string;
  country: CountryData;
  state_id: number;
  state_code: string;
  state: StateData;
  town_id: number;
  town_slug: string;
  town: TownData;
  branches: BranchData[];
}
