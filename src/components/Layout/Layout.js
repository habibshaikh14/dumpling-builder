import Wrapper from "../../hoc/Wrapper";
import classes from "./Layout.module.css"

const layout = (props) => (
  <Wrapper>
    <div>Toolbar, Sidebar, Backdrop</div>
    <main className={classes.Content}>{props.children}</main>
  </Wrapper>
);

export default layout;
