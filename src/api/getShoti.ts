import axios from "axios";
import shotiLogger from "../logger";
import { ShotiConfig, ShotiResponse, ShotiResult } from "../types";
import { API_BASE } from '../constants'

export async function getShoti(apikey?: string, config?: ShotiConfig): Promise<ShotiResult | null> {
  try {
    const type = config?.type === "image" ? "image" : "video";

    const { data } = await axios.post<ShotiResponse>(`${API_BASE}/get-shoti`, {
      type,
      apikey,
    });

    if (data.code !== 200) {
      shotiLogger.error(`API Error: ${data.error}`);
      return { error: data.error, code: data.code };
    }

    return data?.result ? data.result : null;
  } catch (error: any) {
    shotiLogger.error(`[${error.response.status}]: ${error.response.data.error}`);
    console.log(error)
    return { error: error.response.data.error, code: error.response.status };
  }
}
