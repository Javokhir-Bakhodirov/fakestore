import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import apiAxios from "../../api/axios";
import { useState } from "react";
import logo from "../../img/logo.svg";

const Login = () => {
	const navigate = useNavigate();
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const userLogin = (e) => {
		e.preventDefault();

		apiAxios.post("/auth/login/", { username, password }).then((response) => {
			if (response.status === 200) {
				localStorage.setItem("token", response.data.access_token);
				navigate("/");
				console.log(response);
			} else {
				console.log("ishlamadi");
			}
		});
	};
	return (
		<div className="containers">
			<div className="login__box">
				<Link className="logo__img-box" to="/">
					<img src={logo} alt="logo" />
				</Link>
				<form className="form" onSubmit={userLogin}>
					<div className="input-wrapper">
						<input
							type="text"
							placeholder="Enter your username"
							className="input"
							onChange={(e) => setUsername(e.target.value)}
							required
						/>
					</div>
					<div className="input-wrapper">
						<input
							type="password"
							placeholder="Enter your password"
							className="input"
							onChange={(e) => setPassword(e.target.value)}
							required
						/>
					</div>

					<button type="submit">Log in</button>
				</form>
			</div>
		</div>
	);
};

export default Login;
