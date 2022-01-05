import { BankData } from "@/types";
import { Collection } from "@planetadeleste/vue-mc";
import { Response } from "vue-mc";
import Bank from "../models/Bank";

export default class BankCollection extends Collection<Bank> {
  model(): typeof Bank {
    return Bank;
  }

  routes(): Record<string, any> {
    return {
      fetch: "banks.index",
      list: "banks.list",
    };
  }

  async list(): Promise<Response<BankData[]>> {
    return await this.createCustomRequest("list");
  }
}
