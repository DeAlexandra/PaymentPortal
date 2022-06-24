// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';
import {
  Footer,
  DrawerMenu,
  Header,
  ToastNotification,
} from '@myorg/shared/components';
import { DetailsDrawer } from '@myorg/details-drawer';
import React, { Suspense, lazy, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Provider } from 'react-redux';
import { store } from '@myorg/state';
import { Transactions } from '@myorg/transactions';
import { Dashboard } from '@myorg/dashboard';
import { Users } from '@myorg/users';
import { ErrorPage } from '@myorg/error-page';
import { Payouts } from '@myorg/payouts';
import { ToastContext } from '@myorg/state';
// const Transactions = lazy(
//   () =>
//     import(
//       /* webpackPrefetch: true, webpackChunkName:"transactions" */ '@myorg/transactions'
//     )
// );
// const Payouts = lazy(() => import(/* webpackPrefetch: true, webpackChunkName:"payouts" */ "./domain_features/components/Payouts/Payouts"));
// const Users = lazy(
//   () =>
//     import(/* webpackPrefetch: true, webpackChunkName:"users" */ '@myorg/users')
// );
// // const ErrorPage = lazy(() => import(/* webpackPrefetch: true, webpackChunkName:"errorPage"*/ "./domain_features/components/ErrorPage"));
// const Dashboard = lazy(
//   () =>
//     import(
//       /* webpackPrefetch: true, webpackChunkName:"dashboard"*/ '@myorg/dashboard'
//     )
// );

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
          <Suspense fallback={<div>{'Loading...'}</div>}>
            {/* the message should be replaced with t("loading_message") */}
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/transactions" element={<Transactions />} />
              <Route path="/transactions/:id" element={<Transactions />} />
              <Route path="/payouts" element={<Payouts />} />
              <Route path="/users" element={<Users />} />
              <Route path="/users/:id" element={<Users />} />
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
