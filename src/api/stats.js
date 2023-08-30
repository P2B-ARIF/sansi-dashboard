export const GetFetchLength = async endPoint => {
	try {
		const url = `${process.env.REACT_APP_SERVER_URL}/admin/get/${endPoint}`;
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
		console.error("Error fetching order statistics:", error);
		return null;
	}
};
