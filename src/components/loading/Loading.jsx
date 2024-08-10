import React from "react";
import "./Loading.css";
import { VscLoading } from "react-icons/vsc";

const Loading = () => {
	return (
		<div className="container">
			<div className="loading">
				<VscLoading />
			</div>
			;
		</div>
	);
};

export default Loading;
