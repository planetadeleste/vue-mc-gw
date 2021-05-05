import "@planetadeleste/vue-mc";
import { CompanyData, SettingsData } from "./types";

declare module "@planetadeleste/vue-mc-gw" {
  import { Model, Collection } from "@planetadeleste/vue-mc";
  export { CompanyData, SettingsData };

  interface Company extends Model, CompanyData {}
  class Company extends Model {}

  interface Settings extends Model, SettingsData {}
  class Settings extends Model {}

  export { Company, Settings };
  export class Companies extends Collection<Company> {}
}
