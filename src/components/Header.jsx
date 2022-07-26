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

	display: flex;
	justify-content: flex-start;
	align-items: center;

	margin-bottom: 110px;
`;
