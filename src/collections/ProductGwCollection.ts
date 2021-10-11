import { Collection } from "@planetadeleste/vue-mc";
import ProductGw from "../models/ProductGw";

export default class ProductGwCollection extends Collection<ProductGw> {
  model(): typeof ProductGw {
    return ProductGw;
  }

  routes(): Record<string, any> {
    return {
      fetch: "products.index",
    };
  }
}
