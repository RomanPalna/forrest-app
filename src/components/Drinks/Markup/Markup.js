import { useState, useEffect } from "react";
import MarkupList from "./MarkupList";

export default function Markup({ drinks, caption }) {
  const [uniq, setUniq] = useState();

  useEffect(() => {
    if (drinks) {
      const makeUniq = drinks.filter((el, id) => drinks.indexOf(el) === id);
      setUniq(makeUniq);
    }
  }, [drinks]);

  return (
    <>
      {uniq ? (
        <table className="forrest__coffee">
          <caption className="forrest__coffee--head">{caption}</caption>
          <thead>
            <tr>
              <th scope="col">Назва</th>
              <th scope="col">Ціна</th>
            </tr>
          </thead>
          <tbody>
            {uniq.map((drink) => {
              return <MarkupList key={drink.id} props={drink} />;
            })}
          </tbody>
        </table>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}
