import { useState } from "react";
import styled from "styled-components";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormTextInput from "./FormTextInput";

import arrowIcon from "../assets/images/icon-arrow.svg";

const EmailForm = () => {
	const [borderError, setBorderError] = useState(false);

	const handleBorderError = (state) => {
		setBorderError(state);
	};

	return (
		<MainContainer borderError={borderError}>
			<Formik
				initialValues={{
					email: "",
				}}
				validationSchema={Yup.object({
					email: Yup.string()
						.email("Please provide a valid email")
						.required("Email is required"),
				})}
				onSubmit={async (values, { setSubmitting }) => {
					await new Promise((r) => setTimeout(r, 500));
					setSubmitting(false);
					alert(
						`THIS FORM IS ONLY FOR FRONT-END TEST\nYOUR DATA WAS NOT SAVED\n\nEmail received: ${values.email}\n\n---- After this alert you will be redirected to the home page ----`
					);
				}}
			>
				<Form>
					<FormTextInput
						name="email"
						type="email"
						placeholder="Email Address"
						handleBorderError={handleBorderError}
					/>
					<ButtonForm type="submit">
						<img src={arrowIcon} alt="Arrow Icon" />
					</ButtonForm>
				</Form>
			</Formik>
		</MainContainer>
	);
};

export default EmailForm;

const MainContainer = styled.div`
	width: 450px;
	height: 55px;

	position: relative;

	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;

	border: ${(props) =>
		props.borderError
			? "solid 2px hsl(0, 93%, 68%)"
			: "solid 2px hsla(0, 36%, 70%, 0.4)"};
	border-radius: 55px;

	@media (max-width: 768px) {
		width: 85%;
		height: 50px;

		margin: 0 auto;
		margin-bottom: 80px;
	}
`;

const ButtonForm = styled.button`
	height: 55px;
	width: 100px;

	position: absolute;
	top: -2px;
	right: -2px;

	border-radius: 55px;
	background: linear-gradient(135deg, hsl(0, 80%, 86%), hsl(0, 74%, 74%));
	border: none;
	box-shadow: 0px 4px 10px hsla(0, 80%, 60%, 0.4);

	transition: all 150ms ease-in-out;

	&:hover {
		transform: scale(1.02);
		background: linear-gradient(135deg, hsl(0, 80%, 88%), hsl(0, 80%, 88%));
		box-shadow: 0px 8px 12px hsla(0, 80%, 60%, 0.4);
	}

	cursor: pointer;

	@media (max-width: 768px) {
		height: 50px;
		width: 65px;
	}
`;
