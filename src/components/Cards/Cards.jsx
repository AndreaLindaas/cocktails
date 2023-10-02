import { useEffect, useState } from "react";


export default function Cards (){
    const [cocktails, setCocktails] = useState([]);

    useEffect(()=>{
        fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?f=A")
        .then((response)=>response.json())
        .then((result)=> setCocktails(result.drinks))
    },[])

const renderCocktails=()=>{
    return cocktails.map((cocktail,index)=>{
        return(<li key={index} >
            <img src={cocktail.strDrinkThumb} />
            <span>
            {cocktail.strDrink}</span></li>)
    })
}

    return(<ul className="cocktails">{renderCocktails()}</ul>)
}