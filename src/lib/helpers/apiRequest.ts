import { PUBLIC_API_STATIC, PUBLIC_API_URL } from '$env/static/public';

interface CustomFetchOptions extends Omit<RequestInit, 'body'> {
	body?: Partial<Record<string, any>>;
	params?: Record<string, string>;
	token?: string;
	fetch?: typeof fetch;
}

export const apiRequest = {
	get: async (endpoint: string, options?: CustomFetchOptions): Promise<Response> => {
		const fetchFunction = options?.fetch || fetch;
		const url = new URL(`${PUBLIC_API_URL}${endpoint}${PUBLIC_API_STATIC === '1' ? '.json' : ''}`);

		if (options?.params) {
			Object.keys(options.params).forEach((key) => {
				url.searchParams.append(key, options.params![key]);
			});
		}

		return await fetchFunction(`${url}`, {
			method: 'GET',
			headers: {
				Accept: 'application/json',
				...options?.headers,
				...(options?.token ? { Authorization: `Bearer ${options.token}` } : {})
			}
		});
	},

	post: async (endpoint: string, options?: CustomFetchOptions): Promise<Response> => {
		const fetchFunction = options?.fetch || fetch;
		return await fetchFunction(`${PUBLIC_API_URL}${endpoint}`, {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				...options?.headers,
				...(options?.token ? { Authorization: `Bearer ${options.token}` } : {})
			},
			body: JSON.stringify(options?.body || {})
		});
	}
};
