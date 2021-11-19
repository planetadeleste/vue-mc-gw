import { InvoiceMovementTypeData } from "@/types";
import { Collection } from "@planetadeleste/vue-mc";
import { Response } from "vue-mc";
import InvoiceMovementType from "../models/InvoiceMovementType";

export default class InvoiceMovementTypeCollection extends Collection<InvoiceMovementType> {
  model(): typeof InvoiceMovementType {
    return InvoiceMovementType;
  }

  routes(): Record<string, any> {
    return {
      fetch: "invoicemovementtypes.index",
      list: "invoicemovementtypes.list",
    };
  }

  async list(): Promise<Response<InvoiceMovementTypeData[]>> {
    return await this.createCustomRequest("list");
  }
}
