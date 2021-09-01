import { Collection } from "@planetadeleste/vue-mc";
import AccountType from "../models/AccountType";

export default class AccountTypeCollection extends Collection<AccountType> {
  model(): typeof AccountType {
    return AccountType;
  }

  routes(): Record<string, any> {
    return {
      fetch: "accounttypes.index",
    };
  }
}
