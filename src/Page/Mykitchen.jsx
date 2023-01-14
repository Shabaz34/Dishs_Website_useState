import React, { createContext, useEffect, useState } from "react";
const apiRecipeUrl = "https://localhost:7007/api/Recipe";

let RecipeR = [];
let ads;
let num=0;
export default function Mykitchen(props) {
  const [recipe, setRecipe] = useState(null);
  const [numbe, setnumbe] = useState(0);

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
            console.log("RecipeR= ", RecipeR);
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
        }
        if(num==0)
        setnumbe(1);
        num++;

    });

    return (
        <div>
<h1>My Kitchen</h1>
<div className="row dishRow">{ads}</div>
</div>
    )
}