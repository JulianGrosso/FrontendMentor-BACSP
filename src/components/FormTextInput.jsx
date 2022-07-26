import { useField } from "formik";
import styled from "styled-components";

import errorIcon from "../assets/images/icon-error.svg";

const FormTextInput = ({ handleBorderError, ...props }) => {
	const [field, meta] = useField(props);
	return (
		<>
			<InputText {...field} {...props} />
			{meta.touched && meta.error ? (
				<>
					<ErrorText>{meta.error}</ErrorText>
					<ErrorIcon src={errorIcon} alt="Error Icon" />
				</>
			) : null}
			{meta.touched && meta.error
				? handleBorderError(true)
				: handleBorderError(false)}
		</>
	);
};

export default FormTextInput;

const InputText = styled.input`
	width: 270px;

	font-size: 1rem;
	font-family: "Josefin Sans", sans-serif;
	font-weight: 600;
	color: #000;
	border: none;
	margin-left: 30px;
	background-color: transparent;

	&:focus {
		outline: none;
	}

	&:active {
		outline: none;
	}

	&::placeholder {
		font-weight: 400;
		color: hsla(0, 36%, 70%, 0.6);
	}

	@media (max-width: 768px) {
		font-size: 0.9rem;
		margin-left: 20px;
	}
`;

const ErrorIcon = styled.img`
	position: absolute;
	top: 13px;
	right: 115px;

	@media (max-width: 768px) {
		top: 10px;
		right: 70px;
	}
`;

const ErrorText = styled.p`
	font-size: 0.9rem;
	font-weight: 600;
	color: hsl(0, 73%, 68%);
	position: absolute;
	top: 50px;
	left: 32px;

	@media (max-width: 768px) {
		top: 42px;
		left: 22px;
	}
`;
