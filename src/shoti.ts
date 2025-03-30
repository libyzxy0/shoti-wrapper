import { getShoti } from "./api/getShoti";
import { newShoti } from "./api/newShoti";
import { ShotiConfig } from "./types";

export default class Shoti {
  private apikey?: string;

  constructor(apikey?: string) {
    this.apikey = apikey;
  }

  getShoti = (config?: ShotiConfig) => getShoti(this.apikey, config);
  newShoti = ({ url }: { url: string; }) => newShoti(url, this.apikey);
}
