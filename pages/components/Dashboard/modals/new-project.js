import Link from 'next/link';

export default function Newproject() {

  return ( <
    >
    <div id="newproject-modal" className="project-modal" style={{ display:"none" }}>
      <div className ="modal-body">
        <h6 className="new-project-title">NAME YOUR PROJECT</h6>
        <form>
          <input type="text" id="fname" name="fname" placeholder="Awesome project" /><br/>
          <button onClick={() => closeModal()} className ="form-close-btn" >CANCEL</button>
          <button  className ="form-next-btn" type="submit" value="Submit">PROCEED</button>
        </form>
      </div>

    </div>
   <
    style jsx > {
      `
      #fname {
        color: #ccc;
      }
      .new-project-title {
        padding: 15px 0 15px 0;
        color: #041125;
      }
      .project-modal {
        display: none;
        width: 100%;
        height: 100vh;
        z-index: 1006;
        text-align: center;
        position: absolute;
        background-color: #000000c7;
        font-family: 'Open Sans', 'Sans-Serif', 'Ubuntu';
      }
      .modal-body {
        width: 700px;
        height: 270px;
        margin-top: 10em;
        margin-left: auto;
        margin-right: auto;
        border-radius: 5px;
        background-color: #fff;
        font-family: 'Open Sans', 'Sans-Serif', 'Ubuntu';
        -webkit-box-shadow: 0px 0px 10px -3px #12D1FF;
        box-shadow: 0px 0px 10px -3px #12D1FF;
      }
      .form-close-btn {
        border: none;
        margin: 3em .85em 0 .85em;
        background-color: #ffc0cb00;
        border-radius: 3px;
        border: 1px solid #041125;
        transition: .3s;
        color: #041125;
        width: 120px;
        padding: 5px;
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
        color: #fff;
        background-color: #041125;
        -webkit-box-shadow: 0px 0px 10px -3px #12D1FF;
        box-shadow: 0px 0px 10px -3px #12D1FF;
      }
      .form-next-btn:hover {
        cursor: pointer;
        color: #fff;
        background: #041125;
        -webkit-box-shadow: 0px 0px 10px -3px #12D1FF;
        box-shadow: 0px 0px 10px -3px #12D1FF;
      }
      form:focus {
        outline: none;
      }
      input {
        width: 25em;
        padding: .45em;
        color: #fff;
        margin-top: 1.5em;
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
export function closeModal() {
  var c = document.getElementById("newproject-modal");
  if (c.style.display === "block"){
    c.style.display = "none";
  }else{
    c.style.display = "block";
  }
}
