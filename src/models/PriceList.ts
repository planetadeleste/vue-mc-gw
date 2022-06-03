import { Model } from "@planetadeleste/vue-mc";
import { OfferData } from "@planetadeleste/vue-mc-shopaholic";
import { toNumber } from "lodash";
import { Response } from "vue-mc";

export default class PriceList extends Model {
  defaults(): Record<string, any> {
    return {
      id: null,
      company_id: null,
      name: null,
      code: null,
      active: true,
      is_default: true,
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
      fetch: "pricelists.show",
      create: "pricelists.store",
      update: "pricelists.update",
      delete: "pricelists.destroy",
      fetchOffers: "pricelists.offers",
    };
  }

  options(): Record<string, any> {
    return {
      methods: {
        fetchOffers: "GET",
      },
    };
  }

  async getOffers(): Promise<Response<OfferData[]>> {
    return await this.createCustomRequest("fetchOffers", ["id"]);
  }
}
