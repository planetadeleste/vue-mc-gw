import "@planetadeleste/vue-mc";
import {
  AccountData,
  AccountTypeData,
  BranchData,
  CompanyData,
  CurrencyRateData,
  CustomerData,
  CustomerType,
  FirmData,
  PaymentTermData,
  PaymentTermFrequency,
  PaymentTermType,
  SettingsData,
} from "./types";

declare module "@planetadeleste/vue-mc-gw" {
  import { Model, Collection } from "@planetadeleste/vue-mc";
  import { Response } from "vue-mc";

  interface Branch extends Model, BranchData {}
  class Branch extends Model {}
  class BranchCollection extends Collection<Branch> {
    list(): Promise<Response<BranchData[]>>;
    byCompany<T extends BranchCollection>(this: T, iCompanyID: number): T;
    byActive<T extends BranchCollection>(this: T): T;
    byDefault<T extends BranchCollection>(this: T): T;
  }

  interface Company extends Model, CompanyData {}
  class Company extends Model {}
  class CompanyCollection extends Collection<Company> {
    byActive<T extends CompanyCollection>(this: T): T;
    bySearch<T extends CompanyCollection>(this: T, sValue: string): T;
    byCategory<T extends CompanyCollection>(
      this: T,
      sValue: string | number
    ): T;
    byUser<T extends CompanyCollection>(this: T, sValue: string | number): T;
  }

  interface Customer extends Model, CustomerData {}
  class Customer extends Model {}
  class CustomerCollection extends Collection<Customer> {
    byCompany<T extends CustomerCollection>(this: T, iCompanyID: number): T;
    byActive<T extends CustomerCollection>(this: T): T;
  }

  interface CurrencyRate extends Model, CurrencyRateData {}
  class CurrencyRate extends Model {}
  class CurrencyRates extends Collection<CurrencyRate> {}

  interface PaymentTerm extends Model, PaymentTermData {}
  class PaymentTerm extends Model {}
  class PaymentTerms extends Collection<PaymentTerm> {
    list(): Promise<Response<PaymentTermData[]>>;
  }

  interface Settings extends Model, SettingsData {}
  class Settings extends Model {}

  interface Firm extends Model, FirmData {}
  class Firm extends Model {}
  class FirmCollection extends Collection<Firm> {}

  interface Account extends Model, AccountData {}
  class Account extends Model {}
  class AccountCollection extends Collection<Account> {
    list(): Promise<Response<AccountData[]>>;
  }

  interface AccountType extends Model, AccountTypeData {}
  class AccountType extends Model {}
  class AccountTypeCollection extends Collection<AccountType> {
    list(): Promise<Response<AccountTypeData[]>>;
  }

  export {
    Account,
    AccountCollection,
    AccountData,
    AccountType,
    AccountTypeCollection,
    AccountTypeData,
    Branch,
    BranchCollection,
    BranchData,
    Company,
    CompanyCollection,
    CompanyData,
    CurrencyRate,
    CurrencyRateData,
    CurrencyRates,
    Customer,
    CustomerCollection,
    CustomerData,
    CustomerType,
    Firm,
    FirmCollection,
    FirmData,
    PaymentTerm,
    PaymentTermFrequency,
    PaymentTerms,
    PaymentTermType,
    Settings,
    SettingsData,
  };
}
