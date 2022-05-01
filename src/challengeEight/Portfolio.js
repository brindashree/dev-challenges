import styled from "styled-components";
import MaterialIcon from "material-icons-react";
import profilePic from "../images/profilePhoto.png";
import Nav from "../Nav/Nav";
import { Footer } from "../challengeTwo/MyTeam";

const MainContainer = styled.div`
	background-color: #f2f2f2;
	margin: 0;
	padding: 2rem;
	font-family: "Montserrat", sans-serif;
`;
const GridContainer = styled.div`
	display: grid;
	grid-template-columns: 1fr 3fr;
	gap: 1rem;
`;
const Card = styled.div`
	background: #ffffff;
	border-radius: 12px;
	padding: 1rem;
	${(props) => props?.width && `width: ${props.width}`};
	${(props) => props?.margin && `margin: ${props.margin}`};
`;
const ImageContainer = styled.div`
	width: 100%;
	height: 22rem;
	img {
		width: 100%;
		height: 100%;
		border-radius: 12px;
	}
`;
const FlexDiv = styled.div`
	display: flex;
	${(props) => props?.alignCenter && `align-items: center`};
	gap: 1rem;
`;
const StyledP = styled.p`
	${(props) => props?.width && `width: ${props.width}`};
	${(props) => props?.fontWeight && `font-weight: ${props.fontWeight}`};
	${(props) => props?.fontSize && `font-size: ${props.fontSize}`};
	${(props) => props?.color && `color: ${props.color}`};
	${(props) => props?.margin && `margin: ${props.margin}`};
	${(props) => props?.maxWidth && `max-width: ${props.maxWidth}`};
	@media only screen and (max-width: 600px) {
		${(props) => props?.mobileFontSize && `font-size: ${props.mobileFontSize}`};
	}
`;

const ProgressBar = styled.div`
	border-radius: 12px;
	background: #c4c4c4;
	height: 10px;
	width: 70%;
`;
const Progress = styled.div`
	border-radius: inherit;
	background: #2f80ed;
	${(props) => props?.width && `width: ${props.width}`};
	height: inherit;
`;

const Portfolio = () => {
	return (
		<div>
			<Nav />
			<MainContainer>
				<GridContainer>
					<div>
						<Card>
							<ImageContainer>
								<img src={profilePic} alt="Billy Pearson" />
							</ImageContainer>
							<StyledP fontSize="24px" fontWeight="600" color="#4f4f4f">
								Billy Pearson
							</StyledP>
							<StyledP fontSize="18px" fontWeight="500" color="#828282">
								Front-end developer
							</StyledP>
							<FlexDiv alignCenter>
								<MaterialIcon icon="email" />
								<StyledP fontSize="18px" fontWeight="500" color="#4f4f4f">
									billy@example.com
								</StyledP>
							</FlexDiv>
							<FlexDiv alignCenter>
								<MaterialIcon icon="call" />
								<StyledP fontSize="18px" fontWeight="500" color="#4f4f4f">
									(+603) 546 624 342
								</StyledP>
							</FlexDiv>
							<StyledP fontSize="18px" fontWeight="500" color="#828282">
								Self-motivated developer, who is willing to learn and create
								outstanding UI applications.
							</StyledP>
						</Card>
					</div>
					<div>
						<FlexDiv>
							<Card width="50%">
								<StyledP fontSize="18px" fontWeight="700" color="#4f4f4f">
									FRONT END
								</StyledP>
								<FlexDiv alignCenter>
									<StyledP
										fontSize="16px"
										fontWeight="500"
										color="#4f4f4f"
										width="30%"
									>
										React
									</StyledP>
									<ProgressBar>
										<Progress width="70%" />
									</ProgressBar>
								</FlexDiv>
								<FlexDiv alignCenter>
									<StyledP
										fontSize="16px"
										fontWeight="500"
										color="#4f4f4f"
										width="30%"
									>
										Javascript
									</StyledP>
									<ProgressBar>
										<Progress width="80%" />
									</ProgressBar>
								</FlexDiv>
								<FlexDiv alignCenter>
									<StyledP
										fontSize="16px"
										fontWeight="500"
										color="#4f4f4f"
										width="30%"
									>
										CSS
									</StyledP>
									<ProgressBar>
										<Progress width="90%" />
									</ProgressBar>
								</FlexDiv>
								<FlexDiv alignCenter>
									<StyledP
										fontSize="16px"
										fontWeight="500"
										color="#4f4f4f"
										width="30%"
									>
										Vue
									</StyledP>
									<ProgressBar>
										<Progress width="65%" />
									</ProgressBar>
								</FlexDiv>
								<FlexDiv alignCenter>
									<StyledP
										fontSize="16px"
										fontWeight="500"
										color="#4f4f4f"
										width="30%"
									>
										Redux
									</StyledP>
									<ProgressBar>
										<Progress width="80%" />
									</ProgressBar>
								</FlexDiv>
								<FlexDiv alignCenter>
									<StyledP
										fontSize="16px"
										fontWeight="500"
										color="#4f4f4f"
										width="30%"
									>
										React Native
									</StyledP>
									<ProgressBar>
										<Progress width="90%" />
									</ProgressBar>
								</FlexDiv>
							</Card>
							<Card width="50%">
								<StyledP fontSize="18px" fontWeight="700" color="#4f4f4f">
									DESIGN
								</StyledP>
								<FlexDiv alignCenter>
									<StyledP
										fontSize="16px"
										fontWeight="500"
										color="#4f4f4f"
										width="30%"
									>
										Figma
									</StyledP>
									<ProgressBar>
										<Progress width="90%" />
									</ProgressBar>
								</FlexDiv>
								<FlexDiv alignCenter>
									<StyledP
										fontSize="16px"
										fontWeight="500"
										color="#4f4f4f"
										width="30%"
									>
										Photoshop
									</StyledP>
									<ProgressBar>
										<Progress width="90%" />
									</ProgressBar>
								</FlexDiv>
							</Card>
						</FlexDiv>
						<Card margin="2rem 0">
							<StyledP fontSize="18px" fontWeight="500" color="#4f4f4f">
								Projects (3)
							</StyledP>
						</Card>
					</div>
				</GridContainer>
				<Footer>created by Brindashree C B - devChallenges.io</Footer>
			</MainContainer>
		</div>
	);
};

export default Portfolio;
