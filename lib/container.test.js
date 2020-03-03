import { Container } from './container';

describe('Container', () => {
	let container;
	let testFn;
	beforeEach(() => {
		testFn = jest.fn().mockImplementation((deps) => () => {
			return Object.keys(deps).forEach((dep) => {
				return deps[dep]();
			});
		});

		container = new Container();
		container.add('child', testFn).to('parent');
		container.add('sibling', testFn).to('parent');
		container.add('grandchild', testFn).to('child');
		container.add('parent', testFn);
	});

	afterEach(() => jest.resetAllMocks());

	describe('Register dependencies', () => {
		it('should be bale to register dependency', () => {
			expect(container.container['child']).toBeTruthy();
		});

		it('should be able to register child dependency', () => {
			expect(container.container['parent'].dependencies.length).toBe(2);
			expect(container.container['child'].dependencies.length).toBe(1);
		});

		it('should NOT be able to register dependency with the same key twice', () => {
			expect(function () {
				return container.add('child', () => {});
			}).toThrow('Dependency already registered!');
		});
	});

	describe('Resolve dependencies', () => {
		it('should be able to resolve all the dependencies', () => {
			container.get('parent');

			expect(testFn).toHaveBeenCalledTimes(4);
		});

		it('should be able to resolve dependencies at any given level', () => {
			container.get('child');

			expect(testFn).toHaveBeenCalledTimes(2);
		});

		it('should throw an error when circular dependency is detected', () => {
			container.add('grandgrandchild', testFn).to('grandson');
			container.add('grandpa', testFn).to('grandgrandchild');
			container.add('grandson', testFn).to('grandpa');

			expect(function () {
				container.get('grandpa');
			}).toThrow('Circular dependency detected!')
		});

		it('should throw an error when trying to get a dependency with inexistent key', () => {
			expect(function () {
				container.get('nokey');
			}).toThrow('Service with this name does not exist!')
		});

		it('should throw an error when trying to get a dependency with inexistent resolver', () => {
			container.add('noresolver');
			expect(function () {
				container.get('noresolver')
			}).toThrow('Service with this name has no resolver!')
		});
	})
});
