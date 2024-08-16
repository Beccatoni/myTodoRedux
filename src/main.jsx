import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import todoReducer from "./features/todo.js";
import inputReducer from './features/inputs.js'
import doneReducer from './features/done.js'

const store = configureStore({
  reducer: {
    todos: todoReducer,
    inputs: inputReducer,
    isDone: doneReducer
  },
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
