export default function Modal({ active, setActive, children }) {
  return (
    <div
      className={active ? "Modal__backdrop active" : "Modal__backdrop"}
      onClick={() => setActive(false)}
    >
      <div
        className={active ? "Modal__content active" : "Modal__content"}
        onClick={(event) => event.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
}
