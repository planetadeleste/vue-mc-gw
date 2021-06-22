import { CurrencyData } from "@planetadeleste/vue-mc-shopaholic";

export interface CurrencyRateData {
  id: number;
  name: string;
  rate: string | number;
  currency_id: number;
  currency: CurrencyData;
  rated_at: string;
  created_at: string;
  updated_at: string;
}
