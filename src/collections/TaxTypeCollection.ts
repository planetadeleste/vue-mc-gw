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
      reorder: "taxtypes.reorder",
    };
  }

  options(): Record<string, any> {
    return {
      methods: {
        reorder: "POST",
      },
    };
  }

  async list(): Promise<Response<TaxTypeData[]>> {
    return await this.createCustomRequest("list");
  }

  async reorder(arListId: number[]): Promise<Response<number[]>> {
    return await this.customRequest("reorder", { ids: arListId });
  }
}
