import { Container } from '../lib/container';

import {
	car,
	wheels,
	woodenWheels,
	engine
} from './car';

const container = new Container();
container.add('wheels', wheels).to('car');
container.add('type', woodenWheels).to('wheels');
container.add('engine', engine).to('car');
container.add('car', car);

export { container };
