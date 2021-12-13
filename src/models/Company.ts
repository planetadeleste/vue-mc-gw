import { Model } from "@planetadeleste/vue-mc";
import { toNumber } from "lodash";

export default class Company extends Model {
  defaults(): Record<string, any> {
    return {
      id: null,
      active: true,
      preview_image: null,
      ucfe_code: null,
      ucfe_terminal: null,
      ucfe_url: null,
      ucfe_password: null,
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
      fetch: "companies.show",
      create: "companies.store",
      update: "companies.update",
      delete: "companies.destroy",
    };
  }
}
