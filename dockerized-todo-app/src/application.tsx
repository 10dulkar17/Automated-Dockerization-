import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ContextProvider } from "./contexts/app-context";

import routes from "./config/routes";

import FixedComponent from "./components/organisms/fixed-component/fixed-component";
import GlobalStyles from "./config/globalStyles";

const Application: React.FC<any> = () => {
  const renderRoutes: any = routes.map((route, index) => (
    <Route
      key={index}
      {...route}
      element={<route.element name={route.name} {...route.props} />}
    />
  ));

  return (
    <ContextProvider style={{ backgroundColor: "red" }}>
      <GlobalStyles />
      <FixedComponent />
      <BrowserRouter>
        <Routes>{renderRoutes}</Routes>
      </BrowserRouter>
    </ContextProvider>
  );
};

export default Application;
