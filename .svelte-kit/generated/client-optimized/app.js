export { matchers } from './matchers.js';

export const nodes = [
	() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5'),
	() => import('./nodes/6'),
	() => import('./nodes/7'),
	() => import('./nodes/8'),
	() => import('./nodes/9'),
	() => import('./nodes/10'),
	() => import('./nodes/11'),
	() => import('./nodes/12'),
	() => import('./nodes/13'),
	() => import('./nodes/14'),
	() => import('./nodes/15')
];

export const server_loads = [];

export const dictionary = {
		"/": [2],
		"/buscar": [3],
		"/configuracion": [4],
		"/coruna": [5],
		"/ferrol": [6],
		"/lugo": [7],
		"/monforte": [8],
		"/ourense": [9],
		"/pontevedra": [10],
		"/privacidade": [11],
		"/santiago": [12],
		"/sanxenxo": [13],
		"/vigo": [14],
		"/vilagarcia": [15]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),
};

export { default as root } from '../root.svelte';