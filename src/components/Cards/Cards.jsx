import { useEffect, useState } from "react";
import Card from "../Card/Card";
export default function Cards() {
  const [cocktails, setCocktails] = useState([]);

  useEffect(() => {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?f=A")
      .then((response) => response.json())
      .then((result) => setCocktails(result.drinks));
  }, []);

  const renderCocktails = () => {
    return cocktails.map((c, index) => {
      return <Card cocktail={c} key={index} />;
    });
  };

  return <ul className="cocktails">{renderCocktails()}</ul>;
}
