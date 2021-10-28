import { Model } from "@planetadeleste/vue-mc";
import { toNumber } from "lodash";
import { required } from "vue-mc/validation";

export default class CompanySettings extends Model {
  defaults(): Record<string, any> {
    return {
      id: null,
      company_id: null,
      max_global_discounts: null,
      discounts_per_line: null,
      print_after_billing: null,
      print_payment_conditions: null,
      addenda_in_own_page: null,
      addenda_only_for_credits: null,
      prices_without_tax: null,
      addenda: null,
    };
  }

  mutations(): Record<string, any> {
    return {
      id: (id: string) => toNumber(id) || null,
      company_id: (id: string) => toNumber(id) || null,
    };
  }

  validation(): Record<string, any> {
    return {
      company_id: required,
    };
  }

  routes(): Record<string, any> {
    return {
      fetch: "company.settings.show",
      create: "company.settings.store",
      update: "company.settings.update",
      delete: "company.settings.destroy",
    };
  }
}
