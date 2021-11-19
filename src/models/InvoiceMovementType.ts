import { Model } from "@planetadeleste/vue-mc";
import { toNumber } from "lodash";

export default class InvoiceMovementType extends Model {
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
      fetch: "invoicemovementtypes.show",
      create: "invoicemovementtypes.store",
      update: "invoicemovementtypes.update",
      delete: "invoicemovementtypes.destroy",
    };
  }
}
