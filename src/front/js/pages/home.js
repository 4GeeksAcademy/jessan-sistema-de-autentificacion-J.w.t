import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";

export const Home = () => {
	const { store, actions } = useContext(Context);
	const [data, setData] = useState({
		email: "",
		password: "",
		name: "",
		lastname: "",
		age: "",
		is_active: "True"
	});
	const handleChange = (e) => {
		const { name, value } = e.target;
		setData((prevData) => ({
			...prevData,
			[name]: value
		}));
	};
	const handleLogin = (e) => {
		e.preventDefault();
		actions.Home(data.email, data.password, data.name, data.lastname, data.age);
	};

	const containerStyle = {
		maxWidth: "600px",
		margin: "50px auto",
		padding: "20px",
		backgroundColor: "#f8f9fa",
		borderRadius: "8px",
		boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
		fontFamily: "'Arial', sans-serif"
	};

	const headingStyle = {
		textAlign: "center",
		marginBottom: "20px",
		color: "#333"
	};

	const labelStyle = {
		fontWeight: "bold",
		color: "#555"
	};

	const inputStyle = {
		border: "1px solid #ddd",
		borderRadius: "5px",
		padding: "10px",
		fontSize: "16px",
		width: "100%",
		boxSizing: "border-box"
	};

	const buttonStyle = {
		display: "block",
		width: "100%",
		padding: "10px",
		fontSize: "18px",
		fontWeight: "bold",
		backgroundColor: "#007bff",
		border: "none",
		color: "white",
		borderRadius: "5px",
		cursor: "pointer",
		transition: "background-color 0.3s ease"
	};

	const buttonHoverStyle = {
		backgroundColor: "#0056b3"
	};

	return (
		<div style={containerStyle}>
			<h2 style={headingStyle}>Formulario de Registro</h2>
			<form onSubmit={handleLogin}>
				<div className="row mb-3">
					<label htmlFor="inputEmail3" style={labelStyle} className="col-sm-2 col-form-label">
						Email
					</label>
					<div className="col-sm-10">
						<input
							type="email"
							style={inputStyle}
							id="inputEmail3"
							name="email"
							value={data.email}
							onChange={handleChange}
						/>
					</div>
				</div>
				<div className="row mb-3">
					<label htmlFor="inputPassword3" style={labelStyle} className="col-sm-2 col-form-label">
						Password
					</label>
					<div className="col-sm-10">
						<input
							type="password"
							style={inputStyle}
							id="inputPassword3"
							name="password"
							value={data.password}
							onChange={handleChange}
						/>
					</div>
				</div>
				<div className="row mb-3">
					<label htmlFor="inputName3" style={labelStyle} className="col-sm-2 col-form-label">
						Name
					</label>
					<div className="col-sm-10">
						<input
							type="text"
							style={inputStyle}
							id="inputName3"
							name="name"
							value={data.name}
							onChange={handleChange}
						/>
					</div>
				</div>
				<div className="row mb-3">
					<label htmlFor="inputLastname3" style={labelStyle} className="col-sm-2 col-form-label">
						Lastname
					</label>
					<div className="col-sm-10">
						<input
							type="text"
							style={inputStyle}
							id="inputLastname3"
							name="lastname"
							value={data.lastname}
							onChange={handleChange}
						/>
					</div>
				</div>
				<div className="row mb-3">
					<label htmlFor="inputAge3" style={labelStyle} className="col-sm-2 col-form-label">
						Age
					</label>
					<div className="col-sm-10">
						<input
							type="number"
							style={inputStyle}
							id="inputAge3"
							name="age"
							value={data.age}
							onChange={handleChange}
						/>
					</div>
				</div>
				<button
					type="submit"
					style={buttonStyle}
					onMouseOver={(e) => (e.target.style.backgroundColor = buttonHoverStyle.backgroundColor)}
					onMouseOut={(e) => (e.target.style.backgroundColor = buttonStyle.backgroundColor)}
				>
					Register
				</button>
			</form>
		</div>
	);
};
