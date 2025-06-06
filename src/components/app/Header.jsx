import React ,{useContext} from "react";
import { dataContext } from "../App";
import { Link } from "react-router-dom";

import LightbulbOutlineIcon from "@mui/icons-material/LightbulbOutline";

function Header() {
  return (
    <header>
        <div className="row">
          <h1 className="col">
            <LightbulbOutlineIcon /> Keeper
          </h1>
          <div className="col d-flex justify-content-end align-items-center">
            <Link
              className="btn mx-1"
              to="/"
              style={{ background: "#164863", color: "#DDF2FD" }}
            >
              Home
            </Link>
            <Link
              className="btn mx-1"
              to="/about"
              style={{ background: "#164863", color: "#DDF2FD" }}
            >
              About
            </Link>
          </div>
        </div>
    </header>
  );
}

export default Header;
