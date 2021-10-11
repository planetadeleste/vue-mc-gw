/**
 * Models and Collections for VueMcGw plugin
 *
 * @author Alvaro Canepa <bfpdevel@gmail.com>
 */

// COLLECTIONS
import AccountCollection from "./collections/AccountCollection";
import AccountConfigCollection from "./collections/AccountConfigCollection";
import AccountTypeCollection from "./collections/AccountTypeCollection";
import BranchCollection from "./collections/BranchCollection";
import CompanyCollection from "./collections/CompanyCollection";
import CurrencyRates from "./collections/CurrencyRates";
import CustomerCollection from "./collections/CustomerCollection";
import FirmCollection from "./collections/FirmCollection";
import PaymentMethodCollection from "./collections/PaymentMethodCollection";
import PaymentTerms from "./collections/PaymentTerms";
import ProductGwCollection from "./collections/ProductGwCollection";
import TaxTypeCollection from "./collections/TaxTypeCollection";

export {
  AccountCollection,
  AccountConfigCollection,
  AccountTypeCollection,
  BranchCollection,
  CompanyCollection,
  CurrencyRates,
  CustomerCollection,
  FirmCollection,
  PaymentMethodCollection,
  PaymentTerms,
  ProductGwCollection,
  TaxTypeCollection,
};

// MODELS
import Account from "./models/Account";
import AccountConfig from "./models/AccountConfig";
import AccountType from "./models/AccountType";
import Branch from "./models/Branch";
import Company from "./models/Company";
import CurrencyRate from "./models/CurrencyRate";
import Customer from "./models/Customer";
import Firm from "./models/Firm";
import PaymentMethod from "./models/PaymentMethod";
import PaymentTerm from "./models/PaymentTerm";
import ProductGw from "./models/ProductGw";
import Settings from "./models/Settings";
import TaxType from "./models/TaxType";

export {
  Account,
  AccountConfig,
  AccountType,
  Branch,
  Company,
  CurrencyRate,
  Customer,
  Firm,
  PaymentMethod,
  PaymentTerm,
  ProductGw,
  Settings,
  TaxType,
};
