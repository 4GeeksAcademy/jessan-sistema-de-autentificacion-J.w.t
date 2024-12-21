import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";

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

	return (
		<div className="container">
			<h2>Formulario de Registro</h2>
			<form onSubmit={handleLogin}>
				<div className="row mb-3">
					<label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
						Email
					</label>
					<div className="col-sm-10">
						<input
							type="email"
							className="form-control"
							id="inputEmail3"
							name="email"
							value={data.email}
							onChange={handleChange}
						/>
					</div>
				</div>
				<div className="row mb-3">
					<label htmlFor="inputPassword3" className="col-sm-2 col-form-label">
						Password
					</label>
					<div className="col-sm-10">
						<input
							type="password"
							className="form-control"
							id="inputPassword3"
							name="password"
							value={data.password}
							onChange={handleChange} />
					</div>
				</div>
				<div className="row mb-3">
					<label htmlFor="inputName3" className="col-sm-2 col-form-label">
						Name
					</label>
					<div className="col-sm-10">
						<input
							type="text"
							className="form-control"
							id="inputName3"
							name="name"
							value={data.name}
							onChange={handleChange} />
					</div>
				</div>
				<div className="row mb-3">
					<label htmlFor="inputLastname3" className="col-sm-2 col-form-label">Lastname</label>
					<div className="col-sm-10">
						<input
							type="text"
							className="form-control"
							id="inputLastname3"
							name="lastname"
							value={data.lastname}
							onChange={handleChange} />
					</div>
				</div>
				<div className="row mb-3">
					<label htmlFor="inputAge3" className="col-sm-2 col-form-label">
						Age
					</label>
					<div className="col-sm-10">
						<input
							type="number"
							className="form-control"
							id="inputAge3"
							name="age"
							value={data.age}
							onChange={handleChange} />
					</div>
				</div>
				<button type="submit" className="btn btn-primary">Register</button>
			</form>
		</div>
	);
};
