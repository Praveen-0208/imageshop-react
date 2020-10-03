import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Cart from "./Components/Cart";
import Home from "./Components/Home";

const Routes = () => {
	return (
		<Router>
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/cart" exact component={Cart} />
				<Route path="*" exact component={Home} />
			</Switch>
		</Router>
	);
};

export default Routes;
