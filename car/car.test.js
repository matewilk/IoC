import { car } from './car';
import { container } from './car.container.config';

describe('Car', () => {
	let newCar;
	beforeEach(() => {
		newCar = container.get('car')();
	});

	it('should be able to starts the engine', () => {
		expect(newCar.start()).toEqual('wroom wroom');
	});

	it('should have wheels of certain type', () => {
		expect(newCar.wheels()).toEqual('wooden wheels')
	});
});
