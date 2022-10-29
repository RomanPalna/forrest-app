import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import Container from "../Container/Container";
import Header from "../Header/Header";
import Social from "../Social/Social";
import { getValue } from "../../redux/header/header-action";
import { useEffect } from "react";

export default function MainPage() {
  const dispatch = useDispatch(true);

  const handleClick = () => {
    dispatch(getValue(true));
  };

  useEffect(() => {
    dispatch(getValue(false));
  }, [dispatch]);

  return (
    <Container>
      <Header />
      <div className="forrest__nav">
        <p className="forrest__nav--text">Мені більше 18 років</p>
        <div className="forrest__nav--btn">
          <NavLink
            className="forrest__nav--link"
            to="/non-alcohol"
            onClick={handleClick}
          >
            НІ
          </NavLink>

          <NavLink
            className="forrest__nav--link"
            to="/full-list"
            onClick={handleClick}
          >
            ТАК
          </NavLink>
        </div>
      </div>

      <Social />
      <p className="forrest__warning">
        Ми не продаємо алкогольні напої особам, які не досягли 18 років.
      </p>
    </Container>
  );
}
