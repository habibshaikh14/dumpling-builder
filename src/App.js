import React, { Component } from "react";
import Layout from "./components/Layout/Layout";
import IceCreamBuilder from "./containers/IceCreanBuilder/IceCreamBuilder";

class App extends Component {
  render() {
    return (
      <div>
        HAHAHAHAHA
        <Layout>
          <IceCreamBuilder />
        </Layout>
      </div>
    );
  }
}

export default App;
