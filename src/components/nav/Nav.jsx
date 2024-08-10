import { CgProfile } from "react-icons/cg";
import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/logo.svg";
import "./Nav.css";

const Nav = () => {
	const token = localStorage.getItem("token");

	return (
		<header className="site-header">
			<div className="container">
				<div className="header">
					<Link className="header__link" to="/">
						<img className="header__logo" src={logo} alt="Shop.co" />
					</Link>
					<nav className="header__nav nav">
						<ul className="header__list">
							<li className="header__item">
								<Link to="/products">Shop</Link>
							</li>
							<li className="header__item">
								<Link to="/">Contact</Link>
							</li>
							<li className="header__item">
								<Link to="/">About us</Link>
							</li>
						</ul>
					</nav>
					{token ? (
						<Link className="header__profile" to="/profile">
							<CgProfile />
						</Link>
					) : (
						<Link className="login" to="/login">
							Login
						</Link>
					)}
				</div>
			</div>
		</header>
	);
};

export default Nav;
