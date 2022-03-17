import * as React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard"
import Transactions from "./pages/transactions/Transactions"
import Payouts from "./pages/payouts/Payouts"
import Users from "./pages/users/Users"
import Sidebar from "./components/Sidebar"
import ErrorPage from "./pages/ErrorPage";
import Footer from "./components/Footer";

export default function App() {
  return (
    <Router>
      <Sidebar />
      <Routes>
        <Route path="/" element={ <Dashboard /> } />
        <Route path="/dashboard" element={ <Dashboard /> } />
        <Route path="/transactions" element={ <Transactions /> } />
        <Route path="/payouts" element={ <Payouts /> } />
        <Route path="/users" element={ <Users /> } />
        <Route path="*" element={ <ErrorPage /> } />
      </Routes>
      <Footer />
    </Router>
  );
}

