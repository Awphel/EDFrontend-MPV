
import Link from 'next/link';
import { toggleContent } from "../sidebar/sidebar.js";

export default function ProjectList() {

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
        [ 'temperature',
        'motordriver',
        'lightsensor' ]
    },
    {
      name: "Temperature controller",
      logic: "False",
      pcb: "False",
      pcbsize: 1,
      modules: ''
    },
    {
      name: "Sprinkler",
      logic: "False",
      pcb: "False",
      pcbsize: 1,
      modules: ''
    },
  ];

  return (
    <>
    <div className="list-field">
      <a onClick={() => toggleContent()} className = "back-btn"> <img src ="/icons/caret_down.png" className = "back-btn-icon"/>Back</a>
    <img onClick={() => makeRandomColor()} src="/icons/awesome.png" title="Make awesome" className="awesome-icon" alt="make awesome" />

    <ul>
      {projectList.map((item, index) => (
        <Link as={`/${item.name}`} href={{ pathname: '/[app]' , query: {project: item.name, pcbsize: item.pcbsize, loadedmodules: item.modules}}}>
        <li className="project-list" key={index}>
        <div className = "project-status">
        <
        img
        src = { item.pcb === 'True' ? '/icons/pcb_blue.png' : '/icons/pcb.png' }
        className = "project-status-btn"
        title = "Go to PCB Editor"
        alt = "logo" / >

        </div>
          {item.name}
          <
          img
          src = "/icons/edit.png"
          className = "project-primary-btn"
          title = "edit project"
          alt = "logo" / >
        </li>
        </Link>
      ))}
    </ul>
    </div>

    {/* PADDING SHORTHAND - top,right,bottom,left */}
  <
  style jsx global > {
    `
    .list-field {
      text-align: center;
      width: 100%;
    }
    .back-btn {
      position: absolute;
      text-transform: uppercase;
      font-size: 12px;
      cursor: pointer;
      top: 10px;
      right: 16%;
    }
    .back-btn:hover {
      opacity: .5;
    }
    .back-btn-icon {
      width: .75em;
      margin-right: .85em;
      transform: rotate(90deg);
    }
    .project-status {
      text-align: left;
      margin-bottom: 4em;
    }
    .project-list {
      color: #222;
      font-size: 12px;
      font-family: 'Open Sans', 'Sans-Serif', 'Ubuntu';
      background-color: #EDEDED;
      margin-bottom: .85em;
      border-radius: 5px;
      border: 1px solid #C4C4C4;
      padding: .85em .2em 0 1em;
      margin-right: 2%;
      margin-left: 2%;
      margin-bottom: 2%;
      display: inline-block;
      text-align: center;
      font-weight: bolder;
      line-height: 1.5em;
      width: 202px;
      height: 218px;
      cursor: pointer;
    }
    .project-list:hover {
      border: 1px solid #05BDC9;
      background-color: #fff;
      box-shadow: 0px 1px 5px 3px rgba(5, 189, 201, 0.5);
-webkit-box-shadow: 0px 1px 5px 3px rgba(5, 189, 201, 0.5);
    }
    .project-primary-btn {
      font-family: 'Open Sans', 'Sans-Serif', 'Ubuntu';
      width: 22px;
      bottom: 0px;
      display: block;
      margin-top: 5em;
      opacity: .4;
      margin-right: auto;
      margin-left: auto;
    }
    .project-status-btn {
      width: 25px;
      height: 27.95px;
      opacity: .5;
      margin-right: 1em;
    }
    .awesome-icon {
      position: absolute;
      top: 10px;
      right: 10%;
      transition: .3s;
      width: 1.5em;
      height: 1.5em;
    }
    .awesome-icon:hover {
      cursor: pointer;
      opacity: .5;
      width: 2em;
      height: 2em;
    }


    `
  } < /style>
    </>
  )
}
// This function randomises the backgroundColor fot the project cards.
export function makeRandomColor(){
  var c = '';
  var f = document.getElementsByClassName('project-list')
  var i;

  for(i = 0; i < f.length; i++){
    var randomColor = Math.floor(Math.random()*16777215).toString(16);

    f[i].style.backgroundColor = "#" + randomColor + 38;
    f[i].style.border = "none";
  }
}
