// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from "./app.module.css";
import {
  Footer,
  DrawerMenu,
  Header,
  ToastNotification,
} from "@myorg/shared/components";
import { DetailsDrawer } from "@myorg/details-drawer";
import React, { Suspense, lazy, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Provider } from "react-redux";
import { store } from "@myorg/state";
import { ToastContext } from "@myorg/state";

const TransactionsList = lazy(() =>
  import(
    /* webpackPrefetch: true, webpackChunkName:"transactionsList" */ "@myorg/transactions"
  ).then(({ TransactionsList }) => ({
    default: TransactionsList,
  }))
);

const Dashboard = lazy(() =>
  import(
    /* webpackPrefetch: true, webpackChunkName:"dashboard" */ "@myorg/dashboard"
  ).then(({ Dashboard }) => ({
    default: Dashboard,
  }))
);

const UsersList = lazy(() =>
  import(
    /* webpackPrefetch: true, webpackChunkName:"usersList" */ "@myorg/users"
  ).then(({ UsersList }) => ({
    default: UsersList,
  }))
);

const Payouts = lazy(() =>
  import(
    /* webpackPrefetch: true, webpackChunkName:"payouts" */ "@myorg/payouts"
  ).then(({ Payouts }) => ({
    default: Payouts,
  }))
);

const ErrorPage = lazy(() =>
  import(
    /* webpackPrefetch: true, webpackChunkName:"errorPage" */ "@myorg/error-page"
  ).then(({ ErrorPage }) => ({
    default: ErrorPage,
  }))
);

export function App() {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [toastState, setToastState] = useState({});

  const handleDrawerOpen = () => setOpen(true);
  const handleDrawerClose = () => setOpen(false);
  return (
    <Provider store={store}>
      <ToastContext.Provider value={{ toastState, setToastState }}>
        <Router>
          <ToastNotification />
          <DetailsDrawer />
          <Header handleDrawerOpen={handleDrawerOpen} open={open} />
          <DrawerMenu handleDrawerClose={handleDrawerClose} open={open} />
          <Suspense fallback={<div>{"Loading..."}</div>}>
            {/* the message should be replaced with t("loading_message") */}
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/transactions" element={<TransactionsList />} />
              <Route path="/transactions/:id" element={<TransactionsList />} />
              <Route path="/payouts" element={<Payouts />} />
              <Route path="/users" element={<UsersList />} />
              <Route path="/users/:id" element={<UsersList />} />
              <Route path="*" element={<ErrorPage />} />
            </Routes>
          </Suspense>
          <Footer />
        </Router>
      </ToastContext.Provider>
    </Provider>
  );
}
export default App;
