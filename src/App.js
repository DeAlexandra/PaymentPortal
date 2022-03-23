import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import { useTranslation } from "react-i18next";
const Transactions = lazy(() => import("./pages/transactions/Transactions"));
const Payouts = lazy(() => import("./pages/payouts/Payouts"));
const Users = lazy(() => import("./pages/users/Users"));
const ErrorPage = lazy(() => import("./pages/ErrorPage"));
const Dashboard = lazy(() => import("./pages/dashboard/Dashboard"));

export default function App() {
  const { t } = useTranslation();
  return (
    <Router>
      <Sidebar />
      <Suspense fallback={ <div>{ t("loading_message") }</div> }>
        <Routes>
          <Route path="/" element={ <Dashboard /> } />
          <Route path="/dashboard" element={ <Dashboard /> } />
          <Route path="/transactions" element={ <Transactions /> } />
          <Route path="/payouts" element={ <Payouts /> } />
          <Route path="/users" element={ <Users /> } />
          <Route path="*" element={ <ErrorPage /> } />
        </Routes>
      </Suspense>
      <Footer />
    </Router>
  );
}