import { NavLink } from "react-router-dom";
import Container from "../Container/Container";
import Header from "../Header/Header";
import Social from "../Social/Social";

export default function MainPage() {
  return (
    <Container>
      <Header />
      <div className="forrest__nav">
        <p className="forrest__nav--text">Мені більше 18 років</p>
        <div className="forrest__nav--btn">
          <NavLink className="forrest__nav--link" to="/non-alcohol">
            НІ
          </NavLink>

          <NavLink className="forrest__nav--link" to="/full-list">
            ТАК
          </NavLink>
        </div>
      </div>
      <Social />
      <p
        style={{
          fontFamily: "Roboto",
          fontStyle: "normal",
          fontSize: "12px",
          fontWeight: 300,
          lineHeight: "14px",
          letterSpacing: "0em",
          textAlign: "center",
          color: "#FFFFFF",
          margin: "0 48px 52px",
        }}
      >
        Ми не продаємо алкогольні напої особам, які не досягли 18 років.
      </p>
    </Container>
  );
}
