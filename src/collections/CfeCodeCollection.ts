import { CfeCodeData } from '../types/CfeCode.d';
import { Collection } from '@planetadeleste/vue-mc';
import CfeCode from '../models/CfeCode';
import { Response } from 'vue-mc';

export default class CfeCodeCollection extends Collection<CfeCode> {
  model(): typeof CfeCode {
    return CfeCode;
  }

  routes(): Record<string, any> {
    return {
      fetch: 'cfecodes.index',
    };
  }

  async list(): Promise<Response<CfeCodeData[]>> {
    return await this.createCustomRequest('list');
  }
}
