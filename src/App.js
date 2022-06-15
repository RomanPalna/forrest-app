import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import MainPage from "./components/MainPage/MainPage";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<MainPage />} />
        <Route
          path="/non-alcohol"
          element={<div>Тут маэ бути безалкоголка</div>}
        />
        <Route path="/full=price" element={<div>Full price</div>} />
        <Route path="*" element={<div>Page Not Found</div>} />
      </Routes>
    </>
  );
}

export default App;
