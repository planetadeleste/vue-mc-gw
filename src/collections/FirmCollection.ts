import { Collection } from "@planetadeleste/vue-mc";
import Firm from "../models/Firm";

export default class FirmCollection extends Collection<Firm> {
  model(): typeof Firm {
    return Firm;
  }

  routes(): Record<string, any> {
    return {
      fetch: "firms.index",
    };
  }
}
