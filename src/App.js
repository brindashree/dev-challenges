import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NotFound from "./challengeOne/NotFound";
import MyTeam from "./challengeTwo/MyTeam";
import InteriorConsultant from "./challengeThree/InteriorConsultant";

function App() {
	return (
		<Router>
			<Switch>
				<Route path="/" exact element={<NotFound />} />
				<Route path="/my-team" exact element={<MyTeam />} />
				<Route
					path="/interior-consult"
					exact
					element={<InteriorConsultant />}
				/>
			</Switch>
		</Router>
	);
}

export default App;
