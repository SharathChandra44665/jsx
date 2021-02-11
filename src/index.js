// import React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';


// create react Component
// const App=function(){
// function get_button_name(){
//     return "click on me!"
// }
const App = () => { //shortcut
    // const buttonText='click me';
    const setTextButton={text:'single clik only'};
    const mystyle={backgroundColor: "yellow", border: '1px solid red'};
    return (
        // <div><h1>Hello Sharath...</h1></div>
        <div>
            <label className="label" htmlFor="name">Enter your name</label>
            <input id="name" />
            <button style={mystyle}>
                {//buttonText
                // get_button_name()
                setTextButton.text
                }
            </button>
        </div>
    );
};
// take the react component and show it in screen

ReactDOM.render(
    <App />,
    document.querySelector("#root")


);