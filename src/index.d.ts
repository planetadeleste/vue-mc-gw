import '@planetadeleste/vue-mc';
import { CurrencyData } from '@planetadeleste/vue-mc-shopaholic';
import {
  AccountConfigData,
  AccountData,
  AccountTypeData,
  BankData,
  BranchData,
  CfeCodeData,
  CompanyBalanceData,
  CompanyData,
  CompanyPaymentMethodRequest,
  CompanySettingsData,
  CurrencyRateData,
  CustomerConfigData,
  CustomerData,
  CustomerType,
  DiscountData,
  FirmData,
  InvoiceData,
  InvoiceGroupData,
  InvoiceMovementTypeData,
  InvoicePaymentMethodData,
  InvoicePositionData,
  InvoiceReferenceData,
  InvoiceTypeData,
  OfferData,
  PaymentMethodData,
  PaymentTermData,
  PaymentTermFrequency,
  PaymentTermType,
  PriceListData,
  ProductGwData,
  ReleaseData,
  ReleaseType,
  SettingsData,
  TaxTypeData,
  UcfeData,
} from './types';

declare module '@planetadeleste/vue-mc-gw' {
  import { Model, Collection } from '@planetadeleste/vue-mc';
  import { Response } from 'vue-mc';

  interface Branch extends Model, BranchData {}
  class Branch extends Model {}
  class BranchCollection extends Collection<Branch> {
    list(): Promise<Response<BranchData[]>>;
    byCompany<T extends BranchCollection>(this: T, iCompanyID: number): T;
    byActive<T extends BranchCollection>(this: T): T;
    byDefault<T extends BranchCollection>(this: T): T;
  }

  interface Company extends Model, CompanyData {}
  class Company extends Model {
    getBalance(): Promise<Response<CompanyBalanceData>>;
    getPaymentMethods(): Promise<Response<PaymentMethodData[]>>;
    addUpdatePaymentMethods(
      obConfigData: CompanyPaymentMethodRequest
    ): Promise<Response<PaymentMethodData[]>>;
    delPaymentMethods(
      obConfigData: CompanyPaymentMethodRequest
    ): Promise<Response<PaymentMethodData[]>>;
  }
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

