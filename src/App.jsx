import { ThemeProvider } from "@emotion/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import { Home } from "./pages/Home/Home";
import { theme } from "./hooks/theme";
import { ProductDetails } from "./pages/Products/ProductDetails";
import { Products } from "./pages/Products/Products";
import { About } from "./pages/About/About";
import { Contact } from "./pages/Contact/Contact";
import { Services } from "./pages/Service/Services";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/products' element={<Products />} />
            <Route path='/product-details/:slug' element={<ProductDetails />} />
            <Route path='/about-us' element={<About />} />
            <Route path='/services' element={<Services />} />
            <Route path='/contact-us' element={<Contact />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
