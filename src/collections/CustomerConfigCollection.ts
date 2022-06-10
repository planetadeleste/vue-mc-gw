import { Collection } from "@planetadeleste/vue-mc";
import CustomerConfig from "../models/CustomerConfig";

export default class CustomerConfigCollection extends Collection<CustomerConfig> {
  model(): typeof CustomerConfig {
    return CustomerConfig;
  }

  routes(): Record<string, any> {
    return {
      fetch: "customers.config.index",
    };
  }
}
