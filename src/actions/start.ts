import { START_REDUCER } from 'constants/actionTypes';

import {
	TAction,
} from 'actions/types';


const setStartStatus = (status: boolean) => ({
	type: START_REDUCER.SET_STATUS,
	status,
});


export const start = (status: boolean): TAction => (dispatch) => {
	setTimeout(() => {
		dispatch(setStartStatus(status));
	}, 1000);
};
