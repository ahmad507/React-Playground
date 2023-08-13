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
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

/**-----------------------------------------------------------------
 * Import View                                                     |
 * View Merupakan Kumpulan Dari Komponen                           |
 *-----------------------------------------------------------------|
 *  */
import HomeView from "../views/home/home.view";
import ProfileView from "../views/profile/profile.view";
import AboutView from "../views/about/about.view";

/**-----------------------------------------------------------------
 * Import App Layout                                               |
 * Main Layout Sebagai Outlet Dari Setiap View                     |
 *-----------------------------------------------------------------|
 *  */
import AppLayout from "../layouts/app.layout";

// Create Router Function sebagai props RouterProvider
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<AppLayout></AppLayout>}>
      {/* Route Each View Start*/}
      <Route index element={<HomeView></HomeView>}></Route>
      <Route path="about" element={<AboutView></AboutView>}></Route>
      <Route path="profile" element={<ProfileView></ProfileView>}></Route>
      {/* Route Each View End*/}
    </Route>
  )
);

function App() {
  return (
    // Bungkus Root App Menggunakan BrowserRouter dengan Menggunakan Router Profider
    <RouterProvider router={router}></RouterProvider>
  );
}

export default App;