  interface CustomerConfig extends Model, CustomerConfigData {}
  class CustomerConfig extends Model {}
  class CustomerConfigCollection extends Collection<CustomerConfig> {}

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
    inAccount<T extends PaymentMethodCollection>(this: T): T;
    inInvoice<T extends PaymentMethodCollection>(this: T): T;
  }

  interface AccountConfig extends Model, AccountConfigData {}
  class AccountConfig extends Model {}
  class AccountConfigCollection extends Collection<AccountConfig> {
    list(): Promise<Response<AccountConfigData[]>>;
  }

  interface TaxType extends Model, TaxTypeData {}
  class TaxType extends Model {
    static readonly CODE_EXEMPT = 1;
    static readonly CODE_MIN = 2;
    static readonly CODE_BASIC = 3;
    static readonly CODE_OTHER = 4;
  }
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
  class InvoiceType extends Model {
    /**
     * @constant {number} CODE_ETICKET e-Ticket
     */
    static readonly CODE_ETICKET = 101;
    /**
     * @constant {number} CODE_NCETICKET Nota de Crédito de e-Ticket
     */
    static readonly CODE_NCETICKET = 102;
    /**
     * @constant {number} CODE_NDETICKET Nota de Débito de e-Ticket
     */
    static readonly CODE_NDETICKET = 103;
    /**
     * @constant {number} CODE_EFACTURA e-Factura
     */
    static readonly CODE_EFACTURA = 111;
    /**
     * @constant {number} CODE_NCEFACTURA Nota de Crédito de e-Factura
     */
    static readonly CODE_NCEFACTURA = 112;
    /**
     * @constant {number} CODE_NDEFACTURA Nota de Débito de e-Factura
     */
    static readonly CODE_NDEFACTURA = 113;
    /**
     * @constant {number} CODE_EREMITO e-Remito
     */
    static readonly CODE_EREMITO = 181;
    /**
     * @constant {number} CODE_ERESGUARDO e-Resguardo
     */
    static readonly CODE_ERESGUARDO = 182;
    /**
     * @constant {number} CODE_EFACTURA_EXP e-Factura Exportación
     */
    static readonly CODE_EFACTURA_EXP = 121;
    /**
     * @constant {number} CODE_NCEFACTURA_EXP Nota de Crédito de e-Factura Exportación
     */
    static readonly CODE_NCEFACTURA_EXP = 122;
    /**
     * @constant {number} CODE_NDEFACTURA_EXP Nota de Débito de e-Factura Exportación
     */
    static readonly CODE_NDEFACTURA_EXP = 123;
    /**
     * @constant {number} CODE_EREMITO_EXP e-Remito de Exportación
     */
    static readonly CODE_EREMITO_EXP = 124;
    /**
     * @constant {number} CODE_ETICKET_VENTA_CUENTA_AJENA e-Ticket Venta por Cuenta Ajena
     */
    static readonly CODE_ETICKET_VENTA_CUENTA_AJENA = 131;
    /**
     * @constant {number} CODE_NCETICKET_VENTA_CUENTA_AJENA Nota de Crédito de e-Ticket Venta por Cuenta Ajena
     */
    static readonly CODE_NCETICKET_VENTA_CUENTA_AJENA = 132;
    /**
     * @constant {number} CODE_NDETICKET_VENTA_CUENTA_AJENA Nota de Débito de e-Ticket Venta por Cuenta Ajena
     */
    static readonly CODE_NDETICKET_VENTA_CUENTA_AJENA = 133;
    /**
     * @constant {number} CODE_EFACTURA_VENTA_CUENTA_AJENA e-Factura Venta por Cuenta Ajena
     */
    static readonly CODE_EFACTURA_VENTA_CUENTA_AJENA = 141;
    /**
     * @constant {number} CODE_NCEFACTURA_VENTA_CUENTA_AJENA Nota de Crédito de e-Factura Venta por Cuenta Ajena
     */
    static readonly CODE_NCEFACTURA_VENTA_CUENTA_AJENA = 142;
    /**
     * @constant {number} CODE_NDEFACTURA_VENTA_CUENTA_AJENA Nota de Débito de e-Factura Venta por Cuenta Ajena
     */
    static readonly CODE_NDEFACTURA_VENTA_CUENTA_AJENA = 143;
    /**
     * @constant {number} CODE_EBOLETA_ENTRADA e-Boleta de entrada
     */
    static readonly CODE_EBOLETA_ENTRADA = 151;
    /**
     * @constant {number} CODE_NCEBOLETA_ENTRADA Nota de crédito de e-Boleta de entrada
     */
    static readonly CODE_NCEBOLETA_ENTRADA = 152;
    /**
     * @constant {number} CODE_NDEBOLETA_ENTRADA Nota de débito de e-Boleta de entrada
     */
    static readonly CODE_NDEBOLETA_ENTRADA = 153;
  }
  class InvoiceTypeCollection extends Collection<InvoiceType> {
    list(): Promise<Response<InvoiceTypeData[]>>;
  }

  interface InvoiceGroup extends Model, InvoiceGroupData {}
  class InvoiceGroup extends Model {}
  class InvoiceGroupCollection extends Collection<InvoiceGroup> {
    list(): Promise<Response<InvoiceGroupData[]>>;
  }

  interface InvoiceMovementType extends Model, InvoiceMovementTypeData {}
  class InvoiceMovementType extends Model {
    /**
     * @constant {number} CODE_SALES Venta
     */
    static readonly CODE_SALES = 1;
    /**
     * @constant {number} CODE_REFOUND Devolución
     */
    static readonly CODE_REFOUND = 2;
    /**
     * @constant {number} CODE_ADJUSTMENT_LIKE_SALES Ajuste simil ventas
     */
    static readonly CODE_ADJUSTMENT_LIKE_SALES = 3;
    /**
     * @constant {number} CODE_SPECIAL_MOVEMENTS Movimiento de mercadería especial
     */
    static readonly CODE_SPECIAL_MOVEMENTS = 4;
    /**
     * @constant {number} CODE_DEBIT_NOTE Nota de débito
     */
    static readonly CODE_DEBIT_NOTE = 5;
    /**
     * @constant {number} CODE_RECEIPT Resguardo
     */
    static readonly CODE_RECEIPT = 6;
    /**
     * @constant {number} CODE_DEBT Cobranza
     */
    static readonly CODE_DEBT = 7;
  }
  class InvoiceMovementTypeCollection extends Collection<InvoiceMovementType> {
    list(): Promise<Response<InvoiceMovementTypeData[]>>;
  }

  interface InvoicePaymentMethod extends Model, InvoicePaymentMethodData {}
  class InvoicePaymentMethod extends Model {}
  class InvoicePaymentMethodCollection extends Collection<InvoicePaymentMethod> {
    list(): Promise<Response<InvoicePaymentMethodData[]>>;
    byInvoice<T extends InvoicePaymentMethodCollection>(
      this: T,
      iInvoiceId: number
    ): T;
  }

  interface InvoiceReference extends Model, InvoiceReferenceData {}
  class InvoiceReference extends Model {}
  class InvoiceReferenceCollection extends Collection<InvoiceReference> {
    list(): Promise<Response<InvoiceReference[]>>;
    byInvoice<T extends InvoiceReferenceCollection>(
      this: T,
      iInvoiceId: number
    ): T;
  }

  interface PriceList extends Model, PriceListData {}
  class PriceList extends Model {
    getOffers(): Promise<Response<OfferData[]>>;
  }
  class PriceListCollection extends Collection<PriceList> {
    list(): Promise<Response<PriceListData[]>>;
  }

  interface Bank extends Model, BankData {}
  class Bank extends Model {}
  class BankCollection extends Collection<Bank> {
    list(): Promise<Response<BankData[]>>;
  }

  interface Release extends Model, ReleaseData {}
  class Release extends Model {}
  class ReleaseCollection extends Collection<Release> {
    list(): Promise<Response<ReleaseData[]>>;
    listByType(sType: string): Promise<Response<ReleaseData[]>>;
    byType<T extends ReleaseCollection>(this: T, sType: string): T;
  }

  interface CfeCode extends Model, CfeCodeData {}
  class CfeCode extends Model {}
  class CfeCodeCollection extends Collection<CfeCode> {
    list(): Promise<Response<CfeCodeData[]>>;
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
    Bank,
    BankCollection,
    BankData,
    Branch,
    BranchCollection,
    BranchData,
    CfeCode,
    CfeCodeCollection,
    CfeCodeData,
    Company,
    CompanyBalanceData,
    CompanyCollection,
    CompanyData,
    CompanyPaymentMethodRequest,
    CompanySettings,
    CompanySettingsCollection,
    CompanySettingsData,
    CurrencyRate,
    CurrencyRateData,
    CurrencyRates,
    Customer,
    CustomerCollection,
    CustomerConfig,
    CustomerConfigCollection,
    CustomerConfigData,
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
    InvoicePaymentMethod,
    InvoicePaymentMethodCollection,
    InvoicePaymentMethodData,
    InvoicePosition,
    InvoicePositionCollection,
    InvoicePositionData,
    InvoiceReference,
    InvoiceReferenceCollection,
    InvoiceReferenceData,
    InvoiceType,
    InvoiceTypeCollection,
    InvoiceTypeData,
    OfferData,
    PaymentMethod,
    PaymentMethodCollection,
    PaymentMethodData,
    PaymentTerm,
    PaymentTermFrequency,
    PaymentTerms,
    PaymentTermType,
    PriceList,
    PriceListCollection,
    PriceListData,
    ProductGw,
    ProductGwCollection,
    ProductGwData,
    Release,
    ReleaseCollection,
    ReleaseData,
    ReleaseType,
    Settings,
    SettingsData,
    TaxType,
    TaxTypeCollection,
    TaxTypeData,
    UcfeData,
  };
}
