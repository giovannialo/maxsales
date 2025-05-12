import { apiRequest } from '$lib/helpers/apiRequest';
import type { APIProductsResponse } from '$lib/interfaces';
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch }) => {
	const response = await apiRequest.get('/v1/produto', {
		fetch,
		headers: {
			Accept: 'application/json'
		}
	});

	if (!response.ok) {
		error(response.status, 'Error loading products');
	}

	const data: APIProductsResponse = await response.json();

	return { products: data.data };
};
