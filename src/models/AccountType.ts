import { Model } from "@planetadeleste/vue-mc";
import { toNumber } from "lodash";

export default class AccountType extends Model {
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
      fetch: "accounttypes.show",
      create: "accounttypes.store",
      update: "accounttypes.update",
      delete: "accounttypes.destroy",
    };
  }
}
