import { Model } from "@planetadeleste/vue-mc";
import { toNumber } from "lodash";

export default class ProductGw extends Model {
  defaults(): Record<string, any> {
    return {
      id: null,
      product_id: null,
      taxtype_id: null,
      is_service: null,
      is_sell: null,
      with_tax_expenses: null,
      barcode: null,
      account_sales: null,
      account_purchase: null,
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
      fetch: "products.show",
      create: "products.store",
      update: "products.update",
      delete: "products.destroy",
    };
  }
}
