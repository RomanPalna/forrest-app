import { Link } from "react-router-dom";
import whiteWine from "../../../images/drinks/whiteWine.svg";

export default function WhiteWine() {
  return (
    <>
      <Link to="/white-wine" className="forrest__hotdrinks--item">
        <div className="forrest__hotdrinks--link">
          <img src={whiteWine} alt="hot drinks" width="35" height="30" />
          <span className="forrest__hotdrinks--text">Білі Вина</span>
        </div>
      </Link>
    </>
  );
}
