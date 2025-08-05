import { Provider } from "react-redux";
import { persistor, store } from "./store/store.config";
import { PersistGate } from "redux-persist/integration/react";

export function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>

      </PersistGate>
    </Provider>
  )
}