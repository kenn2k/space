import { Route, Routes } from "react-router";
import "./App.css";
import HeaderPage from "./components/pages/header/HeaderPage";
import Layout from "./components/UI/Layout";
import RegisterPage from "./components/pages/register/RegisterPage";
import Slider from "./components/pages/slider/Slider";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HeaderPage />} />
        <Route path="space" element={<Slider />} />

        <Route path="register" element={<RegisterPage />} />
      </Route>
    </Routes>
  );
}

export default App;
