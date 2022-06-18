import Modal from "../../Modal/Modal";
import coffee from "../../../coffee.json";
import HotDrinksList from "./HotDrinksList";

export default function HotDrinks() {
  return (
    <Modal>
      <ul className="forrest__coffee">
        {coffee.coffee.map((drink) => {
          return <HotDrinksList key={drink.id} props={drink} />;
        })}
      </ul>
    </Modal>
  );
}
