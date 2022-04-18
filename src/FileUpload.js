
import React, { useState } from 'react';
import { post } from "./Helper";

// Component to upload file from a CSV
function FileUpload() {

const [file, setFile] = useState();
  const [array, setArray] = useState([]);
  const [showInfo, setShowInfo] = useState(false);

  const fileReader = new FileReader();

  const handleOnChange = (e) => {
    setFile(e.target.files[0]);
  };

  const csvFileToArray = string => {
    const csvHeader = string.slice(0, string.indexOf("\n")).split(",");
    const csvRows = string.slice(string.indexOf("\n") + 1).split("\n");

    const array = csvRows.map(i => {
      const values = i.split(",");
      const obj = csvHeader.reduce((object, header, index) => {
        object[header] = values[index];
        return object;
      }, {});
      return obj;
    });

    const body = {
        courses: array
    }

    post("https://ta-management-47.herokuapp.com/api/course/create/csv", body).then(resp => window.location.reload(false)); // Send properly created courses to server
    
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (file) { // Read file
      fileReader.onload = function (event) {
        const text = event.target.result;
        csvFileToArray(text);
      };

      fileReader.readAsText(file);
    }
  };

  const headerKeys = Object.keys(Object.assign({}, ...array));

  return (
    <div style={{ textAlign: "center" }}>
      <h1> Import Prof + Course </h1>


      <form>
        <input
          type={"file"}
          id={"csvFileInput"}
          accept={".csv"}
          onChange={handleOnChange}
        />

        <button
          onClick={(e) => {
            handleOnSubmit(e);
          }}
        >
          IMPORT CSV
        </button>
      </form>

      <br />

      <table>
        <thead>
          <tr key={"header"}>
            {headerKeys.map((key) => (
              <th>{key}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          {array.map((item) => (
            <tr key={item.id}>
              {Object.values(item).map((val) => (
                <td>{val}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={() => setShowInfo(!showInfo)}>Help</button>
        {showInfo &&
        <div style={{width: "100%", textAlign: "center"}}>
        <div style={{textAlign: "left", display: "inline-block"}}>
            <div style={{fontSize: "11px"}}>
            Ensure that the CSV file matches the headers below: < br/>
           <b>term_month_year,course_num,course_name,instructor_assigned_name </b> <br />
            where instructor_assigned_name should be the username of the prof. <br />
            If the username does not match a valid username in the system, no course will be added. 
            <br /> 
            Example of csv row: 1_10_2022,202,Introduction to Programming,professor_username
            <br /> 
            Note further than 1 corresponds to a fall term, 2 corresponds to winter, 3 corresponds to summer.
            <br /> <br />
            </div>
        </div>
        </div>
        }
    </div>
  );
}

export default FileUpload;