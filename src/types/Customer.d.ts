import { FirmData } from "./Firm";
import { CompanyData } from "./Company";
import { CurrencyData } from "@planetadeleste/vue-mc-shopaholic";
import { PaymentTermData } from "./PaymentTerm";
import { DiscountData } from "./Discount";
import { CustomerConfigData } from "./CustomerConfig";

/**
 * 1 - Customer only
 * 2 - Provider only
 * 3 - Both (Customer and Provider)
 */
export type CustomerType = 1 | 2 | 3;

export interface CustomerData {
  id: number;
  company_id: number;
  currency_limit_id: number;
  credit_limit: number;
  type: CustomerType;
  active: boolean;
  tax_exempt: boolean;
  is_customer: boolean;
  is_provider: boolean;
  created_at: string;
  updated_at: string;
  preview_image: string;
  firm: FirmData;
  company: CompanyData;
  currency_limit: CurrencyData;
  currencies: CurrencyData[];
  paymentterms: PaymentTermData[];
  discounts: DiscountData[];
  config: CustomerConfigData;
}
