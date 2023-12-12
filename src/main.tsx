import ReactDOM from "react-dom/client";
import "./index.scss";
import "./components/forms/firebase/firebase";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./store/store";

const rootElement = document.getElementById("root") as HTMLElement;
const root = ReactDOM.createRoot(rootElement);
root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);
