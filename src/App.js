import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LandingPage } from "./pages";
import { Header } from "./components";
import { Footer } from "./components/Footer/Footer";
import AnimalDetails from "./components/AnimalDetails";
import Home from "./pages/Home";
import History from "./pages/History";
import Team from "./pages/Team";
import Involvement from "./pages/Involvement";
import Contacts from "./pages/Contacts";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      {/* <Container fluid> */}
      <Header />
      <Routes>
        <Route index element={<LandingPage />} />
        <Route path="/animal/:id" element={<AnimalDetails />} />
        <Route index element={<Home />} />
        <Route path="/history" element={<History />} />
        <Route path="/team" element={<Team />} />
        <Route path="/involvement" element={<Involvement />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
      <Footer />
      {/* </Container> */}
    </BrowserRouter>
  );
}

export default App;
