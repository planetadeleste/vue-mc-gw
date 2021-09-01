import { Model } from "@planetadeleste/vue-mc";
import { toNumber } from "lodash";

export default class Account extends Model {
  defaults(): Record<string, any> {
    return {
      id: null,
      accounttype_id: null,
      currency_id: null,
      company_id: null,
      active: true,
      name: null,
      code: null,
    };
  }

  mutations(): Record<string, any> {
    return {
      id: (id: string) => toNumber(id) || null,
      accounttype_id: (id: string) => toNumber(id) || null,
      currency_id: (id: string) => toNumber(id) || null,
      company_id: (id: string) => toNumber(id) || null,
    };
  }

  validation(): Record<string, any> {
    return {};
  }

  routes(): Record<string, any> {
    return {
      fetch: "accounts.show",
      create: "accounts.store",
      update: "accounts.update",
      delete: "accounts.destroy",
    };
  }
}
