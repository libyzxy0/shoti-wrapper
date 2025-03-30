import axios from "axios";
import shotiLogger from "../logger";
import { ShotiTopResponse } from "../types";
import { API_BASE } from '../constants';

export async function getTop(apikey?: string): Promise<ShotiTopResponse[] | { error?: string; code?: number }> {
  try {
    const { data } = await axios.post<ShotiTopResponse[]>(
      `${API_BASE}/leaderboard`,
      { apikey },
      { headers: { 'Content-Type': 'application/json' } }
    );
    
    const top = data.slice(0, 10);
    
    return top;
  } catch (error: any) {
    const status = error.response?.status ?? 500;
    const message = error.response?.data?.error ?? error.message ?? "Something went wrong!";
    
    shotiLogger.error(`[${status}]: ${message}`);

    return { error: message, code: status };
  }
}
