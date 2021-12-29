export interface PaymentMethodData {
  id: number;
  active: boolean;
  name: string;
  code: string;
  created_at: string;
  updated_at: string;
  in_account: boolean;
  in_invoice: boolean;
}
