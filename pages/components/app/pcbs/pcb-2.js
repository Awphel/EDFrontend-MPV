import Link from 'next/link';
import { useRouter } from "next/router";
import { addmoduleModal } from "../pcbs/pcb-1.js";

export default function PCBTWO() {
  const router = useRouter();
    const  { project, pcbsize, loadedmodules } = router.query; // Destructuring our router object
  return (<>

  <div className="pcb">
    <div className="primary-modules">
        <div className="mcu-module">
          <p>MCU MODULE</p>
          <p><button onClick={() => addmoduleModal()} className="module-btn">click to add</button></p>
        </div>

        <div className="power-module">
          <p>POWER MODULE</p>
          <img src="./icons/power.png" className="module-icon"/>
          <p>DC +25V / +-5V <br/>2.5A</p>
        </div>
    </div>

    {loadedmodules.map((item, index) => (
          <div onClick={() => addmoduleModal()} className="IO-module-loaded" key={index}>
          <p>{item}</p>
          <div className = "control-btns">
            <img src="./icons/lock_open.png" className="lock-icon" title = "Lock this module"/>
            <img onClick={() => addmoduleModal()} src="./icons/edit.png" className="lock-icon" title = "Edit this module"/>
          </div>
        </div>
      ))}
  </div>

{/* PADDING SHORTHAND - top,right,bottom,left */}
        <
      style jsx global > {
        `
        .primary-modules {
          margin-left: 5em;
          margin-right: 1.5em;
          margin-top: 1.5em;
          float: left;
          width: 200px;
          height: 500px;
        }
        .control-btns {
          margin-top: 5em;
        }
        .pcb {
          -webkit-box-shadow: 0px 4px 4px 0px rgba(0,0,0,0.25);
          box-shadow: 0px 4px 4px 0px rgba(0,0,0,0.25);
          display: inline-block;
          border-radius: 8px;
          margin-bottom: .5em;
          background-color: #fff;
          padding: 0;
          float: left;
          height: 520px;
          top: 0;
          width: 70%;
        }
        .module-btn {
          border-radius: 10px;
          background-color: #E2DFDF;
          transition: color .5s;
          margin-top: 1.5em;
          border: none;
          width: 114px;
        }
        .module-state {
          color: #ADA9A9;
        }
        .module-btn:hover {
          background-color: #05BDC9;
          color: #ffffff;
        }
        .power-module {
          width: 195px;
          color: #ffffff;
          height: 270px;
          text-align: center;
          font-weight: bolder;
          background-color: #041125;
          display: block;
          padding-top: 2.5em;
          margin-right: 1em;
          margin-top: 2em;
          border-radius: 8px;
        }
        .mcu-module {
          width: 195px;
          height: 170px;
          text-align: center;
          font-weight: bolder;
          border-radius: 8px;
          padding-top: 2.5em;
          margin-right: 1em;
          display: inline-block;
          background-color: #EDEDED;
        }
        .IO-module {
          width: 195px;
          height: 225px;
          float: left;
          text-align: center;
          font-weight: bolder;
          border-radius: 8px;
          margin-right: 1em;
          margin-left: 1em;
          margin-top: 1.5em;
          padding-top: 2.5em;
          background-color: #EDEDED;
        }
        .IO-module-loaded {
          cursor: pointer;
          width: 195px;
          height: 225px;
          float: left;
          text-align: center;
          font-weight: bolder;
          border-radius: 8px;
          margin-right: 1em;
          margin-left: 1em;
          margin-top: 1.5em;
          padding-top: 2.5em;
          background-color: #A0E6EA;
        }
        .IO-module-loaded:hover {
          opacity: .8;
          filter:drop-shadow(2px 2px 12px gray);
        }
        .module-icon {
          width: 3em;
          margin-top: 1em;
          margin-bottom: 1em;
          border: 3px solid #f73429;
          background-color: #fff;
          padding: .5em;
          border-radius: 50%;
        }
        .lock-icon {
          width: 30px;
          cursor: pointer;
          margin: 1em .5em 0 .5em;
          background-color: #fff;
          padding: .5em;
          border-radius: 50%;
        }
        .lock-icon:hover {
          opacity: .6;
        }

        ::-webkit-scrollbar {
           width: 8px;
           height: 8px;
          }
        ::-webkit-scrollbar-thumb {
           background-color: #e0e0e0;
           border-radius: 10px;
           transition: .5s;
          }
        ::-webkit-scrollbar-thumb:hover{
           background-color:  #041125;
           cursor: move;
           cursor: grab;
           cursor: -moz-grab;
           cursor: -webkit-grab;
          }
        ::-webkit-scrollbar-track{
           background-color: #fff;
           border-radius: 10px;
           box-shadow: inset 7px 10px 12px #f0f0f0;
          }
          `
      } < /style> < / >
    )
  }
