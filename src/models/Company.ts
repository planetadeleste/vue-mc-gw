import { Model } from "@planetadeleste/vue-mc";
import { toNumber } from "lodash";

export default class Company extends Model {
  defaults(): Record<string, any> {
    return {
      id: null,
      name: null,
      active: true,
      slug: null,
      code: null,
      description: null,
      preview_image: null,
      doc_id: null,
      doc_type: null,
      address: null,
      country_id: null,
      state_id: null,
      town_id: null,
    };
  }

  mutations(): Record<string, any> {
    return {
      id: (id: string) => toNumber(id) || null,
      country_id: (id: string) => toNumber(id) || null,
      state_id: (id: string) => toNumber(id) || null,
      town_id: (id: string) => toNumber(id) || null,
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
