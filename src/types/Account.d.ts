import { CurrencyData } from "@planetadeleste/vue-mc-shopaholic";
import { CompanyData } from "./Company";
import { PaymentMethodData } from "./PaymentMethod";

export interface AccountData {
  id: number;
  paymentmethod_id: number;
  currency_id: number;
  company_id: number;
  active: boolean;
  name: string;
  code: string;
  created_at: string;
  updated_at: string;
  company?: CompanyData;
  paymentmethod?: PaymentMethodData;
  currency?: CurrencyData;
}
