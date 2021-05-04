declare module "@planetadeleste/vue-mc-gw" {
  import { Model, Collection } from "@planetadeleste/vue-mc-shopaholic";
  import {
    CountryData,
    StateData,
    TownData,
  } from "@bit/planetadeleste.shopaholic-mc.location";

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
  }

  export interface SettingsData {
    preview_image: string;
  }

  export interface Company extends Model, CompanyData {}
  export interface Settings extends Model, SettingsData {}

  export class Companies extends Collection<Company> {}
}
