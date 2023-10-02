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
        return(<div key={index} className="cards"><div className="card"><li >
            <img src={cocktail.strDrinkThumb} />
            <div>
            {cocktail.strDrink}</div></li></div></div>)
    })
}

    return(<ul>{renderCocktails()}</ul>)
}