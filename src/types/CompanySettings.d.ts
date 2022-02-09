export interface CompanySettingsData {
  id: number;
  company_id: number;
  max_global_discounts: number;
  max_inline_discounts: number;
  discounts_per_line: boolean;
  print_after_billing: boolean;
  print_payment_conditions: boolean;
  addenda_in_own_page: boolean;
  addenda_only_for_credits: boolean;
  prices_without_tax: boolean;
  addenda: string;
  created_at: string;
  updated_at: string;
}
