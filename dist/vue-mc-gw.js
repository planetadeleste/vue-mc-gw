
  /**
   * @license
   * author: Alvaro Canepa
   * vue-mc-gw.js v1.0.6
   * Released under the MIT license.
   */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vueMc = require('@planetadeleste/vue-mc');
var lodash = require('lodash');

class Branch extends vueMc.Model {
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
            id: (id) => lodash.toNumber(id) || null,
            company_id: (id) => lodash.toNumber(id) || null,
            country_id: (id) => lodash.toNumber(id) || null,
            state_id: (id) => lodash.toNumber(id) || null,
            town_id: (id) => lodash.toNumber(id) || null,
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

class Branches extends vueMc.Collection {
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

class Company extends vueMc.Model {
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
            id: (id) => lodash.toNumber(id) || null,
            country_id: (id) => lodash.toNumber(id) || null,
            state_id: (id) => lodash.toNumber(id) || null,
            town_id: (id) => lodash.toNumber(id) || null,
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

class Companies extends vueMc.Collection {
    model() {
        return Company;
    }
    routes() {
        return {
            fetch: "companies.index",
        };
    }
}

class Settings extends vueMc.Model {
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

exports.Branch = Branch;
exports.Branches = Branches;
exports.Companies = Companies;
exports.Company = Company;
exports.Settings = Settings;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidnVlLW1jLWd3LmpzIiwic291cmNlcyI6WyIuLi9zcmMvbW9kZWxzL0JyYW5jaC50cyIsIi4uL3NyYy9jb2xsZWN0aW9ucy9CcmFuY2hlcy50cyIsIi4uL3NyYy9tb2RlbHMvQ29tcGFueS50cyIsIi4uL3NyYy9jb2xsZWN0aW9ucy9Db21wYW5pZXMudHMiLCIuLi9zcmMvbW9kZWxzL1NldHRpbmdzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibmFtZXMiOlsiTW9kZWwiLCJ0b051bWJlciIsIkNvbGxlY3Rpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztNQUdxQixNQUFPLFNBQVFBLFdBQUs7SUFDdkMsUUFBUTtRQUNOLE9BQU87WUFDTCxFQUFFLEVBQUUsSUFBSTtZQUNSLFVBQVUsRUFBRSxJQUFJO1lBQ2hCLFVBQVUsRUFBRSxJQUFJO1lBQ2hCLFFBQVEsRUFBRSxJQUFJO1lBQ2QsT0FBTyxFQUFFLElBQUk7WUFDYixNQUFNLEVBQUUsSUFBSTtZQUNaLFVBQVUsRUFBRSxJQUFJO1lBQ2hCLElBQUksRUFBRSxJQUFJO1lBQ1YsSUFBSSxFQUFFLElBQUk7WUFDVixPQUFPLEVBQUUsSUFBSTtZQUNiLEtBQUssRUFBRSxJQUFJO1lBQ1gsS0FBSyxFQUFFLElBQUk7WUFDWCxTQUFTLEVBQUUsSUFBSTtZQUNmLGFBQWEsRUFBRSxJQUFJO1lBQ25CLGFBQWEsRUFBRSxJQUFJO1NBQ3BCLENBQUM7S0FDSDtJQUVELFNBQVM7UUFDUCxPQUFPO1lBQ0wsRUFBRSxFQUFFLENBQUMsRUFBVSxLQUFLQyxlQUFRLENBQUMsRUFBRSxDQUFDLElBQUksSUFBSTtZQUN4QyxVQUFVLEVBQUUsQ0FBQyxFQUFVLEtBQUtBLGVBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxJQUFJO1lBQ2hELFVBQVUsRUFBRSxDQUFDLEVBQVUsS0FBS0EsZUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLElBQUk7WUFDaEQsUUFBUSxFQUFFLENBQUMsRUFB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
