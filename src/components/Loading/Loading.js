import logo from "../../images/logo.png";

export default function Loading() {
  return (
    <div className="loader">
      <div className="lds-circle">
        <img src={logo} alt="logo loader" />
      </div>
    </div>
  );
  // <div className="loader">
  //   <div className="eye-outer">
  //     <div className="eye-inner">
  //       <div className="inner-circle"></div>
  //     </div>
  //   </div>
  // </div>
}
