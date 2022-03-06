import styled from "styled-components";
import { colors } from "../themes/styles";
import scarecrow from "../images/Scarecrow.png";
import Nav from "../Nav/Nav";

const MainContainer = styled.div`
	background-color: ${colors.white};
`;
const TopNav = styled.div`
	font-family: "Inconsolata", monospace;
`;
const StyledLogo = styled.p`
	font-size: 1.5rem;
	font-weight: 700;
	margin: 2.5rem 5rem;
	letter-spacing: -0.08em;
	text-transform: uppercase;
	@media only screen and (max-width: 600px) {
		margin: 1.25rem 1.5rem;
	}
`;
const MainBody = styled.div`
	display: flex;
	padding: 4rem 5rem;
	@media only screen and (max-width: 600px) {
		padding: 0rem;
		flex-direction: column;
	}
`;
const ImageContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: start;
	width: 50%;

	@media only screen and (max-width: 600px) {
		width: 100%;
		justify-content: space-around;
	}
`;
const StyledImg = styled.img`
	max-width: 90%;
`;
const Content = styled.div`
	width: 50%;
	@media only screen and (max-width: 600px) {
		width: 90%;
		padding: 0rem 0 0 1.5rem;
	}
`;
const HeroText = styled.p`
	font-size: 4rem;
	font-weight: 700;
	color: ${colors.black};
	margin: 0;
	font-family: "Space Mono", monospace;
	@media only screen and (max-width: 600px) {
		font-size: 2.5rem;
	}
`;
const MessageContainer = styled.div`
	width: 55%;
	text-align: justify;
	@media only screen and (max-width: 600px) {
		width: 90%;
		text-align: left;
	}
`;
const HeroMessage = styled.p`
	font-size: 1.5rem;
	font-weight: 400;
	color: ${colors.gray};
	font-family: "Space Mono", monospace;
	margin: 2rem 0;
	@media only screen and (max-width: 600px) {
		font-size: 1.125rem;
	}
`;
const CTA = styled.button`
	background-color: ${colors.black};
	color: ${colors.white};
	padding: 1.5rem 2.5rem;
	text-transform: uppercase;
	font-family: "Space Mono", monospace;
`;
const NotFound = () => {
	return (
		<MainContainer>
			<Nav />
			<TopNav>
				<StyledLogo>404 Not Found</StyledLogo>
				<MainBody>
					<ImageContainer>
						<StyledImg src={scarecrow} alt="Scarecrow" />
					</ImageContainer>
					<Content>
						<HeroText>I have bad news for you</HeroText>
						<MessageContainer>
							<HeroMessage>
								The page you are looking for might be removed or is temporarily
								unavailable
							</HeroMessage>
						</MessageContainer>
						<CTA>Back to homepage</CTA>
					</Content>
				</MainBody>
			</TopNav>
		</MainContainer>
	);
};

export default NotFound;
