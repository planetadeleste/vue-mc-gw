/**
 * Models and Collections for VueMcGw plugin
 *
 * @author Alvaro Canepa <bfpdevel@gmail.com>
 */

// COLLECTIONS
import AccountCollection from "./collections/AccountCollection";
import AccountTypeCollection from "./collections/AccountTypeCollection";
import BranchCollection from "./collections/BranchCollection";
import CompanyCollection from "./collections/CompanyCollection";
import CurrencyRates from "./collections/CurrencyRates";
import CustomerCollection from "./collections/CustomerCollection";
import FirmCollection from "./collections/FirmCollection";
import PaymentMethodCollection from "./collections/PaymentMethodCollection";
import PaymentTerms from "./collections/PaymentTerms";

export {
  AccountCollection,
  AccountTypeCollection,
  BranchCollection,
  CompanyCollection,
  CurrencyRates,
  CustomerCollection,
  FirmCollection,
  PaymentMethodCollection,
  PaymentTerms,
};

// MODELS
import Account from "./models/Account";
import AccountType from "./models/AccountType";
import Branch from "./models/Branch";
import Company from "./models/Company";
import CurrencyRate from "./models/CurrencyRate";
import Customer from "./models/Customer";
import Firm from "./models/Firm";
import PaymentMethod from "./models/PaymentMethod";
import PaymentTerm from "./models/PaymentTerm";
import Settings from "./models/Settings";

export {
  Account,
  AccountType,
  Branch,
  Company,
  CurrencyRate,
  Customer,
  Firm,
  PaymentMethod,
  PaymentTerm,
  Settings,
};
