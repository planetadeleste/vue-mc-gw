import { Model } from "@planetadeleste/vue-mc";
import { toNumber } from "lodash";

export default class Firm extends Model {
  defaults(): Record<string, any> {
    return {
      id: null,
      name: null,
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
      fetch: "firms.show",
      create: "firms.store",
      update: "firms.update",
      delete: "firms.destroy",
    };
  }
}
