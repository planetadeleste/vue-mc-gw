import { Model } from "@planetadeleste/vue-mc";
import { toNumber } from "lodash";
export default class Company extends Model {
    defaults() {
        return {
            id: null,
        };
    }
    mutations() {
        return {
            id: (id) => toNumber(id) || null,
        };
    }
    validation() {
        return {};
    }
    routes() {
        return {
            fetch: "companies.show",
            create: "companies.store",
            update: "companies.update",
            delete: "companies.destroy",
        };
    }
}
//# sourceMappingURL=Company.js.map