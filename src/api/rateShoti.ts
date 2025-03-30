import axios from "axios";
import shotiLogger from "../logger";
import { ShotiRateResponse } from "../types";
import { API_BASE } from '../constants';

export async function rateShoti(isNotMaasim: boolean, shoti_id: string, apikey?: string): Promise<ShotiRateResponse> {
  try {
    const rate = isNotMaasim == true ? "GOOD" : "BAD";

    const { data } = await axios.post<ShotiRateResponse>(
      `${API_BASE}/rate-shoti`,
      { rate, shoti_id, apikey },
      { headers: { 'Content-Type': 'application/json' } }
    );

    return data;
  } catch (error: any) {
    const status = error.response?.status ?? 500;
    const message = error.response?.data?.error ?? error.message ?? "Something went wrong!";
    
    shotiLogger.error(`[${status}]: ${message}`);

    return { error: message, code: status };
  }
}
