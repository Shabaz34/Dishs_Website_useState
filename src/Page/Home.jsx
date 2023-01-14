import React, { createContext, useEffect, useState } from "react";
const apiUrl = "https://localhost:7007/api/Ingredients";
const apiRecipeUrl = "https://localhost:7007/api/Recipe";
export const SendData = createContext();
let IngredR = [];
let RecipeR = [];
let ads;
let sada;
export default function Home(props) {
  const [ingred, setIngred] = useState(null);
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch(apiRecipeUrl, {
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json; charset=UTF-8",
        Accept: "application/json; charset=UTF-8",
      }),
    })
      .then((res) => {
        return res.json();
      })
      .then(
        (result) => {
          RecipeR = result;
          if (recipe == null) {
            setRecipe(RecipeR);
          }
          //  console.log("fetch btnFetchGetStudents= ", result);
          console.log("RecipeR= ", RecipeR);
          // result.map((st) => console.log(st.name));
        },
        (error) => {
          console.log("err post=", error);
        }

      );
      if (recipe != null) {
        ads = recipe.map((st) => {
          console.log(st);
          return (
              <div className="Dishs col-12 col-md-4 col-lg-3">
                <img className="img-fluid" src={st.image}></img>
                <br />
                <p style={{ margin: 10 }}>Name: {st.name}</p>
                <br />
    
                <p className="pDecs">Cooking Method: {st.cookingMethod}</p>
                <br />
                <p className="pDecs">Time cook: {st.time}</p>
                <br />
              </div>
          );
        });
        sada=recipe[recipe.length-1].id;
      }


    fetch(apiUrl, {
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json; charset=UTF-8",
        Accept: "application/json; charset=UTF-8",
      }),
    })
      .then((res) => {
        return res.json();
      })
      .then(
        (result) => {
          IngredR = result;
          if (ingred == null) {
            setIngred(IngredR);
          }
          //  console.log("fetch btnFetchGetStudents= ", result);
          console.log("ingred= ", IngredR);
          // result.map((st) => console.log(st.name));
        },
        (error) => {
          console.log("err post=", error);
        }
      );
  });

console.log(sada);


  return (
    
    <><SendData.Provider value={{ ingred , sada }}>
        {props.children}
      </SendData.Provider>
      </>
) 
  
}
