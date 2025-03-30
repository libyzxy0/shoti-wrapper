export type ShotiType = "image" | "video";

export interface User {
  username: string;
  nickname: string;
  signature?: string;
  instagram?: string;
  twitter?: string;
}

export interface ShotiResult {
  content: string | string[];
  duration: string;
  region: string;
  shoti_id: string;
  shoti_score: number;
  title?: string;
  type: ShotiType;
  user: User;
}

export interface ShotiResponse {
  IS_USING_APIKEY?: boolean;
  result?: ShotiResult;
  error?: string;
  code: number;
}

export type ShotiNewResponse = {
  status: string;
  added_by: string;
  added_url: string;
  error?: string;
  code?: number;
}

export type ShotiRateResponse = 
  | { success: true, rate_type: "GOOD" | "BAD" } 
  | { error: string; code: number; };

export interface ShotiTopResponse {
  id: string;
  name: string;
  requests: number;
  is_adder: boolean;
}

export type ShotiConfig = {
  type?: ShotiType;
} & Record<string, unknown>;
