import ReactDOM from "react-dom/client";
import "./index.scss";
import "./components/forms/firebase/firebase";
import App from "./App";

const rootElement = document.getElementById("root") as HTMLElement;
const root = ReactDOM.createRoot(rootElement);
root.render(<App />);
