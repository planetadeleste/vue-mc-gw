import { Model } from '@planetadeleste/vue-mc';
import { toNumber } from 'lodash';

export default class CfeCode extends Model {
  defaults(): Record<string, any> {
    return {
      id: null,
      form: null,
      line: null,
      description: null,
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
      fetch: 'cfecodes.show',
      create: 'cfecodes.store',
      update: 'cfecodes.update',
      delete: 'cfecodes.destroy',
    };
  }
}
