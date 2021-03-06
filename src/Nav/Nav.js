import styled from "styled-components";
import { colors } from "../themes/styles";
import { Link } from "react-router-dom";

const NavConatiner = styled.div`
	background-color: ${colors.black};
	color: ${colors.white};
	padding: 0.5rem;
	font-size: 1rem;
	font-weight: 500;
	display: flex;
	justify-content: space-between;
	a {
		text-decoration: none;
		color: ${colors.white};
		padding: 0.5rem;
		background-color: #1e293b;
		border-radius: 5px;
	}
	@media only screen and (max-width: 600px) {
		flex-direction: column;
		gap: 1rem;
		text-align: center;
	}
`;

const Nav = () => {
	return (
		<NavConatiner>
			<Link to="/my-team">My Team</Link>
			<Link to="/not-found">Not Found</Link>
			<Link to="/interior-consult">Interior Consult</Link>
			<Link to="/recipe-blog">Recipe Blog</Link>
			<Link to="/my-gallery">My Gallery</Link>
			<Link to="/checkout">Checkout Page</Link>
			<Link to="/">Edie Home Page</Link>
			<Link to="/portfolio">Portfolio</Link>
		</NavConatiner>
	);
};

export default Nav;
