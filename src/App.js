import styled from "styled-components";
import Hero from "./components/Hero";
import Header from "./components/Header";


import imgBGDesktop from "./assets/images/bg-pattern-desktop.svg";
import imgHeroDesktop from "./assets/images/hero-desktop.jpg";

function App() {
	return (
		<MainContainer>
			<MainWrapper>
				<Header />
				<Hero />
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
`;

const MainWrapper = styled.section`
	width: 57.5%;
	height: 100vh;

	padding-top: 40px;
	padding-left: 165px;

	background-image: url(${imgBGDesktop});
	background-repeat: no-repeat;
	background-size: cover;
`;

const ImgHeroDesktop = styled.img`
	width: 42.5%;
	height: 100vh;
	object-fit: cover;
`;
