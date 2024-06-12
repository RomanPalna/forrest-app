import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
import { getValue } from "../../redux/header/header-action";

export default function Header() {
  const active = useSelector((state) => state.header.value);
  const dispatch = useDispatch();

  const handleActive = () => dispatch(getValue(false));

  return (
    <div className={active ? "header--active" : "header"}>
      <Link to="/" onClick={handleActive}>
        <img
          className={active ? "header__logo--active" : "header__logo"}
          src={logo}
          alt="ForRest Logo"
        />
      </Link>
    </div>
  );
}
