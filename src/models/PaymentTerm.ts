import { Model } from "@planetadeleste/vue-mc";
import { toNumber } from "lodash";

export default class PaymentTerm extends Model {
  defaults(): Record<string, any> {
    return {
      id: null,
      active: false,
      cash: false,
      name: null,
      code: null,
      type: "fixed",
      frequency: "month",
      frequency_interval: 0,
      cycles: 0,
      delay: 0,
      description: null,
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
      fetch: "paymentterms.show",
      create: "paymentterms.store",
      update: "paymentterms.update",
      delete: "paymentterms.destroy",
    };
  }
}
