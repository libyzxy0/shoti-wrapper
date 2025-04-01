import { getShoti } from "./api/getShoti";
import { newShoti } from "./api/newShoti";
import { rateShoti } from "./api/rateShoti";
import { getTop } from "./api/getTop";
import { ShotiConfig } from "./types";

export default class Shoti {
  private apikey?: string;

  constructor(apikey?: string | { apikey: string }) {
    this.apikey = typeof apikey === 'string' ? apikey : apikey?.apikey;
  }

  getShoti = (config?: ShotiConfig) => getShoti(this.apikey, config);
  
  newShoti = ({ url }: { url: string; }) => newShoti(url, this.apikey);
  
  rateShoti = ({ shoti_id, isNotMaasim }: { shoti_id: string; isNotMaasim: boolean; }) => rateShoti(isNotMaasim, shoti_id, this.apikey);
  
  getTop = () => getTop();
}
