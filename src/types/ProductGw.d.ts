export interface ProductGwData {
  id: number;
  product_id: number;
  taxtype_id: number;
  is_service: boolean;
  is_sell: boolean;
  with_tax_expenses: boolean;
  barcode: string;
  account_sales: string;
  account_purchase: string;
}
