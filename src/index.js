import React from "react";
import ReactDOM from "react-dom";
//Everything in React is a component
//So here we want to create a component that produces some HTML
const App = () => {
    return <div>Hello World!</div>;
}

//Then we want to output/render the component's generated HTML to the DOM
ReactDOM.render(<App/>, document.querySelector(".container"));

/*  First try: React.render(App);
    We will get the error React is not defined. You need to import React and React DOM

    Second try: ReactDOM.render(<App />);
    Still would not work because you don't have a target to the DOM
*/
