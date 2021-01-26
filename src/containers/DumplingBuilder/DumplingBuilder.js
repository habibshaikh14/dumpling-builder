import { Component } from "react";
import Dumpling from "../../components/Dumpling/Dumpling";
import Wrapper from "../../hoc/Wrapper";

class DumplingBuilder extends Component {
  state = {
    ingredients: {
      vanilla: 1,
      chochlate: 2,
      strawberry: 1,
    },
  };

  render() {
    return (
      <Wrapper>
        <Dumpling ingredients={this.state.ingredients} />
        <div>Build Controls</div>
      </Wrapper>
    );
  }
}

export default DumplingBuilder;
