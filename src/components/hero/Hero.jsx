import React from "react";
import { Link } from "react-router-dom";
import "./Hero.css";

const Hero = () => {
	return (
		<section className="hero-section">
			<div className="container">
				<div className="hero">
					<div className="hero__content">
						<h1 className="hero__title">
							FIND PRODUCTS THAT MATCHES YOUR STYLE
						</h1>
						<p className="hero__text">
							Browse through our diverse range of meticulously crafted garments,
							designed to bring out your individuality and cater to your sense
							of style.
						</p>
						<Link className="login" to="/products">
							Shop Now
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
