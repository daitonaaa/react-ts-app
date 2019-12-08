import { START_REDUCER } from 'constants/actionTypes';
import { immutableize } from 'helpers';
import { fromJS } from 'immutable';
import { ITReducer } from 'reducers/types';

import { StartReducer } from 'types/startReducer';

const start: StartReducer = {
	status: false,
};


const startReducer: ITReducer<StartReducer> = (state = fromJS(start), action) => {
	switch (action.type) {

		case START_REDUCER.SET_STATUS:
			return state.set('status', action.status);

		default:
			return state;
	}
};

export default immutableize<StartReducer>(startReducer);
