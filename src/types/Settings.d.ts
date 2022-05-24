export interface SettingsData {
  preview_image: string;
  currency_ui: number;
  pricelist_label: string;
  max_discounts: number;
  invoice_ui: MaxInvoicesUI[];
}

export interface MaxInvoicesUI {
  date: string;
  value: number;
}
