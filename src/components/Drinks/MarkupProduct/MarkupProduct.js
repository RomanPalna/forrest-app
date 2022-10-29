import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Container from "../../Container/Container";
import Header from "../../Header/Header";
import GoBackButton from "../Markup/GoBackButton";
import noImage from "../../../images/noImage.gif";
import Social from "../../Social/Social";
import { getValue } from "../../../redux/header/header-action";

export default function ProductMarkup() {
  const [drinks, setDrinks] = useState(null);

  const params = useParams();

  const products = useSelector((store) => store.product.product);
  const product = products.find((item) => item.id === params.id);

  const dispatch = useDispatch();

  useEffect(() => {
    const toLocalStorage = (item) => {
      setDrinks(item);
      localStorage.setItem("drink", JSON.stringify(product));
    };

    product
      ? toLocalStorage(product)
      : setDrinks(JSON.parse(localStorage.getItem("drink")));
  }, [product]);

  useEffect(() => {
    dispatch(getValue(true));
  }, [dispatch]);

  return (
    <Container>
      <GoBackButton />
      <Header />
      <img
        className="product__img"
        src={drinks?.imageLinks[0] ? drinks.imageLinks[0] : noImage}
        alt="product_picture"
      />
      <p className="product__name">{drinks?.name}</p>
      <p className="product__descr">{drinks?.description}</p>
      <Social />
    </Container>
  );
}
