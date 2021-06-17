import { Model } from "@planetadeleste/vue-mc";
import { toNumber } from "lodash";
import { required } from "vue-mc/validation";

export default class Branch extends Model {
  defaults(): Record<string, any> {
    return {
      id: null,
      company_id: null,
      country_id: null,
      state_id: null,
      town_id: null,
      active: null,
      is_default: null,
      name: null,
      code: null,
      address: null,
      phone: null,
      email: null,
      ucfe_code: null,
      ucfe_terminal: null,
      ucfe_password: null,
    };
  }

  mutations(): Record<string, any> {
    return {
      id: (id: string) => toNumber(id) || null,
      company_id: (id: string) => toNumber(id) || null,
      country_id: (id: string) => toNumber(id) || null,
      state_id: (id: string) => toNumber(id) || null,
      town_id: (id: string) => toNumber(id) || null,
    };
  }

  validation(): Record<string, any> {
    return {
      company: required
    };
  }

  routes(): Record<string, any> {
    return {
      fetch: "branches.show",
      create: "branches.store",
      update: "branches.update",
      delete: "branches.destroy",
    };
  }
}
