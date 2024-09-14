import { ConfigProvider } from "antd";
import "./App.css";
import AppRoutes from "./routes/AppRoutes";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "@api/data/store";

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "0F7BEF",
        },
      }}
    >
      <Provider store={store}>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </Provider>
    </ConfigProvider>
  );
}

export default App;
