import axios from "axios";
import accessToken from "./accessToken.json";
import organizations from "./organization.json";
import menu from "./menuResp.json";

export default class MenuApi {
  constructor(baseURL, headers) {
    this.client = axios.create({
      baseURL,
      headers,
    });
  }

  async getAccessToken() {
    try {
      return accessToken;
      // const accessToken = await this.client.post("/api/1/access_token", {
      //   apiLogin: "ec7d99ca-998",
      // });
      // return accessToken.data;
    } catch (error) {
      throw error;
    }
  }

  async getOrganizations(accessToken) {
    try {
      // const getOrganizationResponse = await this.client.post(
      //   "/api/1/organizations",
      //   {
      //     returnAdditionalInfo: true,
      //     includeDisabled: true,
      //   },
      //   {
      //     headers: {
      //       Authorization: `Bearer ${accessToken}`,
      //     },
      //   }
      // );
      // return getOrganizationResponse;

      return organizations;
    } catch (error) {
      throw error;
    }
  }

  async getMenu(organization, accessToken) {
    try {
      // const menu = await this.client.post(
      //   "/api/1/nomenclature",
      //   {
      //     organizationId: organization.id,
      //     startRevision: 0,
      //   },
      //   {
      //     headers: {
      //       Authorization: `Bearer ${accessToken}`,
      //     },
      //   }
      // );
      return menu;
    } catch (error) {
      throw error;
    }
  }
}

// const menuApi = new MenuApi("https://api-eu.iiko.services", {
//   "Content-type": "application/json",
// });

// export const accessTokenResponse = await menuApi.getAccessToken(
//   "/api/1/access_token",
//   {
//     apiLogin: "ec7d99ca-998",
//   }
// );

// const organizations = await menuApi.getOrganizations(
//   "/api/1/organizations",
//   {
//     returnAdditionalInfo: true,
//     includeDisabled: true,
//   },
//   {
//     accessToken: accessTokenResponse.data.token,
//   }
// );

// export async function menu() {
//   const [organization] = organizations.data.organizations;

//   const menu = await menuApi.getMenuResponse(
//     {
//       organizationId: organization.id,
//       startRevision: 0,
//     },
//     {
//       accessToken: accessTokenResponse.data.token,
//     }
//   );

//   return menu;
// }
