import { PaymentTermData } from "@/types";
import { Model } from "@planetadeleste/vue-mc";
import { CurrencyData } from "@planetadeleste/vue-mc-shopaholic";
import { set, toNumber } from "lodash";
import { Response } from "vue-mc";

export default class Customer extends Model {
  defaults(): Record<string, any> {
    return {
      id: null,
      active: true,
      tax_exempt: false,
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
    return await this.createCustomRequest("fetchPaymentterms", { id: this.id });
  }

  async addPaymentTerms(iPaymentTermId: number): Promise<Response<PaymentTermData[]>> {
    return await this.createCustomRequest("createPaymentterm", { id: this.id, paymentterm_id: iPaymentTermId });
  }

  async delPaymentTerms(iPaymentTermId: number): Promise<Response<PaymentTermData[]>> {
    return await this.createCustomRequest("destroyPaymentterm", { id: this.id, paymentterm_id: iPaymentTermId });
  }

  async getCurrencies(): Promise<Response<CurrencyData[]>> {
    return await this.createCustomRequest("fetchCurrencies", { id: this.id });
  }

  async addCurrency(iCurrencyId: number, fCreditLimit?: number): Promise<Response<CurrencyData[]>> {
    const obData: Record<string, any> = { id: this.id, currency_id: iCurrencyId };

    if (fCreditLimit) {
      set(obData, "credit_limit", fCreditLimit);
    }

    return await this.createCustomRequest("createCurrency", obData);
  }

  async delCurrency(iCurrencyId: number): Promise<Response<CurrencyData[]>> {
    return await this.createCustomRequest("destroyCurrency", { id: this.id, currency_id: iCurrencyId });
  }
}
