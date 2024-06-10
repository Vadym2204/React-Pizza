import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home/Home.tsx";
import { Provider } from "react-redux";
import store from "./redux/store.ts";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Cart from "./pages/Cart/Cart.tsx";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  },
  {
    path: '/Cart',
    element: <Cart/>
  }
])

const rootElem = document.getElementById("root")

if (rootElem) {
const root = ReactDOM.createRoot(rootElem);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/>      
    </Provider>
  </React.StrictMode>
);
}