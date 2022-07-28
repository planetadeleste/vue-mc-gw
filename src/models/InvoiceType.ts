import { Model } from '@planetadeleste/vue-mc';
import { toNumber } from 'lodash';
import { required } from 'vue-mc/validation';

export default class InvoiceType extends Model {
  /**
   * @constant {number} CODE_ETICKET e-Ticket
   */
  static readonly CODE_ETICKET = 101;
  /**
   * @constant {number} CODE_NCETICKET Nota de Crédito de e-Ticket
   */
  static readonly CODE_NCETICKET = 102;
  /**
   * @constant {number} CODE_NDETICKET Nota de Débito de e-Ticket
   */
  static readonly CODE_NDETICKET = 103;
  /**
   * @constant {number} CODE_EFACTURA e-Factura
   */
  static readonly CODE_EFACTURA = 111;
  /**
   * @constant {number} CODE_NCEFACTURA Nota de Crédito de e-Factura
   */
  static readonly CODE_NCEFACTURA = 112;
  /**
   * @constant {number} CODE_NDEFACTURA Nota de Débito de e-Factura
   */
  static readonly CODE_NDEFACTURA = 113;
  /**
   * @constant {number} CODE_EREMITO e-Remito
   */
  static readonly CODE_EREMITO = 181;
  /**
   * @constant {number} CODE_ERESGUARDO e-Resguardo
   */
  static readonly CODE_ERESGUARDO = 182;
  /**
   * @constant {number} CODE_EFACTURA_EXP e-Factura Exportación
   */
  static readonly CODE_EFACTURA_EXP = 121;
  /**
   * @constant {number} CODE_NCEFACTURA_EXP Nota de Crédito de e-Factura Exportación
   */
  static readonly CODE_NCEFACTURA_EXP = 122;
  /**
   * @constant {number} CODE_NDEFACTURA_EXP Nota de Débito de e-Factura Exportación
   */
  static readonly CODE_NDEFACTURA_EXP = 123;
  /**
   * @constant {number} CODE_EREMITO_EXP e-Remito de Exportación
   */
  static readonly CODE_EREMITO_EXP = 124;
  /**
   * @constant {number} CODE_ETICKET_VENTA_CUENTA_AJENA e-Ticket Venta por Cuenta Ajena
   */
  static readonly CODE_ETICKET_VENTA_CUENTA_AJENA = 131;
  /**
   * @constant {number} CODE_NCETICKET_VENTA_CUENTA_AJENA Nota de Crédito de e-Ticket Venta por Cuenta Ajena
   */
  static readonly CODE_NCETICKET_VENTA_CUENTA_AJENA = 132;
  /**
   * @constant {number} CODE_NDETICKET_VENTA_CUENTA_AJENA Nota de Débito de e-Ticket Venta por Cuenta Ajena
   */
  static readonly CODE_NDETICKET_VENTA_CUENTA_AJENA = 133;
  /**
   * @constant {number} CODE_EFACTURA_VENTA_CUENTA_AJENA e-Factura Venta por Cuenta Ajena
   */
  static readonly CODE_EFACTURA_VENTA_CUENTA_AJENA = 141;
  /**
   * @constant {number} CODE_NCEFACTURA_VENTA_CUENTA_AJENA Nota de Crédito de e-Factura Venta por Cuenta Ajena
   */
  static readonly CODE_NCEFACTURA_VENTA_CUENTA_AJENA = 142;
  /**
   * @constant {number} CODE_NDEFACTURA_VENTA_CUENTA_AJENA Nota de Débito de e-Factura Venta por Cuenta Ajena
   */
  static readonly CODE_NDEFACTURA_VENTA_CUENTA_AJENA = 143;
  /**
   * @constant {number} CODE_EBOLETA_ENTRADA e-Boleta de entrada
   */
  static readonly CODE_EBOLETA_ENTRADA = 151;
  /**
   * @constant {number} CODE_NCEBOLETA_ENTRADA Nota de crédito de e-Boleta de entrada
   */
  static readonly CODE_NCEBOLETA_ENTRADA = 152;
  /**
   * @constant {number} CODE_NDEBOLETA_ENTRADA Nota de débito de e-Boleta de entrada
   */
  static readonly CODE_NDEBOLETA_ENTRADA = 153;

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
