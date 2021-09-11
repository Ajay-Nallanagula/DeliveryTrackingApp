import MacathonLoc from './MACATHON/MacathonLoc'
import OrderDetails from './MACATHON/OrderDetails/OrderDetails'
import { Link, Route, Switch, HashRouter } from "react-router-dom";


function App() {
  return (
    <HashRouter>
      <div className="App">
        <Link to="/orderDetails"> Order Detail </Link>
      </div>
      <Switch>
        <Route path="/orderDetails" exact><OrderDetails /></Route>
        <Route path="/trackOrder" exact><MacathonLoc /></Route>
      </Switch>
    </HashRouter>
  );
}

export default App;
