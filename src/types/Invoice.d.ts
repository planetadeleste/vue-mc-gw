import { CurrencyData } from "@planetadeleste/vue-mc-shopaholic";
import { BranchData } from "./Branch";
import { CompanyData } from "./Company";
import { CustomerData } from "./Customer";
import { InvoicePositionData } from "./InvoicePosition";
import { InvoiceTypeData } from "./InvoiceType";
import { PaymentTermData } from "./PaymentTerm";
import { PriceListData } from "./PriceList";

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
  price_list_id: number;
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
  due_date: string;
  sign_at: string;
  cert: string;
  qr: string;
  id_cae: string;
  expiration_cae: string;

  company: CompanyData;
  branch: BranchData;
  customer: CustomerData;
  invoice_type: InvoiceTypeData;
  payment_term: PaymentTermData;
  payment_method: PaymentMethodData;
  currency: CurrencyData;
  price_list: PriceListData;
  positions: InvoicePositionData[];
  discounts: DiscountData[];

  is_signed: boolean;
  position_total_price_value: number;
  total_price_value: number;
  rounded_price_value: number;
  total_price_without_tax_value: number;
  total_tax_value: number;
}
