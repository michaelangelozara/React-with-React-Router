import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import Home from "./page/Home"
import Product from "./page/Product"
import About from "./page/About"
import RootLayout from "./layout/RootLayout"
import ContactLayout from "./layout/ContactLayout"
import ContactInfo from "./components/ContactInfo"
import CountryLayout from "./layout/CountryLayout"
import Countries, { countriesLoader } from "./page/Countries"
import ParamPage, { paramPageLoader } from "./page/ParamPage"

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="product" element={<Product />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<ContactLayout />} >
          <Route path="info" element={<ContactInfo />} />
        </Route>
        <Route path="countries" element={<CountryLayout />}>
          {/* by using this technique the countriesLoader will be loaded first 
           before the Countries page renderes*/}
          <Route index element={<Countries />} loader={countriesLoader} />
        </Route>

        <Route path="param/:id" element={<ParamPage />} loader={paramPageLoader} />
      </Route>
    )
  )

  return (<RouterProvider router={router} />)
}

export default App
