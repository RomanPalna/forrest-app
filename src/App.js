import { Route, Routes } from "react-router-dom";
import Alcohol from "./components/Alcohol/Alcohol";
import MainPage from "./components/MainPage/MainPage";
import NonAlcohol from "./components/Non-alcohol/Non-alcohol";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import ProductMarkup from "./components/Drinks/MarkupProduct/MarkupProduct";
import Markup from "./components/Drinks/Markup/Markup";
import { ROUTES } from "../src/routes/ROUTES";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<MainPage />} />
        <Route path="non-alcohol" element={<NonAlcohol />} />

        <Route path="/full-list" element={<Alcohol />} />
        {ROUTES.map(({ format, route, title, types, path, children }) => (
          <Route
            key={route}
            path={route}
            element={
              <Markup
                type={types}
                format={format}
                caption={title}
                path={path}
              />
            }
          >
            {children}
          </Route>
        ))}

        <Route path="/cocktails/:id" element={<ProductMarkup />} />
        <Route path="/glass-wine/:id" element={<ProductMarkup />} />
        <Route path="/sparkling-wine/:id" element={<ProductMarkup />} />
        <Route path="/red-wine/:id" element={<ProductMarkup />} />
        <Route path="/white-wine/:id" element={<ProductMarkup />} />
        <Route path="/other-alco/:id" element={<ProductMarkup />} />


        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
