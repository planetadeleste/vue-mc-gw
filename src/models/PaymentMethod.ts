import { Model } from "@planetadeleste/vue-mc";
import { toNumber } from "lodash";

export default class PaymentMethod extends Model {
  defaults(): Record<string, any> {
    return {
      id: null,
      active: true,
      name: null,
      code: null,
      in_account: false,
      in_invoice: false,
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
      fetch: "paymentmethods.show",
      create: "paymentmethods.store",
      update: "paymentmethods.update",
      delete: "paymentmethods.destroy",
    };
  }
}
