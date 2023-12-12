import { Routes, Route } from "react-router-dom";

import Navigation from "./Routes/navigation/navigation.component";
import Home from "./Routes/home/home.component";
import SignIn from "./Routes/sign-in/sign-in.component";

const Shop = () => <h1>I am the shop component</h1>;

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route path="sign-in" element={<SignIn />} />
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
      </Route>
    </Routes>
  );
}

export default App;
