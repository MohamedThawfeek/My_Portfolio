import React, { useEffect, useState } from "react";
import Home from "./pages/home/Home";
import app from "./App.module.css";
import { ArrowUpward } from "@mui/icons-material";
import { Link } from "react-scroll";
import load from "./assets/loading.gif";

const App = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  return (
    <div className={app.container}>
      {loading ? (
        <div className={app.loader}>
          <img src={load} alt="" />
        </div>
      ) : (
        <div id="main">
          <Home />
          <div className={app.arrow}>
            <Link to="main" smooth={true} duration={800}>
              <ArrowUpward className={app.up} />
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
