import { container } from './car.container.config';

describe('Car', () => {
	let newCar;
	beforeEach(() => {
		newCar = container.get('car');
	});

	it('should be able to starts the engine', () => {
		expect(newCar.start()).toEqual('wroom wroom');
	});

	it('should have wheels of certain type', () => {
		expect(newCar.wheels()).toEqual('wooden wheels')
	});

	it('should return wheel type', () => {
		const wheels = container.get('wheels');
		expect(wheels).toEqual('wooden wheels');
	})
});
