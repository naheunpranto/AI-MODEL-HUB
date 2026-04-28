import { useState } from "react";
import "./App.css";
import Banner from "./Banner/Banner";
import Cart from "./Cart/Cart";
import Footer from "./Footer/Footer";
import Models from "./Models/Models";
import Navbar from "./Navbar/Navbar";

const getModels = async () => {
  const res = await fetch("/models.json");
  return res.json();
};

const modelPromise = getModels();

function App() {

  const [activeTab, setActiveTab] = useState("model");
  const [carts, setCarts] = useState([])
  


  return (
    <>
      <Navbar />

      <Banner />

      {/* name of each tab group should be unique */}
      <div className="tabs tabs-box justify-center bg-transparent">
        <input
          type="radio"
          name="my_tabs_1"
          className="tab rounded-full w-40"
          aria-label="Models"
          onClick={() => setActiveTab("model")}
          defaultChecked
        />
        <input
          type="radio"
          name="my_tabs_1"
          className="tab rounded-full w-40"
          aria-label={`Cart (${carts.length})`}
          onClick={() => setActiveTab("cart")}
        />
      </div>

      {activeTab === "model" && <Models modelPromise={modelPromise} carts = {carts} setCarts = {setCarts}/>}

      {activeTab === "cart" && <Cart carts = {carts} setCarts = {setCarts}/>}

      <Footer />
    </>
  );
}

export default App;
