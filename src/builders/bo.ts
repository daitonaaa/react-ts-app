import _ from 'lodash';

abstract class BuilderOperation<T> {
	protected children: T;

	protected constructor(children: T) {
		this.children = _.cloneDeep(children);
	}

	protected set<S extends keyof T>(key: S, value?: T[S]): BuilderOperation<T> {
		if (value) {
			this.children[key] = value;
		}
		return this;
	}

	protected getValue(): T {
		return this.children;
	}
}

export default BuilderOperation;
