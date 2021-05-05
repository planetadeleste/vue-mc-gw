import { Model } from "@planetadeleste/vue-mc";
export default class Settings extends Model {
    defaults() {
        return {
            preview_image: null,
        };
    }
    mutations() {
        return {};
    }
    validation() {
        return {};
    }
    routes() {
        return {
            fetch: "settings.show",
            create: "settings.store",
        };
    }
}
//# sourceMappingURL=Settings.js.map