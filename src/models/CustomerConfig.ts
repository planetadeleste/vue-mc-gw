import { Model } from "@planetadeleste/vue-mc";
import { toNumber } from "lodash";

export default class CustomerConfig extends Model {
  defaults(): Record<string, any> {
    return {
      id: null,
      customer_id: null,
      mail: null,
      contact_name: null,
      phone_com: null,
      phone_admin: null,
      phone_account: null,
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
      fetch: "customers.config.show",
      create: "customers.config.store",
      update: "customers.config.update",
      delete: "customers.config.destroy",
    };
  }
}
