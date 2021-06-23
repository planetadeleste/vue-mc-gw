import { Collection } from "@planetadeleste/vue-mc";
import PaymentTerm from "../models/PaymentTerm";

export default class PaymentTerms extends Collection<PaymentTerm> {
  model(): typeof PaymentTerm {
    return PaymentTerm;
  }

  routes(): Record<string, any> {
    return {
      fetch: "paymentterms.index",
    };
  }
}
