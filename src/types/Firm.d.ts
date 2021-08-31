import {
  CountryData,
  StateData,
  TownData,
} from "@planetadeleste/vue-mc-location";
export interface FirmData {
  id: number;
  name: string;
  slug: string;
  code: string;
  description: string;
  doc_id: string;
  doc_type: string;

  address: string;
  email: string;
  phone: string;
  mobile: string;

  // Location data
  country_id: number;
  country_code: string;
  country: CountryData;
  state_id: number;
  state_code: string;
  state: StateData;
  town_id: number;
  town_slug: string;
  town: TownData;

  // DGI Data
  dgi_local_sec_nro: string;
  dgi_dir_fiscal: string;
  dgi_loc_nom: string;
  dgi_dpto_nom: string;
  dgi_denominacion: string;
  dgi_nombre_fantasia: string;
}
