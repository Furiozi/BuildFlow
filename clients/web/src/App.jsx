import React from "react";
import { RouterProvider } from "react-router-dom";
import AuthProvider from "./provider/authProvider";
import router from "./router";

//import Header from "./components/limbs/header";

import "./assets/css/tailwindcss.css";
import "./assets/css/app.css";

//        <Header />

function App() {
  return (
    <>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </>
  )
}

export default App
