import classes from "./IceCream.module.css";
import IceCreamIngredient from "./IceCreamIngredient/IceCreamIngredient";

const iceCream = (props) => {
  let ingredients = Object.keys(props.ingredients)
    .map((ingredient) => {
      return [...Array(props.ingredients[ingredient])].map((_, count) => {
        return (
          <IceCreamIngredient key={ingredient + count} type={ingredient} />
        );
      });
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);
  if (ingredients.length === 0) {
    ingredients = <p>Please start adding scoops.</p>;
  }
  return (
    <div className={classes.IceCream}>
      {ingredients}
      <IceCreamIngredient type="cone" />
    </div>
  );
};

export default iceCream;
