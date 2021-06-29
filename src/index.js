import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { createStore } from "redux";
import CounterReducer from "./library/reducers/counter";
import { Provider } from "react-redux";
import NotificationMiddleware from "./middlewares/notification";
import ModalMiddleware from "./middlewares/modal";
import LocalStorageMiddleware from "./middlewares/localStorage";
import ThemeProvider from "./middlewares/theme";

const store = createStore(CounterReducer);

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <LocalStorageMiddleware>
        <ModalMiddleware>
          <NotificationMiddleware>
            <BrowserRouter>
              <Provider store={store}>
                <App />
              </Provider>
            </BrowserRouter>
          </NotificationMiddleware>
        </ModalMiddleware>
      </LocalStorageMiddleware>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
