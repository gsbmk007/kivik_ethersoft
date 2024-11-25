import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../button";

const Topbar = () => {
  const signout = () => {
    return console.log("clicked lsignout");
  };
  return (
    <section className="topbar">
      <div className="flex-between py-4 px-5">

        {/* Logo */}
        <Link to="/" className="flex gap-3 items-center">
          {/* <p>logo</p> */}
          <img
            src="/assets/images/kivik_bg.svg"
            alt="logo"
            width={130}
            height={326}
          />
        </Link>

        <div className="flex gap-4">
          <Button
            variant="ghost"
            className="shad-button_ghost"
            onClick={signout}
          >
            <img src="/assets/icons/logout.svg" alt="logout" />
          </Button>
          <Link to={"/profile"} className="flex-center gap-3">
            <img
              src="/assets/images/u.jpeg"
              // need to addd dynamic user profile pic

              alt="profile"
              className="h-8 w-8 rounded-full"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Topbar;
