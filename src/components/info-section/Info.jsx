import "./Info.css";
import apiAxios from "../../api/axios";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Card from "../card/Card";
import Loading from "../loading/Loading";

const Info = () => {
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		apiAxios("/products").then((res) => {
			setProducts(res.data);
			setLoading(false);
		});
	}, []);
	if (loading) {
		return <Loading />;
	}

	return (
		<section className="newArr-section">
			<div className="container">
				<div className="newArr">
					<h2 className="newArr__title">NEW ARRIVALS</h2>
					<ul className="newArr__list">
						{products.slice(0, 4).map((product) => (
							<Card key={product.id} product={product} />
						))}
					</ul>
					<div className="btn-div">
						<NavLink className="newArr__btn" to="/products">
							View all
						</NavLink>
					</div>
					<div className="mostPop">
						<h1 className="newArr__title">top selling</h1>
						<ul className="newArr__list">
							{products.slice(4, 8).map((product) => (
								<Card key={product.id} product={product} />
							))}
						</ul>
						<div className="btn-div">
							<NavLink className="newArr__btn" to="/products">
								View all
							</NavLink>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Info;
