import axios from "axios";

const apiAxios = axios.create({
	baseURL: "https://fakestoreapi.com",
	timeout: 10000,
});
apiAxios.interceptors.request.use(
	(request) => {
		const token = localStorage.getItem("token");
		if (token) {
			request.headers.Authorization = `Bearer ${token}`;
		}
		return request;
	},
	(error) => {
		Promise.reject(error);
	}
);

export default apiAxios;
