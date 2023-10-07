import PropTypes from "prop-types";

export default function Card(props) {
  const cocktail = props.cocktail;
  return (
    <li>
      <img src={cocktail.strDrinkThumb} />
      <div>
        {cocktail.strAlcoholic != "Alcoholic" ? cocktail.strAlcoholic : ""}
      </div>
      <span>{cocktail.strDrink}</span>
    </li>
  );
}

Card.propTypes = {
  cocktail: PropTypes.object,
};
