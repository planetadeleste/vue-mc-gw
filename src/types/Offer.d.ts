import { OfferData as ProductOfferData } from "@planetadeleste/vue-mc-shopaholic";

export interface OfferData extends ProductOfferData {
  created_at: string;
  currency_code: string;
  currency_id: number;
  external_id: number;
  has_prices: boolean;
  use_price_with_tax: boolean;
  tax_value: number;
  price_with_tax: number;
  price_with_tax_value: number;
  price_without_tax: number;
  price_without_tax_value: number;
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
