import { Model } from "@planetadeleste/vue-mc";

export default class Settings extends Model {
  defaults(): Record<string, any> {
    return {
      preview_image: null,
    };
  }

  mutations(): Record<string, any> {
    return {};
  }

  validation(): Record<string, any> {
    return {};
  }

  routes(): Record<string, any> {
    return {
      fetch: "settings.show",
      create: "settings.store",
    };
  }
}
