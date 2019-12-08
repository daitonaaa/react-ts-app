import { start as startAction } from 'actions/start';
import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { IApplicationState } from 'reducers';
import { bindActionCreators, Dispatch } from 'redux';
import { palette } from 'styles/vars';
import { StartReducer } from 'types/startReducer';

import {
	Text,
	Wrapper,
} from './styled';

interface IStateProps {
	start: StartReducer;
}

type DispatchProps = ReturnType<typeof mapDispatchToProps>;

type Props = IStateProps & DispatchProps;


const Home: React.FC<Props> = ({ start: { status }, startAction }) => {
	const timeout = useRef<number>();

	useEffect(() => {
		timeout.current = setTimeout(() => {
			startAction(!status);
		}, 250);

		return () => {
			clearTimeout(timeout.current);
		};
	}, [status]);

	return (
		<Wrapper bg={status ? palette.primary : palette.red}>
			<Text>{status ? 'World' : 'Hello'}</Text>
		</Wrapper>
	);
};

const mapStateToProps = (state: IApplicationState) => ({
	start: state.start,
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
	startAction,
}, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(Home);
