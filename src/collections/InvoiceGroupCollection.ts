import { InvoiceGroupData } from "@/types";
import { Collection } from "@planetadeleste/vue-mc";
import { Response } from "vue-mc";
import InvoiceGroup from "../models/InvoiceGroup";

export default class InvoiceGroupCollection extends Collection<InvoiceGroup> {
  model(): typeof InvoiceGroup {
    return InvoiceGroup;
  }

  routes(): Record<string, any> {
    return {
      fetch: "invoicegroups.index",
      list: "invoicegroups.list",
    };
  }

  async list(): Promise<Response<InvoiceGroupData[]>> {
    return await this.createCustomRequest("list");
  }
}
