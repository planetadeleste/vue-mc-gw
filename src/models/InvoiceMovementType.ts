import { Model } from '@planetadeleste/vue-mc';
import { toNumber } from 'lodash';

export default class InvoiceMovementType extends Model {
  /**
   * @constant {number} CODE_SALES Venta
   */
  static readonly CODE_SALES = 1;
  /**
   * @constant {number} CODE_REFOUND Devolución
   */
  static readonly CODE_REFOUND = 2;
  /**
   * @constant {number} CODE_ADJUSTMENT_LIKE_SALES Ajuste simil ventas
   */
  static readonly CODE_ADJUSTMENT_LIKE_SALES = 3;
  /**
   * @constant {number} CODE_SPECIAL_MOVEMENTS Movimiento de mercadería especial
   */
  static readonly CODE_SPECIAL_MOVEMENTS = 4;
  /**
   * @constant {number} CODE_DEBIT_NOTE Nota de débito
   */
  static readonly CODE_DEBIT_NOTE = 5;
  /**
   * @constant {number} CODE_RECEIPT Resguardo
   */
  static readonly CODE_RECEIPT = 6;
  /**
   * @constant {number} CODE_DEBT Cobranza
   */
  static readonly CODE_DEBT = 7;

  defaults(): Record<string, any> {
    return {
      id: null,
      name: null,
      code: null,
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
      fetch: 'invoicemovementtypes.show',
      create: 'invoicemovementtypes.store',
      update: 'invoicemovementtypes.update',
      delete: 'invoicemovementtypes.destroy',
    };
  }
}
