interface CustomFetchOptions extends Omit<RequestInit, 'body'> {
	body?: Partial<Record<string, any>>;
	params?: Record<string, string>;
	token?: string;
	fetch?: typeof fetch;
}

async function execute(
	method: string,
	endpoint: string,
	options?: CustomFetchOptions
): Promise<Response> {
	const fetchFunction = options?.fetch || fetch;
	const params = new URLSearchParams();

	if (options?.params) {
		Object.keys(options.params).forEach((key) => {
			params.append(key, options.params![key]);
		});

		if (params.toString()) {
			endpoint += '?' + params.toString();
		}
	}

	return await fetchFunction(endpoint, {
		method: method,
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
			...options?.headers,
			...(options?.token ? { Authorization: 'Bearer ' + options.token } : {})
		},
		...(options?.body ? { body: JSON.stringify(options.body) } : {})
	});
}

export const apiRequest = {
	get: async (endpoint: string, options?: CustomFetchOptions): Promise<Response> => {
		return await execute('GET', endpoint, options);
	},

	post: async (endpoint: string, options?: CustomFetchOptions): Promise<Response> => {
		return await execute('POST', endpoint, options);
	}
};
