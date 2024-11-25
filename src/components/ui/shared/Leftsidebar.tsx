import { sidebarLinks } from "@/constants";
import { link } from "fs";
import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { INavLink } from "../types"; // Update the import path for INavLink
import { Button } from "../button";
const Leftsidebar = () => {

  const{pathName} = useLocation();
  return (
    <nav className="leftsidebar">
      <div className=" flex flex-col gap-4">
        <Link to="/" className="flex gap-3 items-center">
          {/* <p>logo</p> */}
          <img
            src="/assets/images/kivik_bg.svg"
            alt="logo"
            width={130}
            height={326}
          />
        </Link>
        <Link to={"/profile/"} className="flex gap-3 items-center">
          <img
            src="/assets/images/u.jpeg"
            alt="profile"
            className="h-14 w-14 rounded-full"
          />
          <div className="flex flex-col">    
            <p className="body-bold text-white">Balu Sri</p>
            <p className="small-regular text-white">@balusri</p>
          </div>
        </Link>

        <ul className="flex flex-col  gap-6">
          {/* <Link to={"/home"} className="flex gap-3 items-center"> 
          
          <img
            src="/assets/icons/person.svg"
            alt="profile"
            className="h-14 w-14 rounded-full"
          />
          </Link> */}
          <li className="leftsidebar-link">
            <NavLink className="flex gap-4 items-center p-4" to={"/home"}>
              <img src="/assets/icons/home.svg"></img>
              Home
            </NavLink>
          </li>
          <li className="leftsidebar-link">
            <NavLink className="flex gap-4 items-center p-4" to={"/progress"}>
              <img src="/assets/icons/progress.svg"
              className="group-hover:invert-red"
              ></img>
              Progress
            </NavLink>
          </li><li className="leftsidebar-link">
            <NavLink className="flex gap-4 items-center p-4" to={"/chat"}>
              <img src="/assets/icons/chat.svg"></img>
              Chat
            </NavLink>
          </li><li className="leftsidebar-link">
            <NavLink className="flex gap-4 items-center p-4" to={"/report"}>
              <img src="/assets/icons/report.svg"></img>
              Report
            </NavLink>
          </li>
        </ul> 

      </div>
      <div className="flex gap-4">
          <Button
            variant="ghost"
            className="shad-button_ghost"
            // onClick={signout}
          >
            <img src="/assets/icons/logout.svg" 
            className="invert-white"
            alt="logout" />
          </Button>
          {/* <Link to={"/profile"} className="flex-center gap-3">
            <img
              src="/assets/icons/person.svg"
              // need to addd dynamic user profile pic

              alt="profile"
              className="invert-0 h-8 w-8 rounded-full"
            />
          </Link> */}
        </div>
    </nav>
  );
};

export default Leftsidebar;
