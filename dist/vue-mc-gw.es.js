
  /**
   * @license
   * author: Alvaro Canepa
   * vue-mc-gw.js v1.0.6
   * Released under the MIT license.
   */

import { Model, Collection } from '@planetadeleste/vue-mc';
import { toNumber } from 'lodash';

class Branch extends Model {
    defaults() {
        return {
            id: null,
            company_id: null,
            country_id: null,
            state_id: null,
            town_id: null,
            active: null,
            is_default: null,
            name: null,
            code: null,
            address: null,
            phone: null,
            email: null,
            ucfe_code: null,
            ucfe_terminal: null,
            ucfe_password: null,
        };
    }
    mutations() {
        return {
            id: (id) => toNumber(id) || null,
            company_id: (id) => toNumber(id) || null,
            country_id: (id) => toNumber(id) || null,
            state_id: (id) => toNumber(id) || null,
            town_id: (id) => toNumber(id) || null,
        };
    }
    validation() {
        return {};
    }
    routes() {
        return {
            fetch: "branches.show",
            create: "branches.store",
            update: "branches.update",
            delete: "branches.destroy",
        };
    }
}

class Branches extends Collection {
    model() {
        return Branch;
    }
    routes() {
        return {
            fetch: "branches.index",
        };
    }
    byCompany(iCompanyID) {
        return this.filterBy({ company: iCompanyID });
    }
    byActive() {
        return this.filterBy({ active: 1 });
    }
    byDefault() {
        return this.filterBy({ default: 1 });
    }
}

class Company extends Model {
    defaults() {
        return {
            id: null,
            name: null,
            active: true,
            slug: null,
            code: null,
            description: null,
            preview_image: null,
            doc_id: null,
            doc_type: null,
            address: null,
            country_id: null,
            state_id: null,
            town_id: null,
        };
    }
    mutations() {
        return {
            id: (id) => toNumber(id) || null,
            country_id: (id) => toNumber(id) || null,
            state_id: (id) => toNumber(id) || null,
            town_id: (id) => toNumber(id) || null,
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

class Companies extends Collection {
    model() {
        return Company;
    }
    routes() {
        return {
            fetch: "companies.index",
        };
    }
}

class Settings extends Model {
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

export { Branch, Branches, Companies, Company, Settings };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidnVlLW1jLWd3LmVzLmpzIiwic291cmNlcyI6WyIuLi9zcmMvbW9kZWxzL0JyYW5jaC50cyIsIi4uL3NyYy9jb2xsZWN0aW9ucy9CcmFuY2hlcy50cyIsIi4uL3NyYy9tb2RlbHMvQ29tcGFueS50cyIsIi4uL3NyYy9jb2xsZWN0aW9ucy9Db21wYW5pZXMudHMiLCIuLi9zcmMvbW9kZWxzL1NldHRpbmdzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7TUFHcUIsTUFBTyxTQUFRLEtBQUs7SUFDdkMsUUFBUTtRQUNOLE9BQU87WUFDTCxFQUFFLEVBQUUsSUFBSTtZQUNSLFVBQVUsRUFBRSxJQUFJO1lBQ2hCLFVBQVUsRUFBRSxJQUFJO1lBQ2hCLFFBQVEsRUFBRSxJQUFJO1lBQ2QsT0FBTyxFQUFFLElBQUk7WUFDYixNQUFNLEVBQUUsSUFBSTtZQUNaLFVBQVUsRUFBRSxJQUFJO1lBQ2hCLElBQUksRUFBRSxJQUFJO1lBQ1YsSUFBSSxFQUFFLElBQUk7WUFDVixPQUFPLEVBQUUsSUFBSTtZQUNiLEtBQUssRUFBRSxJQUFJO1lBQ1gsS0FBSyxFQUFFLElBQUk7WUFDWCxTQUFTLEVBQUUsSUFBSTtZQUNmLGFBQWEsRUFBRSxJQUFJO1lBQ25CLGFBQWEsRUFBRSxJQUFJO1NBQ3BCLENBQUM7S0FDSDtJQUVELFNBQVM7UUFDUCxPQUFPO1lBQ0wsRUFBRSxFQUFFLENBQUMsRUFBVSxLQUFLLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxJQUFJO1lBQ3hDLFVBQVUsRUFBRSxDQUFDLEVBQVUsS0FBSyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksSUFBSTtZQUNoRCxVQUFVLEVBQUUsQ0FBQyxFQUFVLEtBQUssUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLElBQUk7WUFDaEQsUUFBUSxFQUFFLENBQUMsRUFBVSxLQUFLLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxJQUFJ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
