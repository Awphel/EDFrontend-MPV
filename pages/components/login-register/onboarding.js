import Link from 'next/link';

export default function Onboarding() {

  return ( <
    >
    <div className="splash">
      <div className ="center-content">
        <h1 className ="focus-in-expand">EMBEDDED <b>DESIGN</b></h1>

        <p className="tagline-text"><b>Mechatronic</b> design and simulation tool.</p>

        <div id="login-form" className = "login-form" style={{ display:"none" }}>
            <form>
              <input type="email" id="fname" name="fname" required  placeholder="Enter email" /><br/>
              <input type="password" id="fname" name="fname" required placeholder="Enter password" /><br/>
              <button onClick={() => toggleLogin()} className ="form-close-btn" >CANCEL</button>
              <Link href="/dashboard">
                <button  className ="form-next-btn" type="submit" value="Submit">LOGIN</button>
              </Link>
            </form>
        </div>
        <div id="registration-form" className="registration-form" style={{ display:"none" }}>
            <form>
              <input type="name" id="fname" name="name" required  placeholder="Enter Name" className="user-info"/>
              <input type="lastName" id="fname" name="lastName" required placeholder="Enter lastname" className="user-info" /><br/>
              <input type="Email" id="fname" name="email" required placeholder="Enter email" /><br/>
              <input type="password" id="fname" name="password" required placeholder="Enter password" /><br/>
              <button onClick={() => toggleRegistration()} className ="form-close-btn" >CANCEL</button>
              <Link href="/app">
                <button className ="form-next-btn" type="submit" value="Submit">REGISTER</button>
              </Link>
            </form>
        </div>

          <a id="login-btn" onClick={() => toggleLogin()} style={{ display:"block" }} className ="login-btn">LOGIN</a>

        <a className="register-btn" id="register-btn" onClick={() => toggleRegistration()} >Register</a>
      </div>
    </div>
   <
    style jsx global > {
      `
      .splash {
        width: 100%;
        height: 100vh;
        display:block;
        z-index: 10005;
        text-align: center;
        position: absolute;
        background-color: #041125;
        font-family: 'Open Sans', 'Sans-Serif', 'Ubuntu';
      }
      .login-form {
        margin-bottom: 1em;
        border-radius: 3px;
        transition: height .5s;
        padding: 10px;
        height: auto;
      }
      .registration-form {

      }
      .user-info {
        width: 25%;
        margin: 2em .5em 0 .5em;
      }
      .focus-in-expand {
        color: #fff;
        font-size: 60px;
        margin: 0 0 .5em 0;
	      -webkit-animation: focus-in-expand 2.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
	      animation: focus-in-expand 0.8s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}
      .center-content {
        font-family: 'Open Sans', 'Sans-Serif', 'Ubuntu';
        margin-left: auto;
        margin-right: auto;
        margin-top: 12em;
        color: #fff;
        width: 750px;
        height: 500px;
      }
      .login-btn {
        color: #fff;
        width: 10em;
        border: none;
        padding: .5em;
        cursor: pointer;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 1.5em;
        margin-top: 4.5em;
        border-radius: 3px;
        background-color: #05BDC9;
        font-family: 'Open Sans', 'Sans-Serif', 'Ubuntu';
      }
      .login-btn:hover {
        text-decoration: none;
        border: none;
        -webkit-box-shadow: 0px 0px 10px -3px #12D1FF;
        box-shadow: 0px 0px 10px -3px #12D1FF;
      }
      .register-btn {
        cursor: pointer;
      }
      .register-btn:hover {
        opacity: .5;
      }

      /* ----------------------------------------------
 * Generated by Animista on 2021-2-24 9:22:59
 * Licensed under FreeBSD License.
 * See http://animista.net/license for more info.
 * w: http://animista.net, t: @cssanimista
 * ---------------------------------------------- */

/**
 * ----------------------------------------
 * animation focus-in-expand
 * ----------------------------------------
 */
@-webkit-keyframes focus-in-expand {
  0% {
    letter-spacing: -0.5em;
    -webkit-filter: blur(12px);
            filter: blur(12px);
    opacity: 0;
  }
  100% {
    -webkit-filter: blur(0px);
            filter: blur(0px);
    opacity: 1;
  }
}
@keyframes focus-in-expand {
  0% {
    letter-spacing: -0.5em;
    -webkit-filter: blur(12px);
            filter: blur(12px);
    opacity: 0;
  }
  100% {
    -webkit-filter: blur(0px);
            filter: blur(0px);
    opacity: 1;
  }
}

#fname {
  color: #222;
}
.form-close-btn {
  border: none;
  margin: 3em .85em 0 .85em;
  background-color: #ffff;
  border-radius: 3px;
  transition: .3s;
  color: #041125;
  width: 10em;
  padding: .5em;
}
.form-next-btn {
  color: #fff;
  width: 10em;
  border: none;
  padding: .5em;
  cursor: pointer;
  transition: .3s;
  border-radius: 3px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 1.5em;
  margin-top: 2em;
  background-color: #05BDC9;
  font-family: 'Open Sans', 'Sans-Serif', 'Ubuntu';
}
.form-close-btn:hover {
  cursor: pointer;
  color: #05BDC9;
  -webkit-box-shadow: 0px 0px 10px -3px #12D1FF;
  box-shadow: 0px 0px 10px -3px #12D1FF;
}
.form-next-btn:hover {
  cursor: pointer;
  color: #fff;
  -webkit-box-shadow: 0px 0px 10px -3px #12D1FF;
  box-shadow: 0px 0px 10px -3px #12D1FF;
}
form:focus {
  outline: none;
  color: #222;
}
input {
  width: 25em;
  padding: .45em;
  color: #fff;
  margin-top: 1em;
  border-radius: 2px;
  border: .1em solid #05BDC9;
  background-color: #21252900;
  font-family: 'Open Sans', 'Sans-Serif', 'Ubuntu';
}
input:focus {
  background: #fff;
  -webkit-box-shadow: 0px 0px 10px -3px #12D1FF;
  box-shadow: 0px 0px 10px -3px #12D1FF;
  border: .185em solid #05BDC9;
  border-radius: 2px!important;
  outline: none;
  color: #222;
}

        `
    } < /style> <
    />
  )
}

//This function togges the login form panel
export function toggleLogin() {
  var dd = document.getElementById("login-form");
  var cc = document.getElementById('login-btn');

  if (dd.style.display === "none") {
    dd.style.display = "block";
    cc.style.display = "none";
  }
  else{
    dd.style.display = "none";
    cc.style.display = "block";
  }
}

export function toggleRegistration() {
  var ff = document.getElementById('register-btn');
  var ee = document.getElementById('registration-form');
  var cc = document.getElementById('login-btn');

  if (ee.style.display === "none") {
    ee.style.display = "block";
    ff.style.display = "none";
    cc.style.display = "none";
  }
  else{
    ee.style.display = "none";
    ff.style.display = "block";
    cc.style.display = "block";
  }
}
