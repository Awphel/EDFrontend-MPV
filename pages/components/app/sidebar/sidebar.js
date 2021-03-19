import Link from 'next/link';
import { useState } from "react";
import { toggleSidebar } from "../navbar/navbar.js";

export default function SideBar() {

  const projectList = [
    {
      name: "Gate controller",
      logic: "False",
      pcb: "False",
      pcbsize: 1,
      modules: [ 'temperature',
      'motordriver',
      'lightsensor', ]
    },
    {
      name: "Awesome Project",
      logic: "False",
      pcb: "True",
      pcbsize: 2,
      modules:
        [ 'temperature',
        'motordriver',
        'lightsensor' ]
    },
    {
      name: "Water tank manager",
      logic: "True",
      pcb: "True",
      pcbsize: 3,
      modules:
        [ 'motionsensor',
        'motordriver',
        'lightsensor' ]
    },
    {
      name: "Temperature controller",
      logic: "False",
      pcb: "False",
      pcbsize: 1,
      modules:
          [ 'temperature',
          'motordriver',
          'lightsensor' ]
    },
    {
      name: "Sprinkler",
      logic: "False",
      pcb: "False",
      pcbsize: 3,
      modules:
      [ 'motionsensor',
      'motordriver',
      'lightsensor' ]
    },
  ];

  return (<>

  <div  id="sidebar_state" className="sidebar_closed" style={{ display: "none"}}>

  {/* Nav LINKS DISPLAYED WHEN SIDEBAR IS expanded*/}
    <div id="NavLinks_CLOSED" className="NavLinks_Container_OPEN">
              <ul>
                <li className = "dash">
                  <a className = "nav-icon"
                href = "/dashboard" >
                <
                img
                src = "/icons/home.svg"
                className = "NavButtons"
                title = "Dashboard"
                alt = "logo" / >
                </a>
                <a className="nav-item-link" href = "/dashboard">Dashboard </a>
                </li>
                <li id = "project-togl" className = "project-togl" onClick={() => toggleProjects()}>
                  <
                  img
                  src = "/icons/folder.svg"
                  className = "NavButtons"
                  title = "Dashboard"
                  alt = "logo" / >
                  Projects<img style={{ transform: "rotate(0deg)"}} id = "caret" src = "/icons/caret_down.png" className = "caret"/>
                </li>
              </ul>
    </div>
    <div id = "project-list" className="project-list" style={{ display: "none"}}>
      <ul>
        {projectList.map((item, index) => (
          <Link as={`/${item.name}`} href={{ pathname: '/[app]' , query: {project: item.name, pcbsize: item.pcbsize, loadedmodules: item.modules}}}>
          <li className="project-item" key={index}>
            {item.name}
          </li>
          </Link>
        ))}
      </ul>
    </div>
    <img src="/icons/pro-button.svg" className ="upgrade" />
    </div>
    <div id="curtain" className="curtain" onClick={() => toggleSidebar()} style={{ width: "0"}}>
    </div>

{/* PADDING SHORTHAND - top,right,bottom,left */}
        <
      style jsx global > {
        `
        .curtain {
          width: 100%;
          z-index: 900;
          height: 100vh;
          transition: width .5s;
          position: absolute;
          background-color: #000000ab;
        }
        .caret {
          width: .85em;
          margin-left: 2em;
        }
        .sidebar_open{
          background-color: #ffffff;
          padding: 1em 1em 0 3em;
          transition: width .5s;
          position: absolute;
          font-size: .80em;
          color: #fff;
          z-index: 1000;
          height: 100vh;
          width: 250px;
          left: 0px;
        }
        .dash {
          margin-bottom: 2em;
          border-bottom: 1px solid #EDEDED;
        }
        .project-list{
          width: 90%;
          height: 300px;
          color: #05BDC9;
          hyphens: auto;
          transition: height .5s;
          padding: 10px 0 10px 0;
          overflow-y: auto;
        }
        .project-list li {
          line-height: 3em;
          list-style-type: circle;
        }
        .project-list li:hover {
          color: grey;
        }
        .project-list ul {
          margin: 0;
          list-style-type: circle;
        }
        .project-togl {
          color: #222;
        }
        .sidebar_closed{
          background-color: #041125;
          padding: 1em .2em 0 .65em;
          transition: width .5s;
          position: absolute;
          line-height: .1em;
          overflow: hidden;
          font-size: .80em;
          height: 100vh;
          z-index: 1000;
          width: 65px;
          left: 0px;
        }
        .nav-item-link {
          color: #222!important;
          font-size: .8em;
          cursor: pointer;
        }
        .nav-item-link:hover {
          text-decoration: none;
          color: #ffffff;
          opacity: .2;
        }
        .nav-icon {
          color: #fff!important;
        }
        .nav-icon:hover {
          text-decoration: none;
          opacity: .2;
        }
        .NavButtons{
          width: 1.5em;
          height: 1.5em;
          transition: .5s;
          margin-right: 1em;
          cursor: pointer;
        }
        .NavButtons:hover {
          opacity: .2;
        }
        .upgrade {
          bottom: 30px;
          height: 5em;
          position: absolute;
        }
        .upgrade:hover {
          opacity: .5;
        }
        .NavLinks_Container_OPEN{
          width: 70%;
          margin-top: 2em;
          transition: position .23s;
          visibility: hidden;
          display: block;
        }
        ul {
         list-style-type: none;
         padding-inline-start: 5px;
         margin-top: 5em;
       }
       li {
         line-height: 4em;
         cursor: pointer;
       }
                `
      } < /style> < / >
    )
  }

//This function handles the projectlist toggle
export function toggleProjects() {
  var d = document.getElementById("project-list");
  var c = document.getElementById("project-togl");
  var e = document.getElementById("caret");
  if (d.style.display === "none"){
    d.style.display = "block";
    c.style.color = "#05BDC9";
    e.style.transform ="rotate(180deg)";
  }else{
    d.style.display = "none";
    c.style.color = "#222";
    e.style.transform ="rotate(0deg)";
  }
}
