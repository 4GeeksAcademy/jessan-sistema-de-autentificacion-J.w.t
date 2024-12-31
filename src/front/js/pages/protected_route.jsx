import React, { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

export const Protected_route = () => {
	const { store, actions } = useContext(Context);
	const navigate = useNavigate();

	useEffect(() => {
		if (!localStorage.getItem("accessToken")) {
			navigate("/login");
		} else {
			actions.protectedRoute();
		}
	}, []);

	const containerStyle = {
		maxWidth: "600px",
		margin: "50px auto",
		padding: "20px",
		backgroundColor: "#f8f9fa",
		borderRadius: "8px",
		boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
		fontFamily: "'Arial', sans-serif",
		textAlign: "center"
	};

	const headingStyle = {
		fontSize: "20px",
		color: "#333",
		fontWeight: "bold",
		marginBottom: "20px"
	};

	const emailStyle = {
		fontSize: "18px",
		color: "#007bff",
		fontWeight: "bold"
	};

	return (
		<div style={containerStyle}>
			<h3 style={headingStyle}>Usuario autenticado:</h3>
			<p style={emailStyle}>{store.user?.logged_in_as || "Cargando información del usuario..."}</p>
		</div>
	);
};
