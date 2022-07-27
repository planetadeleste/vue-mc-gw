import { Model } from '@planetadeleste/vue-mc';
import { toNumber } from 'lodash';

export default class TaxType extends Model {
  defaults(): Record<string, any> {
    return {
      id: null,
      name: null,
      short_name: null,
      code: null,
      description: null,
      percent: null,
      sort_order: null,
      created_at: null,
      updated_at: null,
    };
  }

  mutations(): Record<string, any> {
    return {
      id: (id: string) => toNumber(id) || null,
    };
  }

  validation(): Record<string, any> {
    return {};
  }

  routes(): Record<string, any> {
    return {
      fetch: 'taxtypes.show',
      create: 'taxtypes.store',
      update: 'taxtypes.update',
      delete: 'taxtypes.destroy',
    };
  }
}
