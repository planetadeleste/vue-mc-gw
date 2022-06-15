export type PaymentTermType = "fixed" | "infinite";
export type PaymentTermFrequency = "week" | "day" | "year" | "month";

export interface PaymentTermData {
  id: number;
  active: bool;
  cash: bool;
  can_modify_date: bool;
  name: string;
  code: string;
  type: PaymentTermType;
  frequency: PaymentTermFrequency;
  frequency_interval: number;
  cycles: number;
  delay: number;
  description: string;
  created_at: string;
  updated_at: string;
}
