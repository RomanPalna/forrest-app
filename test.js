const menu = require("./src/api/menuResp.json");

const groups = menu.groups;
const products = menu.products;

// const barGroups = groups.reduce((acc, curr, index, orig) => {
//   if (curr.parentGroup) {
//     let parent = orig.find((item) => {
//       return item.id === curr.parentGroup;
//     });

//     (parent.children = parent.children || []).push(curr);
//     return acc;
//   } else {
//     acc.push(curr);
//     return acc;
//   }
// }, []);

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

console.log(groupsWithProducts);
