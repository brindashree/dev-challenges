import styled from "styled-components";
import { colors } from "../themes/styles";
import room from "../images/room.png";
import designer from "../images/designer.png";
import Nav from "../Nav/Nav";

const Container = styled.div`
	background-color: ${colors.primaryBlack};
	color: ${colors.white};
	margin: 0;
	min-height: 110vh;
	position: relative;
	@media only screen and (max-width: 400px) {
		width: 100%;
		height: 100%;
	}
`;
const NavContainer = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 2.5rem 5rem;
	align-items: center;
	@media only screen and (max-width: 400px) {
		padding: 1rem;
	}
`;
const Logo = styled.p`
	font-size: 0.875rem;
	text-transform: uppercase;
	border: 1px solid ${colors.white};
	font-family: "Crimson Pro", serif;
	font-weight: 200;
	padding: 0.5rem;
`;
const NavItemConatiner = styled.div`
	display: flex;
	align-items: center;
	@media only screen and (max-width: 400px) {
		display: none;
	}
`;
const NavItem = styled.p`
	font-family: "Montserrat", sans-serif;
	font-size: 1.25rem;
	font-weight: 500;
	padding: 0.5rem 1rem;
	margin-left: 5.3rem;
	${(props) =>
		props?.active &&
		`border-bottom: 2px solid ${colors.white}; font-weight: 700`};
`;
const Content = styled.div`
	display: flex;
	padding: 0 5rem;
	@media only screen and (max-width: 400px) {
		flex-direction: column;
		padding: 0 1rem 9rem 1rem;
	}
`;
const Company = styled.div`
	align-items: center;
	width: 50%;
	@media only screen and (max-width: 400px) {
		width: 100%;
	}
`;
const CompanyName = styled.p`
	font-family: "Lora", serif;
	font-size: 3rem;
	font-weight: 500;
	margin-top: 1rem;
	@media only screen and (max-width: 400px) {
		font-size: 2.25rem;
		margin-bottom: 0;
	}
`;
const CompanyTagline = styled.p`
	font-family: "Montserrat", serif;
	width: 70%;
	font-size: 1.5rem;
	font-weight: 400;
	text-align: left;
	margin-top: 2.5rem;
	@media only screen and (max-width: 400px) {
		font-size: 0.875rem;
		margin-top: 1.5rem;
		margin-bottom: 0;
	}
`;
const Cta = styled.button`
	background-color: ${colors.black};
	color: ${colors.white};
	font-weight: 700;
	font-family: "Montserrat", serif;
	border: none;
	font-size: 1.125rem;
	margin-top: 3rem;
	@media only screen and (max-width: 400px) {
		font-size: 0.875rem;
		margin-top: 1.5rem;
		margin-bottom: 1.5rem;
	}
`;
const ImageContainer = styled.div`
	position: relative;
	width: 50%;
	@media only screen and (max-width: 400px) {
		width: 100%;
	}
`;
const Image = styled.img`
	width: 100%;
	max-height: 25rem;
`;
const Card = styled.div`
	position: absolute;
	min-width: 20rem;
	top: 22rem;
	right: 2rem;
	background-color: ${colors.primaryBlack};
	padding: 1rem;
	img {
		border-radius: 50%;
		max-width: 100%;
		max-height: 100%;
	}
	@media only screen and (max-width: 400px) {
		min-width: unset;
		max-width: 250px;
		top: 13rem;
		right: 1rem;
	}
`;
const ProfileImageContainer = styled.div`
	width: 3.5rem;
	height: 4.5rem;
`;

const FlexContainer = styled.div`
	display: flex;
	width: 100%;
`;
const DetailsContainer = styled.div`
	margin-left: 1rem;
`;
const Name = styled.p`
	font-family: "Montserrat", serif;
	font-size: 0.875rem;
	font-weight: 500;
	margin: 0;
`;
const Profession = styled.p`
	font-family: "Montserrat", serif;
	font-size: 0.75rem;
	font-weight: 500;
	margin-top: 1rem;
	color: ${colors.primaryGray};
`;
const StyledP = styled.p`
	font-family: "Lora", serif;
	font-size: 1.5rem;
	font-weight: 700;
	width: 75%;
	margin: 0;
	@media only screen and (max-width: 400px) {
		font-size: 1.125rem;
	}
`;
const Footer = styled.p`
	font-family: "Montserrat", sans-serif;
	font-weight: 500;
	font-size: 0.875rem;
	color: ${colors.footerGray};
	text-align: center;
	position: absolute;
	bottom: 0;
	width: 100%;
`;
const InteriorConsultant = () => {
	return (
		<Container>
			<Nav />
			<NavContainer>
				<Logo>This Interior</Logo>
				<NavItemConatiner>
					<NavItem active>Home</NavItem>
					<NavItem>Collection</NavItem>
					<NavItem>About</NavItem>
					<NavItem>Contact</NavItem>
				</NavItemConatiner>
			</NavContainer>
			<Content>
				<Company>
					<CompanyName>Modern interior</CompanyName>
					<CompanyTagline>
						A full-Service residential & commercial interior design and staging
						company offering professional organizing & eco-services.
					</CompanyTagline>
					<Cta>Read more &#8594;</Cta>
				</Company>
				<ImageContainer>
					<Image src={room} />
					<Card>
						<FlexContainer>
							<ProfileImageContainer>
								<img src={designer} alt="interior designer" />
							</ProfileImageContainer>
							<DetailsContainer>
								<Name>Aliza Webber</Name>
								<Profession>Interior designer</Profession>
							</DetailsContainer>
						</FlexContainer>
						<StyledP>Designed in 2020 by Aliza Webber</StyledP>
					</Card>
				</ImageContainer>
			</Content>
			<Footer>created by Brindashree C B - devChallenges.io</Footer>
		</Container>
	);
};

export default InteriorConsultant;
