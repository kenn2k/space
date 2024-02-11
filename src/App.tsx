import { Route, Routes } from "react-router";
import "./App.css";
import HeaderPage from "./components/pages/header/HeaderPage";
import Layout from "./components/UI/Layout";
import RegisterPage from "./components/pages/register/RegisterPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HeaderPage />} />
        <Route path="space" element={"space"} />
        <Route path="about" element={"about"} />
        <Route path="register" element={<RegisterPage />} />
      </Route>
    </Routes>
  );
}

export default App;
