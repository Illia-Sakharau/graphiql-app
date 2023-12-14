import ReactDOM from "react-dom/client";
import "./index.scss";
import "./api/firebase";
import App from "./App";

const rootElement = document.getElementById("root") as HTMLElement;
const root = ReactDOM.createRoot(rootElement);
root.render(<App />);
