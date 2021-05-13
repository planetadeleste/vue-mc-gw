
  /**
   * @license
   * author: Alvaro Canepa
   * vue-mc-gw.js v1.0.4
   * Released under the MIT license.
   */

import { Model, Collection } from '@planetadeleste/vue-mc';
import { toNumber } from 'lodash';

class Branch extends Model {
    defaults() {
        return {
            id: null,
            name: null,
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

export { Branch, Branches, Companies, Company, Settings };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidnVlLW1jLWd3LmVzLmpzIiwic291cmNlcyI6WyIuLi9zcmMvbW9kZWxzL0JyYW5jaC50cyIsIi4uL3NyYy9jb2xsZWN0aW9ucy9CcmFuY2hlcy50cyIsIi4uL3NyYy9tb2RlbHMvQ29tcGFueS50cyIsIi4uL3NyYy9jb2xsZWN0aW9ucy9Db21wYW5pZXMudHMiLCIuLi9zcmMvbW9kZWxzL1NldHRpbmdzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7TUFHcUIsTUFBTyxTQUFRLEtBQUs7SUFDdkMsUUFBUTtRQUNOLE9BQU87WUFDTCxFQUFFLEVBQUUsSUFBSTtZQUNSLElBQUksRUFBRSxJQUFJO1NBQ1gsQ0FBQztLQUNIO0lBRUQsU0FBUztRQUNQLE9BQU87WUFDTCxFQUFFLEVBQUUsQ0FBQyxFQUFVLEtBQUssUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLElBQUk7U0FDekMsQ0FBQztLQUNIO0lBRUQsVUFBVTtRQUNSLE9BQU8sRUFBRSxDQUFDO0tBQ1g7SUFFRCxNQUFNO1FBQ0osT0FBTztZQUNMLEtBQUssRUFBRSxlQUFlO1lBQ3RCLE1BQU0sRUFBRSxnQkFBZ0I7WUFDeEIsTUFBTSxFQUFFLGlCQUFpQjtZQUN6QixNQUFNLEVBQUUsa0JBQWtCO1NBQzNCLENBQUM7S0FDSDs7O01DekJrQixRQUFTLFNBQVEsVUFBa0I7SUFDdEQsS0FBSztRQUNILE9BQU8sTUFBTSxDQUFDO0tBQ2Y7SUFFRCxNQUFNO1FBQ0osT0FBTztZQUNMLEtBQUssRUFBRSxnQkFBZ0I7U0FDeEIsQ0FBQztLQUNIO0lBRUQsU0FBUyxDQUE4QixVQUFrQjtRQUN2RCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFFLENBQUMsQ0FBQztLQUMvQztJQUVELFFBQVE7UUFDTixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztLQUNyQztJQUVELFNBQVM7UUFDUCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztLQUN0Qzs7O01DckJrQixPQUFRLFNBQVEsS0FBSztJQUN4QyxRQUFRO1FBQ04sT0FBTztZQUNMLEVBQUUsRUFBRSxJQUFJO1NBQ1QsQ0FBQztLQUNIO0lBRUQsU0FBUztRQUNQLE9BQU87WUFDTCxFQUFFLEVBQUUsQ0FBQyxFQUFVLEtBQUssUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLElBQUk7U0FDekMsQ0FBQztLQUNIO0lBRUQsVUFBVTtRQUNSLE9BQU8sRUFBRSxDQUFDO0tBQ1g7SUFFRCxNQUFNO1FBQ0osT0FBTztZQUNMLEtBQUssRUFBRSxnQkFBZ0I7WUFDdkIsTUFBTSxFQUFFLGlCQUFpQjtZQUN6QixNQUFNLEVBQUUsa0JBQWtCO1lBQzFCLE1BQU0sRUFBRSxtQkFBbUI7U0FDNUIsQ0FBQztLQUNIOzs7TUN4QmtCLFNBQVUsU0FBUSxVQUFtQjtJQUN4RCxLQUFLO1FBQ0gsT0FBTyxPQUFPLENBQUM7S0FDaEI7SUFFRCxNQUFNO1FBQ0osT0FBTztZQUNMLEtBQUssRUFBRSxpQkFBaUI7U0FDekIsQ0FBQztLQUNIOzs7TUNWa0IsUUFBUyxTQUFRLEtBQUs7SUFDekMsUUFBUTtRQUNOLE9BQU87WUFDTCxhQUFhLEVBQUUsSUFBSTtTQUNwQixDQUFDO0tBQ0g7SUFFRCxTQUFTO1FBQ1AsT0FBTyxFQUFFLENBQUM7S0FDWDtJQUVELFVBQVU7UUFDUixPQUFPLEVBQUUsQ0FBQztLQUNYO0lBRUQsTUFBTTtRQUNKLE9BQU87WUFDTCxLQUFLLEVBQUUsZUFBZTtZQUN0QixNQUFNLEVBQUUsZ0JBQWdCO1NBQ3pCLENBQUM7S0FDSDs7Ozs7In0=
