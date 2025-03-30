export type ShotiType = "image" | "video";

export type User = {
  username: string;
  nickname: string;
  signature?: string;
  instagram?: string;
  twitter?: string;
}

export type ShotiResult = {
  content: string | string[];
  duration: string;
  region: string;
  shoti_id: string;
  shoti_score: number;
  title?: string;
  type: ShotiType;
  user: User;
} | {
  error?: string;
  code?: number;
}

export type ShotiConfig = {
  type?: ShotiType;
}

export interface ShotiResponse {
  IS_USING_APIKEY?: boolean;
  result?: ShotiResult;
  error?: string;
  code: number;
}

export type ShotiNewResponse = {
  status?: string;
  added_by?: string;
  error?: string;
  code?: number;
  added_url?: string;
}