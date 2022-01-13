import { InvoiceData } from "./Invoice";
import { PaymentMethodData } from "./PaymentMethod";

export interface InvoicePaymentMethodData {
  id: number;
  invoice_id: number;
  payment_method_id: number;
  currency_id: number;
  amount: number;
  rate: number;
  sort_order: number;
  config: Record<string, any>;
  created_at: string;
  updated_at: string;

  invoice?: InvoiceData;
  payment_method?: PaymentMethodData;
}
