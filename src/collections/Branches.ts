import { Collection } from "@planetadeleste/vue-mc";
import Branch from "../models/Branch";

export default class Branches extends Collection<Branch> {
  model(): typeof Branch {
    return Branch;
  }

  routes(): Record<string, any> {
    return {
      fetch: "branches.index",
    };
  }

  byCompany<T extends Branches>(this: T, iCompanyID: number): T {
    return this.filterBy({ company: iCompanyID });
  }

  byActive<T extends Branches>(this: T): T {
    return this.filterBy({ active: 1 });
  }

  byDefault<T extends Branches>(this: T): T {
    return this.filterBy({ default: 1 });
  }
}
