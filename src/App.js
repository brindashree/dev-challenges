import { Routes, Route } from "react-router-dom";
import NotFound from "./challengeOne/NotFound";
import MyTeam from "./challengeTwo/MyTeam";

function App() {
	return (
		<Routes>
			<Route path="/" exact element={<NotFound />} />
			<Route path="/my-team" exact element={<MyTeam />} />
		</Routes>
	);
}

export default App;
