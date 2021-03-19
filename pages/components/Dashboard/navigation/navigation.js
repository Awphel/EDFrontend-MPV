import Link from 'next/link';

export default function NevigationBar() {

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
          <
          img
          src = "/logo.png"
          className = "logo_sm"
          title = "Take me home"
          alt = "logo" / >

          {/* SEARCHFIELD*/}
          <div className="search_field">
                <form className="main_search">
                    <input className="form_field mr-sm-2" type="search" placeholder=" Search" aria-label="Search" />
                </form>
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
          z-index: 1002;
          position: fixed;
          background-color:  #041125;
        }
        .logo_sm{
          width: 10em;
          margin-left: 3em;
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

        .main_search {
          width: 30px;
          width: 50px;
          display: inline-block;
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
  var randomClick = document.getElementById("curtain");

  if(SidebarState.style.width === '65px'){
      SidebarState.style.width = "250px";
      SidebarState.className = 'sidebar_open';
      randomClick.style.display = "block";
      toggleButton.src = '/icons/close.svg';
      navlinks_A.style.cssText += "visibility: visible;"
      navlinks_B.style.cssText += "visibility: hidden;"

    } else {
      SidebarState.style.width = "65px";
      SidebarState.className = 'sidebar_closed';
      randomClick.style.display = "none";
      toggleButton.src = '/icons/bar.svg';
      navlinks_A.style.cssText += "visibility: hidden;"
      navlinks_B.style.cssText += "visibility: visible;"
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
