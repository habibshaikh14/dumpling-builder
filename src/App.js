import React, { Component } from "react";
import Layout from "./components/Layout/Layout";
import DumplingBuilder from "./containers/DumplingBuilder/DumplingBuilder";

class App extends Component {
  render() {
    return (
      <div>
        HAHAHAHAHA
        <Layout>
          <DumplingBuilder />
        </Layout>
      </div>
    );
  }
}

export default App;
