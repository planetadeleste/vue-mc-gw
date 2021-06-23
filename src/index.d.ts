import "@planetadeleste/vue-mc";
import {
  BranchData,
  CompanyData,
  SettingsData,
  CurrencyRateData,
  PaymentTermData,
} from "./types";

declare module "@planetadeleste/vue-mc-gw" {
  import { Model, Collection } from "@planetadeleste/vue-mc";

  interface Company extends Model, CompanyData {}
  class Company extends Model {}

  interface Branch extends Model, BranchData {}
  class Branch extends Model {}

  interface CurrencyRate extends Model, CurrencyRateData {}
  class CurrencyRate extends Model {}

  interface PaymentTerm extends Model, PaymentTermData {}
  class PaymentTerm extends Model {}

  interface Settings extends Model, SettingsData {}
  class Settings extends Model {}

  export {
    CompanyData,
    Company,
    BranchData,
    Branch,
    SettingsData,
    Settings,
    CurrencyRate,
    CurrencyRateData,
  };
  export class Companies extends Collection<Company> {}
  export class Branches extends Collection<Branch> {
    byCompany<T extends Branches>(this: T, iCompanyID: number): T;
    byActive<T extends Branches>(this: T): T;
    byDefault<T extends Branches>(this: T): T;
  }
  export class CurrencyRates extends Collection<CurrencyRate> {}
  export class PaymentTerms extends Collection<PaymentTerm> {}
}
