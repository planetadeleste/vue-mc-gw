import { OfferData as ProductOfferData } from "@planetadeleste/vue-mc-shopaholic";

export interface OfferData extends ProductOfferData {
  created_at: string;
  currency_code: string;
  currency_id: number;
  external_id: number;
  has_prices: boolean;
  height: number;
  length: number;
  measure_id: number;
  measure_of_unit_id: number;
  price_list_id: number;
  price_valid_at: string;
  quantity_in_unit: number;
  updated_at: string;
  weight: number;
  width: number;
}
