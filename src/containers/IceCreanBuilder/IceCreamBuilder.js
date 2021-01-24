import { Component } from "react";
import IceCream from "../../components/IceCream/IceCream";
import Wrapper from "../../hoc/Wrapper";

class IceCreamBuilder extends Component {
    render() {
        return(
            <Wrapper>
                <IceCream/>
                <div>Build Controls</div>
            </Wrapper>
        );
    }
}

export default IceCreamBuilder;