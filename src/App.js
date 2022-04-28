import { Routes, Route } from "react-router-dom";
import NotFound from "./challengeOne/NotFound";
import MyTeam from "./challengeTwo/MyTeam";
import InteriorConsultant from "./challengeThree/InteriorConsultant";
import RecipeBlog from "./challengeFour/RecipeBlog";

function App() {
	return (
		<Routes>
			<Route path="/" exact element={<NotFound />} />
			<Route path="/my-team" exact element={<MyTeam />} />
			<Route path="/interior-consult" exact element={<InteriorConsultant />} />
			<Route path="/recipe-blog" exact element={<RecipeBlog />} />
		</Routes>
	);
}

export default App;
