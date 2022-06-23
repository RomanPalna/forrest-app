import { GoChevronLeft } from "react-icons/go";

export default function Modal({ active, setActive, children }) {
  return (
    <div
      className={active ? "Modal__backdrop active" : "Modal__backdrop"}
      onClick={() => setActive(false)}
    >
      <button
        className="modal__button"
        type="button"
        onClick={() => setActive(false)}
      >
        <GoChevronLeft fill={"#E4E4E4"} />
      </button>
      <div
        className={active ? "Modal__content active" : "Modal__content"}
        onClick={(event) => event.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
}
