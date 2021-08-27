/**
 * Models and Collections for PlanetaDelEsteGw plugin
 *
 * @author Alvaro Canepa <bfpdevel@gmail.com>
 */

// COLLECTIONS
import BranchCollection from "./collections/BranchCollection";
import CompanyCollection from "./collections/CompanyCollection";
import CurrencyRates from "./collections/CurrencyRates";
import CustomerCollection from "./collections/CustomerCollection";
import FirmCollection from "./collections/FirmCollection";
import PaymentTerms from "./collections/PaymentTerms";

export {
  BranchCollection,
  CompanyCollection,
  CurrencyRates,
  CustomerCollection,
  FirmCollection,
  PaymentTerms,
};

// MODELS
import Branch from "./models/Branch";
import Company from "./models/Company";
import CurrencyRate from "./models/CurrencyRate";
import Customer from "./models/Customer";
import Firm from "./models/Firm";
import PaymentTerm from "./models/PaymentTerm";
import Settings from "./models/Settings";

export { Branch, Company, CurrencyRate, Customer, Firm, PaymentTerm, Settings };
