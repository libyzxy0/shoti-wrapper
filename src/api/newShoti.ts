import axios from "axios";
import shotiLogger from "../logger";
import { ShotiNewResponse } from "../types";
import { API_BASE } from '../constants'

export async function newShoti(url: string, apikey?: string): Promise<ShotiNewResponse> {
  try {
    const { data } = await axios.post<ShotiNewResponse>(`${API_BASE}/new-shoti`, {
      url,
      apikey: apikey,
    }, {
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (data.status !== 'ok') {
      shotiLogger.error(`API Error: ${data.error}`);
      return { error: data.error, code: data.code };
    }

    return data;
  } catch (error: any) {
    shotiLogger.error(`[${error.response.status}]: ${error.response.data.error || error.message}`);
    return { error: error.response.data.error || error.message, code: error.response.status };
  }
}