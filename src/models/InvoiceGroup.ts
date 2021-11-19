import { Model } from "@planetadeleste/vue-mc";
import { toNumber } from "lodash";

export default class InvoiceGroup extends Model {
  defaults(): Record<string, any> {
    return {
      id: null,
      name: null,
      code: null,
      created_at: null,
      updated_at: null,
    };
  }

  mutations(): Record<string, any> {
    return {
      id: (id: string) => toNumber(id) || null,
    };
  }

  validation(): Record<string, any> {
    return {};
  }

  routes(): Record<string, any> {
    return {
      fetch: "invoicegroups.show",
      create: "invoicegroups.store",
      update: "invoicegroups.update",
      delete: "invoicegroups.destroy",
    };
  }
}
