import classes from "./Dumpling.module.css";
import DumplingIngredient from "./DumplingIngredient/DumplingIngredient";

const dumpling = (props) => {
  let ingredients = Object.keys(props.ingredients)
    .map((ingredient) => {
      return [...Array(props.ingredients[ingredient])].map((_, count) => {
        return (
          <DumplingIngredient key={ingredient + count} type={ingredient} />
        );
      });
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);
  if (ingredients.length === 0) {
    ingredients = <p>Please start adding dumplings.</p>;
  }
  return (
    <div className={classes.Dumpling}>
      {ingredients}
      <DumplingIngredient type="stick" />
    </div>
  );
};

export default dumpling;
