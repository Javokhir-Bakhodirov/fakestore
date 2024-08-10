import React, { lazy, Suspense } from "react";
import Nav from "../components/nav/Nav";
import { Route, Routes } from "react-router-dom";
import SinglePage from "../components/single-page/SinglePage";
const Home = lazy(() => import("./home/Home"));
const Products = lazy(() => import("./products/Products"));
const Login = lazy(() => import("./login/Login"));
const Profile = lazy(() => import("./profile/Profile"));
import Loading from "../components/loading/Loading";
import { useLocation } from "react-router-dom";

const RoutController = () => {
	const location = useLocation();
	return (
		<>
			{location.pathname !== "/login" && <Nav />}

			<Routes>
				<Route
					path="/"
					element={
						<Suspense fallback={<Loading />}>
							<Home />
						</Suspense>
					}
				></Route>
				<Route
					path="/products"
					element={
						<Suspense fallback={<Loading />}>
							<Products />
						</Suspense>
					}
				></Route>
				<Route
					path="/products/:id"
					element={
						<Suspense fallback={<Loading />}>
							<SinglePage />
						</Suspense>
					}
				></Route>
				<Route
					path="/login"
					element={
						<Suspense fallback={<Loading />}>
							<Login />
						</Suspense>
					}
				/>
				<Route
					path="/profile"
					element={
						<Suspense fallback={<Loading />}>
							<Profile />
						</Suspense>
					}
				/>
			</Routes>
		</>
	);
};

export default RoutController;
