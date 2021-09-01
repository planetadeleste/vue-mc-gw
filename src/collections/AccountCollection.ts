import { Collection } from "@planetadeleste/vue-mc";
import Account from "../models/Account";

export default class AccountCollection extends Collection<Account> {
  model(): typeof Account {
    return Account;
  }

  routes(): Record<string, any> {
    return {
      fetch: "accounts.index",
    };
  }
}
