import {
  CompanyBalanceData,
  CompanyPaymentMethodRequest,
} from "@/types/Company";
import { Model } from "@planetadeleste/vue-mc";
import { toNumber } from "lodash";
import { Response } from "vue-mc";

export default class Company extends Model {
  defaults(): Record<string, any> {
    return {
      id: null,
      active: true,
      preview_image: null,
      ucfe_code: null,
      ucfe_terminal: null,
      ucfe_url: null,
      ucfe_password: null,
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
      fetch: "companies.show",
      create: "companies.store",
      update: "companies.update",
      delete: "companies.destroy",

      fetchPaymentMethods: "companies.payment_methods.list",
      storePaymentMethods: "companies.payment_methods.store",
      destroyPaymentMethods: "companies.payment_methods.destroy",
      fetchBalance: "companies.balance",
    };
  }

  options(): Record<string, any> {
    return {
      methods: {
        fetchBalance: "GET",
        fetchPaymentMethods: "GET",
        storePaymentMethods: "POST",
        destroyPaymentMethods: "DELETE",
      },
    };
  }

  async getBalance(): Promise<Response<CompanyBalanceData>> {
    return await this.createCustomRequest("fetchBalance", ["id"]);
  }

  async getPaymentMethods(): Promise<Response<PaymentMethodData[]>> {
    return await this.createCustomRequest("fetchPaymentMethods", ["id"]);
  }

  async addUpdatePaymentMethods(
    obConfigData: CompanyPaymentMethodRequest
  ): Promise<Response<PaymentMethodData[]>> {
    return await this.createCustomRequest("storePaymentMethods", obConfigData);
  }

  async delPaymentMethods(
    obConfigData: CompanyPaymentMethodRequest
  ): Promise<Response<PaymentMethodData[]>> {
    return await this.createCustomRequest(
      "destroyPaymentMethods",
      obConfigData
    );
  }
}
