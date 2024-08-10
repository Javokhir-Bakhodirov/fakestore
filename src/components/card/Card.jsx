import React from "react";
import star from "../../img/star.svg";
import "./Card.css";
import { Link } from "react-router-dom";

const Card = ({ product }) => {
	const renderStars = (rating) => {
		const stars = [];
		for (let i = 0; i < rating; i++) {
			stars.push(<img key={i} src={star} alt="star" width={18} height={18} />);
		}
		return stars;
	};
	return (
		<li className="productCard">
			<Link to={`/products/${product.id}`} className="productCard__link">
				<img src={product.image} width={295} height={295} alt="" />
			</Link>
			<Link className="link__title" to={`/products/${product.id}`}>
				<h3 className="productCard__title">{product.title}</h3>
			</Link>

			<p className="productCard__rating">
				<span className="stars">{renderStars(product.rating.rate)}</span>{" "}
				{product.rating.rate}/<span>5</span>
			</p>
			<Link to={`/products/${product.id}`}>
				<p className="productCard__price">
					<strong>${product.price}</strong>
				</p>
			</Link>
		</li>
	);
};

export default Card;
