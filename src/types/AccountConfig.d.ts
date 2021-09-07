import { CurrencyData } from "@planetadeleste/vue-mc-shopaholic";
import { AccountData } from "./Account";
import { AccountTypeData } from "./AccountType";
import { CompanyData } from "./Company";
import { PaymentMethodData } from "./PaymentMethod";

export interface AccountConfigData {
  id: number;
  any_currency: boolean;
  company_id: number;
  account_id: number;
  accounttype_id: number;
  paymentmethod_id: number;
  currency_id: number;
  created_at: string;
  updated_at: string;

  company?: CompanyData;
  account?: AccountData;
  accounttype?: AccountTypeData;
  paymentmethod?: PaymentMethodData;
  currency?: CurrencyData;
}
