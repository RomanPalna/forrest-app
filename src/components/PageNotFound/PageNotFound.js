import { Link } from "react-router-dom";

export default function PageNotFound() {
  return (
    <div className="forrest__pnf">
      <p className="forrest__pnf--text">Упссс...</p>
      <p className="forrest__pnf--discr">
        Щось не так. Сторінка не знайдена{"("}
      </p>

      <Link className="forrest__pnf--button" to="/forrest-app">
        На головну
      </Link>
    </div>
  );
}
