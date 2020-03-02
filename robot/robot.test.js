import { container } from './robot.container.config';

describe('Robot', () => {
	let robot;
	beforeEach(() => {
		robot = container.get('robot');
	});

	it('should be able to move', () => {
		expect(robot.move()).toEqual('Crawl crawl crawl')
	});

	it('should be able to act', () => {
		expect(robot.act()).toEqual('Bam bam bam!')
	});

	it('should be able to communicate', () => {
		expect(robot.communicate()).toEqual('Lalalalaal!')
	});
});
