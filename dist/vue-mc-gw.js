
  /**
   * @license
   * author: Alvaro Canepa
   * vue-mc-gw.js v1.0.5
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidnVlLW1jLWd3LmpzIiwic291cmNlcyI6WyIuLi9zcmMvbW9kZWxzL0JyYW5jaC50cyIsIi4uL3NyYy9jb2xsZWN0aW9ucy9CcmFuY2hlcy50cyIsIi4uL3NyYy9tb2RlbHMvQ29tcGFueS50cyIsIi4uL3NyYy9jb2xsZWN0aW9ucy9Db21wYW5pZXMudHMiLCIuLi9zcmMvbW9kZWxzL1NldHRpbmdzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibmFtZXMiOlsiTW9kZWwiLCJ0b051bWJlciIsIkNvbGxlY3Rpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztNQUdxQixNQUFPLFNBQVFBLFdBQUs7SUFDdkMsUUFBUTtRQUNOLE9BQU87WUFDTCxFQUFFLEVBQUUsSUFBSTtZQUNSLFVBQVUsRUFBRSxJQUFJO1lBQ2hCLFVBQVUsRUFBRSxJQUFJO1lBQ2hCLFFBQVEsRUFBRSxJQUFJO1lBQ2QsT0FBTyxFQUFFLElBQUk7WUFDYixNQUFNLEVBQUUsSUFBSTtZQUNaLFVBQVUsRUFBRSxJQUFJO1lBQ2hCLElBQUksRUFBRSxJQUFJO1lBQ1YsSUFBSSxFQUFFLElBQUk7WUFDVixPQUFPLEVBQUUsSUFBSTtZQUNiLEtBQUssRUFBRSxJQUFJO1lBQ1gsS0FBSyxFQUFFLElBQUk7U0FDWixDQUFDO0tBQ0g7SUFFRCxTQUFTO1FBQ1AsT0FBTztZQUNMLEVBQUUsRUFBRSxDQUFDLEVBQVUsS0FBS0MsZUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLElBQUk7WUFDeEMsVUFBVSxFQUFFLENBQUMsRUFBVSxLQUFLQSxlQUFRLENBQUMsRUFBRSxDQUFDLElBQUksSUFBSTtZQUNoRCxVQUFVLEVBQUUsQ0FBQyxFQUFVLEtBQUtBLGVBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxJQUFJO1lBQ2hELFFBQVEsRUFBRSxDQUFDLEVBQVUsS0FBS0EsZUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLElBQUk7WUFDOUMsT0FBTyxFQUFFLENBQUMsRUFB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
