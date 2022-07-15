import { Link } from "react-router-dom";
import redWine from "../../../images/drinks/redWine.svg";

export default function RedWine() {
  return (
    <>
      <Link to="/red-wine" className="forrest__hotdrinks--item">
        <div className="forrest__hotdrinks--link">
          <img src={redWine} alt="hot drinks" width="35" height="30" />
          <span className="forrest__hotdrinks--text">Червоні вина</span>
        </div>
      </Link>
    </>
  );
}
