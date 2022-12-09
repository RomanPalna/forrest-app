import axios from "axios";

const BASE_URL = "https://api-eu.syrve.live";

const params = {
  apiLogin: "ec7d99ca-998",
};

const client = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});

async function getMenu() {
  const accessTokenResponse = await client.post("/api/1/access_token", params);

  console.log(accessTokenResponse.data);

  const organisationResponse = await client.post(
    "/api/1/organizations",
    {
      returnAdditionalInfo: true,
      includeDisabled: true,
    },
    {
      headers: {
        Authorization: `Bearer ${accessTokenResponse.data.token}`,
      },
    }
  );
  console.log(organisationResponse.data);

  const [organization] = organisationResponse.data.organizations;

  const menuResponse = await client.post(
    "/api/1/nomenclature",
    {
      organizationId: organization.id,
      startRevision: 0,
    },
    {
      headers: {
        Authorization: `Bearer ${accessTokenResponse.data.token}`,
      },
    }
  );

  return menuResponse.data;
}

export { getMenu };

// import axios from "axios";
// // import { useState } from "react";
// // import accessToken from "./accessToken.json";
// // import organizations from "./organization.json";
// // import menu from "./menuResp.json";

// export class MenuApi {
//   constructor(baseURL, headers) {
//     this.client = axios.create({
//       baseURL,
//       headers,
//     });
//   }

//   async getAccessToken() {
//     try {
//       // return accessToken;
//       const accessToken = await this.client.post("/api/1/access_token", {
//         apiLogin: "ec7d99ca-998",
//       });
//       return accessToken.data;
//     } catch (error) {
//       throw error;
//     }
//   }

//   async getOrganizations(accessToken) {
//     try {
//       const getOrganizationResponse = await this.client.post(
//         "/api/1/organizations",
//         {
//           returnAdditionalInfo: true,
//           includeDisabled: true,
//         },
//         {
//           headers: {
//             Authorization: `Bearer ${accessToken}`,
//           },
//         }
//       );
//       return getOrganizationResponse;

//       // return organizations;
//     } catch (error) {
//       throw error;
//     }
//   }

//   async getMenu(organization, accessToken) {
//     try {
//       const menu = await this.client.post(
//         "/api/1/nomenclature",
//         {
//           organizationId: organization.id,
//           startRevision: 0,
//         },
//         {
//           headers: {
//             Authorization: `Bearer ${accessToken}`,
//           },
//         }
//       );
//       return menu;
//     } catch (error) {
//       throw error;
//     }
//   }
// }

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

//   console.log("====================================");
//   console.log(menu);
//   console.log("====================================");
//   return menu;
// }
