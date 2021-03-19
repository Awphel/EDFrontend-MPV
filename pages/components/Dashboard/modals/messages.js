import Link from 'next/link';

export default function MessageList() {
  const messageList = [
    {
      from: "Monique Honiball",
      timestamp: "3:30 AM",
      avatar: "https://randomuser.me/api/portraits/women/94.jpg",
      content: "Monique: please have a look...",
    },
    {
      from: "Nicole Gray",
      timestamp: "13:06 PM",
      avatar: "https://randomuser.me/api/portraits/women/26.jpg",
      content: "Nicole: I don't think it's...",
    },
    {
      from: "Tshepiso Bojosi",
      timestamp: "Feb 23",
      avatar: "https://randomuser.me/api/portraits/men/54.jpg",
      content: "Tshepiso: Thank you",
    },
    {
      from: "Herbet Maphosa",
      timestamp: "Feb 19",
      avatar: "https://randomuser.me/api/portraits/men/78.jpg",
      content: "You: Why is the module locked?",
    },
    {
      from: "Fiona Juan",
      timestamp: "Feb 19",
      avatar: "https://randomuser.me/api/portraits/women/78.jpg",
      content: "Fiona: Change the settings to...",
    },
  ];
  return ( <
    >
    <div id="message-panel" className="message-panel" style={{ display:"none" }}>
      <div className="bubble">
          <div className="msg-header">
            <img src="/carl.jpg" title="Carl Sagan" className="userAvatar-messaging" alt="userAvatar-messaging" />
            <h6 className="msg-title">Messaging</h6>
            <img src="/icons/write.png" title="Compose" className="msg-controls" alt="compose-button" />
          </div>
          <ul>
            {messageList.map((item, index) => (
              <li className="message-list" key={index}>
                <div className="msg-body">
                  <p className="sender-name"><img src={item.avatar} className="msg-avatar" />{item.from}
                    <span className="msg-timestamp">{item.timestamp}</span>
                  </p>
                  <p>{item.content}</p>
                </div>
              </li>
            ))}
          </ul>
      </div>
    </div>
   <
    style jsx global > {
      `
      .msg-title {
        font-family: 'Open Sans', 'Sans-Serif', 'Ubuntu';
        padding: 15px 0 15px 0;
        float: left;
      }
      .msg-timestamp {
        float: right;
        font-weight: lighter;
        font-family: 'Open Sans', 'Sans-Serif', 'Ubuntu';
      }
      .msg-avatar {
        width: 25px;
        border-radius: 50%;
        margin: .5em;
      }
      .sender-name {
        font-family: 'Open Sans', 'Sans-Serif', 'Ubuntu';
        font-weight: bolder;
        color: #222;
      }
      .message-panel {
        display: none;
        width: 300px;
        height: 90vh;
        z-index: 1000;
        right: 0;
        transition: height(.5s);
        position: absolute;
      }
      .msg-controls {
        width: 1.5em;
        float: right;
        opacity: .4;
        transition: .3s;
        padding: 10px 0 15px 0;
        margin-right: 5px;
      }
      .msg-controls:hover {
        opacity: 1;
      }
      .bubble {
        position: relative;
        background: #fff;
        font-family: Arial;
        font-size: 20px;
        line-height: 120px;
        text-align: left;
        box-shadow: -1px 1px 6px 3px rgba(155, 202, 250, 0.6);
        font-family: 'Open Sans', 'Sans-Serif', 'Ubuntu';
        width: 100%;
        height: 600px;
        overflow-y: scroll;
        border-radius: 5px;
        padding: 5px;
}
    .msg-header {
      color: #041125;
      width: 100%;
      height: 50px;
      font-family: 'Open Sans', 'Sans-Serif', 'Ubuntu';
    }
    .msg-body {
      font-family: 'Open Sans', 'Sans-Serif', 'Ubuntu';
      border-top: 1px solid #EDEDED;
      padding: 5px;
      width: 100%;
      height: auto;
    }
    .message-list {
      font-family: 'Open Sans', 'Sans-Serif', 'Ubuntu';
      font-size: 12px;
      line-height: 8px;
      color: #797777;
    }
    .userAvatar-messaging {
      width: 2em;
      float: left;
      border-radius: 50%;
      margin-right: 1em;
      padding: 0;
    }


        `
    } < /style> <
    />
  )
}
