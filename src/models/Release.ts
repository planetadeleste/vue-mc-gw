import { Model } from "@planetadeleste/vue-mc";
import { toNumber } from "lodash";

export default class Release extends Model {
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
      fetch: "releases.show",
      create: "releases.store",
      update: "releases.update",
      delete: "releases.destroy",
    };
  }
}
