import styled from "styled-components";
import { colors } from "../themes/styles";
import cake from "../images/cake.png";
import Nav from "../Nav/Nav";
import { Footer } from "../challengeTwo/MyTeam";
import FeatherIcon from "feather-icons-react";

const MainContainer = styled.div`
	background-color: ${colors.white};
`;
const Container = styled.div`
	margin: 0 auto;
	max-width: 1100px;
	@media only screen and (max-width: 600px) {
		padding: 1rem;
	}
`;
const Title = styled.p`
	font-family: "Playfair Display", serif;
	font-size: 3rem;
	font-weight: 700;
	margin: 1rem 0;
	@media only screen and (max-width: 600px) {
		font-size: 1.5rem;
	}
`;
const HeroText = styled.p`
	font-family: "Montserrat", sans-serif;
	font-size: 0.875rem;
	color: ${colors.gray};
	font-style: italic;
	font-weight: 500;
	max-width: 37rem;
	@media only screen and (max-width: 600px) {
		font-size: 0.75rem;
	}
`;
const ImageContainer = styled.div`
	width: inherit;
	height: 29rem;
	img {
		width: 100%;
		height: 100%;
	}
	@media only screen and (max-width: 600px) {
		width: inherit;
		height: 13rem;
	}
`;
const SectionTitle = styled.p`
	font-family: "Playfair Display", serif;
	font-weight: 700;
	font-size: 1.5rem;
`;
const Content = styled.div`
	display: flex;
	@media only screen and (max-width: 600px) {
		display: flex;
		flex-direction: column-reverse;
	}
`;
const MainBlog = styled.div`
	flex-grow: 1;
`;
const PreparationCard = styled.div`
	background: #ffffff;
	box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
	border-radius: 12px;
	padding: 3rem;
	height: fit-content;
	margin-top: 2rem;
	@media only screen and (max-width: 600px) {
		display: flex;
		flex-direction: column;
		padding: 0;
		box-shadow: unset;
		border-radius: 0;
	}
`;
const FlexDiv = styled.div`
	@media only screen and (max-width: 600px) {
		display: flex;
		justify-content: space-between;
	}
`;
const RecipeTitle = styled.p`
	font-size: 1.125rem;
	font-family: "Playfair Display", serif;
	font-weight: 400;
	font-style: italic;
`;
const StyledCheckbox = styled.input`
	border: 1px solid #828282;
	box-sizing: border-box;
	border-radius: 4px;
	min-width: 1.3rem;
	min-height: 1.3rem;
	margin-right: 1rem;
`;
const StyledInputLabel = styled.label`
	font-family: "Montserrat", sans-serif;
	font-size: 1rem;
	font-weight: 400;
	@media only screen and (max-width: 600px) {
		font-size: 0.875rem;
	}
`;
const StyledInput = styled.div`
	margin: 0.3rem;
	display: flex;
	${(props) => props?.marginBottom && `margin-bottom: ${props.marginBottom}`};
`;
const Instructions = styled.div`
	max-width: 35rem;
`;
const StyledSpan = styled.button`
	background: #f2994a;
	border-radius: 6px;
	font-family: "Playfair Display";
	font-weight: 700;
	font-size: 1.5rem;
	color: white;
	margin-right: 1rem;
	height: 2.25rem;
	min-width: 2.25rem;
	text-align: center;
	border: none;
`;
const SubTitle = styled.p`
	font-family: "Montserrat";
	font-weight: 700;
	font-size: 0.625rem;
	text-transform: uppercase;
	color: ${colors.gray4};
	@media only screen and (max-width: 600px) {
		font-size: 0.5rem;
	}
`;
const PrepTime = styled.p`
	font-family: "Montserrat";
	font-weight: 500;
	font-size: 0.875rem;
	color: ${colors.orange};
	white-space: nowrap;
	@media only screen and (max-width: 600px) {
		font-size: 0.625rem;
	}
`;
const Tile = styled.div`
	display: flex;
	align-items: center;
	gap: 1rem;
	@media only screen and (max-width: 600px) {
		gap: 0.3rem;
	}
`;
const RecipeBlog = () => {
	return (
		<MainContainer>
			<Nav />
			<Container>
				<Title>Classic Cheesecake Recipe</Title>
				<HeroText>
					Look no further for a creamy and ultra smooth classic cheesecake
					recipe! Paired with a buttery graham cracker crust, no one can deny
					its simple decadence. For the best results, bake in a water bath.
				</HeroText>
				<ImageContainer>
					<img src={cake} alt="cake" />
				</ImageContainer>
				<Content>
					<MainBlog>
						<SectionTitle>Ingredients</SectionTitle>
						<RecipeTitle>Graham Cracker Crust</RecipeTitle>
						<Instructions>
							<StyledInput>
								<StyledCheckbox type="checkbox"></StyledCheckbox>
								<StyledInputLabel>
									1 and 1/2 cups (150g) <strong>graham cracker crumbs </strong>
									(about 10 full sheet graham crackers)
								</StyledInputLabel>
							</StyledInput>
							<StyledInput>
								<StyledCheckbox type="checkbox"></StyledCheckbox>
								<StyledInputLabel>
									5 Tablespoons (70g)<strong>unsalted butter</strong> , melted
								</StyledInputLabel>
							</StyledInput>
							<StyledInput>
								<StyledCheckbox type="checkbox"></StyledCheckbox>
								<StyledInputLabel>
									1/4 cup (50g) <strong>granulated sugar</strong>
								</StyledInputLabel>
							</StyledInput>
						</Instructions>
						<RecipeTitle>Cheesecake</RecipeTitle>
						<Instructions>
							<StyledInput>
								<StyledCheckbox type="checkbox"></StyledCheckbox>
								<StyledInputLabel>
									four 8-ounce blocks (904g) full-fat
									<strong> cream cheese</strong>, softened to room temperature
								</StyledInputLabel>
							</StyledInput>
							<StyledInput>
								<StyledCheckbox type="checkbox"></StyledCheckbox>
								<StyledInputLabel>
									1 cup (200g) <strong>granulated sugar</strong>
								</StyledInputLabel>
							</StyledInput>
							<StyledInput>
								<StyledCheckbox type="checkbox"></StyledCheckbox>
								<StyledInputLabel>
									1 cup (240g) full-fat <strong>sour cream</strong>, at room
									temperature
								</StyledInputLabel>
							</StyledInput>
							<StyledInput>
								<StyledCheckbox type="checkbox"></StyledCheckbox>
								<StyledInputLabel>
									1 teaspoon <strong>pure vanilla extract</strong>
								</StyledInputLabel>
							</StyledInput>
							<StyledInput>
								<StyledCheckbox type="checkbox"></StyledCheckbox>
								<StyledInputLabel>
									2 teaspoons <strong>fresh lemon juice</strong> (optional, but
									recommended)
								</StyledInputLabel>
							</StyledInput>
							<StyledInput>
								<StyledCheckbox type="checkbox"></StyledCheckbox>
								<StyledInputLabel>
									3 large <strong>eggs</strong>, at room temperature
								</StyledInputLabel>
							</StyledInput>
							<StyledInput>
								<StyledCheckbox type="checkbox"></StyledCheckbox>
								<StyledInputLabel>
									topping suggestions:
									<em>
										salted caramel, lemon curd, strawberry topping, chocolate
										ganache, red wine chocolate ganache, fresh fruit, whipped
										cream, or raspberry sauce
									</em>
									(recipe in notes)
								</StyledInputLabel>
							</StyledInput>
						</Instructions>
						<SectionTitle>Instructions</SectionTitle>
						<Instructions>
							<StyledInput marginBottom="2.375rem">
								<StyledSpan>1</StyledSpan>
								<StyledInputLabel>
									Adjust the oven rack to the lower-middle position and preheat
									oven to 350°F (177°C).
								</StyledInputLabel>
							</StyledInput>
							<StyledInput marginBottom="2.375rem">
								<StyledSpan>2</StyledSpan>
								<StyledInputLabel>
									<strong>Make the crust:</strong> Using a food processor, pulse
									the graham crackers into crumbs. Pour into a medium bowl and
									stir in sugar and melted butter until combined. (You can also
									pulse it all together in the food processor.) Mixture will be
									sandy. Press firmly into the bottom and slightly up the sides
									of a 9-inch or 10-inch springform pan. No need to grease the
									pan first. I use the bottom of a measuring cup to pack the
									crust down tightly. Pre-bake for 8 minutes. Remove from the
									oven and place the hot pan on a large piece of aluminum foil.
									The foil will wrap around the pan for the water bath in step
									4. Allow crust to slightly cool as you prepare the filling.
								</StyledInputLabel>
							</StyledInput>
							<StyledInput marginBottom="2.375rem">
								<StyledSpan>3</StyledSpan>
								<StyledInputLabel>
									<strong>Make the filling: </strong>Using a handheld or stand
									mixer fitted with a paddle attachment, beat the cream cheese
									and granulated sugar together on medium-high speed in a large
									bowl until the mixture is smooth and creamy, about 2 minutes.
									Add the sour cream, vanilla extract, and lemon juice then beat
									until fully combined. On medium speed, add the eggs one at a
									time, beating after each addition until just blended. After
									the final egg is incorporated into the batter, stop mixing. To
									help prevent the cheesecake from deflating and cracking as it
									cools, avoid over-mixing the batter as best you can.
								</StyledInputLabel>
							</StyledInput>
							<StyledInput marginBottom="2.375rem">
								<StyledSpan>4</StyledSpan>
								<StyledInputLabel>
									<strong>Prepare the simple water bath (see note)</strong> Boil
									a pot of water. You need 1 inch of water in your roasting pan
									for the water bath, so make sure you boil enough. I use an
									entire kettle of hot water. As the water is heating up, wrap
									the aluminum foil around the springform pan. Pour the
									cheesecake batter on top of the crust. Use a rubber spatula or
									spoon to smooth it into an even layer. Place the pan inside of
									a large roasting pan. Carefully pour the hot water inside of
									the pan and place in the oven. (Or you can place the roasting
									pan in the oven first, then pour the hot water in. Whichever
									is easier for you.)
								</StyledInputLabel>
							</StyledInput>
							<StyledInput marginBottom="2.375rem">
								<StyledSpan>5</StyledSpan>
								<StyledInputLabel>
									Bake cheesecake for 55-70 minutes or until the center is
									almost set. When it's done, the center of the cheesecake will
									slightly wobble if you gently shake the pan. Turn the oven off
									and open the oven door slightly. Let the cheesecake sit in the
									oven in the water bath as it cools down for 1 hour. Remove
									from the oven and water bath, then cool cheesecake completely
									at room temperature. Then refrigerate the cheesecake for at
									least 4 hours or overnight.
								</StyledInputLabel>
							</StyledInput>
							<StyledInput marginBottom="2.375rem">
								<StyledSpan>6</StyledSpan>
								<StyledInputLabel>
									Use a knife to loosen the chilled cheesecake from the rim of
									the springform pan, then remove the rim. Using a clean sharp
									knife, cut into slices for serving. For neat slices, wipe the
									knife clean and dip into warm water between each slice.
								</StyledInputLabel>
							</StyledInput>
							<StyledInput marginBottom="2.375rem">
								<StyledSpan>7</StyledSpan>
								<StyledInputLabel>
									Serve cheesecake with desired toppings. Cover and store
									leftover cheesecake in the refrigerator for up to 5 days.
								</StyledInputLabel>
							</StyledInput>
						</Instructions>
					</MainBlog>
					<PreparationCard>
						<Tile>
							<FeatherIcon icon="clock" />
							<div>
								<SubTitle>Yields</SubTitle>
								<PrepTime>12 servings</PrepTime>
							</div>
						</Tile>
						<FlexDiv>
							<Tile>
								<FeatherIcon icon="clock" />
								<div>
									<SubTitle>Prep TIme</SubTitle>
									<PrepTime>45 minutes</PrepTime>
								</div>
							</Tile>
							<Tile>
								<FeatherIcon icon="clock" />
								<div>
									<SubTitle>Cook Time </SubTitle>
									<PrepTime>1 hour</PrepTime>
								</div>
							</Tile>
							<Tile>
								<FeatherIcon icon="clock" />
								<div>
									<SubTitle>Total Time</SubTitle>
									<PrepTime>7,75 hours</PrepTime>
								</div>
							</Tile>
						</FlexDiv>
					</PreparationCard>
				</Content>
			</Container>
			<Footer>created by Brindashree C B - devChallenges.io</Footer>
		</MainContainer>
	);
};

export default RecipeBlog;
