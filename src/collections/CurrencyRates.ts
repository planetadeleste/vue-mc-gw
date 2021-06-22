import { Collection } from "@planetadeleste/vue-mc";
import CurrencyRate from "../models/CurrencyRate";

export default class CurrencyRates extends Collection<CurrencyRate> {
  model(): typeof CurrencyRate {
    return CurrencyRate;
  }

  routes(): Record<string, any> {
    return {
      fetch: "currencyrates.index",
    };
  }
}
