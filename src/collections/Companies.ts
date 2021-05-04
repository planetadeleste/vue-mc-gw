import { Collection } from "@planetadeleste/vue-mc-shopaholic";
import Company from "../models/Company";

export default class Companies extends Collection<Company> {
  model(): typeof Company {
    return Company;
  }

  routes(): Record<string, any> {
    return {
      fetch: "companies.index",
    };
  }
}
