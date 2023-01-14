import React, { useContext, useState, useEffect } from "react";
import { SendData } from "./Home";
import '../App.css';

const apiUrl = "https://localhost:7007/api/Ingredients";

export default function Ingredient(props) {
  const Ingred = useContext(SendData);
  const [bla, setBla] = useState(null);
  const [IngreName, setIngreName] = useState(null);
  const [IngreURL, setIngreURL] = useState(null);
  const [IngreCal, setIngreCal] = useState(null);
  
  const handleChangeName = (event) => {
    setIngreName(event.target.value);
  };
  const handleChangeImg = (event) => {
    setIngreURL(event.target.value);
  };
  const handleChangeCal = (event) => {
    setIngreCal(event.target.value);
  };
  const postInputs= ()=>{

    const s = { 
      Image:IngreURL ,
      Name: IngreName,
      Calories: IngreCal   
    };
    console.log(s);
    fetch(apiUrl, {
      method: 'POST',
      body: JSON.stringify(s),
      headers: new Headers({
        'Content-type': 'application/json; charset=UTF-8', //very important to add the 'charset=UTF-8'!!!!
        'Accept': 'application/json; charset=UTF-8',
      })
    })
      .then(response => {
        console.log('res=', response);
        return response.json()
      })
      .then(
        (result) => {
          console.log("fetch POST= ", result);
        },
        (error) => {
          console.log("err post=", error);
        });
return false;
  }
  useEffect(() => {
    setBla(Ingred.ingred);
    console.log(Ingred.ingred);
  });
  return (
    <div>
      <form className="formIn">
        <table>
          <tr>
            <td colspan="1">Name:</td>
            <td colspan="8">
              <input
                className="tdINp"
                id="IngeName"
                placeholder="Write Ingredient Name"
                type="text"
                onChange={handleChangeName}
                required
              ></input>
            </td>
          </tr>
          <tr>
            <td colspan="1">Img URL:</td>
            <td colspan="8">
              <input
                className="tdINp"
                id="IngeImag"
                placeholder="Write Ingredient Img URL"
                type="text"
                onChange={handleChangeImg}

                required
              ></input>
            </td>
          </tr>
          <tr>
            <td colspan="1">Calorires:</td>
            <td colspan="8">
              <input
                className="tdINp"
                id="IngeCalo"
                placeholder="Write Ingredient Calorires"
                type="text"
                onChange={handleChangeCal}
                required
              ></input>
            </td>
          </tr>
          <tr>
            <td colspan="3">
              <button onClick={postInputs}>Add ingredient</button>
            </td>
          </tr>
        </table>
      </form>
    </div>
  );
}
