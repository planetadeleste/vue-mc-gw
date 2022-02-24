import { Collection } from "@planetadeleste/vue-mc";
import InvoiceReference from "../models/InvoiceReference";
import { Response } from "vue-mc";
import { InvoiceReferenceData } from "@/types";

export default class InvoiceReferenceCollection extends Collection<InvoiceReference> {
  model(): typeof InvoiceReference {
    return InvoiceReference;
  }

  routes(): Record<string, any> {
    return {
      fetch: "gw.invoicereferences.index",
      list: "gw.invoicereferences.list",
    };
  }

  async list(): Promise<Response<InvoiceReferenceData[]>> {
    return await this.createCustomRequest("list");
  }

  byInvoice<T extends InvoiceReferenceCollection>(
    this: T,
    invoiceId: number
  ): T {
    return this.filterBy({ invoice: invoiceId });
  }
}
