import { useContext } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import LoginPage from "./pages/Login";
import SignupPage from "./pages/SignUp";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/Contact";
import Page404 from "./pages/Page404";
import NavigationBar from "./Components/NavigationBar";
import Footer from "./Components/FooterSection";
import CategoriesPage from "./pages/CategoriesPage";
import ProductPage from "./pages/ProductPages";
// import ImageSection from './Components/ImageSection'
import { GlobalContext } from "./Context/context";

function App() {
  // const [user, setUser] = useState(true)

  const { state, dispatch } = useContext(GlobalContext);

  return (
    <>
      <NavigationBar />

      {state.user ? (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/Products/:productID" element={<ProductPage />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          {/* Update component name here */}
          <Route path="/Products/category/:categoryName" element={<CategoriesPage />}
          />
          <Route path="*" element={<Page404 />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<LoginPage />} />{" "}
          {/* Update component name here */}
          <Route path="/SignUp" element={<SignupPage />} />{" "}
          {/* Update component name here */}
          <Route path="*" element={<Navigate to="/Login" replace={true} />} />
        </Routes>
      )}

      <Footer />
    </>
  );
}

export default App;
