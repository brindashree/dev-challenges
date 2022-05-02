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
	@media only screen and (max-width: 600px) {
		padding: 1rem;
	}
`;
const GridContainer = styled.div`
	display: grid;
	grid-template-columns: 1fr 3fr;
	gap: 1rem;
	@media only screen and (max-width: 600px) {
		grid-template-columns: 1fr;
	}
`;
const Card = styled.div`
	background: #ffffff;
	border-radius: 12px;
	padding: 1rem;
	${(props) => props?.width && `width: ${props.width}`};
	${(props) => props?.margin && `margin: ${props.margin}`};
	@media only screen and (max-width: 600px) {
		${(props) => props?.width && `width: 90%`};
	}
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
	@media only screen and (max-width: 600px) {
		${(props) => props?.flexColumn && `flex-direction: column`};
	}
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
const CustomImageContainer = styled.div`
	${(props) => props?.width && `width: ${props.width}`};
	${(props) => props?.height && `height: ${props.height}`};
	${(props) => props?.marginTop && `margin-top: ${props.marginTop}`};
	img {
		width: inherit;
		height: inherit;
		border-radius: 12px;
	}
	@media only screen and (max-width: 600px) {
		${(props) => props?.mwidth && `width: ${props.mwidth}`};
		${(props) => props?.mheight && `height: ${props.mheight}`};
	}
`;
const StyledButton = styled.button`
	border-radius: 12px;
	border: none;
	font-weight: 500;
	padding: 0.5rem 2rem;
	${(props) =>
		props?.backgroundColor && `background-color: ${props.backgroundColor}`};
	${(props) => props?.color && `color: ${props.color}`};
	${(props) => props?.fontSize && `font-size: ${props.fontSize}`};
	${(props) => props?.floatRight && `float: right`};
	${(props) => props?.border && `border:  ${props.border}`};
	@media only screen and (max-width: 600px) {
		padding: 0.5rem 1rem;
		font-size: 14px;
	}
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
						<Card margin="1rem 0 0 0">
							<StyledP fontSize="24px" fontWeight="500" color="#4f4f4f">
								Experiences
							</StyledP>
							<FlexDiv alignCenter>
								<CustomImageContainer width="84px" height="84px">
									<img src={profilePic} alt="proj1" />
								</CustomImageContainer>
								<div>
									<StyledP fontSize="14px" fontWeight="500" color="#828282">
										Feb 2017 - Current
									</StyledP>
									<StyledP fontSize="16px" fontWeight="600" color="#333333">
										Front-end developer
									</StyledP>
									<StyledP fontSize="16px" fontWeight="500" color="#828282">
										Donec aliquam est dui, vel vestibulum diam sollicitudin id.
										Quisque feugiat malesuada molestie.
									</StyledP>
								</div>
							</FlexDiv>
							<FlexDiv alignCenter>
								<CustomImageContainer width="84px" height="84px">
									<img src={profilePic} alt="proj1" />
								</CustomImageContainer>
								<div>
									<StyledP fontSize="14px" fontWeight="500" color="#828282">
										Aug 2016 - Feb 2018
									</StyledP>
									<StyledP fontSize="16px" fontWeight="600" color="#333333">
										Full-stack developer
									</StyledP>
									<StyledP fontSize="16px" fontWeight="500" color="#828282">
										Donec aliquam est dui, vel vestibulum diam sollicitudin id.
										Quisque feugiat malesuada molestie.
									</StyledP>
								</div>
							</FlexDiv>
							<FlexDiv alignCenter>
								<CustomImageContainer width="84px" height="84px">
									<img src={profilePic} alt="proj1" />
								</CustomImageContainer>
								<div>
									<StyledP fontSize="14px" fontWeight="500" color="#828282">
										Jun 2015 - Aug 2016
									</StyledP>
									<StyledP fontSize="16px" fontWeight="600" color="#333333">
										Junior front-end developer
									</StyledP>
									<StyledP fontSize="16px" fontWeight="500" color="#828282">
										Donec aliquam est dui, vel vestibulum diam sollicitudin id.
										Quisque feugiat malesuada molestie.
									</StyledP>
								</div>
							</FlexDiv>
						</Card>
						<Card margin="1rem 0 0 0">
							<StyledP fontSize="24px" fontWeight="500" color="#4f4f4f">
								Hobbies
							</StyledP>
							<CustomImageContainer width="100%" height="140px">
								<img src={profilePic} alt="proj1" />
							</CustomImageContainer>

							<StyledP fontSize="18px" fontWeight="600" color="#333333">
								Gaming
							</StyledP>
							<StyledP fontSize="16px" fontWeight="500" color="#828282">
								Quisque feugiat malesuada molestie.
							</StyledP>
							<CustomImageContainer width="100%" height="140px">
								<img src={profilePic} alt="proj1" />
							</CustomImageContainer>

							<StyledP fontSize="18px" fontWeight="600" color="#333333">
								Cooking
							</StyledP>
							<StyledP fontSize="16px" fontWeight="500" color="#828282">
								Quisque feugiat malesuada molestie.
							</StyledP>
							<CustomImageContainer width="100%" height="140px">
								<img src={profilePic} alt="proj1" />
							</CustomImageContainer>

							<StyledP fontSize="18px" fontWeight="600" color="#333333">
								Biking
							</StyledP>
							<StyledP fontSize="16px" fontWeight="500" color="#828282">
								Quisque feugiat malesuada molestie.
							</StyledP>
						</Card>
					</div>
					<div>
						<FlexDiv flexColumn>
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
						<Card>
							<FlexDiv flexColumn>
								<CustomImageContainer width="322px" height="322px">
									<img src={profilePic} alt="proj1" />
								</CustomImageContainer>
								<div>
									<FlexDiv>
										<StyledP fontSize="16px" fontWeight="500" color="#4f4f4f">
											#HTML
										</StyledP>
										<StyledP fontSize="16px" fontWeight="500" color="#4f4f4f">
											#CSS
										</StyledP>
										<StyledP fontSize="16px" fontWeight="500" color="#4f4f4f">
											#responsive
										</StyledP>
									</FlexDiv>
									<StyledP fontSize="24px" fontWeight="500" color="#333333">
										Recipe Blog
									</StyledP>
									<StyledP
										fontSize="16px"
										fontWeight="500"
										color="#828282"
										margin="1rem 0 3rem 0"
									>
										In this project, I work with HTML and CSS to create a
										responsive page . The design is from devchallenge.io. Donec
										aliquam est dui, vel vestibulum diam sollicitudin id.
										Quisque feugiat malesuada molestie.
									</StyledP>
									<FlexDiv>
										<StyledButton color="white" backgroundColor="#2F80ED">
											Demo
										</StyledButton>
										<StyledButton
											color="#2F80ED"
											backgroundColor="white"
											border="1px solid #2F80ED"
										>
											Code
										</StyledButton>
									</FlexDiv>
								</div>
							</FlexDiv>
						</Card>
						<Card margin="1rem 0 0 0">
							<FlexDiv flexColumn>
								<CustomImageContainer width="322px" height="322px">
									<img src={profilePic} alt="proj1" />
								</CustomImageContainer>
								<div>
									<FlexDiv>
										<StyledP fontSize="16px" fontWeight="500" color="#4f4f4f">
											#HTML
										</StyledP>
										<StyledP fontSize="16px" fontWeight="500" color="#4f4f4f">
											#CSS
										</StyledP>
										<StyledP fontSize="16px" fontWeight="500" color="#4f4f4f">
											#responsive
										</StyledP>
									</FlexDiv>
									<StyledP fontSize="24px" fontWeight="500" color="#333333">
										Recipe Blog
									</StyledP>
									<StyledP
										fontSize="16px"
										fontWeight="500"
										color="#828282"
										margin="1rem 0 3rem 0"
									>
										In this project, I work with HTML and CSS to create a
										responsive page . The design is from devchallenge.io. Donec
										aliquam est dui, vel vestibulum diam sollicitudin id.
										Quisque feugiat malesuada molestie.
									</StyledP>
									<FlexDiv>
										<StyledButton color="white" backgroundColor="#2F80ED">
											Demo
										</StyledButton>
										<StyledButton
											color="#2F80ED"
											backgroundColor="white"
											border="1px solid #2F80ED"
										>
											Code
										</StyledButton>
									</FlexDiv>
								</div>
							</FlexDiv>
						</Card>
						<Card margin="1rem 0 0 0">
							<FlexDiv flexColumn>
								<CustomImageContainer width="322px" height="322px">
									<img src={profilePic} alt="proj1" />
								</CustomImageContainer>
								<div>
									<FlexDiv>
										<StyledP fontSize="16px" fontWeight="500" color="#4f4f4f">
											#HTML
										</StyledP>
										<StyledP fontSize="16px" fontWeight="500" color="#4f4f4f">
											#CSS
										</StyledP>
										<StyledP fontSize="16px" fontWeight="500" color="#4f4f4f">
											#responsive
										</StyledP>
									</FlexDiv>
									<StyledP fontSize="24px" fontWeight="500" color="#333333">
										Recipe Blog
									</StyledP>
									<StyledP
										fontSize="16px"
										fontWeight="500"
										color="#828282"
										margin="1rem 0 3rem 0"
									>
										In this project, I work with HTML and CSS to create a
										responsive page . The design is from devchallenge.io. Donec
										aliquam est dui, vel vestibulum diam sollicitudin id.
										Quisque feugiat malesuada molestie.
									</StyledP>
									<FlexDiv>
										<StyledButton color="white" backgroundColor="#2F80ED">
											Demo
										</StyledButton>
										<StyledButton
											color="#2F80ED"
											backgroundColor="white"
											border="1px solid #2F80ED"
										>
											Code
										</StyledButton>
									</FlexDiv>
								</div>
							</FlexDiv>
						</Card>
						<Card margin="2rem 0">
							<StyledP fontSize="18px" fontWeight="500" color="#4f4f4f">
								Blogs(1)
							</StyledP>
						</Card>
						<Card margin="1rem 0 0 0">
							<FlexDiv flexColumn>
								<div>
									<StyledP fontSize="16px" fontWeight="500" color="#E0E0E0">
										Blog
									</StyledP>

									<StyledP
										fontSize="24px"
										fontWeight="500"
										color="#333333"
										maxWidth="178px"
									>
										How to organize your CSS
									</StyledP>
									<StyledP
										fontSize="16px"
										fontWeight="500"
										color="#828282"
										margin="1rem 0 3rem 0"
									>
										In this article I tell the story about Proin eu justo sit
										amet lacus bibendum tincidunt. Vivamus non volutpat nisl, a
										luctus mi. Donec aliquam est dui, vel vestibulum diam
										sollicitudin id. Quisque feugiat malesuada molestie.
									</StyledP>

									<StyledButton color="#2F80ED" backgroundColor="white">
										dev.to
									</StyledButton>
								</div>
								<CustomImageContainer width="322px" height="322px">
									<img src={profilePic} alt="proj1" />
								</CustomImageContainer>
							</FlexDiv>
						</Card>
					</div>
				</GridContainer>
				<Footer>created by Brindashree C B - devChallenges.io</Footer>
			</MainContainer>
		</div>
	);
};

export default Portfolio;
