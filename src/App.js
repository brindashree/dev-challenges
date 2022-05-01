import { Routes, Route } from "react-router-dom";
import NotFound from "./challengeOne/NotFound";
import MyTeam from "./challengeTwo/MyTeam";
import InteriorConsultant from "./challengeThree/InteriorConsultant";
import RecipeBlog from "./challengeFour/RecipeBlog";
import MyGallery from "./challengeFive/MyGallery";
import Checkout from "./challengeSix/Checkout";
import HomePage from "./challengeSeven/HomePage";

function App() {
	return (
		<Routes>
			<Route path="/" exact element={<NotFound />} />
			<Route path="/my-team" exact element={<MyTeam />} />
			<Route path="/interior-consult" exact element={<InteriorConsultant />} />
			<Route path="/recipe-blog" exact element={<RecipeBlog />} />
			<Route path="/my-gallery" exact element={<MyGallery />} />
			<Route path="/checkout" exact element={<Checkout />} />
			<Route path="/home" exact element={<HomePage />} />
		</Routes>
	);
}

export default App;
