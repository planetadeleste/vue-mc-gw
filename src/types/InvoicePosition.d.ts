import { CurrencyData, OfferData } from "@planetadeleste/vue-mc-shopaholic";
import { DiscountData } from "./Discount";
import { TaxTypeData } from "./TaxType";

export interface InvoicePositionData {
  id: number;
  invoice_id: number;
  currency_id: number;
  tax_type_id: number;
  price: number;
  original_price: number;
  price_with_discounts: number;
  quantity: number;
  quote: number;
  item_id: number;
  item_type: string;
  tax_percent: number;
  currency: CurrencyData;
  tax_type: TaxTypeData;
  offer: OfferData;
  discounts: DiscountData[];
  created_at: string;
  updated_at: string;
}
