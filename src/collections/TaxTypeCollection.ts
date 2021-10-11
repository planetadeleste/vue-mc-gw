import { TaxTypeData } from "@/types";
import { Collection } from "@planetadeleste/vue-mc";
import { Response } from "vue-mc";
import TaxType from "../models/TaxType";

export default class TaxTypeCollection extends Collection<TaxType> {
  model(): typeof TaxType {
    return TaxType;
  }

  routes(): Record<string, any> {
    return {
      fetch: "taxtypes.index",
      list: "taxtypes.list",
    };
  }

  async list(): Promise<Response<TaxTypeData[]>> {
    return await this.createCustomRequest("list");
  }
}
