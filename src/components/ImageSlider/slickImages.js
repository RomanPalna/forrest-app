import { useEffect, useState } from "react";
import useMainMenu from "../../api/useMainMenuHook";

export default function useSlickImages() {
  const [imges, setImges] = useState(null);

  const coctails = useMainMenu("Коктейлі алкогольні");

  useEffect(() => {
    const toLocalStorage = (item) => {
      setImges(item);
      localStorage.setItem("cocktails", JSON.stringify(coctails));
    };

    coctails
      ? toLocalStorage(coctails)
      : setImges(JSON.parse(localStorage.getItem("drink")));
  }, [coctails]);

  return imges;
}
