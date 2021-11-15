import { InvoiceTypeData } from "@/types";
import { Collection } from "@planetadeleste/vue-mc";
import { Response } from "vue-mc";
import InvoiceType from "../models/InvoiceType";

export default class InvoiceTypeCollection extends Collection<InvoiceType> {
  model(): typeof InvoiceType {
    return InvoiceType;
  }

  routes(): Record<string, any> {
    return {
      fetch: "invoicetypes.index",
      list: "invoicetypes.list",
    };
  }

  async list(): Promise<Response<InvoiceTypeData[]>> {
    return await this.createCustomRequest("list");
  }
}
