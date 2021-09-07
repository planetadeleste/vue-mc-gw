import { Model } from "@planetadeleste/vue-mc";
import { toNumber } from "lodash";

export default class AccountConfig extends Model {
  defaults(): Record<string, any> {
    return {
      id: null,
      any_currency: false,
      company_id: null,
      account_id: null,
      accounttype_id: null,
      paymentmethod_id: null,
      currency_id: null,
    };
  }

  mutations(): Record<string, any> {
    return {
      id: (id: string) => toNumber(id) || null,
      company_id: (id: string) => toNumber(id) || null,
      account_id: (id: string) => toNumber(id) || null,
      accounttype_id: (id: string) => toNumber(id) || null,
      paymentmethod_id: (id: string) => toNumber(id) || null,
      currency_id: (id: string) => toNumber(id) || null,
    };
  }

  validation(): Record<string, any> {
    return {};
  }

  routes(): Record<string, any> {
    return {
      fetch: "accountconfigs.show",
      create: "accountconfigs.store",
      update: "accountconfigs.update",
      delete: "accountconfigs.destroy",
    };
  }
}
