import { useEffect, useState } from "react";
import MenuApi from "./menuApi";

const menuApi = new MenuApi("https://api-eu.iiko.services", {
  "Content-type": "application/json",
});

function useMainMenu() {
  const [menu, setMenu] = useState();
  const [mainMenu, setMainMenu] = useState();

  async function getMenu() {
    const accessTokenResponse = await menuApi.getAccessToken();

    const organizationsResp = await menuApi.getOrganizations(
      accessTokenResponse.token
    );

    const [organization] = organizationsResp.organizations;

    const menu = await menuApi.getMenu(organization, accessTokenResponse.token);

    setMenu(menu);
  }

  useEffect(() => {
    getMenu();

    if (menu) {
      const groups = menu.groups;
      const products = menu.products;

      const groupsWithProducts = [];
      products.forEach((product) => {
        if (product.parentGroup === null) {
          return;
        }

        let hasGroup = true;
        let group = groupsWithProducts.find(
          (existingGroup) => existingGroup.id === product.parentGroup
        );
        if (!group) {
          hasGroup = false;
          group = groups.find((group) => group.id === product.parentGroup);
        }

        if (group.products === undefined) {
          group.products = [];
        }
        group.products.push(product);

        if (!hasGroup) {
          groupsWithProducts.push(group);
        }
      });
      const isIncludedInMenu = groupsWithProducts.map((item) =>
        item.products.filter((item) => {
          return item.sizePrices[0].price.isIncludedInMenu === true;
        })
      );
      setMainMenu(isIncludedInMenu);
    }
  }, [menu]);

  return mainMenu;
}

export default useMainMenu;
