import Link from 'next/link';

export default function Newproject() {
  const moduleList = [
    {
      type: "BX2833",
      accuracy: "<0.1 degC",
      drift: "1m degC/degC",
      calibration: "at 0degC and 100degC_0.1degC",
      power: '+12V @ 3.5mAmps',
      levels: '0 and 5Volts',
      price: '$0.00',
    },
    {
      type: "BX2833",
      accuracy: "<0.1 degC",
      drift: "1m degC/degC",
      calibration: "at 0degC and 100degC_0.1degC",
      power: '+12V @ 3.5mAmps',
      levels: '0 and 5Volts',
      price: '$0.00',
    },
    {
      type: "BX2833",
      accuracy: "<0.1 degC",
      drift: "1m degC/degC",
      calibration: "at 0degC and 100degC_0.1degC",
      power: '+12V @ 3.5mAmps',
      levels: '0 and 5Volts',
      price: '$0.00',
    },
    {
      type: "BX2833",
      accuracy: "<0.1 degC",
      drift: "1m degC/degC",
      calibration: "at 0degC and 100degC_0.1degC",
      power: '+12V @ 3.5mAmps',
      levels: '0 and 5Volts',
      price: '$0.00',
    },
    {
      type: "BX2833",
      accuracy: "<0.1 degC",
      drift: "1m degC/degC",
      calibration: "at 0degC and 100degC_0.1degC",
      power: '+12V @ 3.5mAmps',
      levels: '0 and 5Volts',
      price: '$0.00',
    },
    {
      type: "BX2833",
      accuracy: "<0.1 degC",
      drift: "1m degC/degC",
      calibration: "at 0degC and 100degC_0.1degC",
      power: '+12V @ 3.5mAmps',
      levels: '0 and 5Volts',
      price: '$0.00',
    },
    {
      type: "BX2833",
      accuracy: "<0.1 degC",
      drift: "1m degC/degC",
      calibration: "at 0degC and 100degC_0.1degC",
      power: '+12V @ 3.5mAmps',
      levels: '0 and 5Volts',
      price: '$0.00',
    },
    {
      type: "BX2833",
      accuracy: "<0.1 degC",
      drift: "1m degC/degC",
      calibration: "at 0degC and 100degC_0.1degC",
      power: '+12V @ 3.5mAmps',
      levels: '0 and 5Volts',
      price: '$0.00',
    },
    {
      type: "BX2833",
      accuracy: "<0.1 degC",
      drift: "1m degC/degC",
      calibration: "at 0degC and 100degC_0.1degC",
      power: '+12V @ 3.5mAmps',
      levels: '0 and 5Volts',
      price: '$0.00',
    },

  ];

  return ( <
    >
    <div id="addmodule-modal" className="project-modal" style={{ display:"none" }}>
      <div className ="modal-body">
        <h6 className="new-project-title">ADD / EDIT MODULE</h6>

        <form>
          <label for="cars">Module Type </label>
          <select name="modules" id="modules">
           <option value="volvo">Temperature</option>
           <option value="saab">Drivers</option>
           <option value="opel">Light</option>
           <option value="audi">Humidity</option>
           <option value="audi">Smoke</option>
           <option value="audi">Sound</option>
          </select>
          <br/>
          <div className="spec-list">
              <table className="Module-list">
                <tr>
                  <th>Select</th>
                  <th>Type</th>
                  <th>Accuracy</th>
                  <th>Drift</th>
                  <th>Calibration</th>
                  <th>Levels</th>
                  <th>Power</th>
                  <th>Price</th>
                </tr>
                {moduleList.map((item, index) => (
                  <tr key={index}>
                     <td id="radio-clmn">
                    <input type="radio" id="radio-btn" name={item.type} value={item.type} /></td>
                    <td>{item.type}</td>
                    <td>{item.accuracy}</td>
                    <td>{item.drift}</td>
                    <td>{item.calibration}</td>
                    <td>{item.levels}</td>
                    <td>{item.power}</td>
                    <td>{item.price}</td>
                  </tr>
                ))}
              </table>
            </div>
          <br />
          <button type = 'button' className ="form-next-btn" >PROCEED</button>
          <button type ='button' onClick={() => closeModal()} className ="form-close-btn" >CANCEL</button>

        </form>
      </div>

    </div>
   <
    style jsx > {
      `
      #fname {
        color: #ccc;
      }
      #radio-btn {
        width: 1em;
        margin-right: .65em;
        margin-left: .5em;
      }
      #radio-clmn {
        
      }
      label {
        margin-right: 1em;
        font-size: 14px;
        font-weight: bolder;
      }
      select {
        background-color: #E9E5E5;
        border-radius: 5px;
        padding: 2px;
        border: none;
        width: 165px;
      }
      .new-project-title {
        padding: 15px 0 15px 0;
        color: #041125;
      }
      .spec-list {
        max-height: 300px;
        overflow-y: scroll;
        margin-top: 1em;

      }
      .Module-list {
        background-color: #E2DFDF;
        padding: .5em;
        width: 100%;
      }
      th {
        color: #fff;
        padding: .65em;
        background-color: #041125;
      }
      tr {
        line-height: 2.5em;
        font-size: 12px;
      }
      tr:hover {
        background-color: #A0E6EA;
      }
      .project-modal {
        display: none;
        width: 100%;
        height: 100vh;
        z-index: 1006;
        text-align: left;
        position: absolute;
        background-color: #000000c7;
        font-family: 'Open Sans', 'Sans-Serif', 'Ubuntu';
      }
      .modal-body {
        width: 1000px;
        height: 540px;
        margin-top: 5em;
        margin-left: auto;
        margin-right: auto;
        border-radius: 5px;
        background-color: #fff;
        font-family: 'Open Sans', 'Sans-Serif', 'Ubuntu';
        -webkit-box-shadow: 0px 0px 10px -3px #12D1FF;
        box-shadow: 0px 0px 10px -3px #12D1FF;
      }
      .form-next-btn {
        float: right;
        color: #fff;
        width: 10em;
        border: none;
        padding: 5.5px;
        cursor: pointer;
        transition: .3s;
        border-radius: 3px;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 1.5em;
        margin-top: 0em;
        background-color: #05BDC9;
        font-family: 'Open Sans', 'Sans-Serif', 'Ubuntu';
      }
      .form-close-btn {
        border: none;
        margin: 0em .85em 0 .85em;
        background-color: #ffc0cb00;
        border-radius: 3px;
        border: 1px solid #041125;
        transition: .3s;
        color: #041125;
        width: 120px;
        padding: 5px;
        float:right;
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
  var c = document.getElementById("addmodule-modal");
  if (c.style.display === "block"){
    c.style.display = "none";
  }else{
    c.style.display = "block";
  }
}
