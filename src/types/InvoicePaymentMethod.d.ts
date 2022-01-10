import { InvoiceData } from "./Invoice";
import { PaymentMethodData } from "./PaymentMethod";

export interface InvoicePaymentMethodData {
  id: number;
  invoice_id: number;
  payment_method_id: number;
  amount: number;
  sort_order: number;
  created_at: string;
  updated_at: string;

  invoice?: InvoiceData;
  payment_method?: PaymentMethodData;
}
