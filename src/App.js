import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { setCurrentUser } from "./Store/user/user.action";

import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
} from "./Utils/firebase/firebase.utils";

import Navigation from "./Routes/navigation/navigation.component";
import Home from "./Routes/home/home.component";
import Authentication from "./Routes/authentication/authentication.component";
import Shop from "./Routes/shop/shop.component";
import Checkout from "./Routes/checkout/checkout.component";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener(async (user) => {
      if (user) {
        await createUserDocumentFromAuth(user);
      }
      dispatch(setCurrentUser(user));
    });
    return unsubscribe;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route path="auth" element={<Authentication />} />
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
}

export default App;
