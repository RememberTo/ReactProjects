import { React, useState } from "react";
import { Routes, Route, Link, BrowserRouter as Router } from "react-router-dom";

/// Страницы
import { Home } from "./pages/Home";
import { Shop } from "./pages/Shop";
import { Accessory } from "./pages/Accessory";
import { Support } from "./pages/Support";
import { IphonePage } from "./pages/IphonePage"
///
import { CategotyPage } from "./pages/CategotyPage";

const styles = {
  div: {
    width: "200px",
  },
};

function App() {
  const [showSubmenuShop, setComponentShow] = useState(false);
  const [showSubmenuAccessory, setComponentAccessory] = useState(false);

  return (
    <>
      <Router>
        <nav className="menu">
          <div className="pointMenu">
            <Link to="/">
              <div>Home</div>
            </Link>
          </div>
          <div className="pointMenu">
            <Link onClick={() => setComponentShow(!showSubmenuShop)}>Shop</Link>
            {showSubmenuShop && <Shop />}
          </div>
          <div className="pointMenu" >
            <Link onClick={() => {setComponentAccessory(!showSubmenuAccessory)}}>Acessory</Link>
            <div> {showSubmenuAccessory && <Accessory />}</div>
          </div>
          <div className="pointMenu">
            <Link to="/support">Support</Link>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/shop" element={<Home />}></Route>
          <Route path="/shop/:category" element={<CategotyPage />}></Route>
          <Route path="/accessory/:category" element={<CategotyPage />}></Route>
          <Route path="/support" element={<Support />}></Route>
          <Route path="/shop/Iphone" element={<IphonePage />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
