import React from "react";
import { NavLink } from "react-router-dom";

const Bottombar = () => {
  return (

    <section className="bottom-bar">
    <ul className="bottom-bar">
      <li className="leftsidebar-link">
        <NavLink className="flex gap-4 items-center p-4" to={"/"}>
          <img src="/assets/icons/home.svg"></img>
          Home
        </NavLink>
      </li>
      <li className="bottombar-link">
        <NavLink className="flex gap-4 items-center p-4" to={"/progress"}>
          <img
            src="/assets/icons/progress.svg"
            className="group-hover:invert-red"
          ></img>
          Progress
        </NavLink>
      </li>
      <li className="leftsidebar-link">
        <NavLink className="flex gap-4 items-center p-4" to={"/chat"}>
          <img src="/assets/icons/chat.svg"></img>
          Chat
        </NavLink>
      </li>
      <li className="leftsidebar-link">
        <NavLink className="flex gap-4 items-center p-4" to={"/report"}>
          <img src="/assets/icons/report.svg"></img>
          Report
        </NavLink>
      </li>
    </ul>
    </section>
  );
};

export default Bottombar;
