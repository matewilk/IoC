export class Robot {
	constructor ({ head, arms, legs }) {
		this._head = head;
		this._arms = arms;
		this._legs = legs;
	}

	communicate () {
		this._head.action();
	}

	act () {
		this._arms.action();
	}

	move () {
		this._legs.action();
	}
}

class SingingHead {
	constructor() {
		console.log('Singing head assembled')
	}
	action () {
		return 'Lalalalaal!'
	}
}

class TalkingHead {
	constructor() {
		console.log('Talking head assembled')
	}
	action () {
		return 'Blah blah uhhh ahhh'
	}
}

class HammerArms {
	constructor() {
		console.log('Hammer arms assembled')
	}
	action () {
		return 'Bam bam bam!'
	}
}

class SpiderLegs {
	constructor() {
		console.log('Spider legs assembled')
	}
	action () {
		return 'crawl crawl crawl'
	}
}

class TrackLegs {
	constructor() {
		console.log('Track legs assembled')
	}
	action () {
		return 'wroom wroom'
	}
}

const legs = new SpiderLegs();
const head = new TalkingHead();
const arms = new HammerArms();

const robot = new Robot({ head, arms, legs });
robot.communicate();
robot.act();
robot.move();
