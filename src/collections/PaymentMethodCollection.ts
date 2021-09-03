import { PaymentMethodData } from "@/types";
import { Collection } from "@planetadeleste/vue-mc";
import { Response } from "vue-mc";
import PaymentMethod from "../models/PaymentMethod";

export default class PaymentMethodCollection extends Collection<PaymentMethod> {
  model(): typeof PaymentMethod {
    return PaymentMethod;
  }

  routes(): Record<string, any> {
    return {
      fetch: "paymentmethods.index",
      list: "paymentmethods.list",
    };
  }

  async list(): Promise<Response<PaymentMethodData[]>> {
    return await this.createCustomRequest("list");
  }
}
