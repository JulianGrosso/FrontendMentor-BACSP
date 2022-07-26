import styled from "styled-components";

const Hero = () => {
	return (
		<MainContainer>
			<Title01>WE'RE</Title01>
			<Title02>COMING</Title02>
			<Title02>SOON</Title02>
			<HeroDescription>
				Hello fellow shoppers! We're currently building our new fashion store.
				Add your email below to stay up-to-date with announcements and our
				launch deals.
			</HeroDescription>
		</MainContainer>
	);
};

export default Hero;

const MainContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;
`;

const Title01 = styled.h2`
	font-size: 62px;
	font-weight: 300;
	letter-spacing: 18px;
	color: hsl(0, 36%, 70%);

	margin: 0 0 6px 0;
`;

const Title02 = styled.h2`
	font-size: 62px;
	font-weight: 600;
	letter-spacing: 18px;
	color: hsl(0, 6%, 24%);

	margin: 0 0 6px 0;
`;

const HeroDescription = styled.p`
	font-size: 1rem;
	font-weight: 600;
	color: hsl(0, 36%, 70%);
	line-height: 30px;

	max-width: 440px;
	margin: 20px 0 0 0;
`;
