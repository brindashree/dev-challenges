import styled from "styled-components";
import { colors } from "../themes/styles";
import { Link } from "react-router-dom";

const NavConatiner = styled.div`
	background-color: ${colors.black};
	color: ${colors.white};
	padding: 1rem;
	font-size: 1rem;
	font-weight: 500;
	display: flex;
	justify-content: space-between;
	a {
		text-decoration: none;
		color: ${colors.white};
		padding: 1rem;
		background-color: #1e293b;
		border-radius: 5px;
	}
	@media only screen and (max-width: 400px) {
		display: none;
	}
`;

const Nav = () => {
	return (
		<NavConatiner>
			<Link to="/my-team">My Team</Link>
			<Link to="/">Not Found</Link>
			<Link to="/interior-consult">Interior Consult</Link>
		</NavConatiner>
	);
};

export default Nav;
