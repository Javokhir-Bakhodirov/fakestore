import "./SinglePage.css";
import apiAxios from "../../api/axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import star from "../../img/star.svg";
import Loading from "../loading/Loading";

const SinglePage = () => {
	// const renderStars = (rating) => {
	// 	const stars = [];
	// 	for (let i = 0; i < rating; i++) {
	// 		stars.push(<img key={i} src={star} alt="star" width={18} height={18} />);
	// 	}
	// 	return stars;
	// };

	const [product, productUser] = useState({});
	const [loading, setLoading] = useState(true);
	const { id } = useParams();

	useEffect(() => {
		apiAxios(`/products/${id}`).then((response) => {
			productUser(response.data);
			setLoading(false);
		});
	}, []);
	if (loading) {
		return <Loading />;
	}

	return (
		<section className="single-page">
			<div className="container">
				<div className="page">
					<img src={product.image} alt="img" />
					<div className="page__content">
						<h2 className="page__text">{product.title}</h2>
						<div className="page__category">{product.category}</div>
						{/* <div className="page__rating">
							<span className="stars">{renderStars(product.rating.rate)}</span>{" "}
							{product.rating.rate}/<span>5</span>
						</div> */}
						<span className="line"></span>
						<p className="page__description">{product.description}</p>

						<div className="page__pride">${product.price}</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default SinglePage;
