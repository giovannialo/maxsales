// Interfaces for the application
export interface Product {
	idProduto: number;
	codProd: string;
	descricao: string;
	unidade: string;
}

// Interfaces for API responses and data structures
export interface APIErrorResponse {
	message?: string;
}

export interface APIResponse<T> extends APIErrorResponse {
	data: T;
}

export interface APIResponseWithPageControl<T> extends APIResponse<T> {
	pageSize: number;
	maxPageSize: number;
	currentPage: number;
	totalPages: number;
	totalItems: number;
}

export interface APIProductsResponse extends APIResponseWithPageControl<Product[]> {}
export interface APIProductResponse extends APIResponse<Product> {}
