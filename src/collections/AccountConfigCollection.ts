import { AccountConfigData } from "@/types";
import { Collection } from "@planetadeleste/vue-mc";
import { Response } from "vue-mc";
import AccountConfig from "../models/AccountConfig";

export default class AccountConfigCollection extends Collection<AccountConfig> {
  model(): typeof AccountConfig {
    return AccountConfig;
  }

  routes(): Record<string, any> {
    return {
      fetch: "accountconfigs.index",
      list: "accountconfigs.list",
    };
  }

  async list(): Promise<Response<AccountConfigData[]>> {
    return await this.createCustomRequest("list");
  }
}
