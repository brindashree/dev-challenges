import styled from "styled-components";
import { colors } from "../themes/styles";
import heroImage from "../images/heroImage.jpg";
import smarthome from "../images/smarthome.jpg";
import onboard from "../images/onboard.png";
import juiceProduct from "../images/juice-product.png";
import booking from "../images/booking.png";
import person from "../images/person4.png";
import person1 from "../images/person1.png";
import person2 from "../images/person2.png";
import person3 from "../images/person3.png";
import Nav from "../Nav/Nav";
import MaterialIcon from "material-icons-react";
import FeatherIcon from "feather-icons-react";

const MainContainer = styled.div`
	background-color: ${colors.white};
	padding: 2rem;
	@media only screen and (max-width: 600px) {
		padding: 1rem;
	}
`;
const NavBar = styled.div`
	display: flex;
	justify-content: space-between;
`;
const Logo = styled.p`
	font-family: "Heebo", sans-serif;
	font-size: 2.25rem;
	font-weight: 800;
	margin: 0;
	align-self: center;
	color: #333333;
	@media only screen and (max-width: 600px) {
		font-size: 1.5rem;
	}
`;
const NavLinks = styled.div`
	display: flex;
	align-items: center;
	p {
		margin: 0 1rem;
		font-family: "Poppins", sans-serif;
		font-size: 1.5rem;
		font-weight: 500;
		color: #333333;
	}
	@media only screen and (max-width: 600px) {
		display: none;
	}
`;
const StyledP = styled.p`
	font-family: "Poppins", sans-serif;
	${(props) => props?.fontWeight && `font-weight: ${props.fontWeight}`};
	${(props) => props?.fontSize && `font-size: ${props.fontSize}`};
	${(props) => props?.color && `color: ${props.color}`};
	${(props) => props?.margin && `margin: ${props.margin}`};
	${(props) => props?.maxWidth && `max-width: ${props.maxWidth}`};
	${(props) => props?.lineThrough && `text-decoration: line-through`};
	@media only screen and (max-width: 600px) {
		${(props) => props?.mobileFontSize && `font-size: ${props.mobileFontSize}`};
	}
`;
const HeroContainer = styled.div`
	margin: 0 auto;
	max-width: 900px;
`;
const ImageContainer = styled.div`
	width: inherit;
	height: 22rem;
	margin-top: 2.625rem;
	img {
		width: 100%;
		height: 100%;
		border-radius: 18px;
	}
	@media only screen and (max-width: 600px) {
		width: inherit;
		height: 9rem;
	}
`;
const CustomImageContainer = styled.div`
	${(props) => props?.width && `width: ${props.width}`};
	${(props) => props?.height && `width: ${props.height}`};
	${(props) => props?.marginTop && `margin-top: ${props.marginTop}`};
	img {
		width: inherit;
		height: inherit;
		${(props) => props?.borderRadius && `border-radius: ${props.borderRadius}`};
	}
	@media only screen and (max-width: 600px) {
		${(props) => props?.mwidth && `width: ${props.mwidth}`};
		${(props) => props?.mheight && `width: ${props.mheight}`};
	}
`;
const FormItem = styled.div`
	display: flex;
	border: none;
	width: fit-content;
	background-color: #f2f2f2;
	box-sizing: border-box;
	border-radius: 12px;
	height: 3.5rem;
	align-items: center;
	padding: 0 0.5rem;
	@media only screen and (max-width: 600px) {
		height: 2.5rem;
	}
`;
const StyledInput = styled.input`
	border: none;
	font-size: 1rem;
	background-color: transparent;
	margin-left: 1rem;
	&:active,
	&:focus,
	&:focus-visible {
		border: none;
		outline: none;
	}
	::placeholder,
	::-webkit-input-placeholder {
		font-family: "Poppins", sans-serif;
		font-size: 1rem;
		font-weight: 600;
		color: ${colors.primaryGray};
	}
	:-ms-input-placeholder {
		font-family: "Poppins", sans-serif;
		font-size: 1rem;
		font-weight: 600;
		color: ${colors.primaryGray};
	}
	@media only screen and (max-width: 600px) {
		::placeholder,
		::-webkit-input-placeholder {
			font-size: 0.75rem;
		}
		:-ms-input-placeholder {
			font-size: 0.75rem;
		}
	}
`;
const StyledButton = styled.button`
	border-radius: 12px;
	font-family: "Poppins", sans-serif;
	border: none;
	font-weight: 500;
	padding: 0.5rem 3rem;
	${(props) =>
		props?.backgroundColor && `background-color: ${props.backgroundColor}`};
	${(props) => props?.color && `color: ${props.color}`};
	${(props) => props?.fontSize && `font-size: ${props.fontSize}`};
	${(props) => props?.floatRight && `float: right;`}
	@media only screen and (max-width: 600px) {
		padding: 0.5rem 1rem;
		font-size: 14px;
	}
`;
const MainContent = styled.div`
	margin: 0 10rem;
	@media only screen and (max-width: 600px) {
		margin: 0;
	}
`;
const CardContainer = styled.div`
	display: flex;
	@media only screen and (max-width: 600px) {
		flex-direction: column;
	}
`;
const Card = styled.div`
	flex-grow: 1;
	padding: 2.125rem;
	border-radius: 24px;
	${(props) =>
		props?.boxShadow && `box-shadow: 0px 10px 30px rgba(51, 51, 51, 0.1);`};
`;
const Icon = styled.div`
	${(props) =>
		props?.backgroundColor && `background-color: ${props.backgroundColor}`};
	width: 4.188rem;
	height: 4.188rem;
	border-radius: 1rem;
	display: flex;
	align-items: center;
	justify-content: center;
	.material-icons.md-dark {
		color: white;
		font-size: 27px;
	}
`;
const GridContainer = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	@media only screen and (max-width: 600px) {
		grid-template-columns: 1fr;
	}
