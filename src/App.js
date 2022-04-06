import React, { Suspense, lazy, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Provider, useDispatch } from 'react-redux';
import store from "./context/redux/store";
import DrawerMenu from "./components/DrawerMenu";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ToastContext from "./context/ToastContext";
import ToastNotification from "./components/Toast alerts/ToastNotification";
import TransactionDetails from "./pages/transactions/TransactionDetails";
import DetailsDrawer from "./components/DetailsDrawer";

const Transactions = lazy(() => import("./pages/transactions/Transactions"));
const Payouts = lazy(() => import("./pages/payouts/Payouts"));
const Users = lazy(() => import("./pages/users/Users"));
const ErrorPage = lazy(() => import("./pages/ErrorPage"));
const Dashboard = lazy(() => import("./pages/dashboard/Dashboard"));
const UserDetails = lazy(() => import("./pages/users/UserDetails"));

export default function App() {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [toastState, setToastState] = useState({});

  const handleDrawerOpen = () => setOpen(true);
  const handleDrawerClose = () => setOpen(false);

  return (
    <Provider store={ store }>
      <ToastContext.Provider value={ { toastState, setToastState } }>
        <>
          <Router>
            <ToastNotification />
            <DetailsDrawer />
            <Header handleDrawerOpen={ handleDrawerOpen } open={ open } />
            <DrawerMenu handleDrawerClose={ handleDrawerClose } open={ open } />
            <Suspense fallback={ <div>{ t("loading_message") }</div> }>
              <Routes>
                <Route path="/" element={ <Dashboard /> } />
                <Route path="/dashboard" element={ <Dashboard /> } />
                <Route path="/transactions" element={ <Transactions /> } />
                <Route path="/transactions/:id" element={ <TransactionDetails /> } />
                <Route path="/payouts" element={ <Payouts /> } />
                <Route path="/users" element={ <Users /> } />
                <Route path="/users/:id" element={ <UserDetails /> } />
                <Route path="*" element={ <ErrorPage /> } />
              </Routes>
            </Suspense>
            <Footer />
          </Router>
        </>
      </ToastContext.Provider>
    </Provider >
  );
}