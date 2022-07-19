import React from "react";
import { Route, Switch, Redirect, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { AnimatePresence } from "framer-motion";

import Notification from "./components/Layout/Notifaction";
import Header from "./components/Navigation/Header";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import CartPage from "./pages/CartPage";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage"
import AuthPage from "./pages/AuthPage";
import PasswordResetPage from "./pages/PasswordResetPage";
import CheckoutPage from "./pages/CheckoutPage";
import CheckoutMsgPage from "./pages/CheckoutMsgPage";
import PhoneProductsPage from "./pages/PhoneProductsPage";
import SpeakerProductsPage from "./pages/SpeakerProductsPage"
import ComputerProductsPage from "./pages/ComputerProductsPage";
import HomeAppliancesProductsPage from "./pages/HomeAppliancesProductsPage";
import GameProductsPage from "./pages/GameProductsPage";
import TelevisionSetProductsPage from "./pages/TelevisionSetProductsPage";

function App() {
  const loggedIn = useSelector(state => state.auth.isLoggedIn)
  const notification = useSelector(state => state.ui.notification)

  const location = useLocation();

  return (
    <>
      {
        notification && (
          <Notification
            status={notification.status}
            title={notification.title}
            message={notification.message}
          />
        )
      }
      <Header />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.key}>
          <Route path='/' exact>
            <HomePage />
          </Route>
          {
            !loggedIn && (
              <Route path='/auth'>
                <AuthPage />
              </Route>
            )
          }
          <Route path='/cart'>
            <CartPage />
          </Route>
          <Route path='/auth-password-reset'>
            <PasswordResetPage />
          </Route>
          {
            loggedIn && (
              <Route path='/checkout' exact>
                <CheckoutPage />
              </Route>
            )
          }
          {
            loggedIn && (
              <Route path='/checkout/msg'>
                <CheckoutMsgPage />
              </Route>
            )
          }
          <Route path='/products/allProducts' exact>
            <ProductsPage />
          </Route>
          <Route path='/products/allProducts/:productId' >
            <ProductDetailsPage />
          </Route>
          <Route path='/products/phones'>
            <PhoneProductsPage />
          </Route>
          <Route path='/products/speakers'>
            <SpeakerProductsPage />
          </Route>
          <Route path='/products/computers'>
            <ComputerProductsPage />
          </Route>
          <Route path='/products/game-consoles'>
            <GameProductsPage />
          </Route>
          <Route path='/products/television-sets'>
            <TelevisionSetProductsPage />
          </Route>
          <Route path='/products/home-appliances'>
            <HomeAppliancesProductsPage />
          </Route>
          <Route path='*'>
            <Redirect to='/' />
          </Route>
        </Switch>
      </AnimatePresence>
    </>
  );
}

export default App;
