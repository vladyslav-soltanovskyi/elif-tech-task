import ReactDOM from "react-dom/client";
import Routing from "./navagation/routing/routing.tsx";
import { Provider as StoreProvider } from "react-redux";
import { store } from "@store/store.ts";
import "./styles/index.scss";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <StoreProvider store={store}>
    <Routing />
  </StoreProvider>
);
