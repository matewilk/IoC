export class Container {
	container = {};

	CIRCULAR_DEPENDENCY_ERROR = 'Circular dependency error!';
	ALREADY_REGISTERED_ERROR = 'Dependency already registered!';
	NO_RESOLVER_REGISTERED_ERROR = 'Service with this name has no resolver!';
	SERVICE_ERROR = 'Service with this name does not exist!';


	add (name, resolver) {
		if(this.container[name] && this.container[name].resolver) {
			throw this.ALREADY_REGISTERED_ERROR;
		}

		this.container[name] = {
			resolver: resolver,
			dependencies: this.container[name] ? this.container[name].dependencies : []
		};

		this.to = this.to.bind(this, name);
		return this;
	}

	to (...args) {
		const [parent, dep] = args.reverse();

		!this.container[parent] ?
			this.container[parent] = { resolver: undefined, dependencies: [dep]} :
			this.container[parent].dependencies.push(dep);
	}

	get (name) {
		if(!this.container[name]) {
			throw this.SERVICE_ERROR;
		}

		if(!this.container[name].resolver) {
			throw this.NO_RESOLVER_REGISTERED_ERROR;
		}

		const node = this.container[name];
		// recursively resolve deps
		return this.resolve(name, node.dependencies)
	}

	resolve (parent, dependencies) {
		let resolver = this.container[parent].resolver;

		if (dependencies.length === 0) {
			return resolver;
		}

		this.container[parent].dependencies.map((item) => {
			const dep = this.get(item);
			resolver = resolver.bind(resolver, dep)
		});

		return resolver;
	}
}
