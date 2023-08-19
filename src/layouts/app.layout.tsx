/**-----------------------------------------------------------------
 * Main App Layout                                                 |
 * Digunakan Untuk Melakukan Layouting App                         |
 * Sehingga Semua View Akan Menginduk Pada Main Layout             |
 *-----------------------------------------------------------------|
 **/

import { NavLink, Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div className="app-layout">
      {/* Navigation Header Start */}
      <header>
        <nav>
          <h1>React Router</h1>
          <NavLink to="/">Home</NavLink>
          <NavLink to="about">About</NavLink>
          <NavLink to="profile">Profile</NavLink>
          <NavLink to="help">Help</NavLink>
        </nav>
      </header>
      {/* Navigation Header End */}

      {/* Main Content Start */}
      <main>
        <Outlet />
      </main>
      {/* Main Content End */}
    </div>
  );
};

export default AppLayout;
