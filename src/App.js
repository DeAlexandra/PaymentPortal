import React, { Suspense, lazy, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Provider } from 'react-redux';
import store from "../src/shared/context/redux/store";
import DrawerMenu from "./shared/components/navigation/DrawerMenu";
import Header from "./shared/components/header/Header";
import Footer from "./shared/components/footer/Footer";
import ToastContext from "../src/shared/context/ToastContext";
import ToastNotification from "./shared/components/ToastNotification";
import DrawerDetails from "./shared/components/form/DrawerDetails";

const Transactions = lazy(() => import(/* webpackPrefetch: true, webpackChunkName:"transactions" */ "./domain_features/components/Transactions/Transactions"));
const Payouts = lazy(() => import(/* webpackPrefetch: true, webpackChunkName:"payouts" */ "./domain_features/components/Payouts/Payouts"));
const Users = lazy(() => import(/* webpackPrefetch: true, webpackChunkName:"users" */ "./domain_features/components/Users/Users"));
const ErrorPage = lazy(() => import(/* webpackPrefetch: true, webpackChunkName:"errorPage"*/ "./domain_features/components/ErrorPage"));
const Dashboard = lazy(() => import(/* webpackPrefetch: true, webpackChunkName:"dashboard"*/ "./domain_features/components/Dashboard/Dashboard"));

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
            <DrawerDetails />
            <Header handleDrawerOpen={ handleDrawerOpen } open={ open } />
            <DrawerMenu handleDrawerClose={ handleDrawerClose } open={ open } />
            <Suspense fallback={ <div>{ t("loading_message") }</div> }>
              <Routes>
                <Route path="/" element={ <Dashboard /> } />
                <Route path="/dashboard" element={ <Dashboard /> } />
                <Route path="/transactions" element={ <Transactions /> } />
                <Route path="/transactions/:id" element={ <Transactions /> } />
                <Route path="/payouts" element={ <Payouts /> } />
                <Route path="/users" element={ <Users /> } />
                <Route path="/users/:id" element={ <Users /> } />
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