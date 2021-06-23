export type PaymentTermType = "fixed" | "infinite";

export interface PaymentTermData {
  id: number;
  active: bool;
  name: string;
  code: string;
  type: PaymentTermType;
  frequency: string;
  frequency_interval: number;
  cycles: number;
  description: string;
  created_at: string;
  updated_at: string;
}