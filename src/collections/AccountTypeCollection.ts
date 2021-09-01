import { AccountTypeData } from "@/types";
import { Collection } from "@planetadeleste/vue-mc";
import { Response } from "vue-mc";
import AccountType from "../models/AccountType";

export default class AccountTypeCollection extends Collection<AccountType> {
  model(): typeof AccountType {
    return AccountType;
  }

  routes(): Record<string, any> {
    return {
      fetch: "accounttypes.index",
      list: "accounttypes.list",
    };
  }

  async list(): Promise<Response<AccountTypeData[]>> {
    return await this.createCustomRequest("list");
  }
}
