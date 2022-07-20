import { Model } from "@planetadeleste/vue-mc";
import { toNumber } from "lodash";

export default class InvoicePosition extends Model {
  defaults(): Record<string, any> {
    return {
      id: null,
      invoice_id: null,
      currency_id: null,
      tax_type_id: null,
      price: null,
      quantity: null,
      indicator: null,
      quote: null,
      item_id: null,
      item_type: null,
      tax_percent: null,
    };
  }

  mutations(): Record<string, any> {
    return {
      id: (id: string) => toNumber(id) || null,
      invoice_id: (id: string) => toNumber(id) || null,
      currency_id: (id: string) => toNumber(id) || null,
      tax_type_id: (id: string) => toNumber(id) || null,
    };
  }

  validation(): Record<string, any> {
    return {};
  }

  routes(): Record<string, any> {
    return {
      fetch: "invoicepositions.show",
      create: "invoicepositions.store",
      update: "invoicepositions.update",
      delete: "invoicepositions.destroy",
    };
  }
}
