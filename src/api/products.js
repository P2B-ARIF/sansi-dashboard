export const GetFetchProducts = async endPoint => {
	try {
		const url = `${process.env.REACT_APP_SERVER_URL}/admin/get/products/${endPoint}`;
		const response = await fetch(url, {
			method: "Get",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${JSON.parse(localStorage.getItem("token_"))}`,
			},
		});
		const result = await response.json();
		return result;
	} catch (error) {
		console.error("Error fetching product:", error);
		return null;
	}
};

export const GetSpecificProduct = async id => {
	try {
		const url = `${process.env.REACT_APP_SERVER_URL}/admin/get/product/${id}`;
		const response = await fetch(url, {
			method: "Get",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${JSON.parse(localStorage.getItem("token_"))}`,
			},
		});
		const result = await response.json();
		return result;
	} catch (error) {
		console.error("Error fetching product:", error);
		return null;
	}
};

export const GetFlashSaleProduct = async () => {
	try {
		const url = `${process.env.REACT_APP_SERVER_URL}/admin/get/flash`;
		const response = await fetch(url, {
			method: "Get",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${JSON.parse(localStorage.getItem("token_"))}`,
			},
		});
		const result = await response.json();
		return result;
	} catch (error) {
		console.error("Error fetching product:", error);
		return null;
	}
};
