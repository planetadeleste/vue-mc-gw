import { Model } from "@planetadeleste/vue-mc";
import { toNumber } from "lodash";
import { required } from "vue-mc/validation";

export default class Discount extends Model {
  defaults(): Record<string, any> {
    return {
      id: null,
      name: null,
      value: null,
      description: null,
    };
  }

  mutations(): Record<string, any> {
    return {
      id: (id: string) => toNumber(id) || null,
    };
  }

  validation(): Record<string, any> {
    return {
      value: required,
    };
  }

  routes(): Record<string, any> {
    return {
      fetch: "discounts.show",
      create: "discounts.store",
      update: "discounts.update",
      delete: "discounts.destroy",
    };
  }
}
