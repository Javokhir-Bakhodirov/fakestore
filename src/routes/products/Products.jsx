import "./Products.css";
import { useState, useEffect } from "react";
import Card from "../../components/card/Card";
import apiAxios from "../../api/axios";

const Products = () => {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		apiAxios("/products").then((res) => setProducts(res.data));
	}, []);
	return (
		<section className="products-section">
			<div className="container">
				<div className="products">
					<h2 className="products__title">All Products</h2>
					<ul className="products__list">
						{products.map((product) => (
							<Card key={product.id} product={product} />
						))}
					</ul>
				</div>
			</div>
		</section>
	);
};

export default Products;
