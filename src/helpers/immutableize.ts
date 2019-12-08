import { fromJS } from 'immutable';
import { ITStore } from 'reducers/types';
import { Reducer } from 'redux';


export default<T> (reducer: Reducer<T & ITStore<T>>) => (state: any, action: any): T => {
	state = reducer(fromJS(state), action);

	return state.toJS === undefined
		? state
		: state.toJS();
};
