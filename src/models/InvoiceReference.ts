import { Model } from "@planetadeleste/vue-mc";
import { toNumber } from "lodash";

export default class InvoiceReference extends Model {
  defaults(): Record<string, any> {
    return {
      id: null,
      invoice_id: null,
      invoice_ref_id: null,
      reason: null,
      is_global: false,
      sort_order: null,
      created_at: null,
      updated_at: null,
    };
  }

  mutations(): Record<string, any> {
    return {
      id: (id: string) => toNumber(id) || null,
      invoice_id: (id: string) => toNumber(id) || null,
      invoice_ref_id: (id: string) => toNumber(id) || null,
    };
  }

  validation(): Record<string, any> {
    return {};
  }

  routes(): Record<string, any> {
    return {
      fetch: "gw.invoicereferences.show",
      create: "gw.invoicereferences.store",
      update: "gw.invoicereferences.update",
      delete: "gw.invoicereferences.destroy",
    };
  }
}
