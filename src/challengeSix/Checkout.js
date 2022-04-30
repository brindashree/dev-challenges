import styled from "styled-components";
import { colors } from "../themes/styles";
import bag from "../images/bag.png";
import shoe from "../images/shoe.png";
import Nav from "../Nav/Nav";
import { Footer } from "../challengeTwo/MyTeam";
import MaterialIcon from "material-icons-react";

const MainContainer = styled.div`
	background-color: ${colors.white};
`;
const Container = styled.div`
	margin: 0 auto 10rem auto;
	max-width: 1200px;

	@media only screen and (max-width: 600px) {
		padding: 1rem;
	}
`;
const Title = styled.p`
	font-family: "Montserrat", sans-serif;
	font-size: 2.25rem;
	font-weight: 600;
	color: ${colors.checkoutGray};
	@media only screen and (max-width: 600px) {
		font-size: 1.5rem;
	}
`;
const Content = styled.div`
	display: flex;
	gap: 7rem;
	@media only screen and (max-width: 600px) {
		display: flex;
		flex-direction: column-reverse;
		gap: 2.5rem;
	}
`;
const MainForm = styled.div`
	flex-grow: 1;
`;
const CheckoutCard = styled.div`
	background: #f2f2f2;
	border-radius: 12px;
	padding: 1.875rem;
	height: fit-content;
`;
const ImageContainer = styled.div`
	width: 8.438rem;
	height: 8.438rem;
	img {
		width: 100%;
		height: 100%;
		border-radius: 13px;
	}
	@media only screen and (max-width: 600px) {
		width: 7.75rem;
		height: 7.75rem;
	}
`;
const SectionTitle = styled.p`
	font-family: "Montserrat", sans-serif;
	font-size: 1.125rem;
	font-weight: 600;
`;
const FormItem = styled.div`
	display: flex;
	width: 100%;
	border: 1px solid #828282;
	box-sizing: border-box;
	border-radius: 12px;
	height: 3.5rem;
	align-items: center;
	gap: 1rem;
	padding: 0 0.5rem;
	@media only screen and (max-width: 600px) {
		height: 2.5rem;
	}
`;
const StyledInput = styled.input`
	border: none;
	font-size: 1rem;
	&:active,
	&:focus,
	&:focus-visible {
		border: none;
		outline: none;
	}
	::placeholder,
	::-webkit-input-placeholder {
		font-family: "Montserrat", sans-serif;
		font-size: 1rem;
		font-weight: 600;
		color: ${colors.primaryGray};
	}
	:-ms-input-placeholder {
		font-family: "Montserrat", sans-serif;
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

const StyledLabel = styled.p`
	font-family: "Montserrat", sans-serif;
	font-size: 0.75rem;
	font-weight: 600;
	color: ${colors.gray};
`;
const FlexDiv = styled.div`
	display: flex;
	gap: 1rem;
	div {
		flex-grow: 1;
	}
	@media only screen and (max-width: 600px) {
		flex-direction: column;
	}
`;
const CheckboxDiv = styled.div`
	display: flex;
	align-items: center;
	margin: 1rem 0;
	p {
		font-family: "Montserrat", sans-serif;
		font-size: 0.75rem;
		font-weight: 600;
		color: ${colors.gray};
		margin: 0;
	}
`;
const StyledCheckbox = styled.input`
	border: 1px solid #828282;
	box-sizing: border-box;
	border-radius: 4px;
	min-width: 1.3rem;
	min-height: 1.3rem;
	margin-right: 1rem;
`;
const CheckoutBtn = styled.button`
	background-color: ${colors.orange};
	border-radius: 12px;
	color: ${colors.white};
	font-family: "Montserrat", sans-serif;
	font-size: 1rem;
	border: none;
	font-weight: 600;
	padding: 1rem 3rem;
	float: right;
`;
const Item = styled.div`
	display: flex;
	gap: 1rem;
	margin: 0.5rem 0;
`;
const PriceDetails = styled.div`
	display: flex;
`;
const StyledP = styled.p`
	font-family: "Montserrat", sans-serif;
	font-weight: 600;
	${(props) => props?.fontSize && `font-size: ${props.fontSize}`};
	${(props) => props?.color && `color: ${props.color}`};
	${(props) => props?.margin && `margin: ${props.margin}`};
	${(props) => props?.lineThrough && `text-decoration: line-through`};
	@media only screen and (max-width: 600px) {
		${(props) => props?.mobileFontSize && `font-size: ${props.mobileFontSize}`};
	}
`;
const Counter = styled.div`
	display: flex;
	border: 1px solid #828282;
	box-sizing: border-box;
	border-radius: 12px;
	height: 3.5rem;
	align-items: center;
	width: fit-content;
	padding: 0 0.5rem;
	gap: 1.5rem;
	margin: 0.5rem;
	@media only screen and (max-width: 600px) {
		height: 3.125rem;
	}
`;
const CounterBtn = styled.button`
	background: #e0e0e0;
	border-radius: 4px;
	color: ${colors.primaryGray};
	border: none;
	font-size: 1rem;
	font-weight: 600;
	min-width: 1.3rem;
	min-height: 1.3rem;
