import { useEffect, useState } from "react";
import axios from "axios";

function useMainMenu(groupName) {
  const [menu, setMenu] = useState(null);
  const [mainMenu, setMainMenu] = useState(null);

  if (!menu) {
    axios
      .get("https://forrest-server.herokuapp.com/")
      .then((response) => setMenu(response.data));
  }

  useEffect(() => {
    if (menu) {
      const groups = menu?.groups;
      const products = menu?.products;

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

      const alcoGroup = groupsWithProducts.find((item) => {
        return item.name === groupName;
      });
      const alcoGroupIncluded = alcoGroup.products.filter((item) => {
        return item.sizePrices[0].price.isIncludedInMenu;
      });

      setMainMenu(alcoGroupIncluded);
    }
  }, [groupName, menu]);

  return mainMenu;
}

export default useMainMenu;
