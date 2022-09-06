import { useState, useEffect } from "react";
import useMainMenu from "../../../api/useMainMenuHook";
import Markup from "../Markup/Markup";

export default function BrandyCognac() {
  const [brandy, setBrandy] = useState();

  const cognacList = useMainMenu("Коньяки");
  const brandyList = useMainMenu("Бренді");

  useEffect(() => {
    if (cognacList && brandyList) {
      const array = cognacList.concat(brandyList);
      setBrandy(array);
    }
  }, [brandyList, cognacList]);

  const fifty = "fifty";

  return <Markup drinks={brandy} caption={"Коньяк, Бренді"} format={fifty} />;
}
