// import axios from "axios";
const axios = require("axios");

const BASE_URL = "https://api-eu.iiko.services";

const params = {
  apiLogin: "ec7d99ca-998",
};

const client = axios.create({
  baseURL: BASE_URL,
  headers: { "Content-type": "application/json" },
});

(async () => {
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
  console.log(menuResponse.data);
})();
