import classes from "./IceCreamIngredient.module.css"
import PropTypes from "prop-types";

const iceCreamIngredient = ( props ) => {
    let ingredient = null;
    switch (props.type) {
        case ('cone'):
            ingredient = <div className={classes.cone}></div>
            break;
        case ('scoop1'):
            ingredient = 
                <div className={`${classes.scoop} ${classes.scoop1}`}>
                    <div className={classes.seeds1}></div>
                </div>
            break;
        case ('scoop2'):
            ingredient = 
                <div className={`${classes.scoop} ${classes.scoop2}`}>
                    <div className={classes.seeds1}></div>
                    <div className={classes.seeds2}></div>
                </div>
            break;
        case ('scoop3'):
            ingredient = 
                <div className={`${classes.scoop} ${classes.scoop3}`}>
                    <div className={classes.seeds2}></div>
                </div>
            break;
        default:
            break;
    }
    return ingredient;
};

iceCreamIngredient.propTypes = {
    type: PropTypes.string.isRequired
};

export default iceCreamIngredient;