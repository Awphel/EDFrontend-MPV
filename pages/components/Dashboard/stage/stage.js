import Link from 'next/link';
import RecommendedList from '../recommended/[recommendlist].js';
import ProjectList from '../myprojects/projects.js'
import ActivityList from '../activity/activity.js'
import OrderList from '../orders/orders.js'
import MessageList from '../modals/messages.js'
import Newproject from '../modals/new-project.js'

export default function Stage() {
  return (<>
    <Newproject />
  <div id="sidebar_state" className="stage_container">
    <MessageList />
    <div className="dash-header-bar">
      <h1>Dashboard</h1>
      <span className="level-1-subtitle">Activities & Orders</span>
      <span className="team-members">Team members</span>
    </div>
        <div className ="row">
          <div className ="col-8 bigCards">
            <div id="dualFuntion-DIV" className ="A-card">

                <div id="RecommendedList" style={{ display:"block" }}>
                  <h6 className ="Card-header"> Recommended for you</h6>
                  <RecommendedList />
                </div>
                <div id="ProjectList">
                  <h6 className ="Card-header"> Projects</h6>
                  <ProjectList />
                </div>
            </div>
            <div id="activityDIV" className ="A-card">
                <h6 className ="Card-header"> Recent activity</h6>
                <ActivityList />
            </div>
          </div>
          <div className ="col-4 smallCards">
              <div className ="A-card">
                  <h6 className ="Card-header"> My orders</h6>
                  <OrderList />
              </div>
              <div className ="A-card">
                  <h6 className ="Card-header"> FYI</h6>
                  <ul>
                    <li className="fyi-list">
                      <a href="" className="fyi-link">Learn about our processes</a>
                    </li>
                    <li className="fyi-list">
                      <a  href="" className="fyi-link">How to write better logic</a>
                    </li>
                    <li className="fyi-list">
                      <a href="" className="fyi-link">All about motion detectors</a>
                    </li>
                    <li className="fyi-list">
                      <a href="" className="fyi-link">Build a home automation system</a>
                    </li>
                  </ul>
              </div>
          </div>
        </div>

  </div>

{/* PADDING SHORTHAND - top,right,bottom,left */}
        <
      style jsx global > {
        `
        #RecommendedList {
          display: block;
        }
        #ProjectList {
          display: none;
        }
        ul {
          margin-top: 1em;
        }
        .recommended-list {
          color: #222;
          font-size: 12px;
          font-family: 'Open Sans', 'Sans-Serif', 'Ubuntu';
          background-color: #EDEDED;
          margin-bottom: .85em;
          border-radius: 10px;
          padding: 0 .2em 0 1em;
        }
        .Activity-list {
          width: 100%;
          color: #222;
          font-size: 12px;
          font-family: 'Open Sans', 'Sans-Serif', 'Ubuntu';
        }
        .Orders-list {
          width: 100%;
          color: #222;
          font-size: 12px;
          font-family: 'Open Sans', 'Sans-Serif', 'Ubuntu';
        }
        tr:nth-child(even){
          background-color: #d4e6e959;
        }
        th, td {
          line-height: 3.5em;
          padding-left: 8px;
          font-family: 'Open Sans', 'Sans-Serif', 'Ubuntu';
        }
        th {
          color: #ADA9A9;
        }
        .team-member-img {
          width: 2em;
          max-height: 2em;
          border-radius: 50%;
          margin-right: .85em;
        }
        .team-member-name {
          color: #05BDC9;
        }
        .fyi-list {
          line-height: 3em;
          font-size: 12.5px;
          font-family: 'Open Sans', 'Sans-Serif', 'Ubuntu';
        }
        .fyi-link {
          color: #05BDC9;
        }
        h1 {
          color: #ADA9A9;
          font-size: 25px;
          font-wight: bolder;
          margin-right: 1em;
          display: inline-block;
          font-family: 'Open Sans', 'Sans-Serif', 'Ubuntu';
        }
        .level-1-subtitle {
          color: #ADA9A9;
          font-size: 12px;
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
        .all-orders-link {
          float: left;
          margin-top: 0.85em;
        }
        .order-progress-text {
          font-weight: bolder;
          color: green;
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
          padding: 30px 0 0 100px;
          margin-top: 3em;
          height: 100vh;
          width: 100%;
          left: 0px;
        }
        .card {
          width: 200px;
          height: 400px;
          border: 1px solid grey;
        }

        .tertiary {
          padding: 5px;
          color: #fff;
          border: none;
          float: right;
          height: 30px;
          width: 80px;
          transition: background .5s;
          font-size: 12px;
          font-family: 'Open Sans', 'Sans-Serif', 'Ubuntu';
          margin: .8em 1em .5em 0;
          border-radius: 3px;
          background-color: #05BDC9;
        }
        .tertiary:hover {
          background: #041125;
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
