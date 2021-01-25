import classes from "./IceCreamIngredient.module.css";
import PropTypes from "prop-types";

const iceCreamIngredient = (props) => {
  let ingredient = null;
  switch (props.type) {
    case "cone":
      ingredient = <div className={classes.cone}></div>;
      break;
    case "vanilla":
      ingredient = (
        <div className={`${classes.scoop} ${classes.vanilla}`}>
          <div className={classes.seeds1}></div>
        </div>
      );
      break;
    case "chochlate":
      ingredient = (
        <div className={`${classes.scoop} ${classes.chochlate}`}>
          <div className={classes.seeds1}></div>
          <div className={classes.seeds2}></div>
        </div>
      );
      break;
    case "strawberry":
      ingredient = (
        <div className={`${classes.scoop} ${classes.strawberry}`}>
          <div className={classes.seeds2}></div>
        </div>
      );
      break;
    default:
      break;
  }
  return ingredient;
};

iceCreamIngredient.propTypes = {
  type: PropTypes.string.isRequired,
};

export default iceCreamIngredient;
