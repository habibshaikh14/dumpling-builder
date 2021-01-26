import classes from "./DumplingIngredient.module.css";
import PropTypes from "prop-types";

const dumplingIngredient = (props) => {
  let ingredient = null;
  switch (props.type) {
    case "stick":
      ingredient = <div className={classes.stick}></div>;
      break;
    case "vanilla":
      ingredient = (
        <div className={`${classes.dumpling} ${classes.vanilla}`}>
          <div className={classes.seeds1}></div>
        </div>
      );
      break;
    case "chochlate":
      ingredient = (
        <div className={`${classes.dumpling} ${classes.chochlate}`}>
          <div className={classes.seeds1}></div>
          <div className={classes.seeds2}></div>
        </div>
      );
      break;
    case "strawberry":
      ingredient = (
        <div className={`${classes.dumpling} ${classes.strawberry}`}>
          <div className={classes.seeds2}></div>
        </div>
      );
      break;
    default:
      break;
  }
  return ingredient;
};

dumplingIngredient.propTypes = {
  type: PropTypes.string.isRequired,
};

export default dumplingIngredient;
