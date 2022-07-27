import { Model } from '@planetadeleste/vue-mc';
import { toNumber } from 'lodash';
import { required } from 'vue-mc/validation';

export default class InvoiceType extends Model {
  defaults(): Record<string, any> {
    return {
      id: null,
      name: null,
      short_name: null,
      code: null,
    };
  }

  mutations(): Record<string, any> {
    return {
      id: (id: string) => toNumber(id) || null,
    };
  }

  validation(): Record<string, any> {
    return {
      name: required,
      code: required,
    };
  }

  routes(): Record<string, any> {
    return {
      fetch: 'invoicetypes.show',
      create: 'invoicetypes.store',
      update: 'invoicetypes.update',
      delete: 'invoicetypes.destroy',
    };
  }
}
