import { InvoicePositionData } from "@/types";
import { Collection } from "@planetadeleste/vue-mc";
import { Response } from "vue-mc";
import InvoicePosition from "../models/InvoicePosition";

export default class InvoicePositionCollection extends Collection<InvoicePosition> {
  model(): typeof InvoicePosition {
    return InvoicePosition;
  }

  routes(): Record<string, any> {
    return {
      fetch: "invoicepositions.index",
      list: "invoicepositions.list",
    };
  }

  async list(): Promise<Response<InvoicePositionData[]>> {
    return await this.createCustomRequest("list");
  }
}
