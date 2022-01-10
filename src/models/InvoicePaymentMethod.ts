import { Model } from "@planetadeleste/vue-mc";
import { toNumber } from "lodash";

export default class InvoicePaymentMethod extends Model {
  defaults(): Record<string, any> {
    return {
      id: null,
      invoice_id: null,
      payment_method_id: null,
      amount: null,
      sort_order: null,
    };
  }

  mutations(): Record<string, any> {
    return {
      id: (id: string) => toNumber(id) || null,
      invoice_id: (id: string) => toNumber(id) || null,
      payment_method_id: (id: string) => toNumber(id) || null,
    };
  }

  validation(): Record<string, any> {
    return {};
  }

  routes(): Record<string, any> {
    return {
      fetch: "invoice_payment_methods.show",
      create: "invoice_payment_methods.store",
      update: "invoice_payment_methods.update",
      delete: "invoice_payment_methods.destroy",
    };
  }
}
