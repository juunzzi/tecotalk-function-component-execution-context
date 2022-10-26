import React, { Component } from "react";
import ReactDOM from "react-dom/client";
import FunctionComponetIsJSFunction from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <FunctionComponetIsJSFunction />
  </React.StrictMode>
);

// class ClassComponent extends Component {
//   componentDidMount() {
//     console.log("mount");
//   }

//   render() {
//     return <div>class</div>;
//   }
// }

// const FunctionComponent = () => <div>function</div>;

// const JuunzziComponent = () => {
//   return <div>👻</div>;
// };

// const PocoComponent = () => {
//   return <div>😈</div>;
// };

// const CompyComponent = () => {
//   return <div>🦖</div>;
// };

// FunctionComponent;
// JuunzziComponent;
// PocoComponent;
// CompyComponent;
