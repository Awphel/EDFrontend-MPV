import Link from 'next/link';
import { useState } from "react";
import { toggleSidebar } from "../navigation/navigation.js";
export default function SideBar() {

  return (<>

  <div  id="sidebar_state" className="sidebar_closed" style={{ width: "65px"}}>

  <div className = "CreateButton_container">
          <a onClick={() => opencreateModal()} className="nav-icon">
              <
              img
              src = "/icons/rocket.svg"
              className = "CreateButton"
              title = "Take me home"
              alt = "logo" / >
            </a>
            <a  onClick={() => opencreateModal()} className = "nav-item-link"
                  >
                  Create new project
                <
                  /a >
  </div>

  {/* Nav LINKS DISPLAYED WHEN SIDEBAR IS expanded*/}
    <div id="NavLinks_CLOSED" className="NavLinks_Container_OPEN" >
              <ul>
                <li>
                  <a className = "nav-icon"
                href = "#" >
                <
                img
                src = "/icons/home.svg"
                className = "NavButtons"
                title = "Dashboard"
                alt = "logo" / >
                </a>
                <a className="nav-item-link" href = "#">Dashboard </a></li>

                <li>
                  <a onClick={() => toggleContent()} className = "nav-icon"
                >

                <
                img
                src = "/icons/folder.svg"
                className = "NavButtons"
                title = "Projects"
                alt = "logo" / >
                </a>

                <a onClick={() => toggleContent()} className="nav-item-link" >My projects</a>
                </li>

                <li>
                <a className = "nav-icon"
                href = "/#landingUS" >
                <
                img
                src = "/icons/file.svg"
                className = "NavButtons"
                title = "Drafts"
                alt = "logo" / ></a>

                 <a  className="nav-item-link" href = "#">Drafts</a>
                 </li>
              </ul>
    </div>
{/* Nav LINKS DISPLAYED WHEN SIDEBAR IS minimized*/}
    <div id="NavLinks_OPEN" className="NavLinks_Container_CLOSED" style={{ display:"block"}}>
              <ul>
                <li>
                  <a className = "nav-icon"
                href = "#" >
                <
                img
                src = "/icons/home.svg"
                className = "NavButtons"
                title = "Dashboard"
                alt = "logo" / >
                </a></li>
                <li>
                  <a onClick={() => toggleContent()} className = "nav-icon"
                href = "#" >
                <
                img
                src = "/icons/folder.svg"
                className = "NavButtons"
                title = "Projects"
                alt = "logo" / >
                </a>
                </li>

                <li>
                <a className = "nav-icon"
                href = "/#landingUS" >
                <
                img
                src = "/icons/file.svg"
                className = "NavButtons"
                title = "Drafts"
                alt = "logo" / ></a>
                 </li>
              </ul>
    </div>
    <img src="/icons/pro-button.svg" className ="upgrade" />
    </div>

    {/* Click anywhere dismiss area */ }
    <div id="curtain" className='curtain' onClick={() => toggleSidebar()} style={{ display: "none"}}>
</div>

{/* PADDING SHORTHAND - top,right,bottom,left */}
        <
      style jsx global > {
        `
        .curtain {
          width: 100%;
          height: 100vh;
          z-index: 1000;
          position: absolute;
          background-color: #000000ab;
        }
        .sidebar_open{
          background-color: #041125;
          padding: 1em 1em 0 3em;
          transition: width .5s;
          position: absolute;
          font-size: .80em;
          opacity: .9;
          color: #fff;
          z-index: 1001;
          height: 100vh;
          width: 250px;
          left: 0px;
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
          color: #ffffff!important;
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
          filter: invert(100%);
          margin-right: 1em;
          cursor: pointer;
        }
        .upgrade {
          bottom: 30px;
          height: 5em;
          position: absolute;
        }
        .upgrade:hover {
          opacity: .5;
        }
        .CreateButton {
          width: 3.5em;
          height: 3.5em;
          filter: invert(100%);
          padding: .25em;
          cursor: pointer;
          margin-right: 1em;
          margin-bottom: .5em;
          border-radius: 100%;
          -webkit-transform:rotate(-45deg);
          -moz-transform: rotate(-45deg);
          -ms-transform: rotate(-45deg);
          -o-transform: rotate(-45deg);
          transform: rotate(-45deg);
        }
        .CreateButton_container{
          margin-top: 5em;
          line-height: 1em;
          padding: 0;
        }
        .NavLinks_Container_CLOSED{
          margin-top: 2em;
          margin-left: .5em;
          transition: position .23s;
          visibility: visible;
          position: absolute;
        }
        .NavLinks_Container_OPEN{
          margin-top: 2em;
          transition: position .23s;
          visibility: hidden;
          position: absolute;
        }
        ul {
         list-style-type: none;
         padding-inline-start: 5px;
         margin-top: 5em;
       }
       li {
         line-height: 4em;
       }
                `
      } < /style> < / >
    )
  }
  //
  export function toggleContent() {
  var x = document.getElementById("RecommendedList");
  var y = document.getElementById("ProjectList");
  var z = document.getElementById("dualFuntion-DIV");
  if (x.style.display === "block") {
    x.style.display = "none";
    y.style.display = "block";
    z.style.height = "295px";

  } else {
    x.style.display = "block";
    y.style.display = "none";
    z.style.height = "240px";

  }
}
//
export function opencreateModal() {
  var d = document.getElementById("newproject-modal");
  if (d.style.display === "none"){
    d.style.display = "block";
  }else{
    d.style.display = "none";
  }
}
