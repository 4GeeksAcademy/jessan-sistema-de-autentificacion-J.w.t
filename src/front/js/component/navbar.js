import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const navigate = useNavigate();
	const { store, actions } = useContext(Context);

	const handleLogout = () => {
		actions.logout();
		navigate("/login");
	};


	const navbarStyle = {
		backgroundColor: "#007bff",
		padding: "10px 20px",
		display: "flex",
		alignItems: "center",
		justifyContent: "space-between",
		boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
		color: "white"
	};

	const brandStyle = {
		fontSize: "24px",
		fontWeight: "bold",
		color: "white",
		textDecoration: "none"
	};

	const buttonContainerStyle = {
		display: "flex",
		gap: "10px"
	};

	const buttonStyle = {
		backgroundColor: "white",
		color: "#007bff",
		border: "none",
		padding: "8px 16px",
		borderRadius: "5px",
		cursor: "pointer",
		fontWeight: "bold",
		transition: "background-color 0.3s ease, color 0.3s ease"
	};

	const buttonHoverStyle = {
		backgroundColor: "#0056b3",
		color: "white"
	};

	return (
		<nav style={navbarStyle}>
			<div>
				<Link to="/" style={brandStyle}>
					Formulario de Registro
				</Link>
			</div>
			<div style={buttonContainerStyle}>
				<Link to="/login">
					<button
						style={buttonStyle}
						onMouseOver={(e) => {
							e.target.style.backgroundColor = buttonHoverStyle.backgroundColor;
							e.target.style.color = buttonHoverStyle.color;
						}}
						onMouseOut={(e) => {
							e.target.style.backgroundColor = buttonStyle.backgroundColor;
							e.target.style.color = buttonStyle.color;
						}}
					>
						Login
					</button>
				</Link>
				<button
					style={buttonStyle}
					onClick={handleLogout}
					onMouseOver={(e) => {
						e.target.style.backgroundColor = buttonHoverStyle.backgroundColor;
						e.target.style.color = buttonHoverStyle.color;
					}}
					onMouseOut={(e) => {
						e.target.style.backgroundColor = buttonStyle.backgroundColor;
						e.target.style.color = buttonStyle.color;
					}}
				>
					Log out
				</button>
			</div>
		</nav>
	);
};
