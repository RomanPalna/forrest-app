import Modal from "../../Modal/Modal";
import coffee from "../../../coffee.json";
import HotDrinksList from "./HotDrinksList";
import BackBtn from "./BackBtn";

export default function HotDrinks() {
  return (
    <Modal>
      <BackBtn />
      <table className="forrest__coffee">
        <caption className="forrest__coffee--head">Кава</caption>
        <thead>
          <tr>
            <th scope="col">Назва</th>
            <th scope="col">Об'єм</th>
            <th scope="col">Ціна</th>
          </tr>
        </thead>
        <tbody>
          {coffee.coffee.map((drink) => {
            return <HotDrinksList key={drink.id} props={drink} />;
          })}
        </tbody>
      </table>
    </Modal>
  );
}
