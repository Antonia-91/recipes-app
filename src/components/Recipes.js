import React from "react";
//import { Link } from "react-router-dom";

const Recipes = ({ recipesProps }) => {
  return (
    <div className="container">
      <div className="row">
        {recipesProps.map((recipe) => {
          return (
            <div
              className="col-md-4"
              key={recipe["recipe"]["label"]}
              style={{ marginBottom: "2rem" }}
            >
              <div className="recipes__box">
                <img
                  alt={recipe["recipe"]["label"]}
                  className="recipeTile__img"
                  src={recipe["recipe"]["image"]}
                />
                <div className="recipe__text">
                  <h5 className="recipes__title">
                    {recipe["recipe"]["label"].lenght < 20
                      ? ` ${recipe["recipe"]["label"]}`
                      : ` ${recipe["recipe"]["label"].substring(0, 20)}...`}
                  </h5>
                  <p className="recipes__subtitle">
                    {" "}
                    <span> Mealtype: {recipe["recipe"]["mealType"]}</span>{" "}
                  </p>
                </div>
                <button className="recipe_buttons"></button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Recipes;
