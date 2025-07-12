import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import Counter from "./components/Counter";
import DestinationList from "./components/DestinationList";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <div className="d-flex flex-column min-vh-100">
        <Header />
        <main className="flex-grow-1 row">
          <div className="col-12">
            <Counter />
            <div className="p-3 m-4 border">
              <h4 className="text-success pb-4 text-center">
                Destination List
              </h4>
              <DestinationList />
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </Provider>
  </StrictMode>
);
