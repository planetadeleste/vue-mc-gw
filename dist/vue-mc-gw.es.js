
  /**
   * @license
   * author: Alvaro Canepa
   * vue-mc-gw.js v1.0.1
   * Released under the MIT license.
   */

import { Model, Collection } from '@planetadeleste/vue-mc';
import { toNumber } from 'lodash';

class Company extends Model {
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

export { Companies, Company, Settings };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidnVlLW1jLWd3LmVzLmpzIiwic291cmNlcyI6WyIuLi9zcmMvbW9kZWxzL0NvbXBhbnkudHMiLCIuLi9zcmMvY29sbGVjdGlvbnMvQ29tcGFuaWVzLnRzIiwiLi4vc3JjL21vZGVscy9TZXR0aW5ncy50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7TUFHcUIsT0FBUSxTQUFRLEtBQUs7SUFDeEMsUUFBUTtRQUNOLE9BQU87WUFDTCxFQUFFLEVBQUUsSUFBSTtTQUNULENBQUM7S0FDSDtJQUVELFNBQVM7UUFDUCxPQUFPO1lBQ0wsRUFBRSxFQUFFLENBQUMsRUFBVSxLQUFLLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxJQUFJO1NBQ3pDLENBQUM7S0FDSDtJQUVELFVBQVU7UUFDUixPQUFPLEVBQUUsQ0FBQztLQUNYO0lBRUQsTUFBTTtRQUNKLE9BQU87WUFDTCxLQUFLLEVBQUUsZ0JBQWdCO1lBQ3ZCLE1BQU0sRUFBRSxpQkFBaUI7WUFDekIsTUFBTSxFQUFFLGtCQUFrQjtZQUMxQixNQUFNLEVBQUUsbUJBQW1CO1NBQzVCLENBQUM7S0FDSDs7O01DeEJrQixTQUFVLFNBQVEsVUFBbUI7SUFDeEQsS0FBSztRQUNILE9BQU8sT0FBTyxDQUFDO0tBQ2hCO0lBRUQsTUFBTTtRQUNKLE9BQU87WUFDTCxLQUFLLEVBQUUsaUJBQWlCO1NBQ3pCLENBQUM7S0FDSDs7O01DVmtCLFFBQVMsU0FBUSxLQUFLO0lBQ3pDLFFBQVE7UUFDTixPQUFPO1lBQ0wsYUFBYSxFQUFFLElBQUk7U0FDcEIsQ0FBQztLQUNIO0lBRUQsU0FBUztRQUNQLE9BQU8sRUFBRSxDQUFDO0tBQ1g7SUFFRCxVQUFVO1FBQ1IsT0FBTyxFQUFFLENBQUM7S0FDWDtJQUVELE1BQU07UUFDSixPQUFPO1lBQ0wsS0FBSyxFQUFFLGVBQWU7WUFDdEIsTUFBTSxFQUFFLGdCQUFnQjtTQUN6QixDQUFDO0tBQ0g7Ozs7OyJ9
