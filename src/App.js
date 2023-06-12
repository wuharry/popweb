import "./App.css";
import { RouterProvider } from "react-router-dom";
import routes from "./router";
function App() {
  return (
    <div className="App">
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
