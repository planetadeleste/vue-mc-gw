import { InvoicePaymentMethodData } from "@/types";
import { Collection } from "@planetadeleste/vue-mc";
import { Response } from "vue-mc";
import InvoicePaymentMethod from "../models/InvoicePaymentMethod";

export default class InvoicePaymentMethodCollection extends Collection<InvoicePaymentMethod> {
  model(): typeof InvoicePaymentMethod {
    return InvoicePaymentMethod;
  }

  routes(): Record<string, any> {
    return {
      fetch: "invoice_payment_methods.index",
      list: "invoice_payment_methods.list",
    };
  }

  async list(): Promise<Response<InvoicePaymentMethodData[]>> {
    return await this.createCustomRequest("list");
  }

  byInvoice<T extends InvoicePaymentMethodCollection>(
    this: T,
    iInvoiceId: number
  ): T {
    return this.filterBy({ invoice_id: iInvoiceId });
  }
}
