import type { Product } from '$lib/interfaces';
import { writable } from 'svelte/store';

export const productStore = writable<Product[]>([]);
