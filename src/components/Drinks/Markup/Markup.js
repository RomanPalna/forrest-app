// import coffee from "../../../coffee.json";
import MarkupList from "./MarkupList";

export default function Markup({ drinks, caption }) {
  return (
    <>
      {drinks ? (
        <table className="forrest__coffee">
          <caption className="forrest__coffee--head">{caption}</caption>
          <thead>
            <tr>
              <th scope="col">Назва</th>
              <th scope="col">Ціна</th>
            </tr>
          </thead>
          <tbody>
            {drinks.map((drink) => {
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
