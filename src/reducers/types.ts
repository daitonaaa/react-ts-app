import { Reducer } from 'redux';

export interface ITStore<T> {
	toJS(): T;

	set<K extends keyof T>(key: K, value: T[K]): any;
	setIn<K extends keyof T, V extends T[K]>(keys: [K, ...Array<string | number>], value: any): any;

	get<K extends keyof T, V extends T[K]>(key: K): ITStore<T[K]>;
	getIn<K extends keyof T>(key: [K, ...Array<string | number>]): any;

	update<K extends keyof T, V extends T[K]>(key: T[K], value: any): this;
	updateIn<K extends keyof T, V extends T[K]>(keys: [K, ...Array<string | number>], updater: (value: any) => any): any;

	delete<K extends keyof T>(key: K): this;
	deleteIn<K extends keyof T, V extends T[K]>(keys: [K, ...Array<string | number>]): this;

	merge<K extends keyof T>(...collections: Array<{[key: string]: T[K]}>): any;
	[key: string]: any;
}

export type ITReducer<T> = Reducer<T & ITStore<T>>;
