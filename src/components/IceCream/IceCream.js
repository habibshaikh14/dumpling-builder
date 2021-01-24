import classes from "./IceCream.module.css"
import IceCreamIngredient from "./IceCreamIngredient/IceCreamIngredient"

const iceCream = ( props ) => {
    return (
        <div className={classes.IceCream}>
            <IceCreamIngredient type="cone"/>
            <IceCreamIngredient type="scoop1"/>
            <IceCreamIngredient type="scoop2"/>
            <IceCreamIngredient type="scoop3"/>
        </div>
    );
};

export default iceCream;