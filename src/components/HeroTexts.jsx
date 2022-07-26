import styled from "styled-components";

const HeroTexts = () => {
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

export default HeroTexts;

const MainContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;

	margin-bottom: 40px;

	user-select: none;

	@media (max-width: 768px) {
		justify-content: center;
		align-items: center;

		margin-bottom: 32px;
	}
`;

const Title01 = styled.h2`
	font-size: 62px;
	font-weight: 300;
	letter-spacing: 18px;
	color: hsl(0, 36%, 70%);

	margin: 0 0 2px 0;

	@media (max-width: 768px) {
		font-size: 40px;
		letter-spacing: 14px;
	}
`;

const Title02 = styled.h2`
	font-size: 62px;
	font-weight: 600;
	letter-spacing: 18px;
	color: hsl(0, 6%, 24%);

	margin: 0 0 2px 0;

	@media (max-width: 768px) {
		font-size: 40px;
		letter-spacing: 14px;
	}
`;

const HeroDescription = styled.p`
	font-size: 1rem;
	font-weight: 600;
	color: hsl(0, 36%, 70%);
	line-height: 30px;

	max-width: 440px;
	margin: 18px 0 0 0;
	padding-right: 20px;

	@media (max-width: 768px) {
		text-align: center;
		font-size: 0.9rem;
		line-height: 22px;

		max-width: 88%;
	}
`;
