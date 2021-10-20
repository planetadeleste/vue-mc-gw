import { PaymentTermData } from "@/types";
import { Model } from "@planetadeleste/vue-mc";
import { CurrencyData } from "@planetadeleste/vue-mc-shopaholic";
import { toNumber } from "lodash";
import { Response } from "vue-mc";

export default class Customer extends Model {
  defaults(): Record<string, any> {
    return {
      id: null,
      active: true,
      type: 1,
      preview_image: null,
      firm: {},
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
      fetch: "customers.show",
      create: "customers.store",
      update: "customers.update",
      delete: "customers.destroy",

      fetchPaymentterms: "customers.paymentterm.index",
      createPaymentterm: "customers.paymentterm.store",
      destroyPaymentterm: "customers.paymentterm.destroy",

      fetchCurrencies: "customers.currency.index",
      createCurrency: "customers.currency.store",
      destroyCurrency: "customers.currency.destroy",
    };
  }

  options(): Record<string, any> {
    return {
      methods: {
        fetchPaymentterms: "GET",
        createPaymentterm: "POST",
        destroyPaymentterm: "DELETE",

        fetchCurrencies: "GET",
        createCurrency: "POST",
        destroyCurrency: "DELETE",
      },
    };
  }

  async getPaymentTerms(): Promise<Response<PaymentTermData[]>> {
    return await this.customRequest("fetchPaymentterms", { id: this.id });
  }

  async addPaymentTerms(iPaymentTermId: number): Promise<Response<PaymentTermData[]>> {
    return await this.customRequest("createPaymentterm", { id: this.id, paymentterm_id: iPaymentTermId });
  }

  async delPaymentTerms(iPaymentTermId: number): Promise<Response<PaymentTermData[]>> {
    return await this.customRequest("destroyPaymentterm", { id: this.id, paymentterm_id: iPaymentTermId });
  }

  async getCurrencies(): Promise<Response<CurrencyData[]>> {
    return await this.customRequest("fetchCurrencies", { id: this.id });
  }

  async addCurrency(iCurrencyId: number): Promise<Response<CurrencyData[]>> {
    return await this.customRequest("createCurrency", { id: this.id, currency_id: iCurrencyId });
  }

  async delCurrency(iCurrencyId: number): Promise<Response<CurrencyData[]>> {
    return await this.customRequest("destroyCurrency", { id: this.id, currency_id: iCurrencyId });
  }
}
