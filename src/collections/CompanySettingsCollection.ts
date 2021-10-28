import { Collection } from "@planetadeleste/vue-mc";
import CompanySettings from "../models/CompanySettings";

export default class CompanySettingsCollection extends Collection<CompanySettings> {
  model(): typeof CompanySettings {
    return CompanySettings;
  }

  routes(): Record<string, any> {
    return {
      fetch: "company.settings.index",
    };
  }
}
