import styled from "styled-components";
import { colors } from "../themes/styles";
import profilePic from "../images/profilePhoto.png";
import picture1 from "../images/picture1.png";
import picture2 from "../images/picture2.png";
import picture3 from "../images/picture3.png";
import picture4 from "../images/picture4.png";
import picture5 from "../images/picture5.png";
import picture6 from "../images/picture6.png";
import Nav from "../Nav/Nav";
import { Footer } from "../challengeTwo/MyTeam";

const MainContainer = styled.div`
	background-color: ${colors.white};
`;
const Container = styled.div`
	margin: 0 auto;
	max-width: 1200px;
	@media only screen and (max-width: 600px) {
		padding: 1rem;
	}
`;
const ProfileContainer = styled.div`
	width: fit-content;
	margin: 3rem auto 0 auto;
	align-items: center;
	text-align: center;
`;
const ImageContainer = styled.div`
	width: 9.75rem;
	height: 9.75rem;
	margin: 0 auto;
	img {
		width: 100%;
		height: 100%;
		border-radius: 1rem;
	}
	@media only screen and (max-width: 600px) {
		width: 6.3rem;
		height: 6.3rem;
	}
`;
const Name = styled.p`
	font-family: "Montserrat", sans-serif;
	font-size: 1.5rem;
	font-weight: 600;
	color: ${colors.darkgray};
	margin: 0.5rem 0;
	@media only screen and (max-width: 600px) {
		font-size: 0.875rem;
	}
`;
const Location = styled.p`
	font-family: "Montserrat", sans-serif;
	font-size: 0.875rem;
	font-weight: 600;
	color: ${colors.footerGray};
	@media only screen and (max-width: 600px) {
		font-size: 0.625rem;
	}
`;
const DetailsContainer = styled.div`
	display: flex;
`;
const Detail = styled.div`
	background-color: ${colors.lightGray};
	border-radius: 0.75rem;
	width: 6.25rem;
	text-align: center;
	margin: 0 1rem;
	@media only screen and (max-width: 600px) {
		width: 4.8rem;
	}
`;
const GridContainer = styled.div`
	margin-top: 1rem;
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 2rem;
	@media only screen and (max-width: 600px) {
		gap: 1rem;
	}
	div {
		&:nth-of-type(1) {
			grid-column: 1 / 2;
		}
		&:nth-of-type(2) {
			grid-column: 2 / 4;
		}
		&:nth-of-type(3) {
			grid-column: 1 / 3;
		}
		&:nth-of-type(4) {
			grid-column: 3;
			grid-row: 2 / 4;
		}
		&:nth-of-type(5) {
			grid-column: 1 / 2;
		}
		&:nth-of-type(6) {
			grid-column: 2 / 3;
		}
	}
`;
const GridImageContainer = styled.div`
	img {
		width: 100%;
		height: 100%;
		border-radius: 0.75rem;
	}
`;

const MyGallery = () => {
	return (
		<MainContainer>
			<Nav />
			<Container>
				<ProfileContainer>
					<ImageContainer>
						<img src={profilePic} alt="pic" />
					</ImageContainer>
					<Name>Rodney Cotton</Name>
					<Location>Helsinki, Finland</Location>
					<DetailsContainer>
						<Detail>
							<p>100</p>
							<Location>Posts</Location>
						</Detail>
						<Detail>
							<p>2,242</p>
							<Location>Follower</Location>
						</Detail>
						<Detail>
							<p>1432</p>
							<Location>Following</Location>
						</Detail>
					</DetailsContainer>
				</ProfileContainer>
				<GridContainer>
					<GridImageContainer>
						<img src={picture1} alt="pic1" />
					</GridImageContainer>
					<GridImageContainer>
						<img src={picture2} alt="pic2" />
					</GridImageContainer>
					<GridImageContainer>
						<img src={picture3} alt="pic3" />
					</GridImageContainer>
					<GridImageContainer>
						<img src={picture4} alt="pic4" />
					</GridImageContainer>
					<GridImageContainer>
						<img src={picture5} alt="pic5" />
					</GridImageContainer>
					<GridImageContainer>
						<img src={picture6} alt="pic6" />
					</GridImageContainer>
				</GridContainer>
			</Container>
			<Footer>created by Brindashree C B - devChallenges.io</Footer>
		</MainContainer>
	);
};

export default MyGallery;
