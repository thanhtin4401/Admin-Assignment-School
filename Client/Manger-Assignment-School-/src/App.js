import "./App.css";
import React, { useEffect } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "./pages/LoginPage/Login";
import Register from "./pages/Register";

import DetailPage from "./pages/DetailPage";

import RequireAuth from "./component/App/requestAuth";
import RequirePage from "./component/App/requestPage";

import Error from "./pages/Error/404";
import i18next from "i18next";
import localStorageService from "./services/localStoreService";
import HomePage from "./pages/HomePage/HomePage";
import AuthLayout from "./layout/AuthLayout";
import RootLayout from "./layout/rootLayout";
import ClassPage from "./pages/ClassPage/ClassPage";
import ExamPage from "./pages/ExamPage/ExamPage";

function App() {
  useEffect(() => {
    const lang = JSON.parse(localStorageService.get("lang")) || "EN";
    i18next.changeLanguage(lang);
    console.log(lang);
  }, []);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <RequireAuth>
                <RootLayout />
              </RequireAuth>
            }
          >
            <Route path="class-page" element={<ClassPage />} />
            <Route path="exam-page" element={<ExamPage />} />
            <Route path="Home" element={<HomePage />} />
          </Route>
          <Route
            path="/"
            element={
              <RequirePage>
                <AuthLayout />
              </RequirePage>
            }
          >
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Route>
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
