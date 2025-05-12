import { apiRequest } from '$lib/helpers/apiRequest';
import type { APIResponseWithPageControl, Product } from '$lib/interfaces';
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch }) => {
	try {
		const response = await apiRequest.get('/v1/produto', {
			fetch,
			headers: {
				Accept: 'application/json'
			}
		});

		if (!response.ok) {
			error(response.status, 'Error loading products');
		}

		const data: APIResponseWithPageControl<Product[]> = await response.json();

		return { products: data.data };
	} catch (err) {
		console.error('Error fetching products:', err);
		error(500, 'Error loading products');
	}
};
