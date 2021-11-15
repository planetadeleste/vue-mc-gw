import { Model } from "@planetadeleste/vue-mc";
import { toNumber } from "lodash";

export default class Invoice extends Model {
  defaults(): Record<string, any> {
    return {
      id: null,
      company_id: null,
      customer_id: null,
      invoice_type_id: null,
      payment_term_id: null,
      payment_method_id: null,
      currency_id: null,
      order_serial: null,
      order_number: null,
      transaction_id: null,
      description: null,
      payment_response: null,
      customer_data: null,
      created_at: null,
      updated_at: null,
    };
  }

  mutations(): Record<string, any> {
    return {
      id: (id: string) => toNumber(id) || null,
    };
  }

  validation(): Record<string, any> {
    return {};
  }

  routes(): Record<string, any> {
    return {
      fetch: "invoices.show",
      create: "invoices.store",
      update: "invoices.update",
      delete: "invoices.destroy",
    };
  }
}