`;
const ShippingDetails = styled.div`
	display: flex;
	justify-content: space-between;
	border-top: 1px solid #bdbdbd;
	${(props) => props?.margin && `margin: ${props.margin}`};
`;
const Checkout = () => {
	return (
		<MainContainer>
			<Nav />
			<Container>
				<Title>Checkout</Title>
				<Content>
					<MainForm>
						<SectionTitle>Contact infomation</SectionTitle>
						<StyledLabel>Email</StyledLabel>
						<FormItem>
							<MaterialIcon icon="mail" />
							<StyledInput type="email" placeholder="Enter your email..." />
						</FormItem>
						<StyledLabel>Phone</StyledLabel>
						<FormItem>
							<MaterialIcon icon="call" />
							<StyledInput type="number" placeholder="Enter your phone..." />
						</FormItem>
						<SectionTitle>Shipping address</SectionTitle>
						<StyledLabel>Full name</StyledLabel>
						<FormItem>
							<MaterialIcon icon="account_circle" />
							<StyledInput type="text" placeholder="Rodney Cotton" />
						</FormItem>
						<StyledLabel>Address</StyledLabel>
						<FormItem>
							<MaterialIcon icon="home" />
							<StyledInput type="text" placeholder="Your address.." />
						</FormItem>
						<StyledLabel>City</StyledLabel>
						<FormItem>
							<MaterialIcon icon="location_city" />
							<StyledInput type="text" placeholder="Your city.." />
						</FormItem>
						<FlexDiv>
							<div>
								<StyledLabel>Country</StyledLabel>
								<FormItem>
									<MaterialIcon icon="public" />
									<StyledInput type="text" placeholder="Your country.." />
								</FormItem>
							</div>
							<div>
								<StyledLabel>Postal Code</StyledLabel>
								<FormItem>
									<MaterialIcon icon="markunread_mailbox" />
									<StyledInput type="text" placeholder="Your postal code.." />
								</FormItem>
							</div>
						</FlexDiv>
						<CheckboxDiv>
							<StyledCheckbox type="checkbox"></StyledCheckbox>
							<p>Save this information for next time</p>
						</CheckboxDiv>
						<CheckoutBtn>Continue</CheckoutBtn>
					</MainForm>
					<CheckoutCard>
						<Item>
							<ImageContainer>
								<img src={bag} alt="bag" />
							</ImageContainer>
							<div>
								<StyledP
									fontSize="1rem"
									color="#4E5150"
									margin="0.5rem"
									mobileFontSize="0.75rem"
								>
									Vintage Backbag
								</StyledP>
								<PriceDetails>
									<StyledP
										fontSize="1rem"
										color="#F2994A"
										margin="0.5rem"
										mobileFontSize="0.875rem"
									>
										$54.99
									</StyledP>
									<StyledP
										fontSize="0.75rem"
										color="#4E5150"
										margin="0.5rem"
										mobileFontSize="0.625rem"
										lineThrough
									>
										$94.99
									</StyledP>
								</PriceDetails>
								<Counter>
									<CounterBtn>-</CounterBtn>
									<span>1</span>
									<CounterBtn>+</CounterBtn>
								</Counter>
							</div>
						</Item>
						<Item>
							<ImageContainer>
								<img src={shoe} alt="bag" />
							</ImageContainer>
							<div>
								<StyledP
									fontSize="1rem"
									color="#4E5150"
									margin="0.5rem"
									mobileFontSize="0.75rem"
								>
									Levi Shoes
								</StyledP>
								<PriceDetails>
									<StyledP
										fontSize="1rem"
										color="#F2994A"
										margin="0.5rem"
										mobileFontSize="0.875rem"
									>
										$74.99
									</StyledP>
									<StyledP
										fontSize="0.75rem"
										color="#4E5150"
										margin="0.5rem"
										mobileFontSize="0.625rem"
										lineThrough
									>
										$124.99
									</StyledP>
								</PriceDetails>
								<Counter>
									<CounterBtn>-</CounterBtn>
									<span>1</span>
									<CounterBtn>+</CounterBtn>
								</Counter>
							</div>
						</Item>
						<ShippingDetails margin="6rem 0 0 0">
							<StyledP
								fontSize="1.125rem"
								color="#333333"
								margin="0.5rem"
								mobileFontSize="0.875rem"
							>
								Shipping
							</StyledP>
							<StyledP fontSize="0.875rem" color="#333333;" margin="0.5rem">
								$19
							</StyledP>
						</ShippingDetails>
						<ShippingDetails>
							<StyledP
								fontSize="1.125rem"
								color="#333333"
								margin="0.5rem"
								mobileFontSize="0.875rem"
							>
								Total
							</StyledP>
							<StyledP fontSize="0.875rem" color="#333333;" margin="0.5rem">
								$148.98
							</StyledP>
						</ShippingDetails>
					</CheckoutCard>
				</Content>
			</Container>
			<Footer>created by Brindashree C B - devChallenges.io</Footer>
		</MainContainer>
	);
};

export default Checkout;
