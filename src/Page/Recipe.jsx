import React, { useContext, useState, useEffect } from "react";
import { SendData } from "./Home";
export default function Recipe() {
  const Ingred = useContext(SendData);

  let ass;
  const [bla, setBla] = useState(null);
  const [sad, setSad] = useState(null);
  let arrIngre=[];

  let ss={};
  useEffect(() => {
    setBla(Ingred.ingred);
    console.log(Ingred.ingred);
    setSad(Ingred.sada);
  });
  const apiUrl = "https://localhost:7007/api/Recipe";
  const apiUrlIngToRec ="https://localhost:7007/api/IngreToRec";

  const [DishName, setDishName] = useState(null);
  const [DishURL, setDishURL] = useState(null);
  const [DishCookMethod, setDishCookMethod] = useState(null);
  const [DishTime, setDishTime] = useState(null);


  const handleChangeName = (event) => {
    setDishName(event.target.value);
  };
  const handleChangeImg = (event) => {
    setDishURL(event.target.value);
  };
  const handleChangeCookMethod = (event) => {
    setDishCookMethod(event.target.value);
  };
  const handleChangeTime = (event) => {
    setDishTime(event.target.value);
  };

const checkTheBox=(event)=>{
  console.log(sad);

  if (event.target.checked) {
    arrIngre.push(event.target.value)
  } else {
    arrIngre=arrIngre.filter(arrIngre => arrIngre != event.target.value);
  }
console.log(arrIngre)}

const handleSubmit = (event) => {
  event.preventDefault();
}

  const postInputs= ()=>{

    const s = { 
      Image: DishURL,
      Name: DishName,
      CookingMethod:DishCookMethod,
      Time:DishTime
    };
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

        exampleFetch();

          
  }
  async function exampleFetch() {
    const response = await fetch(apiUrl);
    const json = await response.json();
console.log(json);
console.log(response);

    for(let i=0;i<arrIngre.length;i++){
      console.log(sad+1);
      console.log(arrIngre[i]);
  
    ss = { 
      RecipeId: sad+1,
      IngredientId: arrIngre[i]
    };
          fetch(apiUrlIngToRec, {
            method: 'POST',
            body: JSON.stringify(ss),
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
            }


    console.log(json);
}




  if (bla != null) {
    ass = bla.map((st) => {
      return (
          <div className="Dishs col-12 col-md-4 col-lg-3">
            <img className="img-fluid" src={st.image}></img>
            <br />
            <p style={{ margin: 10 }}>{st.name}</p>
            <br />

            <p className="pDecs">{st.calories}</p>
            <br />
            <div className="btnDiv">
              <input className="cheBox" value={st.id} type="checkbox" onChange={checkTheBox}></input>
            </div>
          </div>
      );
    });
  }
  return (
    <div>
  <div>
  <form className="formIn" onSubmit={handleSubmit}>
    <table>
      <tr>
        <td colspan="1">Name:</td>
        <td colspan="8">
          <input
            className="tdINp"
            id="DishName"
            placeholder="Write Dish Name"
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
            id="DishImag"
            placeholder="Write Dish Img URL"
            type="text"
            onChange={handleChangeImg}

            required
          ></input>
        </td>
      </tr>
      <tr>
        <td colspan="1">Cook Method:</td>
        <td colspan="8">
          <input
            className="tdINp"
            id="DishCaloMethod"
            placeholder="Write Dish Cook Method"
            type="text"
            onChange={handleChangeCookMethod}
            required
          ></input>
        </td>
      </tr>
      <tr>
        <td colspan="1">Time Cook:</td>
        <td colspan="8">
          <input
            className="tdINp"
            id="DishTimeCook"
            placeholder="Write Dish Time Cook"
            type="text"
            onChange={handleChangeTime}
            required
          ></input>
        </td>
      </tr>
      <tr>
        <td colspan="3">
          <button onClick={postInputs}>Add Dish</button>
        </td>
      </tr>
    </table>
  </form>
</div> 
<hr></hr>
<h2>select Ingredient</h2>
<hr></hr>
<div className="row dishRow">{ass}</div>
</div>
  );
}
