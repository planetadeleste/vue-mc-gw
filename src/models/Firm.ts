import { Model } from "@planetadeleste/vue-mc";
import { toNumber } from "lodash";

export default class Firm extends Model {
  defaults(): Record<string, any> {
    return {
      id: null,
      name: null,
      slug: null,
      code: null,
      description: null,
      doc_id: null,
      doc_type: null,

      address: null,
      email: null,
      phone: null,
      mobile: null,

      // Location data
      country_id: null,
      state_id: null,
      town_id: null,

      // DGI Data
      dgi_local_sec_nro: null,
      dgi_dir_fiscal: null,
      dgi_loc_nom: null,
      dgi_dpto_nom: null,
      dgi_denominacion: null,
      dgi_nombre_fantasia: null,
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
