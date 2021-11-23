import { CurrencyData } from "@planetadeleste/vue-mc-shopaholic";
import { BranchData } from "./Branch";
import { CompanyData } from "./Company";
import { CustomerData } from "./Customer";
import { InvoicePositionData } from "./InvoicePosition";
import { InvoiceTypeData } from "./InvoiceType";
import { PaymentTermData } from "./PaymentTerm";

export interface InvoiceData {
  id: number;
  company_id: number;
  branch_id: number;
  customer_id: number;
  invoice_type_id: number;
  payment_term_id: number;
  payment_method_id: number;
  invoice_group_id: number;
  invoice_movement_type_id: number;
  currency_id: number;
  order_serial: string;
  order_number: number;
  transaction_id: number;
  description: string;
  payment_response: Record<string, any>;
  customer_data: Record<string, any>;
  is_contingency: boolean;
  is_cash: boolean;
  created_at: string;
  updated_at: string;

  company: CompanyData;
  branch: BranchData;
  customer: CustomerData;
  invoice_type: InvoiceTypeData;
  payment_term: PaymentTermData;
  payment_method: PaymentMethodData;
  currency: CurrencyData;
  positions: InvoicePositionData[];
}
