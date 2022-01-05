import { Model } from "@planetadeleste/vue-mc";
import { toNumber } from "lodash";

export default class Bank extends Model {
  defaults(): Record<string, any> {
    return {
      id: null,
      active: true,
      name: null,
      code: null,
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
      fetch: "banks.show",
      create: "banks.store",
      update: "banks.update",
      delete: "banks.destroy",
    };
  }
}
