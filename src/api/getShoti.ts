import axios from "axios";
import shotiLogger from "../logger";
import { ShotiConfig, ShotiResponse, ShotiResult } from "../types";
import { API_BASE } from '../constants';

export async function getShoti(apikey?: string, config?: ShotiConfig): Promise<ShotiResult | { error: string; code: number }> {
  try {
    const type = config?.type === "image" ? "image" : "video";

    const { data } = await axios.post<ShotiResponse>(`${API_BASE}/get-shoti`, {
      type,
      apikey,
    });

    if (data.code !== 200) {
      shotiLogger.error(`API Error: ${data.error}`);
      return { error: data.error ?? "Unknown error", code: data.code ?? 500 };
    }

    return data?.result ? data.result : { error: "No result found", code: 404 };
  } catch (error: any) {
    const message = error.response?.data?.error ?? error.message ?? "Something went wrong!";
    const status = error.response?.status ?? 500;
    shotiLogger.error(`[${status}]: ${message}`);
    return { error: message, code: status };
  }
}
