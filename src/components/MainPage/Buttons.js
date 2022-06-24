import { NavLink } from "react-router-dom";

export default function Buttons() {
  return (
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
  );
}
