import { Component } from "react";
import IceCream from "../../components/IceCream/IceCream";
import Wrapper from "../../hoc/Wrapper";

class IceCreamBuilder extends Component {
  state = {
    ingredients: {
      vanilla: 1,
      chochlate: 1,
      strawberry: 1,
    },
  };

  render() {
    return (
      <Wrapper>
        <IceCream ingredients={this.state.ingredients} />
        <div>Build Controls</div>
      </Wrapper>
    );
  }
}

export default IceCreamBuilder;