`;
const GridItem = styled.div`
	img {
		width: 34rem;
		height: 34rem;
		border-radius: 12px;
	}
	&:nth-of-type(2n-1) {
		margin-top: 6.5rem;
	}
	@media only screen and (max-width: 600px) {
		img {
			width: 100%;
			height: 21rem;
		}
		&:nth-of-type(2n-1) {
			margin-top: unset;
		}
	}
`;
const ProfileCard = styled.div`
	display: flex;
	gap: 2rem;
	img {
		width: 5.125rem;
		height: 5.125rem;
		border-radius: 12px;
	}
`;
const Footer = styled.div`
	display: flex;
	background-color: black;
	color: white;
	justify-content: space-evenly;
	margin-top: 12.6rem;
	@media only screen and (max-width: 600px) {
		flex-direction: column;
		padding: 2rem;
		gap: 2rem;
	}
`;
const Credit = styled.p`
	font-family: "Montserrat", sans-serif;
	font-weight: 500;
	background-color: black;
	font-size: 0.875rem;
	color: ${colors.footerGray};
	text-align: center;
	margin: 0;
	padding: 1rem;
	@media only screen and (max-width: 600px) {
		padding-top: 9.6rem;
	}
`;
const Icons = styled.div`
	display: flex;
	gap: 1rem;
`;
const TeamContainer = styled.div`
	display: flex;
	@media only screen and (max-width: 600px) {
		flex-direction: column;
	}
`;
const TeamImages = styled.div`
	display: flex;
	flex-grow: 1;
	div {
		flex-grow: 1;
	}
`;
const TeamDetail = styled.div`
	flex-grow: 1;
