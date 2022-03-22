import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
const Transactions = lazy(() => import("./pages/transactions/Transactions"));
const Payouts = lazy(() => import("./pages/payouts/Payouts"));
const Users = lazy(() => import("./pages/users/Users"));
const ErrorPage = lazy(() => import("./pages/ErrorPage"));
const Dashboard = lazy(() => import("./pages/dashboard/Dashboard"));

export default function App() {
  return (
    <Router>
      <Sidebar />
      <Suspense fallback={ <div>Loading page...</div> }>
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