import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getProduct } from "../../../redux/product/product-action";
import MarkupList from "./MarkupList";
import GoBackButton from "./GoBackButton";
import Loading from "../../Loading/Loading";
import PriceChanger from "./PriceChanger";

export default function Markup({ drinks, caption, format }) {
  const [uniq, setUniq] = useState();

  useEffect(() => {
    if (drinks) {
      const makeUniq = drinks.filter((el, id) => drinks.indexOf(el) === id);

      const filterPrice = makeUniq.filter(
        (item) => item.sizePrices[0].price.currentPrice > 29
      );

      setUniq(filterPrice);
    }
  }, [drinks]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProduct(uniq));
  }, [dispatch, uniq]);

  return (
    <div className="forrest">
      <GoBackButton />
      {uniq ? (
        <table className="forrest__coffee">
          <caption className="forrest__coffee--head">{caption}</caption>
          <thead>
            <PriceChanger value={format} />
          </thead>
          <tbody>
            {uniq.map((drink) => {
              return (
                <MarkupList key={drink.id} props={drink} format={format} />
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
