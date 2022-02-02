import { CurrencyData, OfferData } from "@planetadeleste/vue-mc-shopaholic";
import { TaxTypeData } from "./TaxType";

export interface InvoicePositionData {
  id: number;
  invoice_id: number;
  currency_id: number;
  tax_type_id: number;
  price: number;
  original_price: number;
  price_without_discounts: number;
  discounts: number[];
  quantity: number;
  quote: number;
  item_id: number;
  item_type: string;
  tax_percent: number;
  currency: CurrencyData;
  tax_type: TaxTypeData;
  offer: OfferData;
  created_at: string;
  updated_at: string;
}
