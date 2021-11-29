import ReportBanner from "./components/ReportBanner";
import Header from "./components/Header";
import ModelS from "./components/Model-S";
import ModelY from "./components/Model-Y";
import Model3 from "./components/Model-3";
import ModelX from "./components/Model-X";
import SolarPanel from "./components/SolarPanels";
import SolarRoof from "./components/SolarRoof";
import Accessories from "./components/Accesories";
import Footer from "./components/Footer";
import Modal from "./components/Modal";
import { useState } from "react";
import "./App.css";

function App() {
  const [state, setState] = useState(false);
  function showModal() {
    setState(true);
  }
  function hideModal() {
    setState(false);
  }
  return (
    <>
      <section>
        <ReportBanner />
        <Header show={showModal} />
        <ModelS />
      </section>
      <section>
        <ModelY />
      </section>
      <section>
        <Model3 />
      </section>
      <section>
        <ModelX />
      </section>
      <section>
        <SolarPanel />
      </section>
      <section>
        <SolarRoof />
      </section>
      <section>
        <Accessories />
        <Footer />
      </section>
      {state && <Modal hide={hideModal} />}
    </>
  );
}

export default App;
