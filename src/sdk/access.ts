import axios from "axios";
import { CONFIG } from "../config";

export class AccessOAuth {
  public async getAccessToken() {
    let res = await axios.post(
      "https://msc-serverless-sso-1.auth.us-east-1.amazoncognito.com/oauth2/token",
      `grant_type=client_credentials&client_id=${CONFIG.client_id}&client_secret=${CONFIG.secret}`
    );

    return res.data;
  }
}
