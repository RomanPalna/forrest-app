import { useCallback, useEffect, useState } from "react";
import axios from "axios";

function useMainMenu(groupNames) {
  const [mainMenu, setMainMenu] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const onBootstrap = useCallback(async () => {
    try {
      setIsLoading(true);

      const response = await axios({
        method: "get",
        url: "https://forrest-server.herokuapp.com/",
      });

      if (response.data) {
        const products = response?.data?.products || [];
        const groups = response?.data?.groups || [];

        const groupsWithProducts = [];
        products.forEach((product) => {
          if (!product.parentGroup) {
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

          if (!group.products) {
            group.products = [];
          }
          group.products.push(product);

          if (!hasGroup) {
            groupsWithProducts.push(group);
          }
        });

        const alcoGroup = groupsWithProducts.filter((item) => {
          return groupNames.includes(item.name);
        });

        const alcoGroupIncluded = alcoGroup.map(({ products }) =>
          products.filter((item) => item.sizePrices[0].price.isIncludedInMenu)
        );

        setMainMenu(alcoGroupIncluded.flatMap((item) => item));
      }
    } catch (e) {
      console.log(`Error fetch menu ${e}`);
    } finally {
      setIsLoading(false);
    }
  }, [groupNames]);

  useEffect(() => {
    onBootstrap();
  }, [onBootstrap]);

  return { mainMenu, isLoading };
}

export default useMainMenu;
