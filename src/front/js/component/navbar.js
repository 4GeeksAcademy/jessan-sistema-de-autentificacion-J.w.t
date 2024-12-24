import React, {useContext}from "react";
import { Link , useNavigate} from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const navigate= useNavigate()
	const {store, actions} = useContext(Context)
	const handleLogout = ()=>{
		actions.logout()
		navigate("/login")
	}
	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">React Boilerplate</span>
				</Link>
				<div className="ml-auto">
					<Link to="/login">
						<button className="btn btn-primary">Login</button>
					</Link>
						<button className="btn btn-primary" onClick={handleLogout}>Log out</button>
				</div>
			</div>
		</nav>
	);
};
