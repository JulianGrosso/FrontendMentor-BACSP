import styled from "styled-components";
import HeroTexts from "./components/HeroTexts";
import Header from "./components/Header";
import EmailForm from "./components/EmailForm";

import imgBGDesktop from "./assets/images/bg-pattern-desktop.svg";
import imgHeroDesktop from "./assets/images/hero-desktop.jpg";
import imgHeroMobile from "./assets/images/hero-mobile.jpg";

function App() {
	return (
		<MainContainer>
			<MainWrapper>
				<Header />
				<ImgHeroMobile src={imgHeroMobile} alt="" />
				<HeroTexts />
				<EmailForm />
			</MainWrapper>
			<ImgHeroDesktop src={imgHeroDesktop} alt="" />
		</MainContainer>
	);
}

export default App;

const MainContainer = styled.main`
	width: 100%;
	height: 100%;

	position: relative;

	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: flex-start;

	background: linear-gradient(135deg, hsl(0, 0%, 100%), hsl(0, 100%, 98%));
	background-size: 57.5%;
	background-position: left;

	user-select: none;

	@media (max-width: 768px) {
		background-size: 100%;

		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
	}
`;

const MainWrapper = styled.section`
	width: 57.5%;
	height: 100vh;

	padding-top: 40px;
	padding-left: 165px;

	background-image: url(${imgBGDesktop});
	background-repeat: no-repeat;
	background-size: cover;

	@media (min-width: 1920px) {
		padding-top: 80px;
		padding-left: 220px;
	}

	@media (min-width: 1024px) and (max-width: 1439px) {
		padding-top: 80px;
		padding-left: 100px;
	}

	@media (min-width: 769px) and (max-width: 1023px) {
		padding-top: 80px;
		padding-left: 40px;
	}

	@media (max-width: 768px) {
		height: auto;
		width: 100%;
		margin-top: 20px;
		padding-top: 0;
		padding-left: 0;

		background-image: none;
	}
`;

const ImgHeroDesktop = styled.img`
	width: 42.5%;
	height: 100vh;
	object-fit: cover;
	user-select: none;

	@media (max-width: 768px) {
		display: none;
	}
`;

const ImgHeroMobile = styled.img`
	width: 100%;
	height: auto;
	object-fit: cover;
	user-select: none;

	margin-bottom: 60px;

	@media (min-width: 540px) {
		display: none;
	}
`;
