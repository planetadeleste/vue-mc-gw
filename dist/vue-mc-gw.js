
  /**
   * @license
   * author: Alvaro Canepa
   * vue-mc-gw.js v1.0.1
   * Released under the MIT license.
   */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vueMc = require('@planetadeleste/vue-mc');
var lodash = require('lodash');

class Company extends vueMc.Model {
    defaults() {
        return {
            id: null,
        };
    }
    mutations() {
        return {
            id: (id) => lodash.toNumber(id) || null,
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

exports.Companies = Companies;
exports.Company = Company;
exports.Settings = Settings;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidnVlLW1jLWd3LmpzIiwic291cmNlcyI6WyIuLi9zcmMvbW9kZWxzL0NvbXBhbnkudHMiLCIuLi9zcmMvY29sbGVjdGlvbnMvQ29tcGFuaWVzLnRzIiwiLi4vc3JjL21vZGVscy9TZXR0aW5ncy50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsXSwibmFtZXMiOlsiTW9kZWwiLCJ0b051bWJlciIsIkNvbGxlY3Rpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztNQUdxQixPQUFRLFNBQVFBLFdBQUs7SUFDeEMsUUFBUTtRQUNOLE9BQU87WUFDTCxFQUFFLEVBQUUsSUFBSTtTQUNULENBQUM7S0FDSDtJQUVELFNBQVM7UUFDUCxPQUFPO1lBQ0wsRUFBRSxFQUFFLENBQUMsRUFBVSxLQUFLQyxlQUFRLENBQUMsRUFBRSxDQUFDLElBQUksSUFBSTtTQUN6QyxDQUFDO0tBQ0g7SUFFRCxVQUFVO1FBQ1IsT0FBTyxFQUFFLENBQUM7S0FDWDtJQUVELE1BQU07UUFDSixPQUFPO1lBQ0wsS0FBSyxFQUFFLGdCQUFnQjtZQUN2QixNQUFNLEVBQUUsaUJBQWlCO1lBQ3pCLE1BQU0sRUFBRSxrQkFBa0I7WUFDMUIsTUFBTSxFQUFFLG1CQUFtQjtTQUM1QixDQUFDO0tBQ0g7OztNQ3hCa0IsU0FBVSxTQUFRQyxnQkFBbUI7SUFDeEQsS0FBSztRQUNILE9BQU8sT0FBTyxDQUFDO0tBQ2hCO0lBRUQsTUFBTTtRQUNKLE9BQU87WUFDTCxLQUFLLEVBQUUsaUJBQWlCO1NBQ3pCLENBQUM7S0FDSDs7O01DVmtCLFFBQVMsU0FBUUYsV0FBSztJQUN6QyxRQUFRO1FBQ04sT0FBTztZQUNMLGFBQWEsRUFBRSxJQUFJO1NBQ3BCLENBQUM7S0FDSDtJQUVELFNBQVM7UUFDUCxPQUFPLEVBQUUsQ0FBQztLQUNYO0lBRUQsVUFBVTtRQUNSLE9BQU8sRUFBRSxDQUFDO0tBQ1g7SUFFRCxNQUFNO1FBQ0osT0FBTztZQUNMLEtBQUssRUFBRSxlQUFlO1lBQ3RCLE1BQU0sRUFBRSxnQkFBZ0I7U0FDekIsQ0FBQztLQUNIOzs7Ozs7OyJ9
