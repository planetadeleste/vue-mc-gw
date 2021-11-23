import "@planetadeleste/vue-mc";
import { CurrencyData } from "@planetadeleste/vue-mc-shopaholic";
import {
  AccountConfigData,
  AccountData,
  AccountTypeData,
  BranchData,
  CompanyData,
  CompanySettingsData,
  CurrencyRateData,
  CustomerData,
  CustomerType,
  DiscountData,
  FirmData,
  InvoiceData,
  InvoicePositionData,
  InvoiceTypeData,
  InvoiceGroupData,
  InvoiceMovementTypeData,
  PaymentMethodData,
  PaymentTermData,
  PaymentTermFrequency,
  PaymentTermType,
  ProductGwData,
  SettingsData,
  TaxTypeData,
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

  interface CompanySettings extends Model, CompanySettingsData {}
  class CompanySettings extends Model {}
  class CompanySettingsCollection extends Collection<CompanySettings> {}

  interface Customer extends Model, CustomerData {}
  class Customer extends Model {
    getPaymentTerms(): Promise<Response<PaymentTermData[]>>;
    addPaymentTerms(
      iPaymentTermId: number
    ): Promise<Response<PaymentTermData[]>>;
    delPaymentTerms(
      iPaymentTermId: number
    ): Promise<Response<PaymentTermData[]>>;
    getCurrencies(): Promise<Response<CurrencyData[]>>;
    addCurrency(
      iCurrencyId: number,
      fCreditLimit?: number
    ): Promise<Response<CurrencyData[]>>;
    delCurrency(iCurrencyId: number): Promise<Response<CurrencyData[]>>;
  }
  class CustomerCollection extends Collection<Customer> {
    byCompany<T extends CustomerCollection>(this: T, iCompanyID: number): T;
    byActive<T extends CustomerCollection>(this: T): T;
    bySearch<T extends CustomerCollection>(this: T, sValue: string): T;
    list(): Promise<Response<CustomerData[]>>;
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

  interface PaymentMethod extends Model, PaymentMethodData {}
  class PaymentMethod extends Model {}
  class PaymentMethodCollection extends Collection<PaymentMethod> {
    list(): Promise<Response<PaymentMethodData[]>>;
  }

  interface AccountConfig extends Model, AccountConfigData {}
  class AccountConfig extends Model {}
  class AccountConfigCollection extends Collection<AccountConfig> {
    list(): Promise<Response<AccountConfigData[]>>;
  }

  interface TaxType extends Model, TaxTypeData {}
  class TaxType extends Model {}
  class TaxTypeCollection extends Collection<TaxType> {
    list(): Promise<Response<TaxTypeData[]>>;
    reorder(arListId: number[]): Promise<Response<number[]>>;
  }

  interface ProductGw extends Model, ProductGwData {}
  class ProductGw extends Model {}
  class ProductGwCollection extends Collection<ProductGw> {
    list(): Promise<Response<ProductGwData[]>>;
  }

  interface Discount extends Model, DiscountData {}
  class Discount extends Model {}
  class DiscountCollection extends Collection<Discount> {
    list(): Promise<Response<DiscountData[]>>;
  }

  interface Invoice extends Model, InvoiceData {}
  class Invoice extends Model {}
  class InvoiceCollection extends Collection<Invoice> {
    list(): Promise<Response<InvoiceData[]>>;
  }

  interface InvoicePosition extends Model, InvoicePositionData {}
  class InvoicePosition extends Model {}
  class InvoicePositionCollection extends Collection<InvoicePosition> {
    list(): Promise<Response<InvoicePositionData[]>>;
  }

  interface InvoiceType extends Model, InvoiceTypeData {}
  class InvoiceType extends Model {}
  class InvoiceTypeCollection extends Collection<InvoiceType> {
    list(): Promise<Response<InvoiceTypeData[]>>;
  }

  interface InvoiceGroup extends Model, InvoiceGroupData {}
  class InvoiceGroup extends Model {}
  class InvoiceGroupCollection extends Collection<InvoiceGroup> {
    list(): Promise<Response<InvoiceGroupData[]>>;
  }

  interface InvoiceMovementType extends Model, InvoiceMovementTypeData {}
  class InvoiceMovementType extends Model {}
  class InvoiceMovementTypeCollection extends Collection<InvoiceMovementType> {
    list(): Promise<Response<InvoiceMovementTypeData[]>>;
  }

  export {
    Account,
    AccountCollection,
    AccountConfig,
    AccountConfigCollection,
    AccountConfigData,
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
    CompanySettings,
    CompanySettingsCollection,
    CompanySettingsData,
    CurrencyRate,
    CurrencyRateData,
    CurrencyRates,
    Customer,
    CustomerCollection,
    CustomerData,
    CustomerType,
    Discount,
    DiscountCollection,
    DiscountData,
    Firm,
    FirmCollection,
    FirmData,
    Invoice,
    InvoiceCollection,
    InvoiceData,
    InvoiceGroup,
    InvoiceGroupCollection,
    InvoiceGroupData,
    InvoiceMovementType,
    InvoiceMovementTypeCollection,
    InvoiceMovementTypeData,
    InvoicePosition,
    InvoicePositionCollection,
    InvoicePositionData,
    InvoiceType,
    InvoiceTypeCollection,
    InvoiceTypeData,
    PaymentMethod,
    PaymentMethodCollection,
    PaymentMethodData,
    PaymentTerm,
    PaymentTermFrequency,
    PaymentTerms,
    PaymentTermType,
    ProductGw,
    ProductGwCollection,
    ProductGwData,
    Settings,
    SettingsData,
    TaxType,
    TaxTypeCollection,
    TaxTypeData,
  };
}
