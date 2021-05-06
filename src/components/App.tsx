import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./Common/Header";

function App() {
  return (
    <Router>
      <Route exact path="/">
        <Header />
      </Route>
      <Route></Route>
      <Route></Route>
    </Router>
  );
}

export default App;
