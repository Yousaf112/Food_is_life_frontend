import logo from "./logo.svg";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Homepage";
import LoginPageNGO from "./pages/LoginPageNGO";
import LoginPageRestaurants from "./pages/LoginPageRestaurants";
import SignupPageNGO from "./pages/SignupPageNGO";
import SignupPageRestaurants from "./pages/SignupPageRestaurants";
import Dashboard from "./containers/Dashboard";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Homepage />} />
          </Route>
          <Route path="/LoginForRestaurants">
            <Route index element={<LoginPageRestaurants />} />
          </Route>
          <Route path="/SignupForRestaurants">
            <Route index element={<SignupPageRestaurants />} />
          </Route>
          <Route path="/LoginForNGO">
            <Route index element={<LoginPageNGO />} />
          </Route>
          <Route path="/SignupForNGO">
            <Route index element={<SignupPageNGO />} />
          </Route>
          <Route path="/Dashboard">
            <Route index element={<Dashboard />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
