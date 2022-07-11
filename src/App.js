import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import Alcohol from "./components/Alcohol/Alcohol";
import MainPage from "./components/MainPage/MainPage";
import NonAlcohol from "./components/Non-alcohol/Non-alcohol";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import MenuApi from "./api/menuApi";

const menuApi = new MenuApi("https://api-eu.iiko.services", {
  "Content-type": "application/json",
});

function App() {
  const [menu, setMenu] = useState({});

  async function getMenu() {
    const accessTokenResponse = await menuApi.getAccessToken();

    const organizationsResp = await menuApi.getOrganizations(
      accessTokenResponse.token
    );

    const [organization] = organizationsResp.organizations;

    const menu = await menuApi.getMenu(organization, accessTokenResponse.token);

    setMenu(menu);
  }

  useEffect(() => {
    getMenu();
    console.log(menu);
  }, [menu]);

  return (
    <>
      <Routes>
        <Route exact path="/forrest-app" element={<MainPage />} />
        <Route path="/non-alcohol" element={<NonAlcohol />} />
        <Route path="/full-list" element={<Alcohol />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
