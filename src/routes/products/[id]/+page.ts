import { apiRequest } from '$lib/helpers/apiRequest';
import type { APIProductsResponse } from '$lib/interfaces';
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const prerender = false;

export const load: PageLoad = async ({ fetch, params }) => {
	const id = parseInt(params.id);

	const response = await apiRequest.get('/v1/produto', {
		fetch,
		headers: { Accept: 'application/json' }
	});

	if (!response.ok) {
		error(response.status, 'Error loading product');
	}

	const data: APIProductsResponse = await response.json();
	const product = data.data.find((item) => item.idProduto === id);

	if (!product) {
		error(404, 'Product not found');
	}

	return { product };
};
