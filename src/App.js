import { Route, Switch } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import MovieFeature from "./features/MovieFeature";

function App() {
  return (
    <div>
      <Header />
      <Main cinemaName="DXC Cinema" />
      <Switch>
        <Route path="/movies" component={MovieFeature} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