`;
const HomePage = () => {
	return (
		<div>
			<Nav />
			<MainContainer>
				<NavBar>
					<Logo>Edie</Logo>
					<NavLinks>
						<p>Home</p>
						<p>Services</p>
						<p>Our Works</p>
						<p>Clients</p>
						<p>Contact</p>
					</NavLinks>
				</NavBar>
				<HeroContainer>
					<StyledP
						fontSize="1.125rem"
						color="#2D9CDB"
						fontWeight="500"
						mobileFontSize="12px"
					>
						Unhappy with your website?
					</StyledP>
					<StyledP
						fontSize="3rem"
						color="#333333"
						margin="0rem"
						maxWidth="34rem"
						fontWeight="500"
						mobileFontSize="24px"
					>
						We create beautiful and fast web services
					</StyledP>
				</HeroContainer>
				<ImageContainer>
					<img src={heroImage} alt="company" />
				</ImageContainer>
				<HeroContainer>
					<StyledP
						fontSize="3rem"
						color="#333333"
						fontWeight="500"
						maxWidth="23rem"
						mobileFontSize="24px"
					>
						Story, emotion and purpose
					</StyledP>
					<StyledP
						fontSize="1.125rem"
						color="#4F4F4F"
						margin="0rem"
						maxWidth="23rem"
						fontWeight="400"
						mobileFontSize="12px"
					>
						We help transform your ideas into real world applications that will
						outperform your toughest competition and help you achieve your
						strategic goals in short period of time.
					</StyledP>
					<StyledP
						fontSize="0.875rem"
						color="#828282"
						margin="2rem 0 1rem 0"
						fontWeight="500"
					>
						Want us to contact you?
					</StyledP>
					<FormItem>
						<StyledInput placeholder="Email" type="email"></StyledInput>
						<StyledButton
							backgroundColor="#2d9cdb"
							color="white"
							fontSize="1.125rem"
						>
							Join
						</StyledButton>
					</FormItem>
				</HeroContainer>
				<MainContent>
					<StyledP
						fontSize="2.25rem"
						color="#333333"
						margin="13rem 0 1rem 0"
						fontWeight="500"
						maxWidth="21.625rem"
						mobileFontSize="24px"
					>
						We offer high demand services
					</StyledP>
					<CardContainer>
						<Card>
							<Icon backgroundColor="#2D9CDB">
								<MaterialIcon icon="edit" />
							</Icon>
							<StyledP
								fontSize="1.5rem"
								color="#333333"
								fontWeight="700"
								mobileFontSize="24px"
							>
								UI/UX Design
							</StyledP>
							<StyledP fontSize="1rem" color="#4F4F4F" fontWeight="400">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a
								metus ac nulla consequat aliquet id quis turpis.
							</StyledP>
							<StyledButton
								backgroundColor="#E0E0E0"
								color="#828282"
								fontSize="1rem"
							>
								Get Started
							</StyledButton>
						</Card>
						<Card boxShadow>
							<Icon backgroundColor="#27AE60">
								<MaterialIcon icon="code" />
							</Icon>
							<StyledP fontSize="1.5rem" color="#333333" fontWeight="700">
								Front End
							</StyledP>
							<StyledP fontSize="1rem" color="#4F4F4F" fontWeight="400">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a
								metus ac nulla consequat aliquet id quis turpis.
							</StyledP>
							<StyledButton
								backgroundColor="#2d9cdb"
								color="white"
								fontSize="1rem"
							>
								Get Started
							</StyledButton>
						</Card>
						<Card>
							<Icon backgroundColor="#EB5757">
								<MaterialIcon icon="storage" />
							</Icon>
							<StyledP fontSize="1.5rem" color="#333333" fontWeight="700">
								Back End
							</StyledP>
							<StyledP fontSize="1rem" color="#4F4F4F" fontWeight="400">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a
								metus ac nulla consequat aliquet id quis turpis.
							</StyledP>
							<StyledButton
								backgroundColor="#E0E0E0"
								color="#828282"
								fontSize="1rem"
							>
								Get Started
							</StyledButton>
						</Card>
					</CardContainer>
					<StyledP
						fontSize="2.25rem"
						color="#4F4F4F"
						fontWeight="500"
						maxWidth="28rem"
						margin="12rem 0 1rem 0"
						mobileFontSize="24px"
					>
						Good design means good business
					</StyledP>
					<GridContainer>
						<GridItem>
							<img src={smarthome} alt="full-stack" />
							<StyledP
								fontSize="0.875rem"
								color="#828282"
								fontWeight="300"
								margin="1rem 0 0 0"
							>
								Full stack application
							</StyledP>
							<StyledP
								fontSize="1.5rem"
								color="#333333"
								fontWeight="500"
								margin="1rem 0 1rem 0"
							>
								Smart home dashboard
							</StyledP>
						</GridItem>
						<GridItem>
							<img src={onboard} alt="full-stack" />
							<StyledP
								fontSize="0.875rem"
								color="#828282"
								fontWeight="300"
								margin="1rem 0 0 0"
							>
								UX/UI design
							</StyledP>
							<StyledP
								fontSize="1.5rem"
								color="#333333"
								fontWeight="500"
								margin="1rem 0 1rem 0"
							>
								Onboard application
							</StyledP>
						</GridItem>
						<GridItem>
							<img src={booking} alt="full-stack" />
							<StyledP
								fontSize="0.875rem"
								color="#828282"
								fontWeight="300"
								margin="1rem 0 0 0"
							>
								Mobile application
							</StyledP>
							<StyledP
								fontSize="1.5rem"
								color="#333333"
								fontWeight="500"
								margin="1rem 0 1rem 0"
							>
								Booking system
							</StyledP>
						</GridItem>
						<GridItem>
							<img src={juiceProduct} alt="full-stack" />
							<StyledP
								fontSize="0.875rem"
								color="#828282"
								fontWeight="300"
								margin="1rem 0 0 0"
							>
								Front End application
							</StyledP>
							<StyledP
								fontSize="1.5rem"
								color="#333333"
								fontWeight="500"
								margin="1rem 0 1rem 0"
							>
								Juice product homepage
							</StyledP>
						</GridItem>
					</GridContainer>
					<TeamContainer>
						<TeamDetail>
							<StyledP
								fontSize="1.25rem"
								color="#EB5757"
								fontWeight="500"
								margin="8rem 0 1rem 0"
							>
								Meet the team
							</StyledP>
							<StyledP
								fontSize="2.25rem"
								color="#333333"
								fontWeight="500"
								maxWidth="17.5rem"
							>
								We are chilled and a laidback team
							</StyledP>
							<StyledP
								fontSize="1rem"
								color="#4F4F4F"
								fontWeight="400"
								maxWidth="17.5rem"
							>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							</StyledP>
						</TeamDetail>

						<TeamImages>
							<div>
								<CustomImageContainer
									width="20rem"
									height="20rem"
									borderRadius="24px"
									marginTop="8rem"
									mwidth="11.125rem"
									mheight="11.125rem"
								>
									<img src={person3} alt="person1" />
								</CustomImageContainer>
							</div>
							<div>
								<CustomImageContainer
									width="16.25rem"
									height="16.25rem"
									borderRadius="24px"
									mwidth="9rem"
									mheight="9rem"
								>
									<img src={person1} alt="person1" />
								</CustomImageContainer>
								<CustomImageContainer
									width="18rem"
									height="18.75rem"
									borderRadius="24px"
									marginTop="1rem"
									mwidth="10.125rem"
									mheight="10.4rem"
								>
									<img src={person2} alt="person1" />
								</CustomImageContainer>
							</div>
						</TeamImages>
					</TeamContainer>
					<StyledP
						fontSize="2.25rem"
						color="#333333"
						fontWeight="500"
						maxWidth="58.5rem"
						margin="12.25rem 0 1rem 0"
						mobileFontSize="24px"
					>
						“Fast and outstanding results. Edie understands their customer’s
						needs. They have a young and talented team.”
					</StyledP>
					<ProfileCard>
						<img src={person} alt="person" />
						<div>
							<StyledP
								fontSize="1.5rem"
								color="#333333"
								fontWeight="500"
								margin="0.5rem 0"
								mobileFontSize="24px"
							>
								Carlos Tran
							</StyledP>
							<StyledP
								fontSize="1.125rem"
								color="#828282"
								fontWeight="500"
								margin="0.5rem 0"
								mobileFontSize="18px"
							>
								The Decorate Gatsby
							</StyledP>
						</div>
					</ProfileCard>
				</MainContent>
			</MainContainer>
			<Footer>
				<div>
					<p>Home</p>
					<p>Services</p>
					<p>Our Works</p>
					<p>Clients</p>
					<p>Contact</p>
				</div>
				<div>
					<StyledP
						fontSize="2.25rem"
						color="#F2F2F2"
						margin="1rem 0"
						fontWeight="800"
					>
						Edie
					</StyledP>
					<Icons>
						<FeatherIcon icon="instagram" />

						<FeatherIcon icon="linkedin" />

						<FeatherIcon icon="twitter" />
					</Icons>
				</div>
				<div>
					<StyledP
						fontSize="0.875rem"
						color="#828282"
						margin="2rem 0 1rem 0"
						fontWeight="500"
					>
						Want us to contact you?
					</StyledP>
					<FormItem>
						<StyledInput placeholder="Email" type="email"></StyledInput>
						<StyledButton
							backgroundColor="#2d9cdb"
							color="white"
							fontSize="1.125rem"
						>
							Join
						</StyledButton>
					</FormItem>
				</div>
			</Footer>
			<Credit>created by Brindashree C B - devChallenges.io</Credit>
		</div>
	);
};

export default HomePage;
