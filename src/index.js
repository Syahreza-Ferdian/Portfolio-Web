import { createRoot } from "react-dom/client";

// Components
import "./index.css";
import App from "./App.js";
import EventHanding from "./components/eventHandling";

// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const root = createRoot(document.querySelector("#root"));
root.render(
    <>
        <App></App>
        <EventHanding></EventHanding>
    </>
);
