import { Action } from 'redux';
import { IApplicationState } from 'reducers';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';

export type TAction<R = void> = ThunkAction<R, IApplicationState, undefined, Action>;
export type TDispatch = ThunkDispatch<IApplicationState, undefined, Action>;

/**
 * Настраивает возврат корректных типов для thunks-actions в JSX
 */
type ActionCreatorFunc = (...args: any[]) => any;
type ThunkFunc = (...args: any[]) => ThunkAction<any, any, any, any>;

interface IComponentDispatchProps {
	[key: string]: ThunkFunc | ActionCreatorFunc;
}

type BoundThunk<T extends ThunkFunc> = (...args: Parameters<T>) => ReturnType<ReturnType<T>>;

export type BoundThunks<M extends IComponentDispatchProps> = {
	[N in keyof M]: ReturnType<M[N]> extends ThunkAction<any, any, any, any>
		? BoundThunk<M[N]>
		: M[N]
};

declare module 'redux' {
	function bindActionCreators<M extends ActionCreatorsMapObject<any>>(
		actionCreators: M,
		dispatch: Dispatch
	): BoundThunks<M>;
}
