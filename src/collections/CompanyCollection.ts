import { Collection } from "@planetadeleste/vue-mc";
import Company from "../models/Company";

export default class CompanyCollection extends Collection<Company> {
  model(): typeof Company {
    return Company;
  }

  routes(): Record<string, any> {
    return {
      fetch: "companies.index",
    };
  }

  byActive<T extends CompanyCollection>(this: T): T {
    return this.filterBy({ active: 1 });
  }

  bySearch<T extends CompanyCollection>(this: T, sValue: string): T {
    return this.filterBy({ search: sValue });
  }

  byCategory<T extends CompanyCollection>(this: T, sValue: string | number): T {
    return this.filterBy({ category: sValue });
  }

  byUser<T extends CompanyCollection>(this: T, sValue: string | number): T {
    return this.filterBy({ user: sValue });
  }
}
