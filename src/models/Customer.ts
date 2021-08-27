import { Model } from "@planetadeleste/vue-mc";
import { toNumber } from "lodash";

export default class Customer extends Model {
  defaults(): Record<string, any> {
    return {
      id: null,
      active: true,
      type: 1,
      preview_image: null,
      firm: {},
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
      fetch: "customers.show",
      create: "customers.store",
      update: "customers.update",
      delete: "customers.destroy",
    };
  }
}
