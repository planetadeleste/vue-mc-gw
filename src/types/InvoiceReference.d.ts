import { InvoiceData } from "./Invoice";

export interface InvoiceReferenceData {
  id: number;
  invoice_id: number;
  invoice_ref_id?: number;
  reason: string;
  is_global: boolean;
  sort_order: number;
  created_at: string;
  updated_at: string;
  invoice_ref?: InvoiceData;
}
