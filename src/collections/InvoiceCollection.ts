import { InvoiceData } from "@/types";
import { Collection } from "@planetadeleste/vue-mc";
import { Response } from "vue-mc";
import Invoice from "../models/Invoice";

export default class InvoiceCollection extends Collection<Invoice> {
  model(): typeof Invoice {
    return Invoice;
  }

  routes(): Record<string, any> {
    return {
      fetch: "invoices.index",
      list: "invoices.list",
    };
  }

  async list(): Promise<Response<InvoiceData[]>> {
    return await this.createCustomRequest("list");
  }
}
