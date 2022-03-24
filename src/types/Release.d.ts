export interface ReleaseData {
  id: number;
  version: string;
  type: string;
  description: string;
  created_at: string;
  updated_at: string;
}

export type ReleaseType = "app" | "plugin" | "libs" | "lib-bcu" | "lib-ucfe";
