import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getProduct } from "../../../redux/product/product-action";
import MarkupList from "./MarkupList";
import GoBackButton from "./GoBackButton";
import Loading from "../../Loading/Loading";
import PriceChanger from "./PriceChanger";
import useMainMenu from "../../../api/useMainMenuHook";

export default function Markup({ format, caption, path, type }) {
  const { mainMenu, isLoading } = useMainMenu(type);

  const dispatch = useDispatch();

  useEffect(() => {
    const uniq = mainMenu.filter((el, id) => mainMenu.indexOf(el) === id);

    if (!!path) {
      dispatch(getProduct(uniq));
    }
  }, [dispatch, mainMenu, path]);

  return (
    <div className="forrest">
      <GoBackButton />
      {!isLoading ? (
        <table className="forrest__coffee">
          <caption className="forrest__coffee--head">{caption}</caption>
          <thead>
            <PriceChanger value={format} />
          </thead>
          <tbody>
            {mainMenu.map((drink) => {
              return (
                <MarkupList
                  key={drink.id}
                  props={drink}
                  format={format}
                  path={path}
                />
              );
            })}
          </tbody>
        </table>
      ) : (
        <Loading />
      )}
    </div>
  );
}
