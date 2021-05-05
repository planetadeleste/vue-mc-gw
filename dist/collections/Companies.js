import { Collection } from "@planetadeleste/vue-mc";
import Company from "../models/Company";
export default class Companies extends Collection {
    model() {
        return Company;
    }
    routes() {
        return {
            fetch: "companies.index",
        };
    }
}
//# sourceMappingURL=Companies.js.map