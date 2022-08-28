import { Link } from "react-router-dom";
import cognac from "../../../images/drinks/cognac.svg";

export default function BrandyCognac() {
  return (
    <>
      <Link to="/brandy-cognac" className="forrest__hotdrinks--item">
        <div className="forrest__hotdrinks--link">
          <img src={cognac} alt="hot drinks" width="35" height="30" />
          <span className="forrest__hotdrinks--text">Коньяк, Бренді</span>
        </div>
      </Link>
    </>
  );
}
