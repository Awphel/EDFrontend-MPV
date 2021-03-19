import Link from 'next/link';
import { MessageList, PCBONE }  from '../../../[app].js';
import { useRouter } from "next/router";
import { PCBSTAGE } from '../../../[app].js';
import { Addmodal } from '../../../[app].js';

export default function Stage() {
  const router = useRouter();
  const  { project, pcbsize } = router.query; // Destructuring our router object

  return (<>

  <div className="stage_container">
  <MessageList />
    <div className="dash-header-bar">
      <h1>{project}</h1>
      <span className="level-1-subtitle">PCB BUILDER</span>
      <span className="team-members">Team members</span>
    </div>
  <PCBSTAGE pcbsise = {pcbsize}/>

  {/* Bottom bar */}

  <div className="bottom-bar">
    <label for="file"><b>PCB Usage</b></label>
    <progress id="file" value="32" max="100"></progress>
    <div className="warning-indicator">
      <img src="/icons/warning.png" className="warn-icon" />
    Check warnigs
      <div className="warn-number">0</div>
    </div>
  </div>
  </div>
  <Addmodal />
{/* PADDING SHORTHAND - top,right,bottom,left */}
        <
      style jsx global > {
        `
        h1 {
          color: #ADA9A9;
          font-size: 25px;
          font-wight: bolder;
          margin-right: 1em;
          display: inline-block;
          font-family: 'Open Sans', 'Sans-Serif', 'Ubuntu';
        }
        .level-1-subtitle {
          padding: .5em;
          color: #ADA9A9;
          font-size: 12px;
          font-weight: bolder;
          border-radius: 20px;
          background-color: #fff;
          font-family: 'Open Sans', 'Sans-Serif', 'Ubuntu';
        }
        .team-members {
          float: right;
          color: #222;
          font-size: 12px;
          margin-right: 2em;
        }
        .dash-text-link {
          font-size: 12px;
          padding-top: 5px;
        }
        h6 {
          color: #05BDC9;
          font-weight: 600;
          margin-bottom: 1.5em;
          margin-right: 0px;
          font-family: 'Open Sans', 'Sans-Serif', 'Ubuntu';
        }
        .bigCards, .smallCards {
          height: inherit;
          margin-top: 1em;
        }
        .A-card, .B-card {
          height: 240px;
          width: 95%;
          display: block;
          overflow-y: scroll;
          font-family: 'Open Sans', 'Sans-Serif', 'Ubuntu';
          padding: 1em 1.5em 1em 1.5em;
          margin-bottom: 1.5em;
          border-radius: .3em;
          background-color: #fff;
          -webkit-box-shadow: -1px 1px 6px 3px rgba(155, 202, 250, 0.5);
          box-shadow: -1px 1px 6px 3px rgba(155, 202, 250, 0.5);
        }
        .stage_container{
          font-family: 'Open Sans', 'Sans-Serif', 'Ubuntu';
          background-color: #D4E6E9;
          position: absolute;
          padding: 30px 0 0 20px;
          margin-top: 3em;
          height: auto;
          width: 100%;
          left: 0px;
        }

        ::-webkit-scrollbar {
           width: 8px;
           height: 8px;
          }
        ::-webkit-scrollbar-thumb {
           background-color: #ADA9A9;
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
