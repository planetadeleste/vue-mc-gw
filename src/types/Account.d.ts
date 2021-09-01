import { CurrencyData } from "@planetadeleste/vue-mc-shopaholic";
import { AccountTypeData } from "./AccountType";
import { CompanyData } from "./Company";

export interface AccountData {
  id: number;
  accounttype_id: number;
  currency_id: number;
  company_id: number;
  active: boolean;
  name: string;
  code: string;
  created_at: string;
  updated_at: string;
  company?: CompanyData;
  accounttype?: AccountTypeData;
  currency?: CurrencyData;
}
