/**-----------------------------------------------------------------
 * Import Styles                                                   |
 *                                                                 |
 *-----------------------------------------------------------------|
 *  */
import "./App.css";
import "../styles/core/Global.css";
/**-----------------------------------------------------------------
 * Import React Router                                             |
 *                                                                 |
 *-----------------------------------------------------------------|
 *  */
import { BrowserRouter, Routes, NavLink, Route } from "react-router-dom";

/**-----------------------------------------------------------------
 * Import View                                                     |
 * View Merupakan Kumpulan Dari Komponen                           |
 *-----------------------------------------------------------------|
 *  */
import HomeView from "../views/home/home.view";
import ProfileView from "../views/profile/profile.view";
import AboutView from "../views/about/about.view";

function App() {
  return (
    // Bungkus Root App Menggunakan BrowserRouter
    <BrowserRouter>
      {/* Navigation Header Start */}
      <header>
        <nav>
          <h1>React Router</h1>
          <NavLink to="/">Home</NavLink>
          <NavLink to="about">About</NavLink>
          <NavLink to="profile">Profile</NavLink>
        </nav>
      </header>
      {/* Navigation Header End */}

      {/* Main Content Start */}
      <main>
        <Routes>
          <Route index element={<HomeView></HomeView>}></Route>
          <Route path="about" element={<AboutView></AboutView>}></Route>
          <Route path="profile" element={<ProfileView></ProfileView>}></Route>
        </Routes>
      </main>
      {/* Main Content End */}
    </BrowserRouter>
  );
}

export default App;
