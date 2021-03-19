import Link from 'next/link';
import { MessageList, PCBONE, PCBTWO, PCBTHREE } from '../../../[app].js';
import { useRouter } from "next/router";



export default function PCBSTAGE() {
  const router = useRouter();
  const  { project, pcbsize } = router.query; // Destructuring our router object
    
    if(pcbsize == 1) {
      var witchPCB = <PCBONE />;
    }else if (pcbsize == 2) {
      var witchPCB = <PCBTWO />;
    }else {
      var witchPCB = <PCBTHREE />;
    }

  return (<>

  <div className="pcb-container">
    <div className="pcb-size-selector">
      {/* Simple IF/ELSE statements to handle project PCB size */ }
      <img className="size-selectors" src={ pcbsize === '1' ? '/icons/1x-btn-active.svg' : '/icons/1x-btn.svg' } />
      <img className="size-selectors" src={ pcbsize === '2' ? '/icons/2x-btn-active.svg' : '/icons/2x-btn.svg' } />
      <img className="size-selectors" src={ pcbsize === '3' ? '/icons/3x-btn-active.svg' : '/icons/3x-btn.svg' } />
    </div>
    {witchPCB}
  </div>

        {/* PADDING SHORTHAND - top,right,bottom,left */}
        <
      style jsx global > {
        `
        #file {
          margin-left: 1.5em;
          height: 1.5em;
          width: 200px;

        }
        .pcb-container {
          margin-top: 2em;
          margin-left: auto;
          margin-right: auto;
          padding: 0;
          width: 90%;
          height: 500px;
        }
        .bottom-bar {
          text-align: right;
          padding-right: 8.5em;
          margin-top: 2em;
          display: block;
        }
        .pcb-size-selector {
          -webkit-box-shadow: 0px 4px 4px 0px rgba(0,0,0,0.25);
          box-shadow: 0px 4px 4px 0px rgba(0,0,0,0.25);
          background-color: #E5E5E5;
          border-top-left-radius: 5px;
          border-bottom-left-radius: 5px;
          margin-top: 5%;
          padding:.5em;
          display: inline-block;
          float:left;
          width: 3em;
          height: 125px;
        }
        .size-selectors {
          margin-left: .1em;
          margin-top: .5em;
        }
        .warning-indicator {
          width: 230px;
          float: right;
          height: 32px;
          padding: .3em;
          color: #F78F29;
          cursor: pointer;
          transition: .3s;
          font-size: 12px;
          text-align: left;
          margin-left: 8em;
          font-weight: bolder;
          border-radius: 20px;
          background-color: #041125;
          font-family: 'Open Sans', 'Sans-Serif', 'Ubuntu';
        }
        .warning-indicator:hover {
          opacity: .8;
          color: #fff;
        }
        .warn-icon {
          width: 1.5em;
          margin: 0 .85em .5em .5em;
        }
        .warn-number {
          background-color: #fff;
          font-weight: bolder;
          border-radius: 50%;
          text-align: center;
          font-size: 12px;
          color: #222222;
          padding: .35em;
          height: 2.2em;
          width: auto;
          min-width: 2em;
          margin: 0;
          float: right;
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
