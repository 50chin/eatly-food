import ReactDOM from "react-dom/client";
import App from "../src/app/App.jsx";
import "../src/app/styles/style.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
