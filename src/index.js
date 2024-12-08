import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import smoothscroll from 'smoothscroll-polyfill';
smoothscroll.polyfill();

ReactDOM.render(<App />, document.querySelector("#root"));
