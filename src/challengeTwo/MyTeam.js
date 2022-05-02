import styled from "styled-components";
import photoOne from "../images/photo1.png";
import photoTwo from "../images/photo2.png";
import photoThree from "../images/photo3.png";
import photoFour from "../images/photo4.png";
import photoFive from "../images/photo5.png";
import photoSix from "../images/photo6.png";
import Nav from "../Nav/Nav";
import { colors } from "../themes/styles";

const Container = styled.div`
	width: 60rem;
	margin: 0 auto;
	@media only screen and (max-width: 600px) {
		width: 100%;
	}
`;
const HeroContainer = styled.div`
	display: flex;
	div {
		width: 50%;
	}
	@media only screen and (max-width: 600px) {
		display: flex;
		flex-direction: column;
		div {
			width: 100%;
		}
	}
`;
const Title = styled.p`
	font-weight: 700;
	font-size: 2.25rem;
	font-family: "PT Serif", serif;
	margin-top: 0.5rem;
`;
const TagLine = styled.p`
	font-family: "Poppins", sans-serif;
	font-weight: 600;
	font-size: 1.125rem;
`;
const Content = styled.p`
	font-family: "Poppins", sans-serif;
	font-weight: 400;
	font-size: 1.125rem;
	text-align: justify;
`;
const MemberCard = styled.div`
	&:nth-child(3n-1) {
		margin-top: 3rem;
	}
	@media only screen and (max-width: 600px) {
		max-width: 50%;
		&:nth-child(3n-1) {
			margin-top: 0;
		}
		&:nth-child(2n) {
			margin-top: 3rem;
		}
	}
`;
const MemberName = styled.p`
	font-family: "Poppins", sans-serif;
	font-weight: 600;
	font-size: 1.125rem;
`;
const MemberProfession = styled.p`
	font-weight: 400;
	text-transform: uppercase;
	font-size: 0.75rem;
	font-family: "PT Serif", serif;
	transform: rotate(90deg);
	margin-top: 3rem;
	@media only screen and (max-width: 600px) {
		margin-top: 0rem;
	}
`;
const Image = styled.img`
	width: 12.5rem;
	height: 18.75rem;
	@media only screen and (max-width: 600px) {
		width: 8.625rem;
		height: 16.337rem;
	}
`;
const TeamContainer = styled.div`
	display: grid;
	grid-template-rows: 1fr 1fr;
	grid-template-columns: 1fr 1fr 1fr;
	margin: 3rem 0 3rem 0;
	@media only screen and (max-width: 600px) {
		grid-template-rows: 1fr 1fr 1fr;
		grid-template-columns: 1fr 1fr;
	}
`;
const ImageAndProffession = styled.div`
	display: flex;
`;
export const Footer = styled.p`
	font-family: "Montserrat", sans-serif;
	font-weight: 500;
	font-size: 0.875rem;
	color: ${colors.footerGray};
	text-align: center;
`;
const MyTeam = () => {
	const teamMembers = [
		{
			name: "Bill Mahoney",
			profession: "Product owner",
			image: photoOne,
		},
		{
			name: "Saba Cabrera",
			profession: "Art director",
			image: photoTwo,
		},
		{
			name: "Shae Le",
			profession: "Tech Lead",
			image: photoThree,
		},
		{
			name: "Skylah Lu",
			profession: "UX Designer",
			image: photoFour,
		},
		{
			name: "Griff Richards",
			profession: "Developer",
			image: photoFive,
		},
		{
			name: "Stan John",
			profession: "Developer",
			image: photoSix,
		},
	];
	const renderTeamMemberCard = (member, i) => {
		return (
			<MemberCard key={i}>
				<ImageAndProffession>
					<Image src={member.image} alt={member.name} />
					<div>
						<MemberProfession>{member.profession}</MemberProfession>
					</div>
				</ImageAndProffession>
				<MemberName>{member.name}</MemberName>
			</MemberCard>
		);
	};
	return (
		<>
			<Nav />
			<Container>
				<HeroContainer>
					<div>
						<Title>The creative crew</Title>
					</div>
					<div>
						<TagLine>Who we are</TagLine>
						<Content>
							We are team of creatively diverse. driven. innovative individuals
							working in various locations from the world.
						</Content>
					</div>
				</HeroContainer>
				<TeamContainer>
					{teamMembers.map((member, i) => renderTeamMemberCard(member, i))}
				</TeamContainer>
				<Footer>created by Brindashree C B - devChallenges.io</Footer>
			</Container>
		</>
	);
};

export default MyTeam;
