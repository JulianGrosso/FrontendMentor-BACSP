import styled from "styled-components";
import imgLogo from "../assets/images/logo.svg";

const Header = () => {
	return (
		<MainContainer>
			<img src={imgLogo} alt="Base Apparel Logo" />
		</MainContainer>
	);
};

export default Header;

const MainContainer = styled.header`
	width: 100%;
	height: 80px;
	margin-bottom: 110px;

	display: flex;
	justify-content: flex-start;
	align-items: center;

	user-select: none;

	@media (min-width: 1920px) {
		margin-bottom: 150px;
	}

	@media (min-width: 1024px) and (max-width: 1439px) {
		margin-bottom: 120px;
	}

	@media (min-width: 769px) and (max-width: 1023px) {
		margin-bottom: 100px;
	}

	@media (max-width: 768px) {
		height: 40px;
		margin-bottom: 20px;
		margin-left: 30px;

		img {
			max-width: 100px;
		}
	}
`;
