export const makeRequest = async (url, type = 'GET', body) => {
	try {
		let data = null;
		console.log(body);
		if (type === 'POST') {
			data = await fetch(url, {
				method: type,
				body: JSON.stringify(body),
				headers: {
					'Content-Type': 'application/json',
					accept: '*/*',
				},
			});
		} else if (type === 'PATCH') {
			data = await fetch(url, {
				method: type,
				body,
			});
		} else if (type === 'DELETE') {
			data = await fetch(url, {
				method: type,
				body,
			});
		} else {
			data = await fetch(url);
		}
		return data.json();
	} catch (err) {
		return err;
	}
};
