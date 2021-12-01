import { PriceListData } from "@/types";
import { Collection } from "@planetadeleste/vue-mc";
import { Response } from "vue-mc";
import PriceList from "../models/PriceList";

export default class PriceListCollection extends Collection<PriceList> {
  model(): typeof PriceList {
    return PriceList;
  }

  routes(): Record<string, any> {
    return {
      fetch: "pricelists.index",
      list: "pricelists.list",
    };
  }

  async list(): Promise<Response<PriceListData[]>> {
    return await this.createCustomRequest("list");
  }
}
