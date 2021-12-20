import { Model } from "@planetadeleste/vue-mc";
import { toNumber } from "lodash";

export default class CurrencyRate extends Model {
  defaults(): Record<string, any> {
    return {
      id: null,
      currency_id: null,
      company_id: null,
      name: null,
      rate: null,
      rated_at: null,
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
      fetch: "currencyrates.show",
      create: "currencyrates.store",
      update: "currencyrates.update",
      delete: "currencyrates.destroy",
    };
  }
}
