import Link from 'next/link';

export default function NavBar() {

  return ( <
    >
    <div className="topBar">

    {/* TOGGLE_BUTTON*/}
    <
    a onClick={() => toggleSidebar()}
     >
    <
    img id="NavtoggleButton"
    src = "/icons/bar.svg"
    className = "NavtoggleButton"
    title = "Open"
    alt = "toggler" / >
    <
    /a>

    {/* LOGO*/}
        <a className="nav-primary-btn">Logic editor
          <
          img
          src = "/icons/brain_black.png"
          className = "logic-editor-icon"
          title = "Edit logic"
          alt = "logic-btn" / >
          </a>

          {/* SEARCHFIELD*/}
          <div className="search_field">
                <button className="nav-secondary-btn">
                    FREEZE HARDWARE
                </button>
                <button className="nav-tertiary-btn">
                  PLACE ORDER
                </button>

                  <img src="/carl.jpg" title="Carl Sagan" className="userAvatar" alt="userAvatar" />
                {/* NOTIFICATION ICON */}
                  <img onClick={() => toggleMessaging()} src="/icons/notification-bell-messages.png" title="Carl Sagan" className="notification-icon" alt="userAvatar" />
            </div>
    </div>
   <
    style jsx global > {
      `
        .topBar {
          width: 100%;
          height: 55px;
          padding: 8px;
          z-index: 1001;
          position: fixed;
          background-color:  #041125;
        }
        .logic-editor-icon{
          width: 1em;
          cursor: pointer;
          margin-left: .5em;
          margin-top: .01em;
          filter: invert(100%);
        }
        .nav-primary-btn {
          color: #fff!important;
          margin-left: 3.5em;
          line-height: 2.5em;
          cursor: pointer;
          font-size: 15px;
          transition: .5s;
          font-family: 'Open Sans', 'Sans-Serif', 'Ubuntu';
        }
        .nav-primary-btn:hover {
          opacity: .5;
        }
        .nav-secondary-btn {
          border: 1px solid #05BDC9;
          background-color: #041125;
          border-radius: 20px;
          margin-right: 1.5em;
          transition: .5s;
          padding: .5em;
          color: #fff;
          width: 163px;
        }
        .nav-secondary-btn:hover {
          background-color: #05BDC9;
          -webkit-box-shadow: 0px 0px 10px -3px #12D1FF;
          box-shadow: 0px 0px 10px -3px #12D1FF;
        }
        .nav-tertiary-btn {
          border: none;
          background-color: #fff;
          border-radius: 20px;
          transition: .3s;
          padding: .5em;
          color: #05BDC9;
          width: 104px;
        }
        .nav-tertiary-btn:hover {
          background-color: #041125;
          -webkit-box-shadow: 0px 0px 10px -3px #12D1FF;
          box-shadow: 0px 0px 10px -3px #12D1FF;
        }
        .NavtoggleButton {
          filter: invert(100%);
          ransition: width .5s;
          margin-top: .5em;
          margin-left: 1em;
          width: 1.5em;
          float: left;
        }
        .NavtoggleButton:hover {
          cursor: pointer;
        }
        .search_field {
          float: right;
          width: 35%;
          padding: 0;
          font-size: .65em;
          margin-top: .5em;
        }
        .userAvatar {
          display: inline-block;
          float: right;
          margin-right: 3em;
          border-radius: 50%;
          width: 3em;
          height: 3em;
        }
        .notification-icon {
          display: inline-block;
          float: right;
          margin-right: 3em;
          margin-top: .5em;
          transition: .3s;
          width: 1.5em;
          height: 1.5em;
        }
        .notification-icon:hover {
          cursor: pointer;
          opacity: .5;
        }
        .form_field {
          width: 25em;
          padding: .45em;
          color: #fff;
          margin-top: 0;
          border-radius: 3em;
          border: .185em solid #05BDC9;
          background-color: #21252900;
          font-family: 'Open Sans', 'Sans-Serif', 'Ubuntu';
        }
        form_field:focus { background: #fff;
          -webkit-box-shadow: 0px 0px 10px -3px #12D1FF;
          box-shadow: -1px 1px 6px 3px rgba(155, 202, 250, 0.6);
          box-shadow: 0px 0px 10px -3px #12D1FF;
          border: .185em solid #05BDC9;
          border-radius: 3em!important;
          outline: none;
          color: #222;
        }
        input:focus {
          outline: none;
          box-shadow: -1px 1px 6px 3px rgba(155, 202, 250, 0.6);
        }

        `
    } < /style> <
    />
  )
}

//This function toggles the sidebar menu
export function toggleSidebar() {
  var SidebarState = document.getElementById("sidebar_state");
  var toggleButton = document.getElementById("NavtoggleButton");
  var navlinks_A = document.getElementById("NavLinks_CLOSED");
  var navlinks_B = document.getElementById("NavLinks_OPEN");
  var randomClick = document.getElementById('curtain');

  if(SidebarState.style.display === 'none'){
      SidebarState.style.display = "block";
      SidebarState.className = 'sidebar_open';
      randomClick.style.width = '100%';
      toggleButton.src = '/icons/close.svg';
      navlinks_A.style.cssText += "visibility: visible;"


    } else {
      SidebarState.style.display = "none";
      SidebarState.className = 'sidebar_closed';
      randomClick.style.width = '0';
      toggleButton.src = '/icons/bar.svg';
      navlinks_A.style.cssText += "visibility: hidden;"
      
    }
}
//This function togges the messaging panel
export function toggleMessaging() {
  var messagingState = document.getElementById("message-panel");

  if (messagingState.style.display === "none") {
    messagingState.style.display = "block";
  }
  else{
    messagingState.style.display = "none";
  }
}
