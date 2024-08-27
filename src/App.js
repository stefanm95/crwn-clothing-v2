import { Route, Routes } from "react-router";

import Home from "./routes/home/home.component";
import Shop from "./routes/shop/shop.component";
import Navigation from "./routes/navigation/navigation.component";
import SignIn from "./routes/sign-in/sign-in.component";


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index={true} element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/sign-in" element={<SignIn />} />
      </Route>
    </Routes>
  );
};

export default App;
