import { DiscountData } from "@/types";
import { Collection } from "@planetadeleste/vue-mc";
import { Response } from "vue-mc";
import Discount from "../models/Discount";

export default class DiscountCollection extends Collection<Discount> {
  model(): typeof Discount {
    return Discount;
  }

  routes(): Record<string, any> {
    return {
      fetch: "discounts.index",
      list: "discounts.list",
    };
  }

  async list(): Promise<Response<DiscountData[]>> {
    return await this.createCustomRequest("list");
  }
}
