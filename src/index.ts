/**
 * Models and Collections for PlanetaDelEsteGw plugin
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
import Settings from "./models/Settings";

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
  Settings,
};
