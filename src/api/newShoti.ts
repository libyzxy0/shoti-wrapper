import axios from "axios";
import shotiLogger from "../logger";
import { ShotiNewResponse } from "../types";
import { API_BASE } from '../constants';

export async function newShoti(url: string, apikey?: string): Promise<ShotiNewResponse> {
  try {
    const { data } = await axios.post<ShotiNewResponse>(
      `${API_BASE}/new-shoti`,
      { url, apikey },
      { headers: { 'Content-Type': 'application/json' } }
    );

    return data;
  } catch (error: any) {
    const status = error.response?.status ?? 500;
    const message = error.response?.data?.error ?? error.message ?? "Something went wrong!";
    
    shotiLogger.error(`[${status}]: ${message}`);

    return { error: message, code: status, status: "failed", added_by: "", added_url: "" };
  }
}
