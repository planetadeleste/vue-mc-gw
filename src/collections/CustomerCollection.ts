import { CustomerData } from "@/types";
import { Collection } from "@planetadeleste/vue-mc";
import { Response } from "vue-mc";
import Customer from "../models/Customer";

export default class CustomerCollection extends Collection<Customer> {
  model(): typeof Customer {
    return Customer;
  }

  routes(): Record<string, any> {
    return {
      fetch: "customers.index",
      list: "customers.list",
    };
  }

  byCompany<T extends CustomerCollection>(this: T, iCompanyID: number): T {
    return this.filterBy({ company: iCompanyID });
  }

  byActive<T extends CustomerCollection>(this: T): T {
    return this.filterBy({ active: 1 });
  }

  bySearch<T extends CustomerCollection>(this: T, sValue: string): T {
    return this.filterBy({ search: sValue });
  }

  async list(): Promise<Response<CustomerData[]>> {
    return await this.createCustomRequest("list");
  }
}
